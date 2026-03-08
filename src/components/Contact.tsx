import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
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
                                    <a href="https://t.me/DarkMatterInt_bot?start=contact" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-white/70 hover:text-white transition-colors flex items-center gap-4 group/icon">
                                        <MessageCircle size={18} className="text-white/40 group-hover/icon:text-white transition-colors" />
                                        <span>Telegram <span className="text-white/30 ml-2">@DarkMatterInt_bot</span></span>
                                    </a>
                                    <a href="https://www.instagram.com/interior.darkmatter" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-white/70 hover:text-white transition-colors flex items-center gap-4 group/icon">
                                        <Instagram size={18} className="text-white/40 group-hover/icon:text-white transition-colors" />
                                        <span>Instagram <span className="text-white/30 ml-2">@interior.darkmatter</span></span>
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
                                <button onClick={() => window.open('https://t.me/DarkMatterInt_bot?start=contact', '_blank')} className="group flex items-center justify-between w-full text-white border border-white/20 px-4 sm:px-8 py-5 bg-white/0 hover:bg-white hover:text-ink-900 transition-all duration-500">
                                    <span className="font-sans text-[10px] md:text-xs uppercase tracking-widest font-semibold text-left">Оставить заявку в Telegram</span>
                                    <span className="text-xl leading-none transform group-hover:translate-x-1 transition-transform ml-4">→</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
