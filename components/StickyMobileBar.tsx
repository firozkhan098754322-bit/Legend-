
import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '../constants';

const StickyMobileBar: React.FC = () => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGES.general);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass-card p-3 border-t border-white/10">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-blue-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.7 6.3 2 5l-.7 2.9c.5.1 1 .3 1.5.5C3.6 11.4 4 14.2 4 14.3c0 .2 2.3 2.2 6.1 4.1 2.3 1.2 4 1.5 4.3 1.5.2 0 3.2-2.3 4.1-6.1.2-.5.4-1 .5-1.5L20 5.1l-5.7 1.2c-.2 0-.4.1-.5.3l-1.4 1.4c-.2.2-.5.2-.7 0l-4-4c-.2-.2-.2-.5 0-.7l1.4-1.4c.1-.2.2-.4.3-.5Z"></path></svg>
                Chat on WhatsApp
            </a>
        </div>
    );
};

export default StickyMobileBar;
