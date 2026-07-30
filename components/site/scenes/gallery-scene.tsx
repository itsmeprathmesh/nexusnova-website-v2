"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function GalleryScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x05070a, 0.025);
  }, [scene]);

  const cards = useMemo(() => {
    const arr: { pos: THREE.Vector3; size: THREE.Vector3; color: string; rot: number }[] = [];
    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#6366f1", "#2563eb", "#a855f7"];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const r = 4;
      arr.push({
        pos: new THREE.Vector3(r * Math.cos(angle), (Math.random() - 0.5) * 4, r * Math.sin(angle)),
        size: new THREE.Vector3(0.5 + Math.random() * 0.3, 0.7 + Math.random() * 0.3, 0.02),
        color: colors[i % colors.length],
        rot: angle,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += (scrollProgress.current * Math.PI * 0.6 - group.current.rotation.y) * 0.03 + 0.003;
    state.camera.position.z = 8 - scrollProgress.current * 2.5;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {cards.map((c, i) => (
        <group key={i} position={c.pos}>
          <mesh>
            <planeGeometry args={[c.size.x * 2, c.size.y * 2]} />
            <meshBasicMaterial color={c.color} transparent opacity={0.12} side={THREE.DoubleSide} />
          </mesh>
          <mesh>
            <planeGeometry args={[c.size.x * 2 - 0.1, c.size.y * 2 - 0.1]} />
            <meshBasicMaterial color={c.color} transparent opacity={0.06} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
