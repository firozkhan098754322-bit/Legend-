
import React, { useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { WHATSAPP_MESSAGES } from '../constants';

interface ExitIntentPopupProps {
    isVisible: boolean;
    onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="gradient-border w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative glass-card p-8 rounded-2xl text-center">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close popup"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                    <div className="text-4xl mb-4">🚀</div>
                    <h2 className="text-2xl font-bold text-white mb-2">Wait! Don't Leave...</h2>
                    <p className="text-gray-300 mb-6">
                        Got a question about your project? Let's chat for a minute.
                        I can provide a free, no-obligation consultation right now.
                    </p>
                    <WhatsAppButton message={WHATSAPP_MESSAGES.fromExitPopup}>
                        Ask a Quick Question
                    </WhatsAppButton>
                </div>
            </div>
        </div>
    );
};

export default ExitIntentPopup;
