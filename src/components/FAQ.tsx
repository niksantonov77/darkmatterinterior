import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "В каком стиле вы работаете?",
        answer: "Мы специализируемся на премиальном минимализме с элементами современной итальянской виллы. Наш фокус — архитектурная геометрия, натуральные материалы (травертин, дуб, шпон) и скрытая инженерия."
    },
    {
        question: "Что входит в стоимость дизайн-проекта?",
        answer: "Проект включает в себя 4 этапа: глубинную аналитику, разработку концепции и реалистичной 3D-визуализации, создание полного пакета рабочей документации и разработку инженерного ядра (Умный дом, климат)."
    },
    {
        question: "Сколько времени занимает реализация проекта?",
        answer: "В среднем, от заливки первой стяжки до расстановки декора проходит от 6 до 18 месяцев, в зависимости от площади объекта и сложности применяемых инженерных систем."
    },
    {
        question: "Вы работаете только в Санкт-Петербурге?",
        answer: "Наш центральный офис и основные проекты реализации под ключ находятся в Санкт-Петербурге, однако мы также берем объекты премиум-класса в Москве (полный цикл) и за рубежом (этап архитектурного проектирования)."
    },
    {
        question: "Что означает понятие «Инженерное ядро»?",
        answer: "Это наша философия проектирования. Мы бесшовно интегрируем сложные системы (канальное кондиционирование, приточно-вытяжная вентиляция, акустика, Умный дом) в архитектуру пространства так, чтобы на потолке и стенах не было лишних решеток и технических люков."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 md:py-40 bg-ink-900 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
                
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="lg:w-1/3"
                >
                    <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        FAQ
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-[1.1] lowercase mb-6">
                        частые <br />вопросы.
                    </h3>
                    <p className="text-white/50 text-sm md:text-base font-sans leading-relaxed">
                        Ответы на ключевые вопросы о процессах, сроках и стандартах реализации проектов в Dark Matter.
                    </p>
                </motion.div>

                <div className="lg:w-2/3 flex flex-col divide-y divide-white/10 border-y border-white/10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6 md:py-8">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg md:text-xl font-medium tracking-tight pr-8 transition-colors ${openIndex === index ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`min-w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${openIndex === index ? 'border-white/40 bg-white/10' : 'border-white/10 group-hover:border-white/30'}`}>
                                    {openIndex === index ? (
                                        <Minus size={14} className="text-white" />
                                    ) : (
                                        <Plus size={14} className="text-white/60 group-hover:text-white" />
                                    )}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-6 pb-2 text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
