
import React, { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../constants';

const roles = ["Mobile Architect.", "3D UI Specialist.", "Startup Partner."];

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
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
             {/* Dynamic Spotlight Effect */}
             <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
             
             <div className="relative z-10 max-w-5xl mx-auto px-4 scroll-animation">
                <div className="mb-6 inline-block">
                    <span className="py-1 px-3 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                        Premium Development Services
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] heading-font" style={{ textShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}>
                    MOHSIN
                </h1>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 heading-font h-[1.5em]">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                       {`${roles[index].substring(0, subIndex)}${blink ? "|" : " "}`}
                   </span>
                </h2>
                
                <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                   I engineer <span className="text-white font-semibold">bespoke digital experiences</span> for ambitious startups. 
                   Combining cutting-edge 3D visuals with robust, scalable architecture.
                </p>
                
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <WhatsAppButton message={WHATSAPP_MESSAGES.general} className="text-lg px-10 py-5 shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-white/10">
                        Start Your Project
                    </WhatsAppButton>
                    <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-lg font-semibold text-white/80 hover:text-white transition-all duration-300 px-10 py-5 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 backdrop-blur-md">
                        View Premium Work
                    </a>
                </div>
            </div>
            
            {/* 3D Floor Effect */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default Hero;
