import { motion } from 'framer-motion';

export default function Pricing() {

    const prices = [
        {
            title: "Инженерный дизайн-проект",
            price: "8 500 ₽/м²",
            isCalculable: true,
            desc: "Включает: Архитектурную концепцию и полный пакет технических узлов."
        },
        {
            title: "Управление реализацией (Авторский надзор)",
            price: "50 000 ₽/мес.",
            isCalculable: false,
            desc: "Включает: Личный контроль архитектора и гарантию соответствия чертежам."
        },
        {
            title: "Менеджмент комплектации",
            price: "10–15% от бюджета",
            isCalculable: false,
            desc: "Включает: Логистику, проверку качества и предоставление партнерских условий до 35%."
        },
        {
            title: "Строительство интерьера",
            price: "от 50 000 ₽/м²",
            isCalculable: false,
            desc: "Включает: Комплекс работ под ключ с жестким соблюдением СНИП и регламентов студии."
        }
    ];

    return (
        <section id="pricing" className="py-24 md:py-40 bg-ink-900 border-t border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-white/20"></span>
                        Стоимость
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading tracking-tight text-white leading-[1.1] lowercase">
                        Инвестиционная прозрачность.
                    </h3>
                    <p className="text-white/50 mt-6 text-sm md:text-base font-sans max-w-xl leading-relaxed">
                        Мы разделяем услуги, чтобы вы точно понимали структуру своих вложений. Введите площадь вашего объекта для расчета стоимости дизайн-проекта.
                    </p>
                </motion.div>

                <div className="border-t border-white/10 mb-16">
                    {prices.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: 0.1 * idx }}
                            className="py-10 md:py-14 border-b border-white/10 flex flex-col md:flex-row gap-6 md:gap-16 justify-between group"
                        >
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <h4 className="text-xl md:text-3xl font-medium tracking-tight text-white mb-3 group-hover:text-white/80 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-xs md:text-sm text-white/40 leading-relaxed font-sans max-w-sm italic">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="md:w-1/2 flex items-center md:justify-end">
                                <span className="text-2xl md:text-4xl font-medium tracking-tight text-white/90">
                                    {item.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Booking Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="max-w-xl">
                        <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                            Бронирование разработки проекта
                        </h4>
                        <p className="text-sm md:text-base text-white/50 font-sans leading-relaxed">
                            Мы берем в работу ограниченное количество объектов. Внесите фиксированный задаток, чтобы забронировать место в очереди на разработку архитектурно-инженерного дизайн-проекта.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4 min-w-[280px]">
                        <span className="text-3xl md:text-5xl font-medium tracking-tight text-white">
                            35 000 ₽
                        </span>
                        <button className="w-full text-sm uppercase tracking-widest text-ink-900 bg-white px-8 py-4 hover:bg-white/80 transition-colors mt-2 font-medium">
                            Забронировать место
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
