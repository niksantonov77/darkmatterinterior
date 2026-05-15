import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { useEffect } from 'react';

export default function ProjectPage() {
    const { slug } = useParams<{ slug: string }>();
    const project = portfolioData.find(p => p.slug === slug);

    useEffect(() => {
        if (project) {
            document.title = project.metaTitle;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', project.metaDescription);
            }
        }
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-cream-500 font-sans selection:bg-ink-900 selection:text-white">
            {/* Header / Nav */}
            <nav className="fixed w-full z-50 top-0 left-0 bg-ink-900/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="container mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
                    <Link to="/" className="flex items-center cursor-pointer">
                        <img src="/logo.png" alt="Dark Matter" className="h-10 md:h-14 lg:h-16 w-auto object-contain scale-[1.2] origin-left" />
                    </Link>
                    <Link to="/" className="text-white/70 hover:text-white transition-colors uppercase tracking-widest text-xs">
                        Вернуться на главную
                    </Link>
                </div>
            </nav>

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative h-[70vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
                    <img
                        src={`/${project.mainImage.replace('./', '')}`}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-ink-900/40" />
                    <div className="relative z-10 text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
                                {project.category} • {project.status}
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white font-serif mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
                                {project.shortDescription}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Sections */}
                <section className="py-24 bg-cream-500">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

                            <div className="col-span-1 md:col-span-4 text-ink-900/40 uppercase tracking-widest text-xs md:text-sm font-semibold pt-2">
                                Клиент
                            </div>
                            <div className="col-span-1 md:col-span-8 text-lg md:text-xl text-dark-900 leading-relaxed font-serif">
                                {project.who}
                            </div>

                            <div className="col-span-1 md:col-span-12 h-px bg-ink-900/10"></div>

                            <div className="col-span-1 md:col-span-4 text-ink-900/40 uppercase tracking-widest text-xs md:text-sm font-semibold pt-2">
                                Вызов
                            </div>
                            <div className="col-span-1 md:col-span-8 text-lg md:text-xl text-dark-900 leading-relaxed font-serif whitespace-pre-wrap">
                                {project.challenge}
                            </div>

                        </div>
                    </div>
                </section>

                {/* Gallery — viz/photo pairs */}
                {project.galleryPairs && project.galleryPairs.length > 0 && (
                    <section className="pb-0">
                        <div className="container mx-auto px-6 md:px-12">
                            {project.galleryPairs.map((pair, idx) => {
                                const reversed = idx % 2 === 1;
                                const items = reversed
                                    ? [{ src: pair.photo, label: null }, { src: pair.viz, label: 'Визуализация' }]
                                    : [{ src: pair.viz, label: 'Визуализация' }, { src: pair.photo, label: null }];
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 4 }}
                                    >
                                        {items.map((item, j) => (
                                            <div key={j} style={{ position: 'relative', overflow: 'hidden' }}>
                                                <img
                                                    src={`/${item.src.replace('./', '')}`}
                                                    alt={`${pair.caption}${item.label ? ' — визуализация' : ' — готовый объект'}`}
                                                    style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
                                                />
                                                {item.label && (
                                                    <div style={{
                                                        position: 'absolute', top: 12, left: 12,
                                                        background: 'rgba(0,0,0,0.55)', color: '#fff',
                                                        fontSize: 10, padding: '4px 8px',
                                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                                        fontFamily: 'sans-serif',
                                                    }}>
                                                        Визуализация
                                                    </div>
                                                )}
                                                <div style={{
                                                    position: 'absolute', bottom: 0, left: 0, right: 0,
                                                    padding: '24px 16px 12px',
                                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.4))',
                                                    color: '#fff', fontSize: 12,
                                                    fontFamily: 'sans-serif', letterSpacing: '0.04em',
                                                }}>
                                                    {pair.caption}{item.label ? '' : ' — готово'}
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Gallery — additional photos */}
                <section className="pb-24 pt-4">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`relative overflow-hidden ${!project.galleryPairs && idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}
                                >
                                    <img
                                        src={`/${img.replace('./', '')}`}
                                        alt={`${project.title} — ${idx + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions & Details */}
                <section className="py-24 bg-white border-t border-ink-900/5">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

                            <div className="col-span-1 md:col-span-4 text-ink-900/40 uppercase tracking-widest text-xs md:text-sm font-semibold pt-2">
                                Решение
                            </div>
                            <div className="col-span-1 md:col-span-8 text-lg md:text-xl text-dark-900 leading-relaxed font-serif whitespace-pre-wrap">
                                {project.solution}
                            </div>

                            <div className="col-span-1 md:col-span-12 h-px bg-ink-900/10"></div>

                            <div className="col-span-1 md:col-span-4 text-ink-900/40 uppercase tracking-widest text-xs md:text-sm font-semibold pt-2">
                                Детали
                            </div>
                            <div className="col-span-1 md:col-span-8 text-lg md:text-xl text-dark-900 leading-relaxed font-serif whitespace-pre-wrap">
                                {project.details}
                            </div>

                            {project.result && (
                                <>
                                    <div className="col-span-1 md:col-span-12 h-px bg-ink-900/10"></div>
                                    <div className="col-span-1 md:col-span-4 text-ink-900/40 uppercase tracking-widest text-xs md:text-sm font-semibold pt-2">
                                        Результат
                                    </div>
                                    <div className="col-span-1 md:col-span-8 text-lg md:text-xl text-dark-900 leading-relaxed font-serif whitespace-pre-wrap">
                                        {project.result}
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-24 bg-ink-900 text-cream-500">
                    <div className="container mx-auto px-6 md:px-12 text-center">
                        <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">
                            Готовы обсудить подобный проект?
                        </h2>
                        <a
                            href="https://t.me/DarkMatterInt_bot?start=project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-ink-900 px-10 py-5 rounded-none font-sans uppercase tracking-widest text-sm hover:bg-cream-500 transition-colors"
                        >
                            Написать в Telegram
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
