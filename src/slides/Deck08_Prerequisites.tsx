import React from 'react';
import { Code, Package, Settings, Cpu } from 'lucide-react';

const Slide4a_Prerequisites: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-8">
                Pre-requisites to Adoption
            </h2>

            {/* <div className="bg-obs-white/5 border border-obs-white/10 rounded-2xl p-6 text-center mb-8">
                <p className="text-xl text-obs-white font-medium">
                    <span className="text-obs-yellow font-bold">The Hard Truth:</span> Data doesn't appear by magic. Your code must emit it.
                </p>
            </div> */}

            <div className="grid grid-cols-2 gap-8">
                {/* Standard Battle */}
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4 border-b border-obs-white/10 pb-4">
                        <Package className="text-blue-400 w-8 h-8" />
                        <h3 className="text-2xl font-bold text-obs-white">The Standard Battle</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-obs-dark/50 p-4 rounded-lg border border-obs-white/5 flex justify-between items-center">
                            <span className="text-obs-white font-bold">OpenTelemetry (OTel)</span>
                            <span className="text-green-400 text-sm font-mono uppercase">Vendor Neutral</span>
                        </div>
                        <div className="bg-obs-dark/50 p-4 rounded-lg border border-obs-white/5 flex justify-between items-center opacity-60">
                            <span className="text-obs-white font-bold">Vendor-Specific Agents</span>
                            <span className="text-red-400 text-sm font-mono uppercase">Locked In</span>
                        </div>
                        <p className="text-obs-white/60 text-sm italic">
                            OTel gives you control. Vendor agents give you speed but lock you in.
                        </p>
                    </div>
                </div>

                {/* Instrumentation Types */}
                <div className="glass-card p-8 border-obs-yellow/20 space-y-6 bg-obs-yellow/5">
                    <div className="flex items-center gap-4 border-b border-obs-white/10 pb-4">
                        <Code className="text-obs-yellow w-8 h-8" />
                        <h3 className="text-2xl font-bold text-obs-white">Implementation Styles</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                            <div className="p-2 bg-obs-white/10 rounded-lg text-obs-yellow">
                                <Settings size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-obs-white">Auto-Instrumentation</h4>
                                <p className="text-obs-white/60 text-sm">"Zero-code". Instant visibility for HTTP, DB, and Frameworks.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-2 bg-obs-white/10 rounded-lg text-obs-yellow">
                                <Cpu size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-obs-white">Manual Instrumentation</h4>
                                <p className="text-obs-white/60 text-sm">"High-fidelity". Wrap business logic to capture what matters most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide4a_Prerequisites;
