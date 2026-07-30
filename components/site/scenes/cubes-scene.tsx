"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function cameraPos(s: number) {
  let z = 10, fov = 50;
  if (s < 0.25) { z = 10 - smoothstep(s / 0.25) * 2; fov = 50 + smoothstep(s / 0.25) * 5; }
  else if (s < 0.6) { z = 8 - smoothstep((s - 0.25) / 0.35) * 1; fov = 55 + smoothstep((s - 0.25) / 0.35) * 5; }
  else { z = 7 + smoothstep((s - 0.6) / 0.4) * 5; fov = 60 - smoothstep((s - 0.6) / 0.4) * 15; }
  return { z, fov };
}

export function CubesScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useThree();
  const cubeRefs = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x05070a, 0.02);
  }, [scene]);

  const cubes = useMemo(() => {
    const arr: { pos: THREE.Vector3; size: number; color: string; speed: number }[] = [];
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1"];
    for (let i = 0; i < 12; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3 + Math.random() * 3;
      arr.push({
        pos: new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)),
        size: 0.2 + Math.random() * 0.3,
        color: colors[i % colors.length],
        speed: 0.3 + Math.random() * 0.5,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const s = scrollProgress.current;
    const { z, fov } = cameraPos(s);
    group.current.rotation.y = s * Math.PI * 0.8;
    group.current.rotation.x = Math.sin(s * Math.PI) * 0.2;
    cubeRefs.current.forEach((mesh, i) => {
      if (mesh) { mesh.rotation.x += 0.01 * cubes[i].speed; mesh.rotation.y += 0.015 * cubes[i].speed; }
    });
    state.camera.position.z = z;
    if ((state.camera as THREE.PerspectiveCamera).fov !== undefined) {
      (state.camera as THREE.PerspectiveCamera).fov = fov;
      (state.camera as THREE.PerspectiveCamera).updateProjectionMatrix();
    }
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.pos} ref={(el) => { if (el) cubeRefs.current[i] = el; }}>
          <boxGeometry args={[c.size, c.size, c.size]} />
          <meshBasicMaterial color={c.color} wireframe transparent opacity={0.3} />
        </mesh>
      ))}
      {cubes.map((c, i) => (
        <mesh key={`solid-${i}`} position={c.pos}>
          <boxGeometry args={[c.size * 0.3, c.size * 0.3, c.size * 0.3]} />
          <meshBasicMaterial color={c.color} transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}
