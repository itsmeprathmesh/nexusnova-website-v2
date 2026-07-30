"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 42;
const CONNECT_DISTANCE = 2.1;

function buildLattice() {
  const positions: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
    const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;
    const r = 4.2 + Math.random() * 0.6;
    positions.push(
      new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      )
    );
  }
  const linePositions: number[] = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (positions[i].distanceTo(positions[j]) < CONNECT_DISTANCE) {
        linePositions.push(positions[i].x, positions[i].y, positions[i].z);
        linePositions.push(positions[j].x, positions[j].y, positions[j].z);
      }
    }
  }
  return { positions, linePositions };
}

function Lattice({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const group = useRef<THREE.Group>(null);
  const reduceMotion = useRef(false);
  const { positions, linePositions } = useMemo(buildLattice, []);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    if (!reduceMotion.current) {
      const targetRotY = scrollProgress.current * Math.PI * 1.4;
      const targetRotX = scrollProgress.current * 0.6;
      group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.04 + 0.0012;
      group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.04;
      group.current.rotation.z = Math.sin(scrollProgress.current * Math.PI) * 0.15;
      state.camera.position.z = 12 - scrollProgress.current * 3.5;
    } else {
      group.current.rotation.y += 0.0012;
    }
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#e8cd9a" />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={new Float32Array(linePositions)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#29b087" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.0006;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#12523d" size={0.03} transparent opacity={0.6} />
    </points>
  );
}

function Scene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x050806, 0.035);
  }, [scene]);

  return (
    <>
      <Lattice scrollProgress={scrollProgress} />
      <Particles />
    </>
  );
}

export default function Background3D() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      scrollProgress.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }} dpr={[1, 2]}>
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
