import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-40 bg-ink-900 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Текстовая Часть */}
                    <div className="lg:w-1/2 flex flex-col justify-between z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm uppercase tracking-widest text-white/40 mb-12 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-white/20"></span>
                                О Нас
                            </h2>

                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight lowercase text-white mb-10 leading-[1.1] max-w-2xl">
                                Инженерная экспертиза с архитектурным видением.
                            </h3>

                            <div className="flex flex-col gap-6 text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
                                <p>
                                    Dark Matter — это семейное бюро, основанное парой экспертов с высшим профильным образованием. За 7 лет практики мы сформировали собственный стандарт реализации, превратив более 80 объектов в завершенные жилые пространства.
                                </p>
                                <p>
                                    Мы убеждены: премиальный интерьер начинается с точного инженерного расчета. В Dark Matter архитектурная мысль не спорит с техническими узлами, а строится на их основе. Мы создаем пространство, которое не требует вашего присутствия на стройке, но полностью отражает ваш статус.
                                </p>
                                <div className="mt-8 border-l border-white/20 pl-6 py-2">
                                    <h4 className="text-white text-lg font-serif mb-4">Наш подход</h4>
                                    <p className="mb-4">
                                        Мы не делим проекты на «дорогие» и «бюджетные». Для нас каждый проект — это задача, в которой нужно найти лучшее решение в заданных рамках.
                                    </p>
                                    <p className="mb-4">
                                        Раковина из натурального речного камня в одном проекте стоила меньше стандарта — но стала визитной карточкой. Зелёная стена с подсветкой в другом — простая покраска, создающая wow-эффект. Именно это мы приносим: умение видеть возможности там, где другие видят только бюджет.
                                    </p>
                                    <p>
                                        Раньше мы искали материалы, имитирующие премиум. Теперь мы ставим настоящий травертин и никелевую сантехнику. Но глаз, тренированный правильными пропорциями и светом на 80+ реализованных проектах, остается тем же.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid grid-cols-2 gap-x-8 gap-y-12 mt-16 pt-12 border-t border-white/10 max-w-xl"
                        >
                            <div>
                                <p className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2 font-serif">80+</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 leading-relaxed">реализованных пространств в ЖК Петербурга</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2 font-serif">6–18</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 leading-relaxed">месяцев — от старта до въезда</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2 font-serif">100%</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 leading-relaxed">точность реализации по проекту</p>
                            </div>
                            <div>
                                <p className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2 font-serif">0</p>
                                <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 leading-relaxed">скрытых платежей — полная отчётность</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Фотографии */}
                    <div className="lg:w-1/2 relative min-h-[600px] md:min-h-[800px] w-full mt-12 lg:mt-0 flex flex-col md:block">
                        <motion.img
                            src="/about/1.jpg"
                            alt="Основатель Dark Matter"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-[65%] object-cover grayscale hover:grayscale-0 transition-all duration-700 md:absolute md:top-0 md:right-0 shadow-2xl mb-8 md:mb-0"
                        />
                        <motion.img
                            src="/about/2.jpg"
                            alt="Основатель Dark Matter"
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full md:w-[55%] object-cover grayscale hover:grayscale-0 transition-all duration-700 md:absolute md:bottom-20 md:left-0 shadow-2xl z-20 border-4 border-ink-900"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
