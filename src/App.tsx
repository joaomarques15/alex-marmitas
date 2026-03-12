import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';
import Menu from './components/Menu';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade out hero content as we scroll down
  const heroOpacity = Math.max(1 - scrollY / 600, 0);

  return (
    <div className="app-container">
      {/* 3D Hero Section */}
      <motion.div
        className="hero-wrapper"
        style={{ opacity: heroOpacity, pointerEvents: heroOpacity > 0.1 ? 'auto' : 'none' }}
      >
        <Suspense fallback={<div className="loading-fallback">Carregando Chef Alex...</div>}>
          <Hero />
        </Suspense>
      </motion.div>

      {/* 2D Scrollable Content */}
      <div className="content-wrapper">
        <div className="spacer"></div>
        <Menu />

        <footer className="footer glass-panel">
          <p>&copy; {new Date().getFullYear()} Chef Alex Marmitas. Sabor e Qualidade.</p>
        </footer>
      </div>

      <WhatsAppButton />
    </div>
  );
}

export default App;
