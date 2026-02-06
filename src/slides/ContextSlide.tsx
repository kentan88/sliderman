import React from 'react';
import { Database, Zap } from 'lucide-react';

const ContextSlide: React.FC = () => {
    return (
        <div className="w-full max-w-5xl flex gap-12 items-center">
            <div className="flex-1 space-y-8">
                <h2 className="slide-title text-left">
                    CONTEXT IS<br />EVERYTHING
                </h2>
                <p className="slide-body font-semibold">
                    Raw data is noise. Observability is the practice of turning that noise into high-fidelity signals through <span className="text-obs-yellow">correlation</span> and <span className="text-obs-yellow">causality</span>.
                </p>
                <ul className="space-y-4">
                    {['Tagging & Metadata', 'Service Mapping', 'Distributed Context Propagation'].map(tag => (
                        <li key={tag} className="flex items-center gap-3 text-obs-white font-bold">
                            <div className="w-2 h-2 rounded-full bg-obs-yellow" /> {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 relative">
                <div className="w-80 h-80 rounded-full border-4 border-obs-white/10 flex items-center justify-center animate-spin-slow">
                    <div className="w-64 h-64 rounded-full border-4 border-obs-yellow/50 flex items-center justify-center">
                        <Database className="w-16 h-16 text-obs-yellow" />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-obs-white/5 backdrop-blur rounded-xl border border-white/10 flex items-center justify-center translate-x-12 -translate-y-6 shadow-2xl">
                    <Zap className="text-obs-yellow" />
                </div>
            </div>
        </div>
    );
};

export default ContextSlide;
