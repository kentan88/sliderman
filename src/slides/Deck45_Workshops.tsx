import React from 'react';
import { Handshake, ListChecks, Map } from 'lucide-react';

const Slide45_Workshops: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-10">Workshops We Will Run</h2>

            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <Handshake className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-2xl font-bold text-obs-white">Discovery Workshops</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Map service landscape, incident pain points, and business-critical user journeys with client stakeholders.
                    </p>
                </div>

                <div className="glass-card p-7 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <Map className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-2xl font-bold text-obs-white">Target-State Workshops</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Define standards for telemetry, ownership, and implementation priorities aligned to account maturity.
                    </p>
                </div>

                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <ListChecks className="w-7 h-7 text-jam-teal" />
                    <h3 className="text-2xl font-bold text-obs-white">Action Plan Workshops</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Produce a practical 90-day plan per account with clear milestones, dependencies, and expected outcomes.
                    </p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <p className="text-obs-white text-lg font-medium">Output per account: current-state assessment, gap register, target blueprint, and 90-day delivery plan.</p>
            </div>
        </div>
    );
};

export default Slide45_Workshops;
