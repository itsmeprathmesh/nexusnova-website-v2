"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const MOUSE_STRENGTH = 3;
const PARTICLE_COUNT = 400;

function ParticleField({ mouse }: { mouse: THREE.Vector2 }) {
  const points = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array[]>([]);
  const basePositions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = 2 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const velocitiesData = useRef(
    Array.from({ length: PARTICLE_COUNT }, () => new Float32Array(3)),
  );

  useFrame((state) => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const bx = basePositions[i3];
      const by = basePositions[i3 + 1];
      const bz = basePositions[i3 + 2];

      const mx = mouse.x * MOUSE_STRENGTH;
      const my = -mouse.y * MOUSE_STRENGTH;

      const dx = pos[i3] - bx;
      const dy = pos[i3 + 1] - by;
      const dz = pos[i3 + 2] - bz;

      const distToBase = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const springForce = -0.02 * distToBase;

      const toMouseX = mx - pos[i3];
      const toMouseY = my - pos[i3 + 1];
      const distToMouse = Math.sqrt(toMouseX * toMouseX + toMouseY * toMouseY);
      const mouseForce = Math.max(0, 1 - distToMouse / 4) * 0.03;

      velocitiesData.current[i][0] += dx * springForce + toMouseX * mouseForce;
      velocitiesData.current[i][1] += dy * springForce + toMouseY * mouseForce;
      velocitiesData.current[i][2] += dz * springForce;

      velocitiesData.current[i][0] *= 0.95;
      velocitiesData.current[i][1] *= 0.95;
      velocitiesData.current[i][2] *= 0.95;

      pos[i3] += velocitiesData.current[i][0];
      pos[i3 + 1] += velocitiesData.current[i][1];
      pos[i3 + 2] += velocitiesData.current[i][2];
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[basePositions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#3B82F6" size={0.03} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function InteractiveCore({ mouse }: { mouse: THREE.Vector2 }) {
  const icosa = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const targetRotX = -mouse.y * 0.5;
    const targetRotY = mouse.x * 0.5;

    if (icosa.current) {
      icosa.current.rotation.x += (targetRotX - icosa.current.rotation.x) * 0.05;
      icosa.current.rotation.y += (targetRotY - icosa.current.rotation.y) * 0.05;
      icosa.current.rotation.z = Math.sin(t * 0.15) * 0.05;
    }

    const rings = [ring1, ring2, ring3];
    rings.forEach((ring, i) => {
      if (!ring.current) return;
      ring.current.rotation.x = Math.sin(t * (0.3 + i * 0.1) + i) * 0.4 + targetRotX * 0.3;
      ring.current.rotation.y += 0.008 + mouse.x * 0.003;
      ring.current.rotation.z = Math.cos(t * (0.2 + i * 0.08) + i) * 0.3 + targetRotY * 0.2;
    });

    if (glow.current) {
      const pulse = 0.8 + Math.sin(t * 0.5) * 0.2;
      const mouseGlow = Math.min(1, Math.abs(mouse.x) + Math.abs(mouse.y)) * 0.3;
      glow.current.scale.setScalar(pulse + mouseGlow * 0.2);
    }
  });

  return (
    <group>
      <mesh ref={icosa}>
        <icosahedronGeometry args={[1.1, 2]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={ring1}>
        <torusGeometry args={[1.6, 0.012, 16, 64]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.0, 0.012, 16, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[2.4, 0.012, 16, 64]} />
        <meshBasicMaterial color="#06B6D4" transparent opacity={0.25} />
      </mesh>
      <mesh ref={glow}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

function InteractiveScene() {
  const mouse = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onLeave = () => {
      mouse.current.x = 0;
      mouse.current.y = 0;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <InteractiveCore mouse={mouse.current} />
      <ParticleField mouse={mouse.current} />
    </>
  );
}

export default function InteractiveAICore() {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 40 }} dpr={[1, 2]} gl={{ alpha: true, antialias: true }}>
      <InteractiveScene />
    </Canvas>
  );
}
