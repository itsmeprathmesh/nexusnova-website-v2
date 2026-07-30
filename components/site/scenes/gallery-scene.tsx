"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function cameraPos(s: number) {
  let z = 8, rotSpeed = 0.003;
  if (s < 0.2) { z = 8 - smoothstep(s / 0.2) * 1.5; rotSpeed = 0.003 + smoothstep(s / 0.2) * 0.005; }
  else if (s < 0.5) { z = 6.5 - smoothstep((s - 0.2) / 0.3) * 1; rotSpeed = 0.008 - smoothstep((s - 0.2) / 0.3) * 0.003; }
  else { z = 5.5 + smoothstep((s - 0.5) / 0.5) * 4; rotSpeed = 0.005 - smoothstep((s - 0.5) / 0.5) * 0.003; }
  return { z, rotSpeed };
}

export function GalleryScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useThree();
  const rotSpeed = useRef(0.003);

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x05070a, 0.025);
  }, [scene]);

  const cards = useMemo(() => {
    const arr: { pos: THREE.Vector3; size: THREE.Vector3; color: string }[] = [];
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#2563eb", "#a855f7", "#22d3ee", "#60a5fa"];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      arr.push({
        pos: new THREE.Vector3(4 * Math.cos(angle), (Math.random() - 0.5) * 4, 4 * Math.sin(angle)),
        size: new THREE.Vector3(0.5 + Math.random() * 0.3, 0.7 + Math.random() * 0.3, 0.02),
        color: colors[i % colors.length],
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const s = scrollProgress.current;
    const { z, rotSpeed: rs } = cameraPos(s);
    rotSpeed.current = rs;
    group.current.rotation.y += (s * Math.PI * 0.6 - group.current.rotation.y) * 0.03 + rotSpeed.current;
    state.camera.position.z = z;
    state.camera.position.y = Math.sin(s * Math.PI * 1.5) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {cards.map((c, i) => (
        <group key={i} position={c.pos}>
          <mesh><planeGeometry args={[c.size.x * 2, c.size.y * 2]} /><meshBasicMaterial color={c.color} transparent opacity={0.12} side={THREE.DoubleSide} /></mesh>
          <mesh><planeGeometry args={[c.size.x * 2 - 0.1, c.size.y * 2 - 0.1]} /><meshBasicMaterial color={c.color} transparent opacity={0.06} side={THREE.DoubleSide} /></mesh>
        </group>
      ))}
    </group>
  );
}
