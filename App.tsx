
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Clients from './components/Clients';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import PriceCalculator from './components/PriceCalculator';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import LoadingScreen from './components/LoadingScreen';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';
import ExitIntentPopup from './components/ExitIntentPopup';
import AIChatbot from './components/AIChatbot';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check localStorage for theme preference on initial load
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme === 'dark' || (!savedTheme && true); // Default to dark
        }
        return true;
    });

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);
    
    useEffect(() => {
      const root = window.document.documentElement;
      if (isDarkMode) {
        root.classList.remove('light');
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    }, [isDarkMode]);

    const handleMouseLeave = useCallback((e: MouseEvent) => {
        if (e.clientY <= 0 && !sessionStorage.getItem('exitPopupShown')) {
            setShowExitPopup(true);
            sessionStorage.setItem('exitPopupShown', 'true');
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [handleMouseLeave]);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        const targets = document.querySelectorAll('.scroll-animation');
        targets.forEach(target => observer.observe(target));

        return () => targets.forEach(target => observer.unobserve(target));
    }, [loading]);


    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className="relative overflow-x-hidden">
            <MouseGlow />
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <main className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <Hero />
                <Stats />
                <Clients />
                <Services />
                <Portfolio />
                <PriceCalculator />
                <Pricing />
                <Blog />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <StickyMobileBar />
            <AIChatbot />
            <ExitIntentPopup isVisible={showExitPopup} onClose={() => setShowExitPopup(false)} />
        </div>
    );
};

export default App;
