"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CoreRing({ radius, color, speed, offset = 0 }: { radius: number; color: string; speed: number; offset?: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5 + offset) * 0.3;
    mesh.current.rotation.y += speed * 0.01;
    mesh.current.rotation.z = Math.cos(state.clock.elapsedTime * speed * 0.3 + offset) * 0.2;
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.015, 16, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.5} />
    </mesh>
  );
}

function CoreSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.2, 2]} />
      <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.002;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8B5CF6" size={0.025} transparent opacity={0.5} />
    </points>
  );
}

function AICoreScene() {
  return (
    <>
      <CoreSphere />
      <CoreRing radius={1.8} color="#3B82F6" speed={0.3} offset={0} />
      <CoreRing radius={2.2} color="#8B5CF6" speed={0.2} offset={1} />
      <CoreRing radius={2.6} color="#06B6D4" speed={0.15} offset={2} />
      <Particles />
    </>
  );
}

export default function AICore() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <AICoreScene />
    </Canvas>
  );
}
