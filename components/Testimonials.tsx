
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const countryFlags: Record<string, string> = {
    in: "🇮🇳",
    us: "🇺🇸",
    gb: "🇬🇧",
    ae: "🇦🇪"
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
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">What My Clients Say</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">Trusted by startups and businesses worldwide.</p>
            </div>
            <div className="relative h-80 md:h-64 scroll-animation">
                {TESTIMONIALS.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
                            <div className="text-5xl text-blue-500 mb-4 leading-none">“</div>
                            <blockquote className="text-secondary italic mb-6 flex-grow">
                                {testimonial.quote}
                            </blockquote>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <span className="text-3xl">{countryFlags[testimonial.country]}</span>
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-primary">{testimonial.author}</p>
                                    <p className="text-sm text-secondary">{testimonial.company}</p>
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
