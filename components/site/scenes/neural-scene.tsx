"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 42;
const CONNECT_DISTANCE = 2.1;

function buildLattice() {
  const positions: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
    const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
    const r = 4.2 + Math.random() * 0.6;
    positions.push(new THREE.Vector3(r * Math.cos(theta) * Math.sin(phi), r * Math.sin(theta) * Math.sin(phi), r * Math.cos(phi)));
  }
  const linePositions: number[] = [];
  for (let i = 0; i < positions.length; i++)
    for (let j = i + 1; j < positions.length; j++)
      if (positions[i].distanceTo(positions[j]) < CONNECT_DISTANCE) {
        linePositions.push(positions[i].x, positions[i].y, positions[i].z);
        linePositions.push(positions[j].x, positions[j].y, positions[j].z);
      }
  return { positions, linePositions };
}

export function NeuralScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const reduceMotion = useRef(false);
  const { positions, linePositions } = useMemo(buildLattice, []);
  const { scene } = useThree();

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scene.fog = new THREE.FogExp2(0x05070a, 0.035);
  }, [scene]);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    return geo;
  }, [linePositions]);

  useFrame((state) => {
    if (!group.current) return;
    if (!reduceMotion.current) {
      group.current.rotation.y += (scrollProgress.current * Math.PI * 1.4 - group.current.rotation.y) * 0.04 + 0.0012;
      group.current.rotation.x += (scrollProgress.current * 0.6 - group.current.rotation.x) * 0.04;
      group.current.rotation.z = Math.sin(scrollProgress.current * Math.PI) * 0.15;
      state.camera.position.z = 12 - scrollProgress.current * 3.5;
    } else group.current.rotation.y += 0.0012;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
      ))}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#8b5cf6" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}
