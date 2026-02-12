
import React, { useRef, useState, MouseEvent } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

interface WhatsAppButtonProps {
    message: string;
    children: React.ReactNode;
    className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ message, children, className = '' }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    return (
        <a
            ref={ref}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: `translate(${x * 0.1}px, ${y * 0.1}px)` }}
            className={`magnetic-button inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 ${className}`}
        >
            {children}
        </a>
    );
};

export default WhatsAppButton;
