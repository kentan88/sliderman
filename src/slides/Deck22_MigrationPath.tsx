import React from 'react';
import { ArrowRight, Rocket, Layers, Crown } from 'lucide-react';

const Slide6i_MigrationPath: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Migration Path: Start Native, Scale with MSP</h2>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-6">
                <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <div className="flex items-center gap-3 text-obs-yellow">
                        <Rocket className="w-6 h-6" />
                        <p className="text-xs uppercase tracking-widest font-bold">Day 1</p>
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">AWS Native Baseline</h3>
                    <p className="text-obs-white/70 text-sm">CloudWatch + X-Ray + CloudTrail</p>
                    <p className="text-obs-white/80 text-sm">Fastest time to value with zero new infra.</p>
                </div>

                <ArrowRight className="text-obs-yellow w-10 h-10 self-center" />

                <div className="glass-card p-6 border-obs-white/10 space-y-4">
                    <div className="flex items-center gap-3 text-jam-teal">
                        <Layers className="w-6 h-6" />
                        <p className="text-xs uppercase tracking-widest font-bold">Day 30</p>
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Managed OSS</h3>
                    <p className="text-obs-white/70 text-sm">AMP + AMG + OpenSearch</p>
                    <p className="text-obs-white/80 text-sm">Add dashboards and query power without heavy ops.</p>
                </div>

                <ArrowRight className="text-obs-yellow w-10 h-10 self-center" />

                <div className="glass-card p-6 border-obs-white/10 space-y-4">
                    <div className="flex items-center gap-3 text-jam-green">
                        <Crown className="w-6 h-6" />
                        <p className="text-xs uppercase tracking-widest font-bold">Day 90</p>
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">MSP-Managed Expansion</h3>
                    <p className="text-obs-white/70 text-sm">Custom pipelines, SLOs, automation</p>
                    <p className="text-obs-white/80 text-sm">Your team focuses on product while we run ops.</p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <p className="text-obs-white text-lg font-medium">No re-instrumentation required. OTel keeps the path open.</p>
            </div>
        </div>
    );
};

export default Slide6i_MigrationPath;
