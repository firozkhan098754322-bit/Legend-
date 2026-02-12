
import React, { useState } from 'react';
import { WHATSAPP_MESSAGES } from '../constants';
import WhatsAppButton from './WhatsAppButton';
import ScrollProgress from './ScrollProgress';
import LoginModal from './LoginModal';
import AdminDashboard from './AdminDashboard';

interface HeaderProps {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Apps', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: "Pricing", href: "#pricing" },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollTo = (selector: string) => {
        const element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleLogin = () => {
        setIsAdminOpen(true);
    };

    return (
        <>
            <ScrollProgress />
            <header className="sticky top-0 z-50 glass-card">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex-shrink-0">
                            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="text-3xl font-bold text-inherit transition-colors duration-300 hover:text-cyan-400 heading-font">
                            M<span className="text-cyan-400">.</span>
                            </a>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                    className="text-inherit hover:text-cyan-400 transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <div className="hidden md:flex items-center gap-4">
                            <button 
                                onClick={() => setIsLoginOpen(true)}
                                className="text-sm font-semibold text-inherit hover:text-blue-400 transition-colors"
                            >
                                Login
                            </button>
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full text-inherit hover:bg-white/10 transition-colors" aria-label="Toggle Theme">
                            {isDarkMode ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                            : 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            }
                        </button>
                        <WhatsAppButton message={WHATSAPP_MESSAGES.general}>
                            Hire Me
                        </WhatsAppButton>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-inherit focus:outline-none" aria-label="Open Menu">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden glass-card absolute top-20 left-0 right-0">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-inherit hover:text-cyan-400 hover:bg-white/10"
                                >
                                    {link.name}
                                </a>
                            ))}
                             <button 
                                onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-inherit hover:text-cyan-400 hover:bg-white/10"
                            >
                                Client Login
                            </button>
                            <div className="p-4">
                            <WhatsAppButton message={WHATSAPP_MESSAGES.general} className="w-full">
                                Hire Me
                            </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <LoginModal 
                isOpen={isLoginOpen} 
                onClose={() => setIsLoginOpen(false)} 
                onLogin={handleLogin}
            />

            {isAdminOpen && (
                <AdminDashboard onLogout={() => setIsAdminOpen(false)} />
            )}
        </>
    );
};

export default Header;
