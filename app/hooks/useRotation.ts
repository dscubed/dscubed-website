import { useRef, useState, useCallback, useEffect } from "react";
import { Group } from "three";

/**
 * Custom hook to handle 3D rotation functionality
 * @returns Rotation state and event handlers for pointer interactions
 */
export default function useRotation() {
  // Ref for the main group to be rotated
  const groupRef = useRef<Group>(null);

  // State for rotation and offset
  const [isDragging, setIsDragging] = useState(false);
  const [previousPosition, setPreviousPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [dynamicXOffset, setDynamicXOffset] = useState(20); // Default offset

  // Auto-rotation - much slower speed, always active
  const autoRotationSpeed = useRef(0.00005); // Significantly reduced speed
  const lastFrameTime = useRef(Date.now());

  // Update offset based on window width, set to 0 for small screens
  useEffect(() => {
    const referenceWidth = 1280;
    const referenceOffset = 20;

    const updateOffset = () => {
      const currentWidth = window.innerWidth;

      // Set offset to 0 for small screens (< 640px)
      if (currentWidth < 640) {
        setDynamicXOffset(0);
      } else {
        // For larger screens, calculate scaled offset
        const scaledOffset = Math.max(
          0,
          (currentWidth / referenceWidth) * referenceOffset
        );
        setDynamicXOffset(scaledOffset);
      }
    };

    // Set initial offset
    updateOffset();

    // Add resize listener
    window.addEventListener("resize", updateOffset);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateOffset);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Always-on auto-rotation animation at very slow speed
  useEffect(() => {
    let animationFrameId: number;

    const autoRotate = () => {
      if (groupRef.current && !isDragging) {
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
  }, [isDragging]);

  // Pointer down handler
  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setPreviousPosition({ x: event.clientX, y: event.clientY });
      // Capture the pointer
      (event.target as HTMLDivElement).setPointerCapture(event.pointerId);
      (event.target as HTMLDivElement).style.cursor = "grabbing";
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
      const rotationSensitivity = 0.005;
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
        (event.target as HTMLDivElement).style.cursor = "grab";
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
        (event.target as HTMLDivElement).style.cursor = "grab";
      }
    },
    [isDragging]
  );

  return {
    groupRef,
    rotation,
    dynamicXOffset,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
  };
}
