import React from 'react';
import { Cloud, GitMerge, Zap } from 'lucide-react';

const Slide6a_AWSNativeServices: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-16">
                AWS Native Services
            </h2>
            <div className="grid grid-cols-2 gap-12">
                {/* CloudWatch */}
                <div className="glass-card p-10 space-y-6 border-obs-white/10 relative group">
                    <div className="absolute top-0 right-0 p-24 bg-jam-blue-light/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-blue-light/20 transition-all duration-500" />
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-blue-light">
                            <Cloud className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">Amazon CloudWatch</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">The Central Nervous System</p>
                        </div>
                    </div>
                    <ul className="space-y-4 pt-2">
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-blue-light mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Metrics:</strong> CPU, RAM, Disk I/O (often out-of-the-box).</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-blue-light mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Logs:</strong> Centralized log groups from EC2, Lambda, etc.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-blue-light mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Alarms:</strong> Trigger scaling or notifications based on thresholds.</p>
                        </li>
                    </ul>
                </div>

                {/* X-Ray */}
                <div className="glass-card p-10 space-y-6 border-obs-white/10 relative group">
                    <div className="absolute top-0 right-0 p-24 bg-jam-teal/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-teal/20 transition-all duration-500" />
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-teal">
                            <GitMerge className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">AWS X-Ray</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">Distributed Tracing</p>
                        </div>
                    </div>
                    <ul className="space-y-4 pt-2">
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-teal mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Service Map:</strong> Visualizes relationships between components.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-teal mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Latency Analysis:</strong> Pinpoints bottlenecks in specific segments.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-teal mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Integration:</strong> Works seamlessly with AWs SDKs.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="glass-card p-6 mt-8 border-obs-yellow/20 flex items-center justify-center gap-4 bg-obs-yellow/5">
                <Zap className="text-obs-yellow" />
                <p className="text-xl font-bold text-obs-white">Why? <span className="text-obs-yellow font-black">Zero Infrastructure Management.</span></p>
            </div>
        </div>
    );
};

export default Slide6a_AWSNativeServices;
