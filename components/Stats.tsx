
import React, { useState, useEffect, useRef } from 'react';

interface StatProps {
    value: number;
    label: string;
    suffix?: string;
}

const StatCounter: React.FC<StatProps> = ({ value, label, suffix = "" }) => {
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
        <div className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                {count}{suffix}+
            </p>
            <p className="text-sm md:text-base text-secondary mt-2">{label}</p>
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
        { value: 2, label: "Years Experience" },
        { value: 20, label: "Apps Published" },
        { value: 15, label: "Happy Founders" },
        { value: 100, label: "App Downloads", suffix: "k" },
    ];

    return (
        <section id="stats" className="py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-card p-8 rounded-2xl scroll-animation">
                {stats.map((stat, index) => (
                    <StatCounter key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
                ))}
            </div>
        </section>
    );
};

export default Stats;
