"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Particles = ({ particlesCount }: { particlesCount: number }) => {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, [particlesCount]);

  const colors = useMemo(() => {
    const cols = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const hue = 0.33 + Math.random() * 0.05;
      const color = new THREE.Color().setHSL(hue, 0.7, 0.5);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, [particlesCount]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.15,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005;
      meshRef.current.rotation.x += 0.0002;
    }
  });

  return <points ref={meshRef} geometry={geometry} material={material} />;
};

const ParticlesBackground = () => {
  const [particlesCount, setParticlesCount] = useState(1000);

  useEffect(() => {
    const updateParticles = () => {
      if (window.innerWidth < 768) {
        setParticlesCount(95);
      } else {
        setParticlesCount(150);
      }
    };

    updateParticles();
    window.addEventListener("resize", updateParticles);
    return () => window.removeEventListener("resize", updateParticles);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 75 }}
      className="absolute inset-0 -z-10"
    >
      <ambientLight intensity={0.3} />
      <Particles particlesCount={particlesCount} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={1.5}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default ParticlesBackground;
