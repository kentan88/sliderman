import React from 'react';
import { Zap } from 'lucide-react';

const ThankYouSlide: React.FC = () => {
    return (
        <div className="text-center space-y-8">
            <h2 className="text-6xl font-black text-obs-yellow">THANK YOU</h2>
            <p className="text-2xl text-obs-white font-medium">Elevate Your System Visibility Today</p>
            <div className="pt-12">
                <button className="px-10 py-5 bg-obs-yellow text-obs-dark font-black rounded-full hover:scale-105 transition-all shadow-lg shadow-obs-yellow/20 active:scale-95">
                    TALK TO OUR TEAM →
                </button>
            </div>
            <div className="pt-24 flex items-center justify-center gap-3 opacity-30">
                <Zap className="w-5 h-5 text-obs-yellow" />
                <p className="text-obs-white font-mono text-sm tracking-widest uppercase">sliderman // presentation engine</p>
            </div>
        </div>
    );
};

export default ThankYouSlide;
