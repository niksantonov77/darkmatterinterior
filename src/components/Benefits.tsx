import { motion } from 'framer-motion';

export default function Benefits() {
    const benefits = [
        {
            title: "Инженерный фундамент как стандарт.",
            desc: "Проектирование систем климата, электроснабжения и водоотведения интегрировано в архитектурное решение на старте — вам не нужно привлекать сторонних специалистов."
        },
        {
            title: "Доступ к закрытым партнерским условиям.",
            desc: "Вы получаете привилегию прямого взаимодействия с мировыми фабриками. Мы транслируем вам преференции до 35%, обеспечивая эффективное использование вашего капитала."
        },
        {
            title: "Архитектура безопасности.",
            desc: "Мы обеспечиваем защиту вашего имущества: по завершении работ объект получает страховой сертификат на 12 месяцев за счет студии."
        },
        {
            title: "Автономия владельца.",
            desc: "Личный эксперт и независимый технадзор снимают с вас необходимость общения с подрядчиками. Вы контролируете процесс через еженедельные цифровые отчеты."
        },
        {
            title: "Юридическая фиксация обязательств.",
            desc: "Бюджет и сроки реализации закреплены в договоре. Любые технологические риски — это наша ответственность, а не ваш расход."
        }
    ];

    return (
        <section id="benefits" className="py-24 md:py-40 bg-ink-900 border-t border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4 sticky top-32">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Преимущества
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 lg:mb-0 leading-[1.1] lowercase max-w-sm sticky top-48">
                            Методология управления результатом.
                        </h3>
                    </motion.div>

                    <div className="lg:w-2/3 border-t border-white/10">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: 0.1 * idx }}
                                className="py-10 md:py-16 border-b border-white/10 flex flex-col md:flex-row gap-6 md:gap-16 group"
                            >
                                <div className="text-white/20 font-medium text-lg md:text-2xl transition-colors group-hover:text-white/50 w-8 flex-shrink-0">
                                    0{idx + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-4 leading-tight group-hover:text-white/80 transition-colors">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-sm md:text-base text-white/50 leading-relaxed font-sans max-w-2xl">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
