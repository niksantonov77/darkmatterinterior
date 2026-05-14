import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData, ProjectCategory } from '../data/portfolio';

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'Все'>('Все');

    const categories: (ProjectCategory | 'Все')[] = ['Все', 'Для семей', 'Для предпринимателей', 'Для инвесторов', 'Для молодых пар', 'Премиум'];

    const anchoredProject = portfolioData[0]; // The 207m2 premium project
    const gridProjects = portfolioData.slice(1); // The rest

    const filteredProjects = activeFilter === 'Все'
        ? gridProjects
        : gridProjects.filter(p => p.category === activeFilter);

    return (
        <section id="portfolio" className="py-24 md:py-40 bg-ink-900 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">

                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-8 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Портфолио
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] lowercase max-w-2xl">
                            Реализованные проекты.
                        </h3>
                    </div>
                </div>

                {/* Anchored Premium Project */}
                <div className="mb-24">
                    <Link to={`/portfolio/${anchoredProject.slug}`} className="group block relative overflow-hidden bg-ink-800/50 border border-white/5 rounded-sm">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-2/3 relative aspect-video lg:aspect-auto">
                                <img
                                    src={`/${anchoredProject.mainImage.replace('./', '')}`}
                                    alt={anchoredProject.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-ink-900/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-ink-900/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-4 py-2 border border-white/20 font-sans">
                                        В работе • Якорный проект
                                    </span>
                                </div>
                            </div>
                            <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-ink-900 z-10 relative">
                                <h4 className="text-2xl lg:text-3xl font-serif text-white mb-4 group-hover:text-cream-500 transition-colors">
                                    {anchoredProject.title}
                                </h4>
                                <p className="text-white/60 font-light mb-8 font-serif leading-relaxed line-clamp-4">
                                    {anchoredProject.shortDescription}. {anchoredProject.who}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center text-xs uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                        Смотреть проект
                                        <svg className="w-4 h-4 ml-2 rtl:rotate-180 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* For Whom We Work */}
                <div className="mb-12 border-t border-white/5 pt-12">
                    <h4 className="text-white/40 text-xs tracking-widest uppercase mb-8">Для кого мы работаем</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <p className="text-white font-serif mb-2 text-lg">Для семей</p>
                            <p className="text-white/50 text-sm font-light leading-relaxed">Пространства, где комфортно всем: от кабинета для работы до детской для творчества.</p>
                        </div>
                        <div>
                            <p className="text-white font-serif mb-2 text-lg">Для предпринимателей</p>
                            <p className="text-white/50 text-sm font-light leading-relaxed">Интерьеры, которые работают как продолжение личного бренда.</p>
                        </div>
                        <div>
                            <p className="text-white font-serif mb-2 text-lg">Для молодых пар</p>
                            <p className="text-white/50 text-sm font-light leading-relaxed">Первое жильё, где каждая деталь продумана.</p>
                        </div>
                        <div>
                            <p className="text-white font-serif mb-2 text-lg">Для инвесторов</p>
                            <p className="text-white/50 text-sm font-light leading-relaxed">Квартиры, которые сдаются в первый день.</p>
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <p className="text-white font-serif mb-2 text-lg">Премиум-проекты</p>
                            <p className="text-white/50 text-sm font-light leading-relaxed">Пространства без компромиссов.</p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-12 border-t border-white/5 pt-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-5 py-2 text-xs uppercase tracking-widest rounded-full border transition-all duration-300 font-sans ${activeFilter === cat
                                ? 'bg-white text-ink-900 border-white'
                                : 'bg-transparent text-white/50 border-white/10 hover:border-white/40 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                <Link to={`/portfolio/${project.slug}`} className="group block">
                                    <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-ink-800">
                                        <img
                                            src={`/${project.mainImage.replace('./', '')}`}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-ink-900/30 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h4 className="text-xl font-serif text-white mb-2 group-hover:text-cream-500 transition-colors">
                                                {project.title}
                                            </h4>
                                            <p className="text-white/50 text-sm font-light leading-relaxed mb-4">
                                                {project.shortDescription}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-white/30 group-hover:text-white/70 transition-colors border-b border-transparent group-hover:border-white/30 pb-1">
                                        Подробнее
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
