import { Suspense, lazy, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
      <mesh scale={1.8}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#ffffff"
          wireframe
          distort={0.3}
          speed={1.5}
          opacity={0.15}
          transparent
        />
      </mesh>
    </Float>
  );
};

const Scene3D = ({ className = "" }: { className?: string }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-32 h-32 rounded-full border border-white/10 animate-spin-slow opacity-20" />
      </div>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={<div className="w-full h-full" />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <FloatingSphere />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene3D;
