import React from 'react';
import { AlertTriangle, SearchCheck, Siren } from 'lucide-react';

const Slide47_ClientGapAssessment: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-10">Gap Identification Across Existing Clients</h2>

            <div className="grid grid-cols-2 gap-8">
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <h3 className="text-2xl font-bold text-obs-white flex items-center gap-3">
                        <SearchCheck className="w-6 h-6 text-obs-yellow" />
                        What We Assess
                    </h3>
                    <div className="space-y-3 text-obs-white/80">
                        <p>Critical service telemetry coverage</p>
                        <p>Trace continuity and context propagation</p>
                        <p>Signal quality and dashboard actionability</p>
                        <p>Alert noise and escalation effectiveness</p>
                        <p>SLO definition tied to user impact</p>
                    </div>
                </div>

                <div className="glass-card p-8 border-obs-yellow/20 bg-obs-yellow/5 space-y-6">
                    <h3 className="text-2xl font-bold text-obs-white flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-obs-yellow" />
                        How We Prioritize
                    </h3>
                    <div className="space-y-3 text-obs-white/80">
                        <p>Business risk and customer impact first</p>
                        <p>Time-to-remediate and delivery effort</p>
                        <p>Cross-account repeatability of fixes</p>
                        <p>Quarterly tracking using a maturity scorecard</p>
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <Siren className="w-6 h-6 text-jam-teal mx-auto mb-2" />
                <p className="text-obs-white text-lg font-medium">Result: fewer blind spots, lower alert fatigue, and faster incident triage.</p>
            </div>
        </div>
    );
};

export default Slide47_ClientGapAssessment;
