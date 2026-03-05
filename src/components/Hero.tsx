import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-ink-900">

            {/* Subdued Background gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

            {/* Animated Logo on the background, positioned to the right of the headline */}
            <motion.div
                className="absolute inset-y-0 right-0 w-[50vw] md:w-[40vw] flex items-center justify-end md:justify-center pr-6 md:pr-0 pointer-events-none z-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 2, delay: 0.5 }}
                style={{ perspective: 1000 }}
            >
                <motion.img
                    src="/logo.png"
                    alt=""
                    className="w-[100%] max-w-[600px] object-contain invert opacity-50"
                    animate={{ rotateY: 360 }}
                    transition={{
                        rotateY: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                />
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="max-w-[90rem]">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] md:leading-[1] font-light tracking-tight text-white/90 break-words mb-8 md:mb-16"
                    >
                        Архитектура<br />
                        личного пространства.<br />
                        Вне времени<br />
                        и сомнений.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-16 lg:w-3/4 ml-auto"
                    >
                        <p className="text-sm md:text-base lg:text-lg text-white/50 max-w-xl font-sans leading-relaxed tracking-wide">
                            Студия полного цикла: создаем дизайн интерьера, строим и комплектуем объекты в Москве и Санкт-Петербурге. Решаем все вопросы реализации, сохраняя ваше время, энергию и привычный ритм жизни.
                        </p>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView()}
                            className="group flex items-center gap-4 text-white border border-white/20 px-8 py-4 hover:bg-white hover:text-ink-900 transition-all duration-500 ease-[0.77,0,0.175,1] w-fit whitespace-nowrap"
                        >
                            <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest font-semibold">Назначить аудит объекта</span>
                            <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
