import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const Slide7a_TCODeepDive: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-4">
                The Real Cost: Apples to Apples
            </h2>
            <div className="text-center mb-8">
                <div className="inline-block bg-obs-white/5 border border-obs-white/10 rounded-full px-6 py-2">
                    <p className="text-obs-white/60 font-mono text-sm">
                        <span className="text-obs-yellow font-bold">Scenario:</span> Mid-Size Startup • 50 Hosts • 2TB Logs/Month • 3 Engineers
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* Self-Hosted */}
                <div className="glass-card p-6 border-obs-white/10 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full" />
                    <h3 className="text-2xl font-bold text-obs-white mb-6 border-b border-obs-white/10 pb-4">Self-Hosted <span className="text-sm font-normal text-obs-white/40 block mt-1">(ELK / Prometheus)</span></h3>

                    <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                            <span className="text-obs-white/60">License</span>
                            <span className="text-green-400 font-bold">$0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-obs-white/60">Infrastructure</span>
                            <span className="text-obs-white font-bold">$1.2k<span className="text-xs text-obs-white/40">/mo</span></span>
                        </div>
                        <div className="flex justify-between items-center bg-red-500/10 p-2 rounded">
                            <span className="text-red-400">Maintenance</span>
                            <span className="text-red-400 font-bold">$12k<span className="text-xs text-red-300/60">/mo</span></span>
                        </div>
                        <p className="text-xs text-obs-white/30 italic text-right mb-4">*0.5 FTE @ $150k/yr</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-obs-white/10">
                        <p className="text-obs-white/60 text-xs uppercase tracking-widest mb-1">3-Year TCO</p>
                        <p className="text-4xl font-black text-obs-white">$475k</p>
                    </div>
                </div>

                {/* SaaS */}
                <div className="glass-card p-6 border-obs-white/10 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[50px] rounded-full" />
                    <h3 className="text-2xl font-bold text-obs-white mb-6 border-b border-obs-white/10 pb-4">3rd Party SaaS <span className="text-sm font-normal text-obs-white/40 block mt-1">(Datadog / New Relic)</span></h3>

                    <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                            <span className="text-obs-white/60">Platform Fee</span>
                            <span className="text-obs-white font-bold">$4.5k<span className="text-xs text-obs-white/40">/mo</span></span>
                        </div>
                        <div className="flex justify-between items-center bg-red-500/10 p-2 rounded">
                            <span className="text-red-400">Data Egress</span>
                            <span className="text-red-400 font-bold">$1.8k<span className="text-xs text-red-300/60">/mo</span></span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-obs-white/60">Overage Risk</span>
                            <span className="text-red-400 font-bold">High</span>
                        </div>
                        <p className="text-xs text-obs-white/30 italic text-right mb-4">*Data leaving VPC</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-obs-white/10">
                        <p className="text-obs-white/60 text-xs uppercase tracking-widest mb-1">3-Year TCO</p>
                        <p className="text-4xl font-black text-obs-white">$270k+</p>
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1"><ArrowUp size={12} /> Unpredictable</p>
                    </div>
                </div>

                {/* AWS Native */}
                <div className="glass-card p-6 border-obs-yellow/50 bg-obs-yellow/5 flex flex-col relative overflow-hidden ring-1 ring-obs-yellow/20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-obs-yellow/10 blur-[50px] rounded-full" />
                    <div className="absolute top-0 right-0 px-3 py-1 bg-obs-yellow text-obs-dark text-xs font-bold uppercase rounded-bl-lg">
                        Winner
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-6 border-b border-obs-white/10 pb-4">AWS Native <span className="text-sm font-normal text-obs-white/40 block mt-1">(CloudWatch / X-Ray)</span></h3>

                    <div className="space-y-4 flex-grow">
                        <div className="flex justify-between items-center">
                            <span className="text-obs-white/60">Usage</span>
                            <span className="text-obs-white font-bold">$3.2k<span className="text-xs text-obs-white/40">/mo</span></span>
                        </div>
                        <div className="flex justify-between items-center bg-green-500/10 p-2 rounded">
                            <span className="text-green-400">Data Egress</span>
                            <span className="text-green-400 font-bold">$0</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-obs-white/60">Maintenance</span>
                            <span className="text-green-400 font-bold">Included</span>
                        </div>
                        <p className="text-xs text-obs-white/30 italic text-right mb-4">*Internal VPC Traffic</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-obs-white/10">
                        <p className="text-obs-white/60 text-xs uppercase tracking-widest mb-1">3-Year TCO</p>
                        <p className="text-4xl font-black text-obs-yellow">$115k</p>
                        <p className="text-xs text-green-400 mt-1 flex items-center gap-1"><ArrowDown size={12} /> 57% vs SaaS</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <p className="text-obs-white/50 italic text-sm">
                    "SaaS looks cheap until you scale. Self-hosted looks free until you calculate labor."
                </p>
            </div>
        </div>
    );
};

export default Slide7a_TCODeepDive;
