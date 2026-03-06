import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Instagram, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!consent) return;
        setIsSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 md:py-40 bg-ink-900 border-t border-white/5 relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="absolute -right-[20%] -top-[20%] w-[70vw] h-[70vw] rounded-full border border-white" />
                <div className="absolute -right-[10%] -top-[10%] w-[50vw] h-[50vw] rounded-full border border-white" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Контакты
                        </h2>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1] lowercase mb-8">
                            Персональный формат встречи.
                        </h3>
                        <p className="text-white/50 text-sm md:text-base leading-relaxed font-sans max-w-md pt-6 border-t border-white/10">
                            Мы приглашаем вас обсудить стратегию создания вашего интерьера. Встреча с основателями студии на вашем объекте позволит сразу оценить инженерные перспективы и разработать дорожную карту проекта.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:w-1/2 flex flex-col justify-center"
                    >
                        <div className="bg-ink-800/30 border border-white/10 p-10 md:p-16 w-full backdrop-blur-sm relative overflow-hidden group">
                            {/* Decorative gradient flare */}
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-1000 pointer-events-none" />

                            <div className="mb-8 relative z-10">
                                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Связь с экспертом</p>
                                <a href="tel:+79119117532" className="flex items-center gap-4 text-2xl md:text-3xl lg:text-4xl text-white hover:text-white/60 transition-colors font-medium tracking-tight mb-8 group/tel">
                                    <Phone size={28} className="text-white/40 group-hover/tel:text-white/60 transition-colors" />
                                    <span>+7 (911) 911-75-32</span>
                                </a>
                                <div className="flex flex-col gap-4">
                                    <a href="https://t.me/darkmatterstudio" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-white/70 hover:text-white transition-colors flex items-center gap-4 group/icon">
                                        <MessageCircle size={18} className="text-white/40 group-hover/icon:text-white transition-colors" />
                                        <span>Telegram <span className="text-white/30 ml-2">@darkmatterstudio</span></span>
                                    </a>
                                    <a href="https://instagram.com/darkmatterstudio" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-white/70 hover:text-white transition-colors flex items-center gap-4 group/icon">
                                        <Instagram size={18} className="text-white/40 group-hover/icon:text-white transition-colors" />
                                        <span>Instagram <span className="text-white/30 ml-2">@darkmatterstudio</span></span>
                                    </a>
                                </div>
                            </div>

                            <div className="mb-10 pt-8 border-t border-white/10 flex flex-col gap-4 relative z-10">
                                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Реквизиты</p>
                                <div className="text-white/50 text-[10px] sm:text-xs font-sans grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                    <div className="flex flex-col"><span className="text-white/30 truncate">ИП</span>АНТОНОВ НИКИТА СЕРГЕЕВИЧ</div>
                                    <div className="flex flex-col"><span className="text-white/30 truncate">ИНН</span>780634510121</div>
                                    <div className="flex flex-col"><span className="text-white/30 truncate">ОГРНИП</span>320784700080501</div>
                                    <div className="flex flex-col"><span className="text-white/30 truncate">Р/С</span>40802810000003097356</div>
                                    <div className="flex flex-col"><span className="text-white/30 truncate">Банк</span>АО «ТБанк»</div>
                                    <div className="flex flex-col"><span className="text-white/30 truncate">БИК</span>044525974</div>
                                    <div className="flex flex-col sm:col-span-2"><span className="text-white/30 truncate">К/С</span>30101810145250000974</div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-white/10 relative z-10">
                                <button onClick={() => setIsModalOpen(true)} className="group flex items-center justify-between w-full text-white border border-white/20 px-4 sm:px-8 py-5 bg-white/0 hover:bg-white hover:text-ink-900 transition-all duration-500">
                                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest font-semibold text-left">Оставить заявку</span>
                                    <span className="text-xl leading-none transform group-hover:translate-x-1 transition-transform ml-4">→</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Lead Capture Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-ink-900/90 backdrop-blur-xl"
                            onClick={() => setIsModalOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full max-w-2xl bg-ink-800 border border-white/10 p-6 sm:p-10 md:p-16 shadow-2xl z-10 mt-auto mb-auto"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors p-2"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
                                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4">
                                        <Send size={24} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-2">Заявка принята.</h3>
                                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                                        Мы инженерно подойдем к анализу вашего объекта и свяжемся с вами в ближайшее время.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-10 text-center md:text-left">
                                        <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-4">Заявка на проект</h3>
                                        <p className="text-white/50 text-xs md:text-sm font-sans">
                                            Оставьте вводные данные о вашем объекте для подготовки к предметному разговору с арт-директором.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 font-sans">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                            {/* Object Details */}
                                            <div className="space-y-6 md:space-y-8">
                                                <div className="relative group">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full bg-transparent border-b border-white/20 pb-2 md:pb-3 text-sm md:text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                                        placeholder="ЖК / Адрес объекта"
                                                    />
                                                    <label className="absolute left-0 -top-3.5 text-[10px] md:text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                                                        ЖК / Адрес объекта
                                                    </label>
                                                </div>

                                                <div className="relative group">
                                                    <input
                                                        type="number"
                                                        required
                                                        min="1"
                                                        className="w-full bg-transparent border-b border-white/20 pb-2 md:pb-3 text-sm md:text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                                        placeholder="Площадь по полу (м²)"
                                                    />
                                                    <label className="absolute left-0 -top-3.5 text-[10px] md:text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                                                        Площадь по полу (м²)
                                                    </label>
                                                </div>

                                                <div className="relative group">
                                                    <select required className="w-full bg-ink-800 border-b border-white/20 pb-2 md:pb-3 text-sm md:text-base text-white/70 focus:text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                                                        <option value="" disabled selected hidden>Тип отделки</option>
                                                        <option value="Черновая">Черновая</option>
                                                        <option value="Предчистовая">Предчистовая (White box)</option>
                                                        <option value="Вторичка">Вторичный рынок (требуется демонтаж)</option>
                                                    </select>
                                                    <div className="absolute right-0 top-1 text-white/50 pointer-events-none">▼</div>
                                                </div>
                                            </div>

                                            {/* Contact Details */}
                                            <div className="space-y-6 md:space-y-8">
                                                <div className="relative group">
                                                    <input
                                                        type="tel"
                                                        required
                                                        className="w-full bg-transparent border-b border-white/20 pb-2 md:pb-3 text-sm md:text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                                        placeholder="Номер телефона"
                                                    />
                                                    <label className="absolute left-0 -top-3.5 text-[10px] md:text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                                                        Номер телефона
                                                    </label>
                                                </div>

                                                <div className="relative group">
                                                    <input
                                                        type="text"
                                                        required
                                                        className="w-full bg-transparent border-b border-white/20 pb-2 md:pb-3 text-sm md:text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                                        placeholder="Никнейм в Telegram (@username)"
                                                    />
                                                    <label className="absolute left-0 -top-3.5 text-[10px] md:text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                                                        Никнейм в Telegram
                                                    </label>
                                                </div>

                                                <div className="relative group">
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full bg-transparent border-b border-white/20 pb-2 md:pb-3 text-sm md:text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                                                        placeholder="E-mail адрес"
                                                    />
                                                    <label className="absolute left-0 -top-3.5 text-[10px] md:text-xs text-white/40 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                                                        E-mail адрес
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10 mt-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                            <div className="flex items-start md:items-center gap-3 w-full md:w-2/3">
                                                <div className="mt-1 md:mt-0 relative flex items-center justify-center flex-shrink-0">
                                                    <input
                                                        type="checkbox"
                                                        id="consent"
                                                        checked={consent}
                                                        onChange={(e) => setConsent(e.target.checked)}
                                                        className="peer appearance-none w-4 h-4 md:w-5 md:h-5 border border-white/30 rounded-sm bg-transparent checked:bg-white checked:border-white cursor-pointer transition-colors"
                                                    />
                                                    <svg className="absolute w-3 h-3 text-ink-900 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <label htmlFor="consent" className="text-[10px] md:text-xs text-white/50 cursor-pointer">
                                                    Я согласен(на) на обработку персональных данных в соответствии с <Link to="/privacy" target="_blank" className="text-white/80 hover:text-white underline underline-offset-2">Политикой конфиденциальности</Link>
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={!consent}
                                                className={`group flex items-center justify-center px-8 py-4 w-full md:w-auto transition-all duration-300 ${consent ? 'bg-white text-ink-900 hover:bg-white/90' : 'bg-white/10 text-white/30 cursor-not-allowed border border-white/10'}`}
                                            >
                                                <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold">Отправить</span>
                                                {consent && <span className="transform group-hover:translate-x-1 transition-transform ml-3">→</span>}
                                            </button>
                                        </div>

                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
