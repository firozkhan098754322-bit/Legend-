
import React, { useRef, MouseEvent } from 'react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "How I Scaled a Food Delivery App to 10k Users",
        excerpt: "Scaling React Native apps requires careful state management. Here is how I optimized performance using Redux and Memoization.",
        category: "Case Study",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Flutter vs React Native: What I Choose for Startups",
        excerpt: "An honest comparison of the two giants in 2024. Why I prefer React Native for fast MVP development and Over-the-Air updates.",
        category: "Tech Tips",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1617042375876-a72e36744344?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Optimizing 3D Assets for Mobile Apps",
        excerpt: "Adding 3D elements can kill your frame rate. Learn how to bake textures and reduce polygon counts for 60fps mobile experiences.",
        category: "Development",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
    }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        
        cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };

    return (
        <div 
            ref={cardRef}
            className="group glass-card rounded-2xl overflow-hidden transition-transform duration-300 ease-out border border-white/5"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {post.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-secondary mb-3">
                    <span>📅 {new Date().toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 heading-font group-hover:text-blue-400 transition-colors">
                    {post.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                </p>
                <button className="text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1">
                    Read Article 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
    );
}

const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-20">
             <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">App Development Insights</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
                    Technical deep dives, case studies, and tips for founders building the next unicorn.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animation">
                {blogPosts.map(post => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Blog;
