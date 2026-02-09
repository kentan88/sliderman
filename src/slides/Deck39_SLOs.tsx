import React from 'react';
import { Activity, BarChart, Target, ThumbsDown, ThumbsUp } from 'lucide-react';

const Slide9a_SLOs: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-12">
                Measuring What Matters: SLOs
            </h2>

            <div className="grid grid-cols-2 gap-12">
                {/* The Old Way */}
                <div className="glass-card p-8 border-obs-white/10 opacity-60">
                    <h3 className="text-xl font-bold text-obs-white mb-6 flex items-center gap-3">
                        <Activity className="text-obs-white/50" />
                        The Old Way: High Noise
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-obs-dark/50 p-4 rounded border border-red-500/30 flex items-center justify-between">
                            <span className="text-red-400 font-mono text-sm">ALERT: CPU {'>'} 80%</span>
                            <span className="text-xs text-obs-white/40">Is user impacted? IDK.</span>
                        </div>
                        <div className="bg-obs-dark/50 p-4 rounded border border-red-500/30 flex items-center justify-between">
                            <span className="text-red-400 font-mono text-sm">ALERT: Disk {'>'} 70%</span>
                            <span className="text-xs text-obs-white/40">Pure infrastructure noise.</span>
                        </div>
                    </div>
                </div>

                {/* The New Way - SLOs */}
                <div className="glass-card p-8 border-jam-green/50 bg-jam-green/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-jam-green">
                        <Target size={120} />
                    </div>
                    <h3 className="text-xl font-bold text-obs-white mb-6 flex items-center gap-3 relative z-10">
                        <Target className="text-jam-green" />
                        The New Way: User Impact
                    </h3>
                    <div className="space-y-6 relative z-10">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-obs-white font-medium">SLI (Indicator)</span>
                                <span className="text-obs-white/60">"Is the login fast?"</span>
                            </div>
                            <div className="h-2 bg-obs-dark rounded-full overflow-hidden">
                                <div className="h-full w-full bg-gradient-to-r from-obs-yellow to-jam-green" />
                            </div>
                        </div>

                        <div className="bg-obs-dark/60 p-4 rounded-xl border border-jam-green/20">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-jam-green font-bold">SLO (Goal)</span>
                                <span className="font-mono text-2xl font-black text-white">99.9%</span>
                            </div>
                            <p className="text-xs text-obs-white/60">We can fail <span className="text-obs-white">43 minutes</span> this month (Error Budget). Don't wake me up unless we burn this fast.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Burn Rate Visual */}
            <div className="glass-card p-6 mt-6 flex items-center justify-around">
                <div className="text-center space-y-2">
                    <ThumbsUp className="w-8 h-8 text-jam-green mx-auto" />
                    <p className="font-bold text-obs-white">Happy User</p>
                    <p className="text-xs text-obs-white/50">Within Budget</p>
                </div>
                <div className="h-12 w-px bg-obs-white/10" />
                <div className="text-center space-y-2">
                    <BarChart className="w-8 h-8 text-obs-yellow mx-auto" />
                    <p className="font-bold text-obs-white">Burning Budget</p>
                    <p className="text-xs text-obs-white/50">Warning Alert</p>
                </div>
                <div className="h-12 w-px bg-obs-white/10" />
                <div className="text-center space-y-2">
                    <ThumbsDown className="w-8 h-8 text-red-500 mx-auto" />
                    <p className="font-bold text-obs-white">Budget Exhausted</p>
                    <p className="text-xs text-obs-white/50">Page Engineer</p>
                </div>
            </div>
        </div>
    );
};

export default Slide9a_SLOs;
