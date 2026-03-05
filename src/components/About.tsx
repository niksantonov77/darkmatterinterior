import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-40 bg-ink-900 border-t border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 flex flex-col justify-between"
                    >
                        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            О Нас
                        </h2>

                        <div className="grid grid-cols-2 gap-8 lg:mt-auto pt-12 border-t border-white/10">
                            <div>
                                <p className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">7</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/40">лет практики</p>
                            </div>
                            <div>
                                <p className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">80+</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/40">резиденций</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-2/3"
                    >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight lowercase text-white mb-12 leading-[1.1] max-w-3xl">
                            Инженерная экспертиза с архитектурным видением.
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-white/60 text-sm md:text-base leading-relaxed max-w-4xl">
                            <p className="flex-1">
                                Dark Matter — это семейное бюро, основанное парой экспертов с высшим профильным образованием. За 7 лет практики мы сформировали собственный стандарт реализации, превратив более 80 объектов в завершенные жилые резиденции.
                            </p>
                            <p className="flex-1">
                                Мы убеждены: премиальный интерьер начинается с точного инженерного расчета. В Dark Matter архитектурная мысль не спорит с техническими узлами, а строится на их основе. Мы создаем пространство, которое не требует вашего присутствия на стройке, но полностью отражает ваш статус.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
