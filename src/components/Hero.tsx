import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, PresentationControls } from '@react-three/drei';
import MarmitaModel from './MarmitaModel';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 based on screen size
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-container">
      {/* 3D Scene under 2D elements */}
      <div className="canvas-container" style={{ background: '#050608' }}>
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 8], fov: 45 }} 
          dpr={[1, 1]}
          gl={{ antialias: true, stencil: false, depth: true }}
          onCreated={(state) => {
            state.gl.setClearColor('#050608', 1);
          }}
        >
          <color attach="background" args={['#050608']} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff5722" />
          <pointLight position={[-10, 5, 5]} intensity={0.5} color="#444" />
          
          <PresentationControls
            global
            snap
            rotation={[mousePosition.y * 0.1, -mousePosition.x * 0.1, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <MarmitaModel position={[0, -0.5, 0]} scale={1.2} />
          </PresentationControls>

          <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
        </Canvas>
      </div>

      {/* 2D Parallax Typography Overlay */}
      <div className="hero-content">
        <motion.div
           className="hero-text-block"
           animate={{
             x: mousePosition.x * -20,
             y: mousePosition.y * 20,
           }}
           transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sabor de Chef <br /> na sua Mesa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A combinação perfeita de ingredientes frescos, tempero caseiro 
            e o toque sofisticado da alta gastronomia.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#menu" className="btn btn-hero">
              Descubra o Cardápio
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
