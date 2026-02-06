import React from 'react';
import logo from '../assets/logo.svg';

const TitleSlide: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] space-y-16">
            {/* Logo Section */}
            <div className="relative group">
                <div className="absolute inset-0 bg-obs-yellow blur-[120px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-1000" />
                <img
                    src={logo}
                    alt="Just After Midnight"
                    className="h-32 w-auto relative z-10 drop-shadow-2xl"
                />
            </div>

            {/* Main Title */}
            <div className="space-y-6 text-center z-10">
                <h1 className="text-6xl font-black text-white tracking-tighter leading-none drop-shadow-xl">
                    MODERN <br />
                    <span className="text-obs-yellow">OBSERVABILITY</span>
                </h1>
                <p className="text-xl text-obs-white/80 font-light tracking-[0.2em] uppercase">
                    Beyond Monitoring
                </p>
            </div>

            {/* Speaker Info */}
            <div className="flex flex-row gap-8 mt-8">
                <div className="glass-card px-10 py-6 flex flex-col items-center border-t border-obs-yellow/20">
                    <h3 className="text-2xl font-bold text-white mb-2">Ken Tan</h3>
                    <div className="h-0.5 w-12 bg-obs-yellow mb-2 opacity-50" />
                    <p className="text-obs-yellow font-mono text-sm tracking-widest uppercase">Lead Solutions Architect</p>
                </div>

                <div className="glass-card px-10 py-6 flex flex-col items-center border-t border-obs-yellow/20">
                    <h3 className="text-2xl font-bold text-white mb-2">Shaun Teo</h3>
                    <div className="h-0.5 w-12 bg-obs-yellow mb-2 opacity-50" />
                    <p className="text-obs-yellow font-mono text-sm tracking-widest uppercase">Country Manager</p>
                </div>
            </div>

            {/* Start Prompt */}
            <div className="absolute bottom-12 animate-bounce text-obs-white/30">
                <p className="text-xs font-mono uppercase tracking-[0.3em]">Press Space to Start</p>
            </div>
        </div>
    );
};

export default TitleSlide;
