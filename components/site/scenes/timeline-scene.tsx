"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function cameraPos(s: number) {
  let z = 8, y = 0;
  if (s < 0.3) { z = 8 - smoothstep(s / 0.3) * 2; y = smoothstep(s / 0.3) * 0.5; }
  else if (s < 0.6) { z = 6 - smoothstep((s - 0.3) / 0.3) * 0.5; y = 0.5 + smoothstep((s - 0.3) / 0.3) * 1; }
  else { z = 5.5 + smoothstep((s - 0.6) / 0.4) * 4; y = 1.5 - smoothstep((s - 0.6) / 0.4) * 1.5; }
  return { z, y };
}

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
    const s = scrollProgress.current;
    const { z, y } = cameraPos(s);
    group.current.rotation.y = s * Math.PI * 0.3;
    group.current.position.y = Math.sin(s * Math.PI) * 0.3;
    state.camera.position.z = z;
    state.camera.position.y = y;
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
