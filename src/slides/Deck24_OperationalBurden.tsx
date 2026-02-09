import React from 'react';
import { Wrench, Server, Shield, CheckCircle2 } from 'lucide-react';

const tasks = [
    { label: 'Patch & upgrade telemetry stack', aws: 'None', managed: 'Minimal', self: 'Heavy' },
    { label: 'Scale ingestion & storage', aws: 'Auto', managed: 'Shared', self: 'Manual' },
    { label: '24/7 availability', aws: 'Built-in', managed: 'Built-in', self: 'DIY' },
    { label: 'Security hardening', aws: 'Native', managed: 'Shared', self: 'DIY' },
];

const cellTone = (value: string) => {
    if (['None', 'Auto', 'Built-in', 'Native'].includes(value)) return 'text-jam-green';
    if (['Minimal', 'Shared'].includes(value)) return 'text-obs-yellow';
    return 'text-red-400';
};

const Slide6j_OperationalBurden: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Operational Burden Comparison</h2>

            <div className="glass-card p-6 border-obs-white/10">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 items-center">
                    <div />
                    <p className="text-center text-obs-white font-bold">AWS Native</p>
                    <p className="text-center text-obs-white font-bold">Managed OSS</p>
                    <p className="text-center text-obs-white font-bold">Self-Hosted</p>

                    {tasks.map((task) => (
                        <React.Fragment key={task.label}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-obs-white/5 rounded-lg">
                                    <Wrench className="w-4 h-4 text-obs-white/60" />
                                </div>
                                <p className="text-obs-white/80 text-sm font-medium">{task.label}</p>
                            </div>
                            {[task.aws, task.managed, task.self].map((value, idx) => (
                                <div key={`${task.label}-${idx}`} className="flex items-center justify-center gap-2">
                                    <CheckCircle2 className={`w-4 h-4 ${cellTone(value)}`} />
                                    <span className={`text-sm font-bold ${cellTone(value)}`}>{value}</span>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-6 border-obs-white/10 text-center space-y-2">
                    <Server className="w-6 h-6 text-obs-white/60 mx-auto" />
                    <p className="text-obs-white/80 text-sm">Self-hosting turns observability into a platform you must operate.</p>
                </div>
                <div className="glass-card p-6 border-obs-white/10 text-center space-y-2">
                    <Shield className="w-6 h-6 text-obs-white/60 mx-auto" />
                    <p className="text-obs-white/80 text-sm">AWS native keeps telemetry inside your security boundary.</p>
                </div>
                <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center space-y-2">
                    <p className="text-obs-white text-lg font-bold">Lowest operational load</p>
                    <p className="text-obs-white/70 text-sm">Focus on application reliability, not platform upkeep.</p>
                </div>
            </div>
        </div>
    );
};

export default Slide6j_OperationalBurden;
