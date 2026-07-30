"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import { NeuralScene } from "./scenes/neural-scene";
import { TimelineScene } from "./scenes/timeline-scene";
import { CubesScene } from "./scenes/cubes-scene";
import { GalleryScene } from "./scenes/gallery-scene";
import { PlanetScene } from "./scenes/planet-scene";

function Particles() {
  const geo = useMemo(() => {
    const count = 200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const t = Math.random();
      col[i * 3] = t * 0.23; col[i * 3 + 1] = t * 0.5; col[i * 3 + 2] = t * 0.83;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
    return g;
  }, []);

  const points = useRef<THREE.Points>(null);

  useFrame(() => {
    if (points.current) points.current.rotation.y += 0.0004;
  });

  return (
    <points ref={points} geometry={geo}>
      <pointsMaterial size={0.03} transparent opacity={0.4} vertexColors />
    </points>
  );
}

const sceneMap: Record<string, React.ComponentType<{ scrollProgress: React.MutableRefObject<number> }>> = {
  "/": NeuralScene,
  "/about": TimelineScene,
  "/solutions": CubesScene,
  "/portfolio": GalleryScene,
  "/contact": PlanetScene,
};

function SceneRouter({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const pathname = usePathname();
  const Scene = sceneMap[pathname] || NeuralScene;
  return <Scene scrollProgress={scrollProgress} />;
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
        <SceneRouter scrollProgress={scrollProgress} />
        <Particles />
      </Canvas>
    </div>
  );
}
