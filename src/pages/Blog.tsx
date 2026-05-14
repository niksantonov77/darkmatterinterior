import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ArrowLeft } from 'lucide-react';

interface Post {
    id: string;
    title: string;
    date: string;
    cover: string | null;
}

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch from the custom Notion proxy running via PM2 on Timeweb
        fetch('http://64.188.56.73:3000/api/blog')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen bg-ink-900 pt-32 pb-24 text-white">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <Link to="/" className="inline-flex items-center text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs mb-12">
                    <ArrowLeft size={16} className="mr-2" />
                    На главную
                </Link>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-16 font-sans tracking-tighter">Журнал & Статьи</h1>

                {loading ? (
                    <div className="text-white/50 text-xl font-light animate-pulse">Загрузка материалов...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <Link to={`/blog/${post.id}`} key={post.id}>
                                <motion.article 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="w-full aspect-[4/3] overflow-hidden bg-ink-800 mb-6">
                                        {post.cover ? (
                                            <img src={post.cover} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-white/10 text-4xl font-light">DM</div>
                                        )}
                                    </div>
                                    <time className="text-xs text-white/50 uppercase tracking-widest mb-3 block">
                                        {format(new Date(post.date), 'dd MMMM yyyy', { locale: ru })}
                                    </time>
                                    <h2 className="text-xl md:text-2xl font-light leading-tight group-hover:text-white/80 transition-colors">
                                        {post.title}
                                    </h2>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
