import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Services() {
    const [activeIdx, setActiveIdx] = useState<number | null>(0);

    const services = [
        {
            title: "Инженерный дизайн-проект",
            price: "8 500 ₽/м²",
            context: "Большинство рисует «красивые картинки», которые строители не могут реализовать.",
            result: "Вы получаете архитектурную концепцию с полным пакетом чертежей по вентиляции, электрике и отоплению. Строительство идет без пауз на «додумку» узлов."
        },
        {
            title: "Строительство и контроль",
            price: "от 50 000 ₽/м²",
            context: "Усталость от контроля рабочих и бесконечных доплат за «скрытые работы».",
            result: "Фиксированная смета в договоре и независимый технадзор. Вы переезжаете в срок, не тратя время на ежедневные визиты на стройку."
        },
        {
            title: "Комплектация и менеджмент",
            price: "10–15% от чека",
            context: "Самостоятельные закупки отнимают энергию и чреваты срывами поставок.",
            result: "Мы управляем логистикой и качеством материалов. Услуга окупается за счет переданных вам скидок и отсутствия простоев бригады."
        }
    ];

    return (
        <section id="services" className="py-20 md:py-32 bg-dark-900 border-b border-light-100/10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8"
                >
                    <h2 className="text-5xl sm:text-6xl md:text-8xl font-heading text-light-100 leading-[0.85] tracking-wide break-words">
                        Результат без<br />
                        <span className="block font-serif italic capitalize tracking-normal text-4xl sm:text-5xl md:text-7xl lg:pl-4 mt-2 md:mt-0 text-light-100/60">Стресса</span>
                    </h2>
                </motion.div>

                <div className="border-t border-light-100/20">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-b border-light-100/20"
                        >
                            <button
                                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                                className="w-full py-6 md:py-12 flex items-center justify-between group text-left"
                            >
                                <div className="flex items-center gap-4 md:gap-8 lg:gap-16 w-full">
                                    <span className="text-light-100/30 font-heading text-xl md:text-2xl lg:text-4xl hidden sm:block min-w-8">
                                        0{idx + 1}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-heading text-light-100 tracking-wide md:group-hover:text-light-100/70 md:group-hover:pl-4 transition-all duration-500 ease-[0.77,0,0.175,1] break-words pr-4 md:pr-0">
                                        {service.title}
                                    </h3>
                                </div>
                                <div className="text-right whitespace-nowrap hidden md:block w-48 font-serif italic text-lg md:text-xl text-light-100/50">
                                    {service.price}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 md:pb-12 pt-2 md:pt-4 flex flex-col md:flex-row gap-8 md:gap-12 md:pl-[4rem] lg:pl-[8rem]">
                                            <div className="md:hidden text-xl font-serif italic text-light-100/70 mb-2 border-b border-light-100/10 pb-4 inline-block">{service.price}</div>
                                            <div className="flex-1 max-w-md">
                                                <h4 className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-light-100/40 mb-3 md:mb-4 font-bold">Контекст</h4>
                                                <p className="text-light-100/70 text-xs md:text-sm leading-relaxed font-medium">{service.context}</p>
                                            </div>
                                            <div className="flex-1 max-w-md">
                                                <h4 className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.2em] text-light-100 mb-3 md:mb-4 font-bold md:border-b border-light-100 md:pb-2 inline-block">Результат</h4>
                                                <p className="text-light-100 text-xs md:text-sm leading-relaxed font-medium">{service.result}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
