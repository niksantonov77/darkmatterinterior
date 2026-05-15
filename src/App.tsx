import { useEffect } from 'react';
import Lenis from 'lenis';
import HybridNav from './components/hybrid/Nav';
import HybridHero from './components/hybrid/Hero';
import HybridStats from './components/hybrid/Stats';
import HybridWork from './components/hybrid/Work';
import HybridMethod from './components/hybrid/Method';
import HybridPricing from './components/hybrid/Pricing';
import HybridQuote from './components/hybrid/Quote';
import HybridAbout from './components/hybrid/About';
import HybridContact from './components/hybrid/Contact';
import HybridFooter from './components/hybrid/Footer';
import FloatingCTA from './components/hybrid/FloatingCTA';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('hb-dark');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <HybridNav />
      <main>
        <HybridHero />
        <HybridStats />
        <HybridWork />
        <HybridMethod />
        <HybridPricing />
        <HybridQuote />
        <HybridAbout />
        <HybridContact />
      </main>
      <HybridFooter />
      <FloatingCTA />
    </>
  );
}

export default App;
