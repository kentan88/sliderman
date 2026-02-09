import React from 'react';
import { Gauge, CheckCircle2 } from 'lucide-react';

const readiness = [
    { label: 'AWS services auto-emitting metrics', value: 'Done' },
    { label: 'CloudTrail & VPC Flow Logs enabled', value: 'Done' },
    { label: 'Default logs centralized', value: 'In place' },
    { label: 'Custom app tracing', value: 'Next step' },
    { label: 'Business SLOs & alerts', value: 'Next step' },
];

const Slide6o_InstrumentationReadiness: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Instrumentation Readiness Checklist</h2>

            <div className="grid grid-cols-[1.2fr_1fr] gap-8">
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-xl text-obs-yellow">
                            <Gauge className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-obs-white">You are already close</h3>
                            <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">AWS baseline exists</p>
                        </div>
                    </div>
                    <p className="text-obs-white/80 text-lg">Most teams have 70% of the telemetry they need before writing any new code.</p>
                </div>

                <div className="glass-card p-6 border-obs-white/10 space-y-4">
                    {readiness.map((item) => (
                        <div key={item.label} className="flex items-center justify-between border-b border-obs-white/5 pb-3 last:border-none last:pb-0">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-4 h-4 text-obs-yellow" />
                                <p className="text-obs-white/80 text-sm font-medium">{item.label}</p>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-obs-white/50 font-mono">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">MSP support fills the last-mile instrumentation without rework.</p>
            </div>
        </div>
    );
};

export default Slide6o_InstrumentationReadiness;
