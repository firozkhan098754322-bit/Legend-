
import React from 'react';

export interface Project {
    id: number;
    title: string;
    category: 'Mobile App' | 'Web App';
    description: string;
    techStack: string[];
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
    problem: string;
    solution: string;
    clientResult: string;
}

export interface Service {
    title: string;
    icon: React.ReactElement;
    description: string;
}

export interface Skill {
    name: string;
    icon: string;
}

export interface PricingPlan {
    title: string;
    price: string;
    features: string[];
    isRecommended: boolean;
    whatsappMessage: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    country: 'in' | 'us' | 'gb' | 'ae';
    rating: number;
}
