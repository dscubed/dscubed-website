import { useRef, useState, useCallback, useEffect } from "react";
import { Group } from "three";

/**
 * Custom hook to handle 3D rotation functionality.
 * - Cursor position passively tilts the scene (parallax effect).
 * - Click-drag adds on top of the cursor tilt.
 * - interactionEnabled: false locks out all input (used during load animation).
 */
export default function useRotation(interactionEnabled = true) {
  const groupRef = useRef<Group>(null);

  // Accumulated rotation from drag
  const dragRotation = useRef({ x: 0, y: 0 });

  // Cursor parallax target (updated on mousemove)
  const cursorTarget = useRef({ x: 0, y: 0 });
  // Smoothed cursor rotation (lerped in rAF)
  const smoothCursor = useRef({ x: 0, y: 0 });

  // Drag state
  const isDragging = useRef(false);
  const previousPosition = useRef<{ x: number; y: number } | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Expose rotation as state so the group re-renders
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Dynamic position offsets (for layout positioning)
  const [dynamicXOffset, setDynamicXOffset] = useState(0);
  const [dynamicYOffset, setDynamicYOffset] = useState(0);
  const [dynamicZOffset, setDynamicZOffset] = useState(0);

  const updateDynamicOffset = useCallback((x: number, y: number, z: number) => {
    setDynamicXOffset(x);
    setDynamicYOffset(y);
    setDynamicZOffset(z);
  }, []);

  const CURSOR_STRENGTH_X = 0.2;
  const CURSOR_STRENGTH_Y = 0.3;
  const LERP_FACTOR = 0.04;
  const rotationSensitivity = 0.005;

  // Keep a ref so the rAF / event handlers always see the latest value
  const enabledRef = useRef(interactionEnabled);
  useEffect(() => {
    enabledRef.current = interactionEnabled;
  }, [interactionEnabled]);

  // Track cursor position globally → cursor parallax target
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!enabledRef.current) return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      cursorTarget.current = {
        x: -ny * CURSOR_STRENGTH_X,
        y: nx * CURSOR_STRENGTH_Y,
      };
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Auto-spin speed (radians per second) — only active on mobile
  const AUTO_SPIN_SPEED = 0.05;

  // Animation loop: lerp smoothCursor toward target, apply total rotation to group
  useEffect(() => {
    let rafId: number;
    let lastTime: number | null = null;

    const tick = (time: number) => {
      const delta = lastTime !== null ? (time - lastTime) / 1000 : 0;
      lastTime = time;

      smoothCursor.current.x +=
        (cursorTarget.current.x - smoothCursor.current.x) * LERP_FACTOR;
      smoothCursor.current.y +=
        (cursorTarget.current.y - smoothCursor.current.y) * LERP_FACTOR;

      // Slow autospin on mobile (< 1024px) when not dragging
      if (window.innerWidth < 1024 && !isDragging.current && enabledRef.current) {
        dragRotation.current.y += AUTO_SPIN_SPEED * delta;
      }

      const totalX = smoothCursor.current.x + dragRotation.current.x;
      const totalY = smoothCursor.current.y + dragRotation.current.y;

      if (groupRef.current) {
        groupRef.current.rotation.x = totalX;
        groupRef.current.rotation.y = totalY;
      }

      setRotation({ x: totalX, y: totalY });
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // --- Pointer (mouse) drag handlers ---

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!enabledRef.current) return;
      isDragging.current = true;
      previousPosition.current = { x: event.clientX, y: event.clientY };
      (event.target as HTMLDivElement).setPointerCapture(event.pointerId);
    },
    []
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!enabledRef.current || !isDragging.current || !previousPosition.current) return;

      const deltaX = event.clientX - previousPosition.current.x;
      const deltaY = event.clientY - previousPosition.current.y;

      dragRotation.current = {
        x: dragRotation.current.x + deltaY * rotationSensitivity,
        y: dragRotation.current.y + deltaX * rotationSensitivity,
      };

      previousPosition.current = { x: event.clientX, y: event.clientY };
    },
    []
  );

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging.current) {
        isDragging.current = false;
        previousPosition.current = null;
        (event.target as HTMLDivElement).releasePointerCapture(event.pointerId);
      }
    },
    []
  );

  const handlePointerLeave = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging.current) {
        isDragging.current = false;
        previousPosition.current = null;
        (event.target as HTMLDivElement).releasePointerCapture(event.pointerId);
      }
    },
    []
  );

  // --- Touch handlers ---

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    if (!enabledRef.current) return;
    if (event.touches.length === 1) {
      isDragging.current = true;
      touchStart.current = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }
  }, []);

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (!enabledRef.current || !isDragging.current || !touchStart.current) return;
    if (event.touches.length !== 1) return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;

    dragRotation.current = {
      x: dragRotation.current.x + deltaY * rotationSensitivity,
      y: dragRotation.current.y + deltaX * rotationSensitivity,
    };

    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    touchStart.current = null;
  }, []);

  const handleTouchCancel = useCallback(() => {
    isDragging.current = false;
    touchStart.current = null;
  }, []);

  return {
    groupRef,
    rotation,
    updateDynamicOffset,
    dynamicXOffset,
    dynamicYOffset,
    dynamicZOffset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
    setAutoRotateEnabled: () => {},
  };
}
