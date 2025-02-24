"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import { useState, useRef } from "react";
import * as THREE from "three";

function Planet({ radius, speed, color, href, initialAngle }: { radius: number; speed: number; color: string; href: string; initialAngle: number }) {
  const [zoom, setZoom] = useState(false);
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const t = clock.getElapsedTime() * speed + initialAngle;
      planetRef.current.position.x = radius * Math.cos(t);
      planetRef.current.position.z = radius * Math.sin(t);
    }
  });

  return (
    <mesh
      ref={planetRef}
      onClick={() => {
        setZoom(true);
        setTimeout(() => (window.location.href = href), 1000);
      }}
      scale={zoom ? [3, 3, 3] : [2.5, 2.5, 2.5]}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.5} />
    </mesh>
  );
}

export default function WelcomePage() {
  return (
    <motion.div className="bg-black text-white w-screen h-screen fixed top-0 left-0">
      <Canvas camera={{ position: [0, 0, 30] }} className="w-full h-full">
        <mesh>
          <sphereGeometry args={[5, 32, 32]} />
          <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
        </mesh>
        <pointLight position={[0, 0, 0]} intensity={1000} />
        <Planet radius={10} speed={0.4} color="blue" href="/individual" initialAngle={Math.PI / 3} />  
        <Planet radius={18} speed={0.2} color="red" href="/team" initialAngle={Math.PI / 6} />  
        <OrbitControls minDistance={10} maxDistance={30} enableDamping={true} dampingFactor={0.1} />
      </Canvas>
    </motion.div>
  );
}
