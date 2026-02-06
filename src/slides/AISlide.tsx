import React from 'react';

const AISlide: React.FC = () => {
    return (
        <div className="text-center space-y-12">
            <div className="flex justify-center flex-wrap gap-2 mb-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-obs-yellow animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
            </div>
            <h2 className="text-5xl font-black text-obs-yellow">THE AI FRONTIER</h2>
            <div className="relative">
                <div className="absolute inset-0 bg-obs-yellow/5 blur-3xl rounded-full" />
                <p className="text-3xl text-obs-white font-medium max-w-3xl mx-auto relative z-10 leading-relaxed italic">
                    "We don't just want to see the fire; we want the AI to tell us where the matches are before they're even struck."
                </p>
            </div>
            <div className="flex justify-center gap-12 mt-12">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-obs-yellow text-4xl font-bold">90%</span>
                    <span className="text-obs-white/70 text-sm uppercase tracking-widest font-bold">Anomaly Detection</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-obs-yellow text-4xl font-bold">0ms</span>
                    <span className="text-obs-white/70 text-sm uppercase tracking-widest font-bold">MTTR Goal</span>
                </div>
            </div>
        </div>
    );
};

export default AISlide;
