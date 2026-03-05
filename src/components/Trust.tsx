import React from 'react';
import { motion } from 'framer-motion';

export default function Trust() {
    const stats = [
        {
            number: "7",
            label: "лет опыта",
            desc: "Основатели — семейная пара с профильным образованием и практическим стажем в строительстве жилых резиденций."
        },
        {
            number: "80+",
            label: "объектов",
            desc: "Столько жилых пространств мы передали заказчикам с полным соответствием финального результата 3D-визуализации."
        },
        {
            number: "35%",
            label: "преференций",
            desc: "Мы передаем вам все партнерские скидки поставщиков — бюджет оптимизируется без потери в статусе и эстетике."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-dark-900 relative z-10 border-b border-light-100/10">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">

                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                            className="flex flex-col group pr-0 md:pr-4 lg:pr-8"
                        >
                            <div className="text-7xl md:text-7xl lg:text-[9rem] font-heading font-normal text-light-100 leading-none mb-4 md:mb-6">
                                {stat.number}
                            </div>
                            <h3 className="text-[0.65rem] md:text-sm text-light-100 font-bold mb-3 md:mb-4 uppercase tracking-[0.15em] md:tracking-[0.2em] border-t border-light-100/20 pt-4 md:pt-6">
                                {stat.label}
                            </h3>
                            <p className="text-light-100/70 text-xs md:text-sm leading-relaxed font-sans font-medium">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
