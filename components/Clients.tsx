
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
    return (
        <section id="clients" className="py-10 border-b border-white/5">
            <div className="scroll-animation">
                <h3 className="text-center text-sm font-semibold text-muted uppercase tracking-widest mb-10">
                    Trusted by Innovative Startups
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto px-4">
                    {CLIENTS.map((client, index) => (
                        <div key={index} className="group flex items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-default">
                             {/* Abstract Geometric Icon for each client to look premium/authentic */}
                             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-xs group-hover:from-blue-600 group-hover:to-blue-500 transition-colors shadow-lg">
                                 {client.name.charAt(0)}
                             </div>
                             <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-bold text-primary heading-font tracking-tight">
                                    {client.name}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider text-secondary hidden group-hover:block transition-all">
                                    {client.type}
                                </span>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
