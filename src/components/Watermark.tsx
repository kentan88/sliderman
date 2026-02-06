import React from 'react';

interface WatermarkProps {
    text?: string;
    opacity?: string; // Tailwind class like "text-obs-white/10"
    size?: string;    // Tailwind class like "text-[12rem]"
    className?: string; // Allow custom overrides
}

const Watermark: React.FC<WatermarkProps> = ({
    text = "OPTIONAL",
    opacity = "text-obs-white/10", // Increased default from 5% to 10%
    size = "text-[10rem] md:text-[12rem]",
    className = ""
}) => {
    return (
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-50 overflow-hidden ${className}`}>
            <h1 className={`${size} font-black ${opacity} -rotate-12 whitespace-nowrap select-none transition-all duration-300`}>
                {text}
            </h1>
        </div>
    );
};

export default Watermark;
