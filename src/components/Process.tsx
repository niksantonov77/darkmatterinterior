import { motion } from 'framer-motion';

export default function Process() {
    const steps = [
        {
            num: "01",
            title: "Аналитика и Бриф",
            desc: "Глубинное интервью для понимания ваших задач, образа жизни и ожиданий. Анализ исходных данных объекта, архитектурных особенностей и формирование технического задания."
        },
        {
            num: "02",
            title: "Концепция и 3D",
            desc: "Разработка планировочных решений с математической точностью. Создание фотореалистичной 3D-визуализации будущего пространства и согласование визуального языка."
        },
        {
            num: "03",
            title: "Инженерное ядро",
            desc: "Разработка полного пакета рабочей документации, спецификаций и узлов. Бесшовная интеграция систем кондиционирования, вентиляции, акустики и умного дома."
        },
        {
            num: "04",
            title: "Авторский надзор",
            desc: "Регулярный выезд архитектора для контроля подрядчиков. Управление поставками, логистика материалов и защита первоначальной концепции от изменений на стройке."
        },
        {
            num: "05",
            title: "Реализация под ключ",
            desc: "Полное ведение строительно-монтажных работ. Координация узкопрофильных специалистов, закупка и приемка материалов, мебели и оборудования согласно утвержденной смете."
        }
    ];

    return (
        <section id="process" className="py-24 md:py-40 bg-ink-900 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        Процесс
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-[1.1] lowercase">
                        Архитектура как точная наука.
                    </h3>
                    <p className="text-white/50 mt-6 text-sm md:text-base font-sans max-w-xl leading-relaxed">
                        Наш подход исключает случайности. Каждый этап строго регламентирован, чтобы обеспечить предсказуемый результат премиального уровня.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-t border-white/10 pt-16">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex flex-col relative"
                        >
                            <span className="text-5xl md:text-7xl font-sans font-medium text-white/5 mb-6 tracking-tighter">
                                {step.num}
                            </span>
                            <h4 className="text-lg md:text-xl font-medium tracking-tight text-white mb-4">
                                {step.title}
                            </h4>
                            <p className="text-sm text-white/50 leading-relaxed font-sans">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
