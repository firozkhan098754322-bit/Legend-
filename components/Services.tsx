
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 scroll-animation">
                    <h2 className="text-4xl md:text-5xl font-black text-white heading-font">Elite Engineering</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">End-to-end digital product development using the world's most robust technologies.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 scroll-animation">
                    {SERVICES.map((service, index) => (
                         <div key={index} className="group perspective-1000">
                            <div className="h-full glass-card p-8 rounded-3xl transition-all duration-500 transform group-hover:rotate-x-2 group-hover:translate-y-[-10px] group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent">
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 heading-font">{service.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
