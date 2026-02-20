import React from 'react';
import { Activity, Search, Lightbulb} from 'lucide-react';

const Slide3_Evolution: React.FC = () => {
    return (
        <div className="w-full max-w-6xl">
            <h2 className="slide-title mb-16">
                Monitoring vs. Observability
            </h2>
            <div className="grid grid-cols-2 gap-12">
                {/* Monitoring Side */}
                <div className="glass-card p-10 space-y-8 border-obs-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-jam-blue-light/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="flex items-center gap-4 border-b border-obs-white/10 pb-6">
                        <div className="p-3 bg-obs-white/5 rounded-xl">
                            <Activity className="text-jam-blue-light w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">Monitoring</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">The "What"</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-obs-dark/50 rounded-lg p-4 border border-obs-white/5">
                            <p className="text-jam-blue-light font-mono text-sm mb-2">Failure Mode Alert</p>
                            <p className="text-obs-white font-bold text-lg">"Is CPU usage over 80%?"</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-obs-white/80 font-medium">
                                <span className="text-jam-blue-light">•</span>
                                Answers "known-unknowns"
                            </li>
                            <li className="flex gap-3 text-obs-white/80 font-medium">
                                <span className="text-jam-blue-light">•</span>
                                Predefined questions
                            </li>
                            <li className="flex gap-3 text-obs-white/80 font-medium">
                                <span className="text-jam-blue-light">•</span>
                                Dashboards and alerts
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Observability Side */}
                <div className="glass-card p-10 space-y-8 border-obs-yellow/20 relative overflow-hidden ring-1 ring-obs-yellow/20">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-obs-yellow/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="flex items-center gap-4 border-b border-obs-white/10 pb-6">
                        <div className="p-3 bg-obs-yellow/10 rounded-xl">
                            <Search className="text-obs-yellow w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">Observability</h3>
                            <p className="text-obs-yellow/40 text-sm font-mono uppercase tracking-wider mt-1">The "Why"</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-obs-dark/50 rounded-lg p-4 border border-obs-yellow/20">
                            <p className="text-obs-yellow font-mono text-sm mb-2">Arbitrary Query</p>
                            <p className="text-obs-white font-bold text-lg">"Why did latency spike only for users on the marketing campaign?"</p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-obs-white/80 font-medium">
                                <span className="text-obs-yellow">•</span>
                                Explores "unknown-unknowns"
                            </li>
                            <li className="flex gap-3 text-obs-white/80 font-medium">
                                <span className="text-obs-yellow">•</span>
                                Arbitrary questions
                            </li>
                            <li className="flex gap-3 text-obs-white/80 font-medium">
                                <span className="text-obs-yellow">•</span>
                                Explores system behavior
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="glass-card border-obs-white/10 p-5 flex items-center gap-3 mt-12">
                    <Lightbulb className="h-5 w-5 text-obs-yellow shrink-0" />
                    <p className="text-obs-white/90 text-lg">
                    <span className="font-bold text-obs-yellow">Key takeaway:</span> Monitoring tells you
                    <span className="font-semibold"> when </span>
                    a system is broken. Observability tells you
                    <span className="font-semibold"> why </span>
                    it is broken and how to fix it.
                    </p>
                </div>
        </div>
    );
};

export default Slide3_Evolution;
