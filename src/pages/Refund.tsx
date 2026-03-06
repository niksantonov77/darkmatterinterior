import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Refund() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-ink-900 text-white selection:bg-white/20">
            <nav className="fixed w-full z-50 border-b border-white/5 bg-ink-900/80 backdrop-blur-md">
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20">
                    <Link to="/" className="text-xl md:text-2xl font-heading tracking-tight text-white hover:opacity-80 transition-opacity flex items-center gap-2">
                        <img src="/favicon.png" alt="Dark Matter Logo" className="w-6 h-6 object-contain" />
                        Dark Matter
                    </Link>
                    <Link to="/" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                        Вернуться на главную
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-24 md:pt-40 md:pb-40 px-6 md:px-12 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-heading tracking-tight mb-12 lowercase text-white">
                    Правила возврата и отмены
                </h1>

                <div className="space-y-12 text-white/70 font-sans leading-relaxed text-sm md:text-base">

                    <section>
                        <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-wider text-xs">1. Общие положения</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Настоящие правила регулируют порядок возврата денежных средств за услуги (включая бронирование разработки дизайн-проекта), оплаченные банковской картой на сайте darkmatterint.ru.</li>
                            <li>Услуги студии предоставляются по договору на разработку дизайн-проекта. Бронирование является задатком (или авансом) в счет будущих этапов работ.</li>
                            <li>Физическая доставка товаров не осуществляется, так как результатом услуг является документация в электронном и/или печатном виде.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-wider text-xs">2. Порядок отмены услуг</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Заказчик вправе отказаться от исполнения договора (отменить заказ) в любое время до сдачи ему результата работы, уплатив Исполнителю часть установленной цены пропорционально части работы, выполненной до получения извещения об отказе.</li>
                            <li>Для отмены заказа и запроса на возврат средств необходимо направить письменное заявление на электронную почту службы поддержки: <a href="mailto:interior.darkmatter@gmail.com" className="text-white hover:underline">interior.darkmatter@gmail.com</a>.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-wider text-xs">3. Условия возврата средств</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>При оплате картами возврат наличными денежными средствами не допускается. Порядок возврата регулируется правилами международных платежных систем.</li>
                            <li>Возврат переведенных средств, производится на Ваш банковский счет в течение 5-30 рабочих дней (срок зависит от Банка, который выдал Вашу банковскую карту).</li>
                            <li>Возврат денежных средств осуществляется только на ту карту, с которой была произведена изначальная оплата.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-white mb-4 uppercase tracking-wider text-xs">4. Контактная информация</h2>
                        <p className="mb-2">По всем вопросам, связанным с возвратом или отменой услуг, вы можете обращаться:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Телефон службы поддержки (в разработке).</li>
                            <li>Электронная почта: <a href="mailto:interior.darkmatter@gmail.com" className="text-white hover:underline">interior.darkmatter@gmail.com</a></li>
                        </ul>
                    </section>

                </div>
            </main>
        </div>
    );
}
