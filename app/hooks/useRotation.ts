import { useRef, useState, useCallback, useEffect } from "react";
import { Group } from "three";

/**
 * Custom hook to handle 3D rotation functionality
 * @returns Rotation state and event handlers for pointer interactions
 */
export default function useRotation() {
  // Ref for the main group to be rotated
  const groupRef = useRef<Group>(null);

  // Touch handlers
  const [isDragging, setIsDragging] = useState(false);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null
  );

  // State for rotation and offset
  const [previousPosition, setPreviousPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Dyanamic Offsets
  const [dynamicXOffset, setDynamicXOffset] = useState(0);
  const [dynamicYOffset, setDynamicYOffset] = useState(0);
  const [dynamicZOffset, setDynamicZOffset] = useState(0);

  // Auto-rotation - much slower speed, always active
  const autoRotationSpeed = useRef(0.00005);
  const lastFrameTime = useRef(Date.now());
  const rotationSensitivity = 0.005;

  // Update offset based on window width, set to 0 for small screens
  // useEffect(() => {
    // const referenceWidth = 1280;
    // const referenceOffset = 14;

    // const updateOffset = () => {
    //   const currentWidth = window.innerWidth;

    //   // Set offset to 0 for small screens (< 640px)
    //   if (currentWidth < 640) {
    //     setDynamicXOffset(0);
    //     setDynamicYOffset(-5);
    //     setDynamicZOffset(-10);
    //   } else {
    //     // For larger screens, calculate scaled offset
    //     const scaledOffset = Math.max(
    //       0,
    //       (currentWidth / referenceWidth) * referenceOffset + 2
    //     );
    //     setDynamicXOffset(scaledOffset);
    //     setDynamicYOffset(0);
    //     setDynamicZOffset(0);
    //   }
    // };

    // Set initial offset
    // updateOffset();

    // console.log(window.innerWidth / 4)
    // setDynamicXOffset(10);

    // Add resize listener
    // window.addEventListener("resize", updateOffset);

    // Cleanup listener on component unmount
    // return () => window.removeEventListener("resize", updateOffset);
  // }, []);

  const updateDynamicOffset = useCallback((x: number, y: number, z: number) => {
    setDynamicXOffset(x);
    setDynamicYOffset(y);
    setDynamicZOffset(z);
  }, []);

  // Auto-rotation animation
  useEffect(() => {
    let animationFrameId: number;

    const autoRotate = () => {
      if (groupRef.current && !isDragging && autoRotateEnabled) {
        // Calculate time elapsed since last frame for smooth rotation regardless of framerate
        const now = Date.now();
        const deltaTime = now - lastFrameTime.current;
        lastFrameTime.current = now;

        // Apply rotation - using delta time for smooth motion
        const rotationAmount = autoRotationSpeed.current * deltaTime;

        // Update rotation state
        setRotation((prev) => ({
          x: prev.x,
          y: prev.y + rotationAmount, // Rotate around Y axis
        }));

        // Apply rotation directly to the group
        groupRef.current.rotation.y += rotationAmount;
      }

      // Continue animation loop
      animationFrameId = requestAnimationFrame(autoRotate);
    };

    // Start animation loop
    lastFrameTime.current = Date.now();
    animationFrameId = requestAnimationFrame(autoRotate);

    // Cleanup animation on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging, autoRotateEnabled]);

  // Pointer down handler
  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setPreviousPosition({ x: event.clientX, y: event.clientY });
      // Capture the pointer
      (event.target as HTMLDivElement).setPointerCapture(event.pointerId);
    },
    []
  );

  // Pointer move handler
  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging || !previousPosition || !groupRef.current) return;

      const deltaX = event.clientX - previousPosition.x;
      const deltaY = event.clientY - previousPosition.y;

      // Adjust sensitivity as needed (lower value = less sensitive)
      const newRotation = {
        x: rotation.x + deltaY * rotationSensitivity,
        y: rotation.y + deltaX * rotationSensitivity,
      };

      setRotation(newRotation);
      groupRef.current.rotation.x = newRotation.x;
      groupRef.current.rotation.y = newRotation.y;

      setPreviousPosition({ x: event.clientX, y: event.clientY });
    },
    [isDragging, previousPosition, rotation]
  );

  // Pointer up handler
  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging) {
        setIsDragging(false);
        setPreviousPosition(null);
        // Release the pointer capture
        (event.target as HTMLDivElement).releasePointerCapture(event.pointerId);
      }
    },
    [isDragging]
  );

  // Pointer leave handler
  const handlePointerLeave = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      // Only release if dragging and leaving
      if (isDragging) {
        setIsDragging(false);
        setPreviousPosition(null);
        // Release the pointer capture
        (event.target as HTMLDivElement).releasePointerCapture(event.pointerId);
      }
    },
    [isDragging]
  );

  // --- Touch event handlers for mobile support ---

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    if (event.touches.length === 1) {
      setIsDragging(true);
      setTouchStart({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });
    }
  }, []);

  const handleTouchMove = useCallback(
    (event: React.TouchEvent) => {
      if (!isDragging || !touchStart || !groupRef.current) return;
      if (event.touches.length !== 1) return;

      const touch = event.touches[0];
      const deltaX = touch.clientX - touchStart.x;
      const deltaY = touch.clientY - touchStart.y;

      const newRotation = {
        x: rotation.x + deltaY * rotationSensitivity,
        y: rotation.y + deltaX * rotationSensitivity,
      };

      setRotation(newRotation);
      groupRef.current.rotation.x = newRotation.x;
      groupRef.current.rotation.y = newRotation.y;

      setTouchStart({ x: touch.clientX, y: touch.clientY });
    },
    [isDragging, touchStart, rotation]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTouchStart(null);
  }, []);

  const handleTouchCancel = useCallback(() => {
    setIsDragging(false);
    setTouchStart(null);
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
    setAutoRotateEnabled,
  };
}
