
import React from 'react';
import { Project, PricingPlan, Testimonial, Service } from './types';

export const WHATSAPP_NUMBER = '918802760151'; // Country code + number

export const WHATSAPP_MESSAGES = {
    general: `Hi Mohsin, I visited your portfolio and I'd like to discuss a mobile app project.`,
    fromPortfolio: (projectTitle: string) => `Hi Mohsin, I saw the "${projectTitle}" app in your portfolio and want to build something similar.`,
    fromPricing: `Hi Mohsin, I saw your app development pricing and want to discuss my idea.`,
    fromExitPopup: `Hi Mohsin, before I go, I wanted to ask a quick question about app development.`,
    fromCalculator: (estimate: string) => `Hi Mohsin, I used your price calculator and got an estimate of ${estimate}. I'd like to discuss the details.`
};

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'QuickCrave - Food Delivery',
        category: 'Mobile App',
        description: 'A hyper-local food delivery app with real-time driver tracking and AI-based food recommendations.',
        techStack: ['React Native', 'Redux', 'Google Maps API', 'Node.js'],
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
        liveUrl: 'https://example.com/quickcrave',
        githubUrl: 'https://github.com/mohsin/quickcrave',
        problem: 'Users experienced high latency in tracking orders and poor restaurant discovery.',
        solution: 'Implemented WebSocket for real-time tracking and an ML algorithm for personalized craving suggestions.',
        clientResult: '10k+ Downloads in Month 1'
    },
    {
        id: 2,
        title: 'FitPulse - AI Trainer',
        category: 'Mobile App',
        description: 'A fitness coaching app that uses computer vision to correct posture during home workouts.',
        techStack: ['Flutter', 'TensorFlow Lite', 'Firebase', 'HealthKit'],
        imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
        liveUrl: 'https://example.com/fitpulse',
        githubUrl: 'https://github.com/mohsin/fitpulse',
        problem: 'Home workouts often lead to injury due to incorrect form without a trainer.',
        solution: 'Integrated on-device AI pose estimation to provide real-time audio feedback on posture.',
        clientResult: '4.9 Star Store Rating'
    },
    {
        id: 3,
        title: 'PaySwift - Neo Banking',
        category: 'Mobile App',
        description: 'A secure fintech wallet app allowing peer-to-peer payments and crypto portfolio management.',
        techStack: ['Swift (iOS)', 'Kotlin (Android)', 'Secure Enclave', 'AWS'],
        imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
        liveUrl: 'https://example.com/payswift',
        githubUrl: 'https://github.com/mohsin/payswift',
        problem: 'Existing wallets were cluttered and lacked biometric security for high-value transactions.',
        solution: 'Designed a minimalist UI with FaceID integration and MPC (Multi-Party Computation) security.',
        clientResult: '$2M+ Transacted Monthly'
    },
    {
        id: 4,
        title: 'UrbanRide - Cab Booking',
        category: 'Mobile App',
        description: 'A ride-sharing application focusing on electric vehicle (EV) fleets with optimized route matching.',
        techStack: ['React Native', 'Mapbox', 'Stripe', 'Socket.io'],
        imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
        liveUrl: 'https://example.com/urbanride',
        githubUrl: 'https://github.com/mohsin/urbanride',
        problem: 'High cancellation rates due to inefficient driver-rider matching algorithms.',
        solution: 'Built a custom matching engine reducing wait times by 35% and incorporated EV charging station routing.',
        clientResult: '35% Reduced Wait Time'
    }
];

export const CLIENTS = [
    { name: 'StartUp Inc', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'TechFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
    { name: 'AppMaster', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
    { name: 'CreativeStudio', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'CloudSystems', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazon/amazon-original.svg' },
    { name: 'DataCorp', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

export const SERVICES: Service[] = [
    { title: 'Cross-Platform Apps', icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }), React.createElement("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })), description: 'High-performance apps for both iOS and Android using React Native & Flutter. One codebase, double the reach.' },
    { title: 'Native iOS & Android', icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }), React.createElement("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }), React.createElement("path", { d: "M2 2l7.586 7.586" }), React.createElement("circle", { cx: "11", cy: "11", r: "2" })), description: 'Pure native development using Swift and Kotlin for mission-critical applications requiring maximum hardware access.' },
    { title: 'Mobile UI/UX Design', icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" })), description: 'Designing intuitive, thumb-friendly mobile interfaces with 3D elements and smooth micro-interactions.' },
    { title: 'App Maintenance', icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })), description: 'Ongoing support, performance optimization, bug fixes, and feature updates to keep your app 5-star rated.' },
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        title: 'MVP App Package',
        price: '₹20,000',
        features: ['Hybrid Mobile App', '3 - 5 Core Screens', 'Standard UI Design', 'APK Delivery', '7-10 Days Delivery', '1 Month Support'],
        isRecommended: false,
        whatsappMessage: WHATSAPP_MESSAGES.fromPricing
    },
    {
        title: 'Startup Pro App',
        price: '₹50,000',
        features: ['iOS & Android (Flutter/RN)', '8 - 12 Custom Screens', 'Premium 3D-Style UI', 'Firebase/API Integration', 'Play Store Upload', '2 Months Support'],
        isRecommended: true,
        whatsappMessage: WHATSAPP_MESSAGES.fromPricing
    },
    {
        title: 'Enterprise Custom',
        price: '₹90,000+',
        features: ['Native or Cross-Platform', 'Unlimited Screens', 'AI/ML Integration', 'Admin Panel Web App', 'Advanced Security', 'Priority Support'],
        isRecommended: false,
        whatsappMessage: WHATSAPP_MESSAGES.fromPricing
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "The food delivery app Mohsin built is incredibly fast. The real-time tracking is smoother than Uber Eats!",
        author: "Rohan Sharma",
        company: "Founder, QuickCrave",
        country: "in"
    },
    {
        quote: "Mohsin is a React Native wizard. He turned our complex designs into a pixel-perfect, high-performance app.",
        author: "Sarah Jenkins",
        company: "CTO, UrbanRide",
        country: "us"
    },
     {
        quote: "We needed a secure fintech app and Mohsin delivered. His knowledge of mobile security is top-tier.",
        author: "Aditya Singh",
        company: "CEO, PaySwift",
        country: "in"
    },
    {
        quote: "The AI trainer integration in our fitness app works flawlessly. Highly recommended for complex app development.",
        author: "David Chen",
        company: "Product Lead, FitPulse",
        country: "gb"
    }
];
