
import React, { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../constants';

const roles = ["Mobile App Expert.", "React Native Dev.", "iOS & Android."];

const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === roles[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, roles]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);


    return (
        <section id="hero" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-20 text-center border-none">
             <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_40%)]"></div>
             <div className="scroll-animation">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-inherit leading-tight heading-font">
                    MOHSIN
                </h1>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 mt-2 heading-font">
                   <span className="min-h-[50px] md:min-h-[70px] inline-block">{`${roles[index].substring(0, subIndex)}${blink ? "_" : " "}`}</span>
                </h2>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-secondary">
                   I build high-performance Mobile Apps for Startups. Turning complex ideas into intuitive, 5-star rated iOS and Android experiences.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <WhatsAppButton message={WHATSAPP_MESSAGES.general} className="text-lg px-8 py-4">
                        Build My App
                    </WhatsAppButton>
                    <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-semibold text-primary hover:text-white transition-all duration-300 group glass-card px-8 py-4 rounded-full">
                        View Recent Apps
                    </a>
                </div>
                 <div className="mt-6">
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-accent-primary hover:underline">
                        Get a Free App Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
