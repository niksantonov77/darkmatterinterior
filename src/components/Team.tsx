import { motion } from 'framer-motion';

export default function Team() {
    return (
        <section id="team" className="py-20 md:py-32 bg-dark-900 overflow-hidden border-b border-light-100/10">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-5xl sm:text-6xl md:text-8xl font-heading text-light-100 leading-[0.85] tracking-wide mb-4 md:mb-6 break-words">
                                Экспертиза в<br />
                                <span className="font-serif italic capitalize tracking-normal text-4xl sm:text-5xl md:text-7xl lg:ml-12 text-light-100/60 block mt-2">Действии</span>
                            </h2>
                            <div className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-light-100/40 pb-3 md:pb-4 border-b border-light-100/10 inline-block md:block mt-4">
                                Собственники студии
                            </div>
                        </div>

                        <div className="space-y-6 md:space-y-8 text-light-100/80 font-sans text-xs md:text-sm leading-relaxed font-medium max-w-md">
                            <div>
                                <span className="font-bold text-light-100 mb-1 block uppercase tracking-[0.15em] text-[0.65rem]">Основатель, ведущий архитектор</span>
                                <p>Обладает высшим профильным образованием. Лично курирует эргономику каждого объекта, гарантируя, что ни один сантиметр площади не будет потерян из-за неверного зонирования.</p>
                            </div>

                            <div>
                                <span className="font-bold text-light-100 mb-1 block uppercase tracking-[0.15em] text-[0.65rem]">Основатель, руководитель строительства</span>
                                <p>На основе 7-летнего опыта интегрирует сложные инженерные системы (умный дом, приточная вентиляция) так, чтобы они работали бесшумно и были скрыты от глаз.</p>
                            </div>

                            <div className="pt-4 border-t border-light-100/10">
                                <span className="font-bold text-light-100 mb-1 block uppercase tracking-[0.15em] text-[0.65rem]">Команда Dark Matter</span>
                                <p className="text-light-100/60">Мы внедрили систему независимого технадзора и еженедельной фотоотчетности. Это позволяет владельцам недвижимости в Москве и СПб контролировать процесс, находясь в любой точке мира.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Container with Parallax Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                        className="lg:w-1/2 w-full h-[60vh] md:h-[80vh] lg:aspect-[3/4] overflow-hidden relative mt-8 lg:mt-0"
                    >
                        {/* Founders Photo Placeholder */}
                        <img
                            src="/founders.jpg"
                            alt="Основатели Dark Matter"
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105 mix-blend-screen"
                            onError={(e) => {
                                // If user hasn't added the photo yet, show a beautiful fallback
                                e.currentTarget.style.display = 'none';
                                const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextEl) nextEl.style.display = 'flex';
                            }}
                        />
                        {/* Fallback pattern if image is missing */}
                        <div className="hidden inset-0 bg-dark-800 w-full h-full flex-col items-center justify-center p-8 text-center border border-light-100/10">
                            <span className="text-light-100/30 font-heading text-xl md:text-2xl tracking-widest mb-4">ФОТО ОСНОВАТЕЛЕЙ</span>
                            <span className="text-light-100/20 text-[10px] md:text-xs font-sans max-w-xs">
                                Пожалуйста, сохраните ваше фото как `public/founders.jpg` в папке проекта.
                            </span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
