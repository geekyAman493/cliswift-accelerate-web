import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating geometric cube with wireframe
const FloatingCube = ({ position, scale, speed, color }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (meshRef.current && wireframeRef.current) {
      const time = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.3;
      
      wireframeRef.current.rotation.x = time * 0.3;
      wireframeRef.current.rotation.y = time * 0.5;
      wireframeRef.current.position.y = position[1] + Math.sin(time) * 0.3;
    }
  });

  return (
    <group position={position}>
      {/* Solid mesh with transparency */}
      <mesh ref={meshRef} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.2}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
      {/* Wireframe overlay */}
      <lineSegments ref={wireframeRef} scale={scale}>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color={color} transparent opacity={0.9} linewidth={2} />
      </lineSegments>
    </group>
  );
};

// Particle dots forming a grid
const ParticleGrid = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const particleCount = 800;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#818CF8"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#A5B4FC" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#22D3EE" />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#818CF8" />
        
        {/* Particle grid background */}
        <ParticleGrid />
        
        {/* Floating geometric cubes */}
        <FloatingCube position={[-2, 0, 0]} scale={0.8} speed={0.5} color="#818CF8" />
        <FloatingCube position={[2, 0.5, -1]} scale={0.6} speed={0.7} color="#A5B4FC" />
        <FloatingCube position={[0, -1, 1]} scale={0.5} speed={0.6} color="#22D3EE" />
        <FloatingCube position={[-1, 1.5, -2]} scale={0.4} speed={0.8} color="#6366F1" />
        <FloatingCube position={[1.5, -0.5, 2]} scale={0.45} speed={0.65} color="#06B6D4" />
      </Canvas>
    </div>
  );
};

export default Hero3D;
