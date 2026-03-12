import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export default function MarmitaModel(props: any) {
  const mesh = useRef<THREE.Mesh>(null);

  // Rotate continuously slowly
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={2} // Animation speed, defaults to 1
      rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
      floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    >
      {/* We represent the "Marmita" or "Chef Ingredient" with an elegant glowing, distortion model */}
      <group {...props}>
        <RoundedBox ref={mesh as any} args={[2, 1, 1.5]} radius={0.15} smoothness={4} castShadow receiveShadow>
          <meshStandardMaterial
            color="#111"
            metalness={0.9}
            roughness={0.1}
          />
        </RoundedBox>
        {/* Adds a contrasting lid conceptually */}
        <RoundedBox args={[2.05, 0.1, 1.55]} position={[0, 0.55, 0]} radius={0.05} smoothness={4} castShadow>
          <meshPhysicalMaterial 
             color="#ff5722" 
             metalness={0.8} 
             roughness={0.2} 
             clearcoat={1} 
             emissive="#ff5722"
             emissiveIntensity={0.2}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}
