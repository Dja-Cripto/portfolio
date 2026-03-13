import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={isMobile ? 1 : 2} rotationIntensity={isMobile ? 1 : 1.5} floatIntensity={isMobile ? 1 : 2}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <MeshDistortMaterial
          color="#8a2be2"
          emissive="#00f0ff"
          emissiveIntensity={0.6}
          wireframe
          distort={isMobile ? 0.2 : 0.4}
          speed={isMobile ? 1 : 2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
