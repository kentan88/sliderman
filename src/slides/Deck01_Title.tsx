import React from 'react';
import logo from '../assets/logo.svg';

const TitleSlide: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-16">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="space-y-10 z-10">
                    {/* Logo Section */}
                    <div className="relative group w-fit mx-auto lg:mx-0">
                        <div className="absolute inset-0 bg-obs-yellow blur-[120px] opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-1000" />
                        <img
                            src={logo}
                            alt="Just After Midnight"
                            className="h-28 lg:h-32 w-auto relative z-10 drop-shadow-2xl"
                        />
                    </div>

                    {/* Main Title */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none drop-shadow-xl">
                            MODERN <br />
                            <span className="text-obs-yellow">OBSERVABILITY</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-obs-white/80 font-light tracking-[0.2em] uppercase">
                            Beyond Monitoring
                        </p>
                    </div>
                </div>

                <div className="relative w-full max-w-2xl mx-auto">
                    <img
                        src={`${import.meta.env.BASE_URL}slide1.png`}
                        alt="Observability dashboard preview"
                        className="relative z-10 w-full h-auto"
                    />
                </div>
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
            {/* <div className="absolute bottom-12 animate-bounce text-obs-white/30">
                <p className="text-xs font-mono uppercase tracking-[0.3em]">Press Space to Start</p>
            </div> */}
        </div>
    );
};

export default TitleSlide;
