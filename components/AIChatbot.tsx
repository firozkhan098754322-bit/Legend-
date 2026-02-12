
import React, { useState } from 'react';

const AIChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Open AI Assistant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M12 12v4h4"></path><path d="M4 12h4"></path></svg>
            </button>

            <div className={`fixed bottom-24 right-6 z-50 w-80 h-96 glass-card rounded-2xl shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-white/10 flex justify-between items-center">
                        <h3 className="font-semibold text-primary">AI Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary">&times;</button>
                    </div>
                    <div className="flex-grow p-4 space-y-4 text-sm">
                        <div className="p-3 bg-blue-500/20 rounded-lg self-start">
                           <p className="text-primary">Hello! How can I help you with your project today?</p>
                        </div>
                         <div className="p-3 bg-white/10 rounded-lg self-start">
                           <p className="text-secondary">You can ask me about services, pricing, or project estimates.</p>
                        </div>
                    </div>
                    <div className="p-2 border-t border-white/10">
                        <input type="text" placeholder="Type your message..." className="w-full bg-transparent text-primary placeholder-secondary focus:outline-none px-2 py-1" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AIChatbot;
