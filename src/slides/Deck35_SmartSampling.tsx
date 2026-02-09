import React from 'react';
import { Filter, Scissors, Wallet } from 'lucide-react';
import Watermark from '../components/Watermark';

const Slide8a_Sampling: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8 relative">
            <Watermark />
            <h2 className="slide-title mb-12 relative z-10">
                Smart Sampling: Quality vs. Cost
            </h2>

            <div className="grid grid-cols-2 gap-12">
                {/* Head Sampling */}
                <div className="glass-card p-10 space-y-6 border-obs-white/10">
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-blue-light">
                            <Scissors className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-obs-white">Head Sampling</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">"Random Selection"</p>
                        </div>
                    </div>
                    <p className="slide-body text-base">
                        The decision to keep or drop a trace is made at the <strong>start</strong> of the request.
                    </p>
                    <div className="space-y-4 pt-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-obs-white/60">Cost Impact</span>
                            <span className="text-green-400 font-bold">Lowest</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-obs-white/60">Accuracy</span>
                            <span className="text-red-400 font-bold">Misses Rare Errors</span>
                        </div>
                    </div>
                    <div className="bg-obs-white/5 p-4 rounded-lg text-center">
                        <p className="text-sm font-mono text-jam-blue-light">Best for: High-volume, healthy traffic.</p>
                    </div>
                </div>

                {/* Tail Sampling */}
                <div className="glass-card p-10 space-y-6 border-obs-yellow/20 bg-obs-yellow/5">
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-yellow/10 rounded-2xl text-obs-yellow">
                            <Filter className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-obs-white">Tail Sampling</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">"Keep the Interesting Stuff"</p>
                        </div>
                    </div>
                    <p className="slide-body text-base">
                        Wait until the request completes, then keep it <strong>only if it failed</strong> or was slow.
                    </p>
                    <div className="space-y-4 pt-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-obs-white/60">Cost Impact</span>
                            <span className="text-obs-yellow font-bold">Medium (Requires Buffer)</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-obs-white/60">Accuracy</span>
                            <span className="text-green-400 font-bold">Captures 100% of Errors</span>
                        </div>
                    </div>
                    <div className="bg-obs-yellow/10 p-4 rounded-lg text-center border border-obs-yellow/20">
                        <p className="text-sm font-mono text-obs-yellow">Best for: Debugging intermittent issues.</p>
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 flex items-center justify-center gap-4 bg-obs-dark/30 border-obs-white/5 mx-auto max-w-2xl mt-8">
                <Wallet className="text-green-400" />
                <p className="text-obs-white font-medium">
                    "Sampling allows you to observe 100% of failures without paying for 100% of successes."
                </p>
            </div>
        </div>
    );
};

export default Slide8a_Sampling;
