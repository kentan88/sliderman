import React from 'react';
import { type LucideIcon } from 'lucide-react';
// import Watermark from '../components/Watermark';

interface ArcSlideProps {
    title: string;
    subtitle: string;
    icon: LucideIcon;
}

const ArcSlide: React.FC<ArcSlideProps> = ({ title, subtitle, icon: Icon }) => {
    return (
        <div className="w-full max-w-5xl relative">
            {/* <Watermark /> */}

            <div className="glass-card p-14 border-obs-yellow/20 bg-obs-dark/60 relative z-10 text-center space-y-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-obs-yellow/30 bg-obs-yellow/10 text-obs-yellow">
                    <Icon className="w-12 h-12" />
                </div>

                <div className="space-y-4">
                    {/* <p className="text-sm uppercase tracking-[0.3em] text-obs-white/50 font-bold">Arc</p> */}
                    <h2 className="slide-title mb-0">{title}</h2>
                    <p className="slide-subtitle mb-0 text-obs-white/70">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ArcSlide;
