import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ArrowLeft } from 'lucide-react';
import TelegramCTA from '../components/TelegramCTA';

interface PostDetails {
    id: string;
    title: string;
    date: string;
    cover: string | null;
    markdown: string;
}

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!id) return;
        
        fetch(`http://64.188.56.73:3000/api/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-ink-900 pt-32 pb-24 flex items-center justify-center">
                <div className="text-white/50 text-xl font-light animate-pulse">Чтение данных...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-ink-900 pt-32 pb-24 flex items-center justify-center">
                <div className="text-white/50 text-xl font-light">Статья не найдена</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-ink-900 text-white font-sans">
            <div className="pt-32 pb-16">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs mb-12">
                        <ArrowLeft size={16} className="mr-2" />
                        Все статьи
                    </Link>
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <time className="text-xs text-white/50 uppercase tracking-widest mb-4 block">
                            {format(new Date(post.date), 'dd MMMM yyyy', { locale: ru })}
                        </time>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-12 tracking-tighter leading-tight">
                            {post.title}
                        </h1>
                    </motion.div>
                </div>
            </div>

            {post.cover && (
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                    className="w-full h-[40vh] md:h-[60vh] mb-16 md:mb-24"
                >
                    <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>
            )}

            <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-24">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.3 }}
                    className="prose prose-invert prose-lg md:prose-xl prose-p:text-white/70 prose-headings:font-light prose-a:text-white hover:prose-a:text-white/70 max-w-none"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.markdown}
                    </ReactMarkdown>
                </motion.div>
            </div>
            
            <TelegramCTA />
        </div>
    );
}
