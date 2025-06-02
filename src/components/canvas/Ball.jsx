import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  Environment,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float 
      speed={3} 
      rotationIntensity={1.5} 
      floatIntensity={2}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.1]} intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.3}
          roughness={0.2}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.9}
          map={decal}
          flatShading
        />
      </mesh>
      <Environment preset="city" />
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          autoRotate
          autoRotateSpeed={3}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;