import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Pre-define the known images from the public folder based on earlier lists
const generatePaths = () => {
    const kudrovo = Array.from({ length: 6 }, (_, i) => `/portfolio/kudrovo/${i + 1}.jpg`);
    const jaanila = Array.from({ length: 12 }, (_, i) => `/portfolio/jaanila/${i + 1}.jpg`);
    const svetlana = Array.from({ length: 6 }, (_, i) => `/portfolio/svetlana/${i + 1}.jpg`);
    const forest = Array.from({ length: 3 }, (_, i) => `/portfolio/forest/${i + 1}.jpg`);
    const lotos = Array.from({ length: 5 }, (_, i) => `/portfolio/lotos/${i + 1}.jpg`);

    // Combine and shuffle for a truly "chaotic" aesthetic
    const all = [...kudrovo, ...svetlana, ...forest, ...lotos, ...jaanila];

    // A stable but pseudo-random shuffle so it looks the same on every load
    let currentIndex = all.length, randomIndex;
    let seed = 42;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    while (currentIndex != 0) {
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex--;
        [all[currentIndex], all[randomIndex]] = [all[randomIndex], all[currentIndex]];
    }
    return all;
};

const chaoticImages = generatePaths();

export default function Portfolio() {
    const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedImageIdx !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedImageIdx]);

    const closeModal = () => setSelectedImageIdx(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIdx !== null) setSelectedImageIdx((prev) => (prev! + 1) % chaoticImages.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIdx !== null) setSelectedImageIdx((prev) => (prev! - 1 + chaoticImages.length) % chaoticImages.length);
    };

    return (
        <>
            <section id="portfolio" className="py-24 md:py-40 bg-ink-900 border-t border-white/5 relative">
                <div className="container mx-auto px-6 md:px-12">

                    <div className="mb-16 md:mb-24">
                        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Портфолио
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] lowercase max-w-2xl">
                            Галерея избранных объектов.
                        </h3>
                    </div>

                    {/* Chaotic Masonry Grid */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
                        {chaoticImages.map((src, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "10%" }}
                                transition={{ duration: 0.8 }}
                                className="break-inside-avoid relative group cursor-pointer overflow-hidden"
                                onClick={() => setSelectedImageIdx(idx)}
                            >
                                <img
                                    src={src}
                                    alt={`Project abstract ${idx}`}
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 bg-ink-900/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[100] bg-ink-900/98 backdrop-blur-xl flex flex-col"
                        onClick={closeModal}
                    >
                        <div className="absolute top-6 md:top-10 right-6 md:right-10 z-50">
                            <button onClick={closeModal} className="text-white/50 hover:text-white transition-colors p-2 mix-blend-difference">
                                <X size={32} strokeWidth={1} />
                            </button>
                        </div>

                        <div className="flex-1 relative flex items-center justify-center p-4 md:p-16" onClick={(e) => e.stopPropagation()}>
                            <div className="absolute left-0 top-0 bottom-0 w-1/4 cursor-w-resize z-10" onClick={prevImage}></div>
                            <div className="absolute right-0 top-0 bottom-0 w-1/4 cursor-e-resize z-10" onClick={nextImage}></div>

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={selectedImageIdx}
                                    src={chaoticImages[selectedImageIdx]}
                                    alt={`Gallery Image ${selectedImageIdx}`}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="max-w-full max-h-full object-contain pointer-events-none shadow-2xl"
                                />
                            </AnimatePresence>

                            <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors pointer-events-none">
                                <ChevronLeft size={48} strokeWidth={1} />
                            </button>
                            <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors pointer-events-none">
                                <ChevronRight size={48} strokeWidth={1} />
                            </button>
                        </div>

                        <div className="absolute bottom-6 md:bottom-10 left-0 w-full text-center text-white/30 text-[10px] uppercase tracking-widest font-sans pointer-events-none">
                            {selectedImageIdx + 1} / {chaoticImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
