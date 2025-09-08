import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';

export const FloatingCubes = () => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });
  
  return (
    <group ref={meshRef}>
      <Box args={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
        <meshStandardMaterial color="#00ff88" transparent opacity={0.6} />
      </Box>
      
      <Sphere args={[0.3]} position={[1, 0, 0]}>
        <meshStandardMaterial color="#0099ff" transparent opacity={0.6} />
      </Sphere>
      
      <Box args={[0.3, 0.3, 0.3]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#ff6b6b" transparent opacity={0.6} />
      </Box>
    </group>
  );
};
