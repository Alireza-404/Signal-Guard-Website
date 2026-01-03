"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

const Particles = ({ count }: { count: number }) => {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;

      colors[i3] = 0.4;
      colors[i3 + 1] = 1;
      colors[i3 + 2] = 0.6;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

const ParticlesBackground = () => {
  const [count, setCount] = useState(80);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const w = window.innerWidth;

    if (w < 768) {
      setCount(50);
      setDpr(1);
    } else if (w < 1024) {
      setCount(120);
      setDpr(1.25);
    } else {
      setCount(200);
      setDpr(1.5);
    }
  }, []);

  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 0, 14], fov: 65 }}
      dpr={dpr}
      frameloop="always"
      gl={{
        antialias: false,
        powerPreference: "low-power",
      }}
    >
      <ambientLight intensity={0.5} />
      <Particles count={count} />
    </Canvas>
  );
};

export default ParticlesBackground;
