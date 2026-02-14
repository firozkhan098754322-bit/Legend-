
import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
    value: number;
    label: string;
    suffix?: string;
    isGold?: boolean;
}

const StatCounter: React.FC<StatProps> = ({ value, label, suffix = "", isGold = false }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = value;
            if (start === end) return;

            const duration = 2000;
            let step = Math.max(1, Math.floor(end / (duration / 16)));
            
            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [value, isVisible]);

    return (
        <div className="text-center group" ref={ref}>
            <p className={`text-5xl md:text-6xl font-black mb-2 ${isGold ? 'gold-shine' : 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'}`}>
                {count}{suffix}+
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{label}</p>
        </div>
    );
}

const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.1 }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);

    return isIntersecting;
};

const Stats: React.FC = () => {
    const stats = [
        { value: 2, label: "Years Experience", isGold: true },
        { value: 20, label: "Projects Shipped" },
        { value: 15, label: "Startups Scaled" },
        { value: 100, label: "User Downloads", suffix: "k" },
    ];

    return (
        <section id="stats" className="py-20 relative">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 scroll-animation">
                {stats.map((stat, index) => (
                    <StatCounter key={index} value={stat.value} label={stat.label} suffix={stat.suffix} isGold={stat.isGold} />
                ))}
            </div>
        </section>
    );
};

export default Stats;
