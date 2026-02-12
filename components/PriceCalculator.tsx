
import React, { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../constants';

const features = [
    { id: 'auth', name: 'User Authentication', price: 5000 },
    { id: 'db', name: 'Database Setup', price: 8000 },
    { id: 'payment', name: 'Payment Gateway', price: 10000 },
    { id: 'admin', name: 'Admin Dashboard', price: 15000 },
    { id: 'ai', name: 'AI Integration', price: 20000 },
    { id: 'chat', name: 'Real-time Chat', price: 12000 },
    { id: 'maps', name: 'Google Maps / GPS', price: 8000 },
    { id: 'push', name: 'Push Notifications', price: 5000 },
];

const platforms = [
    { id: 'android', name: 'Android Only', multiplier: 1 },
    { id: 'ios', name: 'iOS Only', multiplier: 1.2 },
    { id: 'both', name: 'Both (Cross-Platform)', multiplier: 1.5 },
];

const PriceCalculator: React.FC = () => {
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [selectedPlatform, setSelectedPlatform] = useState<string>('both');
    const [totalPrice, setTotalPrice] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const basePrice = 15000; // Base MVP price
        const featureTotal = selectedFeatures.reduce((acc, featureId) => {
            const feature = features.find(f => f.id === featureId);
            return acc + (feature ? feature.price : 0);
        }, 0);
        
        const platformMultiplier = platforms.find(p => p.id === selectedPlatform)?.multiplier || 1;
        const finalPrice = (basePrice + featureTotal) * platformMultiplier;

        setIsAnimating(true);
        const timeout = setTimeout(() => {
            setTotalPrice(Math.round(finalPrice));
            setIsAnimating(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [selectedFeatures, selectedPlatform]);

    const toggleFeature = (id: string) => {
        if (selectedFeatures.includes(id)) {
            setSelectedFeatures(selectedFeatures.filter(f => f !== id));
        } else {
            setSelectedFeatures([...selectedFeatures, id]);
        }
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div className="text-center mb-12 scroll-animation">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">AI Price Estimator</h2>
                    <p className="text-lg text-secondary mt-4">Get a quick estimate for your dream app in seconds.</p>
                </div>

                <div className="glass-card p-8 rounded-2xl scroll-animation">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-primary mb-4">1. Select Platform</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {platforms.map(platform => (
                                <button
                                    key={platform.id}
                                    onClick={() => setSelectedPlatform(platform.id)}
                                    className={`p-4 rounded-xl border transition-all duration-300 ${
                                        selectedPlatform === platform.id
                                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg scale-105'
                                            : 'bg-white/5 border-white/10 text-secondary hover:bg-white/10'
                                    }`}
                                >
                                    {platform.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-primary mb-4">2. Select Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {features.map(feature => (
                                <button
                                    key={feature.id}
                                    onClick={() => toggleFeature(feature.id)}
                                    className={`p-3 text-sm rounded-lg border transition-all duration-300 ${
                                        selectedFeatures.includes(feature.id)
                                            ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                                            : 'bg-white/5 border-white/10 text-secondary hover:bg-white/10'
                                    }`}
                                >
                                    {feature.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 text-center">
                        <p className="text-secondary mb-2">Estimated Cost</p>
                        <div className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ${isAnimating ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'}`}>
                            ₹{totalPrice.toLocaleString()}
                        </div>
                        <p className="text-xs text-muted mt-2 mb-6">*Rough estimate. Final quote varies based on complexity.</p>
                        
                        <WhatsAppButton message={WHATSAPP_MESSAGES.fromCalculator(`₹${totalPrice.toLocaleString()}`)} className="w-full md:w-auto px-12">
                            Get Exact Quote
                        </WhatsAppButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceCalculator;
