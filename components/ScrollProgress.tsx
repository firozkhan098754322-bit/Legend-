
import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;
        setScrollWidth(Number(scroll));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-gray-800/30 backdrop-blur-sm">
            <div 
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-150 ease-out"
                style={{ width: `${scrollWidth * 100}%` }}
            ></div>
        </div>
    );
};

export default ScrollProgress;
