import React from 'react';
import { ArrowRight, Cloud, GitMerge, Layers, Bell } from 'lucide-react';

const Slide6g_AWSArchitectureReference: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">AWS Native Architecture Reference</h2>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6">
                <div className="glass-card p-6 border-obs-white/10 space-y-4">
                    <div className="p-3 bg-obs-white/5 rounded-xl w-fit text-jam-blue-light">
                        <Cloud className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Workloads</h3>
                    <p className="text-obs-white/70 text-sm">EC2, ECS, EKS, Lambda, RDS</p>
                    <div className="text-obs-white/50 text-xs font-mono uppercase tracking-widest">Auto metrics + logs</div>
                </div>

                <ArrowRight className="text-obs-yellow w-10 h-10" />

                <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 space-y-4 ring-1 ring-obs-yellow/20">
                    <div className="p-3 bg-obs-yellow/10 rounded-xl w-fit text-obs-yellow">
                        <Layers className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Telemetry Core</h3>
                    <p className="text-obs-white/70 text-sm">CloudWatch, X-Ray, CloudTrail, AMP</p>
                    <div className="text-obs-white/50 text-xs font-mono uppercase tracking-widest">Centralized + governed</div>
                </div>

                <ArrowRight className="text-obs-yellow w-10 h-10" />

                <div className="glass-card p-6 border-obs-white/10 space-y-4">
                    <div className="p-3 bg-obs-white/5 rounded-xl w-fit text-jam-teal">
                        <GitMerge className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Action & Insight</h3>
                    <p className="text-obs-white/70 text-sm">Dashboards, alerts, incident flows</p>
                    <div className="flex items-center gap-2 text-obs-white/50 text-xs font-mono uppercase tracking-widest">
                        <Bell className="w-4 h-4" /> Notify + automate
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10">
                <p className="text-obs-white text-lg font-medium">
                    Multi-account friendly: centralize telemetry in a shared services account while keeping workloads in their own accounts.
                </p>
            </div>
        </div>
    );
};

export default Slide6g_AWSArchitectureReference;
