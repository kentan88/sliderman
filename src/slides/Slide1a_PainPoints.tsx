import React from 'react';
import { AlertTriangle, Layers, ZapOff } from 'lucide-react';

const Slide1a_PainPoints: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-12">
                The Struggle is Real
            </h2>

            <div className="grid grid-cols-3 gap-8">
                {/* 1. Alert Fatigue */}
                <div className="glass-card p-8 border-red-500/20 bg-red-500/5 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
                    <div className="p-4 bg-red-500/10 rounded-full text-red-500 relative z-10">
                        <AlertTriangle size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-white mb-2">Alert Fatigue</h3>
                        <p className="slide-body text-sm">
                            "I have 1,000 unread PagerDuty emails. I ignore them all."
                        </p>
                    </div>
                    <div className="bg-obs-dark/50 px-4 py-2 rounded text-red-400 font-mono text-xs font-bold">
                        Signal-to-Noise: 1%
                    </div>
                </div>

                {/* 2. Tool Sprawl */}
                <div className="glass-card p-8 border-obs-white/10 flex flex-col items-center text-center space-y-6">
                    <div className="p-4 bg-obs-white/5 rounded-full text-obs-yellow">
                        <Layers size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-white mb-2">Tool Sprawl</h3>
                        <p className="slide-body text-sm">
                            "Logs are in Splunk. Metrics in CloudWatch. Traces? We don't have those."
                        </p>
                    </div>
                    <div className="bg-obs-dark/50 px-4 py-2 rounded text-obs-white/60 font-mono text-xs">
                        Context Switching Cost: High
                    </div>
                </div>

                {/* 3. The "Black Box" */}
                <div className="glass-card p-8 border-obs-white/10 flex flex-col items-center text-center space-y-6">
                    <div className="p-4 bg-obs-white/5 rounded-full text-jam-teal">
                        <ZapOff size={40} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-white mb-2">The Black Box</h3>
                        <p className="slide-body text-sm">
                            "It works in staging but fails in prod. No one knows why."
                        </p>
                    </div>
                    <div className="bg-obs-dark/50 px-4 py-2 rounded text-jam-teal font-mono text-xs">
                        MTTR: Avg 4 Hours
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 bg-obs-white/5 p-6 rounded-2xl border border-obs-white/10 max-w-3xl mx-auto">
                <p className="text-xl text-obs-white font-medium">
                    "We are drowning in <span className="text-red-400">Data</span>, but starving for <span className="text-jam-green font-bold">Wisdom</span>."
                </p>
            </div>
        </div>
    );
};

export default Slide1a_PainPoints;
