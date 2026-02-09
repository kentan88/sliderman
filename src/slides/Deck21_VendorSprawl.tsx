import React from 'react';
import { ArrowRightLeft, Database, AlertTriangle } from 'lucide-react';

const Slide6r_VendorSprawl: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Risk of Vendor Sprawl</h2>

            <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
                <div className="glass-card p-8 border-obs-white/10 space-y-4">
                    <h3 className="text-2xl font-bold text-obs-white">Multi-Vendor Stack</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {['Logs Tool', 'Tracing Tool', 'Metrics Tool', 'APM Tool', 'Alert Tool', 'SIEM Tool'].map((tool) => (
                            <div key={tool} className="p-3 bg-obs-dark/50 border border-obs-white/5 rounded-lg text-center text-xs text-obs-white/70">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-3 text-red-400 text-sm">
                        <AlertTriangle className="w-4 h-4" />
                        Contracts, egress, and access drift over time.
                    </div>
                </div>

                <ArrowRightLeft className="text-obs-yellow w-10 h-10" />

                <div className="glass-card p-8 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <h3 className="text-2xl font-bold text-obs-white">Consolidated on AWS</h3>
                    <div className="p-6 rounded-xl bg-obs-dark/60 border border-obs-white/10 text-center space-y-2">
                        <Database className="w-8 h-8 text-obs-yellow mx-auto" />
                        <p className="text-obs-white font-bold">One native telemetry backbone</p>
                        <p className="text-obs-white/60 text-xs">Unified governance and access</p>
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <p className="text-obs-white text-lg font-medium">Reducing sprawl simplifies security reviews and cost management.</p>
            </div>
        </div>
    );
};

export default Slide6r_VendorSprawl;
