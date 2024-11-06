// ThreeBubbles.jsx
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

// Helper function to calculate distance from cursor
const distanceFromCursor = (bubble, cursor) => {
  const dx = bubble.position.x - cursor.x;
  const dy = bubble.position.y - cursor.y;
  return Math.sqrt(dx * dx + dy * dy);
};

// Component for individual bubble
function Bubble({ position, cursor }) {
  const bubbleRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (bubbleRef.current) {
      // Floating animation
      bubbleRef.current.position.y +=
        Math.sin(bubbleRef.current.position.x) * 0.005;

      // Check distance to cursor for hover effect
      const distance = distanceFromCursor(bubbleRef.current, cursor);
      setIsHovered(distance < 0.3);
    }
  });

  return (
    <Sphere
      ref={bubbleRef}
      args={[0.2, 32, 32]}
      position={position}
      visible={!isHovered}
    >
      <meshStandardMaterial color="#1E90FF" transparent opacity={0.7} />
    </Sphere>
  );
}

// Main Three.js background component
function ThreeBubbles() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const bubbles = Array.from({ length: 40 }).map(() => ({
    position: [
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
    ],
  }));

  // Track cursor position to make bubbles avoid it
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursor({
      x: (clientX / window.innerWidth) * 2 - 1,
      y: -(clientY / window.innerHeight) * 2 + 1,
    });
  };

  // Set up event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {bubbles.map((bubble, index) => (
        <Bubble key={index} position={bubble.position} cursor={cursor} />
      ))}
    </Canvas>
  );
}

export default ThreeBubbles;
