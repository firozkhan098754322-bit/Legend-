
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20">
            <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">My Services</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">I provide end-to-end solutions to bring your digital products to life.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-animation">
                {SERVICES.map((service, index) => (
                     <div key={index} className="gradient-border group">
                        <div className="glass-card p-6 rounded-2xl h-full text-center">
                            <div className="inline-block p-4 bg-blue-500/10 rounded-full mb-4 text-blue-400">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                            <p className="text-secondary">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
