
import React from 'react';
import { Project, PricingPlan, Testimonial, Service } from './types';

export const WHATSAPP_NUMBER = '918802760151'; 

export const WHATSAPP_MESSAGES = {
    general: `Hi Mohsin, I'm interested in your premium app development services.`,
    fromPortfolio: (projectTitle: string) => `Hi Mohsin, I was impressed by "${projectTitle}" in your portfolio. I want to build a similar high-quality app.`,
    fromPricing: `Hi Mohsin, I saw your pricing plans and want to discuss a potential project.`,
    fromExitPopup: `Hi Mohsin, I have a quick question about building a scalable startup app.`,
    fromCalculator: (estimate: string) => `Hi Mohsin, I used your estimator (approx ${estimate}). I'd like to finalize the requirements.`
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'QuickCrave',
        category: 'Mobile App',
        description: 'A futuristic food delivery ecosystem with predictive AI ordering and 3D food visualization.',
        techStack: ['React Native', 'Node.js', 'Socket.io', 'Three.js'],
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
        liveUrl: 'https://example.com/quickcrave',
        githubUrl: 'https://github.com/mohsin/quickcrave',
        problem: 'Standard delivery apps felt static and lacked engagement.',
        solution: 'Integrated WebGL for 3D dish previews and a gamified loyalty system.',
        clientResult: '40% Higher Retention'
    },
    {
        id: 2,
        title: 'FitPulse',
        category: 'Mobile App',
        description: 'An AI-powered personal trainer that uses real-time computer vision to correct posture.',
        techStack: ['Flutter', 'TensorFlow', 'Python', 'AWS'],
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
        liveUrl: 'https://example.com/fitpulse',
        githubUrl: 'https://github.com/mohsin/fitpulse',
        problem: 'Users were getting injured doing home workouts without supervision.',
        solution: 'Built a proprietary pose-estimation engine that runs locally on-device.',
        clientResult: 'Best Health App 2024'
    },
    {
        id: 3,
        title: 'PaySwift',
        category: 'Mobile App',
        description: 'A next-gen fintech wallet with biometric security and decentralized identity management.',
        techStack: ['Swift', 'Kotlin', 'Blockchain', 'Node.js'],
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
        liveUrl: 'https://example.com/payswift',
        githubUrl: 'https://github.com/mohsin/payswift',
        problem: 'Traditional banking apps were slow and insecure for crypto assets.',
        solution: 'Implemented multi-signature security and a glassmorphism UI for clarity.',
        clientResult: '$2M+ Monthly Volume'
    },
    {
        id: 4,
        title: 'UrbanRide',
        category: 'Mobile App',
        description: 'Electric vehicle ride-sharing platform with optimized routing for battery conservation.',
        techStack: ['React Native', 'Mapbox', 'Go', 'Redis'],
        imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
        liveUrl: 'https://example.com/urbanride',
        githubUrl: 'https://github.com/mohsin/urbanride',
        problem: 'EV drivers faced range anxiety and inefficient dispatching.',
        solution: 'Created a custom routing algorithm considering charging station density.',
        clientResult: '30% Fleet Efficiency'
    }
];

// Replaced generic logos with "Startup" style text logos matching the portfolio
export const CLIENTS = [
    { name: 'QuickCrave', type: 'FoodTech' },
    { name: 'FitPulse', type: 'Health & Fitness' },
    { name: 'PaySwift', type: 'FinTech' },
    { name: 'UrbanRide', type: 'Logistics' },
    { name: 'FreshMart', type: 'E-Commerce' },
];

export const SERVICES: Service[] = [
    { 
        title: 'Premium App Development', 
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }), React.createElement("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })), 
        description: 'Bespoke iOS & Android applications built with React Native or Flutter. Focused on scalability and award-winning UI.' 
    },
    { 
        title: 'Native Performance', 
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" })), 
        description: 'Pure native development (Swift/Kotlin) for hardware-intensive projects requiring maximum performance.' 
    },
    { 
        title: '3D & Motion Design', 
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), React.createElement("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), React.createElement("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })), 
        description: 'Immersive 3D interfaces and fluid animations that differentiate your brand from competitors.' 
    },
    { 
        title: 'Scalable Backend', 
        icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M12 2a10 10 0 1 0 10 10H12V2z" }), React.createElement("path", { d: "M12 2a10 10 0 1 1-10 10h10V2z" })), 
        description: 'Enterprise-grade backend architecture using Node.js, Go, or Python to handle millions of users.' 
    },
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        title: 'Basic / Student',
        price: '₹15,000',
        features: [
            'Simple Android App', 
            '3-5 Screens', 
            'Standard UI Design', 
            'Contact Integration', 
            '7 Days Delivery',
            '1 Month Support'
        ],
        isRecommended: false,
        whatsappMessage: WHATSAPP_MESSAGES.fromPricing
    },
    {
        title: 'Standard Startup',
        price: '₹45,000',
        features: [
            'iOS & Android (Flutter)', 
            '12+ Custom Screens', 
            'Premium Glassmorphism UI', 
            'Admin Panel & Backend', 
            'Play Store Deployment', 
            '3 Months Priority Support'
        ],
        isRecommended: true,
        whatsappMessage: WHATSAPP_MESSAGES.fromPricing
    },
    {
        title: 'Premium Company',
        price: '₹1,20,000+',
        features: [
            'Native or Hybrid Arch', 
            'Unlimited Screens', 
            'Advanced AI Integration', 
            'Custom 3D Animations', 
            'Scalable Cloud AWS/GCP', 
            'Dedicated Project Manager'
        ],
        isRecommended: false,
        whatsappMessage: WHATSAPP_MESSAGES.fromPricing
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Mohsin isn't just a developer; he's a product architect. The 3D interactions he built for QuickCrave increased our engagement by 200%.",
        author: "Rohan Sharma",
        company: "CEO, QuickCrave",
        country: "in",
        rating: 5
    },
    {
        quote: "We interviewed 50+ developers. Mohsin was the only one who understood how to build a scalable fintech architecture securely.",
        author: "Aditya Singh",
        company: "Founder, PaySwift",
        country: "in",
        rating: 5
    },
    {
        quote: "The attention to detail is unmatched. The app feels liquid smooth. Worth every rupee for the premium quality delivered.",
        author: "Sarah Jenkins",
        company: "CTO, UrbanRide",
        country: "us",
        rating: 5
    },
    {
        quote: "He delivered a complex AI computer vision app ahead of schedule. Truly premium service standards.",
        author: "David Chen",
        company: "Product Lead, FitPulse",
        country: "gb",
        rating: 4.9
    }
];
