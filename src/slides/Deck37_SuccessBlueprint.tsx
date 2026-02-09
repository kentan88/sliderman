import React from 'react';
import { TrendingDown, TrendingUp, BadgeCheck } from 'lucide-react';

const Slide6s_SuccessBlueprint: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Success Story Blueprint (Illustrative)</h2>

            <div className="grid grid-cols-2 gap-8">
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <h3 className="text-2xl font-bold text-obs-white">Before</h3>
                    <div className="space-y-3">
                        <p className="text-obs-white/70 text-sm">Tool sprawl across 5 vendors</p>
                        <p className="text-obs-white/70 text-sm">High alert noise, slow triage</p>
                        <p className="text-obs-white/70 text-sm">Monthly cost surprises</p>
                    </div>
                    <div className="flex items-center gap-3 text-red-400 text-sm">
                        <TrendingUp className="w-4 h-4" />
                        MTTR trending upward
                    </div>
                </div>

                <div className="glass-card p-8 border-obs-yellow/20 bg-obs-yellow/5 space-y-6">
                    <h3 className="text-2xl font-bold text-obs-white">After (AWS Native + MSP)</h3>
                    <div className="space-y-3">
                        <p className="text-obs-white/70 text-sm">Single telemetry backbone</p>
                        <p className="text-obs-white/70 text-sm">SLO-based alerting</p>
                        <p className="text-obs-white/70 text-sm">Predictable spend controls</p>
                    </div>
                    <div className="flex items-center gap-3 text-jam-green text-sm">
                        <TrendingDown className="w-4 h-4" />
                        MTTR trending downward
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <BadgeCheck className="w-6 h-6 text-obs-yellow mx-auto mb-2" />
                <p className="text-obs-white text-lg font-medium">Use this template to build your own customer-ready success story.</p>
            </div>
        </div>
    );
};

export default Slide6s_SuccessBlueprint;
