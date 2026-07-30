"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function TimelineScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x05070a, 0.025);
  }, [scene]);

  const nodes = useMemo(() => {
    const arr: { pos: THREE.Vector3; color: string }[] = [];
    for (let i = 0; i < 8; i++) {
      const t = i / 7;
      arr.push({
        pos: new THREE.Vector3((t - 0.5) * 10, Math.sin(t * Math.PI) * 2, Math.cos(t * Math.PI * 2) * 1.5),
        color: i % 2 === 0 ? "#3b82f6" : "#8b5cf6",
      });
    }
    return arr;
  }, []);

  const lineObj = useMemo(() => {
    const positions = nodes.map((n) => [n.pos.x, n.pos.y, n.pos.z]).flat();
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({ color: "#3b82f6", transparent: true, opacity: 0.2 });
    return new THREE.Line(geo, mat);
  }, [nodes]);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y += (scrollProgress.current * Math.PI * 0.5 - group.current.rotation.y) * 0.02;
    group.current.position.y = Math.sin(scrollProgress.current * Math.PI) * 0.3;
    state.camera.position.z = 8 - scrollProgress.current * 2;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <primitive object={lineObj} />
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.08 + (i / 7) * 0.06, 12, 12]} />
          <meshBasicMaterial color={n.color} transparent opacity={0.4 + (i / 7) * 0.4} />
        </mesh>
      ))}
    </group>
  );
}
