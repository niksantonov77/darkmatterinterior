import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
    const reviews = [
        {
            name: "Виктор",
            location: "ЖК «Садовые Кварталы»",
            text: "«Dark Matter — это про порядок. Инженерный проект был готов вовремя, а на этапе ремонта я получал отчеты каждый понедельник. Смета не выросла ни на рубль, хотя объем работ был колоссальным. Страховка на год в подарок стала очень кстати»."
        },
        {
            name: "Мария",
            location: "Крестовский остров",
            text: "«Редкий случай, когда дизайн действительно про жизнь, а не про амбиции студии. Нам помогли оптимизировать затраты за счет партнерских условий, сохранив эксклюзивность материалов. Результат точь-в-точь как на картинках»."
        },
        {
            name: "Дмитрий",
            location: "КП «Река-Река»",
            text: "«Сдал ключи и уехал. Весь контроль, закупки и общение со строителями студия взяла на себя. Финансовая прозрачность и независимый технадзор сняли все вопросы. Профессионально, четко и без лишних звонков»."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-dark-900 border-b border-light-100/10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="mb-12 md:mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading text-light-100 leading-[0.85] tracking-wide mb-4 md:mb-6">
                        Опыт<br />
                        <span className="font-serif italic capitalize tracking-normal text-3xl sm:text-4xl md:text-6xl text-light-100/60 ml-4 md:ml-12">Жильцов</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                            className="group flex flex-col h-full border-t border-light-100/20 pt-6 md:pt-8"
                        >
                            <div className="font-serif text-4xl md:text-5xl text-light-100/20 leading-none mb-4 md:mb-6 group-hover:text-light-100/40 transition-colors duration-500">
                                “
                            </div>

                            <p className="text-light-100/80 font-sans font-medium text-xs md:text-sm leading-relaxed mb-8 md:mb-12">
                                {review.text}
                            </p>

                            <div className="mt-auto">
                                <p className="text-light-100 font-heading text-xl md:text-2xl tracking-widest uppercase mb-1">{review.name}</p>
                                <p className="text-light-100/50 font-sans font-bold text-[0.55rem] md:text-[0.65rem] tracking-[0.15em] md:tracking-[0.2em] uppercase">{review.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
