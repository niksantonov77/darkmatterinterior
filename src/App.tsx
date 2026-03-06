import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
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

        return () => lenis.destroy();
    }, []);

    const scrollTo = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-ink-900 min-h-screen text-white font-sans overflow-hidden">

            {/* Ultra Minimal Navigation Floor */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-ink-900/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="container mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="font-heading font-bold text-xl tracking-widest uppercase">Dark Matter.</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-12 font-sans text-xs uppercase tracking-widest text-white/70">
                        <button onClick={() => scrollTo('#about')} className="hover:text-white transition-colors">О нас</button>
                        <button onClick={() => scrollTo('#benefits')} className="hover:text-white transition-colors">Преимущества</button>
                        <button onClick={() => scrollTo('#portfolio')} className="hover:text-white transition-colors">Объекты</button>
                        <button onClick={() => scrollTo('#pricing')} className="hover:text-white transition-colors">Стоимость</button>
                        <button onClick={() => scrollTo('#contact')} className="hover:text-white transition-colors">Контакты</button>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="text-white/80 hover:text-white p-2">
                            <Menu size={28} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-ink-900 flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-4 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                        <div className="flex flex-col items-center gap-12 font-sans text-lg uppercase tracking-widest text-white/80">
                            <button onClick={() => scrollTo('#about')} className="hover:text-white transition-colors">О нас</button>
                            <button onClick={() => scrollTo('#benefits')} className="hover:text-white transition-colors">Преимущества</button>
                            <button onClick={() => scrollTo('#portfolio')} className="hover:text-white transition-colors">Объекты</button>
                            <button onClick={() => scrollTo('#pricing')} className="hover:text-white transition-colors">Стоимость</button>
                            <button onClick={() => scrollTo('#contact')} className="hover:text-white transition-colors">Контакты</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                <Hero />
                <About />
                <Benefits />
                <Portfolio />
                <Pricing />
                <Contact />
            </main>

            {/* Footer Minimal */}
            <footer className="bg-ink-900 border-t border-white/5 py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start gap-8">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
                        <p className="text-white/30 text-[10px] md:text-xs tracking-widest uppercase font-sans">
                            © {new Date().getFullYear()} Dark Matter Studio. Все права защищены.
                        </p>
                        <div className="flex gap-8 text-[10px] md:text-xs uppercase tracking-widest text-white/50">
                            <a href="https://t.me/darkmatterstudio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram ↗</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest text-white/30 w-full justify-center md:justify-start">
                        <Link to="/offer" className="hover:text-white transition-colors">Договор оферты</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
