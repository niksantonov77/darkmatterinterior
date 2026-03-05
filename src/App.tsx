import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
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

    return (
        <div className="bg-ink-900 min-h-screen text-white font-sans overflow-hidden">

            {/* Ultra Minimal Navigation Floor */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-ink-900/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="container mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Логотип удален по просьбе пользователя */}
                    </div>

                    <div className="hidden lg:flex items-center gap-12 font-sans text-xs uppercase tracking-widest text-white/70">
                        <a href="#about" className="hover:text-white transition-colors">О нас</a>
                        <a href="#benefits" className="hover:text-white transition-colors">Преимущества</a>
                        <a href="#portfolio" className="hover:text-white transition-colors">Объекты</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Стоимость</a>
                        <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
                    </div>
                </div>
            </nav>

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
                            <a href="#" className="hover:text-white transition-colors">Telegram ↗</a>
                            <a href="#" className="hover:text-white transition-colors">WhatsApp ↗</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest text-white/30 w-full justify-center md:justify-start">
                        <a href="/offer" className="hover:text-white transition-colors">Договор оферты</a>
                        <a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
