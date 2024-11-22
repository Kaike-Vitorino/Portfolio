import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { WaveMaterial } from './DomainExp'
import { OrbitControls, useTexture } from '@react-three/drei'

function ShaderPlane() {
    const ref = useRef();
    const noiseImg = useTexture(require('./fractal1.webp'));

    useFrame((state, delta) => {
        ref.current.time += delta;
        ref.current.factor += delta / 4;
    });

    return (
        <mesh scale={[100, 100, 100]} rotation-y={Math.PI / 1.9}>
            {/* Substitua SphereBufferGeometry por sphereGeometry */}
            <sphereGeometry args={[1, 32, 32]} />
            <waveMaterial
            uniforms-noiseImg-value={noiseImg}
            side={THREE.BackSide}
            ref={ref}
            key={WaveMaterial.key}
        />
    </mesh>
    );
}


export default function GojoDomain() {
  return (
    <Canvas dpr={[1, 2]} style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}>
      <Suspense fallback={null}>
        <OrbitControls />
        <ShaderPlane />
      </Suspense>
    </Canvas>
  )
}
