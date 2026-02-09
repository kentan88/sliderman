import React from 'react';
import { ArrowRight, SignalHigh, Gauge, Crown } from 'lucide-react';

const Slide6t_MaturityModel: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Observability Maturity Model</h2>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4">
                <div className="glass-card p-6 border-obs-white/10 text-center space-y-2">
                    <SignalHigh className="w-6 h-6 text-obs-white/60 mx-auto" />
                    <p className="text-obs-white font-bold">Stage 1</p>
                    <p className="text-obs-white/60 text-xs">Basic monitoring</p>
                </div>
                <ArrowRight className="text-obs-yellow w-8 h-8" />
                <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center space-y-2">
                    <Gauge className="w-6 h-6 text-obs-yellow mx-auto" />
                    <p className="text-obs-white font-bold">Stage 2</p>
                    <p className="text-obs-white/60 text-xs">AWS native observability</p>
                </div>
                <ArrowRight className="text-obs-yellow w-8 h-8" />
                <div className="glass-card p-6 border-obs-white/10 text-center space-y-2">
                    <Gauge className="w-6 h-6 text-jam-teal mx-auto" />
                    <p className="text-obs-white font-bold">Stage 3</p>
                    <p className="text-obs-white/60 text-xs">Managed OSS</p>
                </div>
                <ArrowRight className="text-obs-yellow w-8 h-8" />
                <div className="glass-card p-6 border-obs-white/10 text-center space-y-2">
                    <Crown className="w-6 h-6 text-jam-green mx-auto" />
                    <p className="text-obs-white font-bold">Stage 4</p>
                    <p className="text-obs-white/60 text-xs">MSP-optimized operations</p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <p className="text-obs-white text-lg font-medium">AWS native gets teams to maturity fastest, with a clear path to managed growth.</p>
            </div>
        </div>
    );
};

export default Slide6t_MaturityModel;
