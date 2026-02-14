
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const countryFlags: Record<string, string> = {
    in: "🇮🇳",
    us: "🇺🇸",
    gb: "🇬🇧",
    ae: "🇦🇪"
};

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={i < Math.floor(rating) ? "fill-current" : "text-gray-600"}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            ))}
            <span className="text-xs text-secondary ml-1 pt-0.5">{rating}</span>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-20">
            <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">What Founders Say</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">Real results from real startups.</p>
            </div>
            <div className="relative h-80 md:h-72 scroll-animation max-w-4xl mx-auto">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`absolute w-full transition-all duration-700 ease-in-out transform ${
                            index === currentIndex 
                                ? 'opacity-100 translate-x-0 scale-100' 
                                : 'opacity-0 translate-x-10 scale-95 pointer-events-none'
                        }`}
                    >
                        <div className="glass-card p-8 md:p-10 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden">
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-4 right-6 text-9xl text-blue-500/10 font-serif leading-none select-none">”</div>
                            
                            <div className="flex-grow z-10">
                                <div className="mb-4">
                                    <StarRating rating={testimonial.rating} />
                                </div>
                                <blockquote className="text-lg md:text-xl text-primary/90 font-medium leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                            </div>
                            
                            <div className="flex items-center mt-6 pt-6 border-t border-white/5 z-10">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <div className="flex items-center gap-2">
                                        <p className="font-bold text-primary">{testimonial.author}</p>
                                        <span className="text-sm" title="Verified Client">{countryFlags[testimonial.country]}</span>
                                    </div>
                                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                                </div>
                                <div className="ml-auto text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Verified
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
