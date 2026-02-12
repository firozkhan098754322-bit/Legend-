
import React from 'react';
import { PRICING_PLANS } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const TrustStat = ({ value, label }: { value: string, label: string }) => (
    <div className="text-center">
        <p className="text-3xl font-bold text-primary">{value}</p>
        <p className="text-sm text-secondary">{label}</p>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20">
            <div className="text-center mb-12 scroll-animation">
                <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">Affordable Premium Development</h2>
                <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">Transparent Pricing for Indian Startups – No Hidden Charges. Choose a plan that fits your vision.</p>
            </div>

            <div className="mb-12 scroll-animation">
                <div className="glass-card rounded-2xl p-6 text-center border-l-4 border-blue-500">
                    <h3 className="font-semibold text-lg text-blue-400">🕐 Limited Projects Per Month</h3>
                    <p className="text-secondary mt-2">To maintain the highest quality and provide dedicated attention to each project, I only take on 4-5 new projects per month. Book your slot now!</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center scroll-animation">
                {PRICING_PLANS.map((plan) => (
                    <div
                        key={plan.title}
                        className={`gradient-border group ${plan.isRecommended ? 'transform lg:scale-110 z-10' : ''}`}
                    >
                        <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
                            {plan.isRecommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-primary text-center heading-font mt-4">{plan.title}</h3>
                            <p className="text-5xl font-extrabold my-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">
                                {plan.price}
                            </p>

                            <ul className="space-y-4 text-secondary mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-primary/90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto text-center">
                                <WhatsAppButton message={plan.whatsappMessage} className="w-full">
                                    Start Your App Journey
                                </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center scroll-animation">
                 <div className="glass-card p-8 rounded-2xl">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <TrustStat value="50+" label="Happy Clients" />
                        <TrustStat value="4.9 ⭐" label="Average Rating" />
                        <TrustStat value="100%" label="On-Time Delivery" />
                        <TrustStat value="24/7" label="Professional Support" />
                    </div>
                 </div>
                 <p className="text-secondary mt-6">Flexible Payment Options Available. <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-blue-400 hover:underline">Book a Free Consultation</a> to discuss.</p>
            </div>
        </section>
    );
};

export default Pricing;
