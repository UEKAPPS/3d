import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';


// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./test/pcs.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={Math.PI}
        groundColor="black" />
      <pointLight intensity={1000} position={[-10, -20, 0]} /> {/* Ön ışık */}
      <pointLight intensity={1000} position={[-20, -5, -10]} /> {/* Arka ışık */}
      <spotLight
        position={[-1, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.65}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, 0]}
        rotation={[0, 1, 0]}
      />
    </mesh>
  )
}

// eslint-disable-next-line no-unused-vars
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [15, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas;