
import React from 'react';

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-[#0B0F19] flex items-center justify-center z-[100]">
            <div className="relative flex items-center justify-center">
                <div className="absolute h-24 w-24 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
                <div className="text-3xl font-bold text-white heading-font">
                    M<span className="text-blue-500">.</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
