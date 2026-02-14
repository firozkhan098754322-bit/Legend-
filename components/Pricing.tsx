
import React from 'react';
import { PRICING_PLANS } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const TrustStat = ({ value, label }: { value: string, label: string }) => (
    <div className="text-center p-4">
        <p className="text-3xl font-black text-white">{value}</p>
        <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">{label}</p>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-32 relative">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>

            <div className="text-center mb-20 scroll-animation">
                <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Invest in Quality</span>
                <h2 className="text-4xl md:text-5xl font-black text-white heading-font mb-6">Premium App Packages</h2>
                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                    Transparent, fixed-price packages designed for serious founders. <br/> No hidden costs. No spaghetti code. Just world-class engineering.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto px-4 scroll-animation">
                {PRICING_PLANS.map((plan) => (
                    <div
                        key={plan.title}
                        className={`relative group transition-transform duration-500 ${plan.isRecommended ? 'lg:-translate-y-8 z-10' : 'hover:-translate-y-2'}`}
                    >
                        <div className={`
                            h-full rounded-3xl p-1
                            ${plan.isRecommended 
                                ? 'bg-gradient-to-b from-yellow-500 via-yellow-300 to-yellow-600 shadow-[0_0_50px_rgba(234,179,8,0.2)]' 
                                : 'bg-gradient-to-b from-white/10 to-white/5 border border-white/10'}
                        `}>
                            <div className="bg-[#0B0F19] rounded-[1.4rem] h-full p-8 flex flex-col relative overflow-hidden">
                                {plan.isRecommended && (
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
                                )}

                                <div className="mb-8">
                                    <h3 className={`text-xl font-bold uppercase tracking-widest mb-2 ${plan.isRecommended ? 'text-yellow-400' : 'text-gray-400'}`}>
                                        {plan.title}
                                    </h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-4xl md:text-5xl font-black ${plan.isRecommended ? 'text-white' : 'text-gray-200'}`}>
                                            {plan.price}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.isRecommended ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-sm text-gray-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <WhatsAppButton 
                                    message={plan.whatsappMessage} 
                                    className={`w-full justify-center py-4 ${plan.isRecommended ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:shadow-yellow-500/30' : 'bg-white/10 hover:bg-white/20 border border-white/10'}`}
                                >
                                    {plan.isRecommended ? 'Get Priority Access' : 'Start Project'}
                                </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center scroll-animation max-w-5xl mx-auto">
                 <div className="glass-card p-10 rounded-3xl border border-white/10 bg-white/5">
                     <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                        <TrustStat value="100%" label="Success Rate" />
                        <TrustStat value="2 Years" label="Experience" />
                        <TrustStat value="4.9/5" label="Clutch Rating" />
                        <TrustStat value="24/7" label="Support" />
                    </div>
                 </div>
                 <p className="text-gray-500 mt-8 text-sm">
                     *Prices are indicative for Indian Market standards. International pricing may vary. <br/>
                     <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white hover:text-blue-400 underline decoration-blue-500/50 underline-offset-4 transition-colors">Book a Free Consultation</a> to discuss custom requirements.
                 </p>
            </div>
        </section>
    );
};

export default Pricing;
