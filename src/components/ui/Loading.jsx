import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-brand-ivory z-50">
            <div className="relative">
                {/* Outer Ring */}
                <div className="w-16 h-16 border-2 border-brand-wood/10 rounded-full"></div>

                {/* Inner Spinner */}
                <div className="absolute top-0 left-0 w-16 h-16 border-2 border-transparent border-t-brand-wood rounded-full animate-spin duration-1000"></div>

                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-brand-wood rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            </div>
        </div>
    );
};

export default Loading;
