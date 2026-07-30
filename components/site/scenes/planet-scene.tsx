"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function cameraPos(s: number) {
  let z = 7, y = 0;
  if (s < 0.2) { z = 7 - smoothstep(s / 0.2) * 1.5; y = smoothstep(s / 0.2) * 0.5; }
  else if (s < 0.5) { z = 5.5 + smoothstep((s - 0.2) / 0.3) * 0.5; y = 0.5 + smoothstep((s - 0.2) / 0.3) * 1; }
  else if (s < 0.75) { z = 6 + smoothstep((s - 0.5) / 0.25) * 1; y = 1.5 - smoothstep((s - 0.5) / 0.25) * 0.5; }
  else { z = 7 + smoothstep((s - 0.75) / 0.25) * 4; y = 1; }
  return { z, y };
}

export function PlanetScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x05070a, 0.03);
  }, [scene]);

  const particles = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + (Math.random() - 0.5) * 0.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const t = Math.random();
      colors[i * 3] = t * 0.23; colors[i * 3 + 1] = t * 0.5; colors[i * 3 + 2] = t * 0.83;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geo;
  }, []);

  const ringGeo = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = 4 + Math.random() * 1.5;
      positions[i * 3] = r * Math.cos(angle);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 2] = r * Math.sin(angle) * 0.3;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const s = scrollProgress.current;
    const { z, y } = cameraPos(s);
    group.current.rotation.y = s * Math.PI * 0.3;
    if (sphereRef.current) sphereRef.current.rotation.y += 0.005;
    state.camera.position.z = z;
    state.camera.position.y = y;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <points geometry={particles}><pointsMaterial size={0.04} transparent opacity={0.7} vertexColors /></points>
      <points ref={sphereRef} geometry={ringGeo}><pointsMaterial size={0.025} color="#06b6d4" transparent opacity={0.4} /></points>
      <mesh><sphereGeometry args={[0.8, 16, 16]} /><meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} /></mesh>
    </group>
  );
}
