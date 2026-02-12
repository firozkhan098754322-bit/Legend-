
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
    return (
        <section id="clients" className="py-10">
            <div className="scroll-animation">
                <h3 className="text-center text-sm font-semibold text-muted uppercase tracking-wider mb-8">
                    Trusted by innovative startups & businesses
                </h3>
                <div className="relative">
                    <div className="flex items-center justify-around">
                        {CLIENTS.map((client, index) => (
                            <img
                                key={index}
                                src={client.logo}
                                alt={client.name}
                                className="h-8 md:h-10 opacity-50 dark:invert-0 invert transition-opacity duration-300 hover:opacity-100"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
