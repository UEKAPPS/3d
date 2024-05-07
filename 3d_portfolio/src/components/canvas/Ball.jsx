/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef(); // Mesh referansını saklayın

  useEffect(() => {
    return () => {
      if (meshRef.current) {
        meshRef.current.material.dispose(); // Materiali temizleyin
        meshRef.current.geometry.dispose(); // Geometriyi temizleyin
      }
    };
  }, []);

  if (!decal) {
    return <CanvasLoader />; // Yükleniyor bileşeni
  }

  return (
    <Float speed={1.75} rotationIntensity={1.75} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense >
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;