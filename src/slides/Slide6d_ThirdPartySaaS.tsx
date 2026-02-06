import React from 'react';
import { ExternalLink, Sparkles, Database, Wallet } from 'lucide-react';

const Slide6d_ThirdPartySaaS: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title">
                Third-Party SaaS Options
            </h2>

            <div className="grid grid-cols-2 gap-12">
                {/* The Appeal */}
                <div className="glass-card p-10 space-y-6 border-obs-white/10 relative group">
                    <div className="absolute top-0 right-0 p-24 bg-jam-teal/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-teal/20 transition-all duration-500" />
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-teal">
                            <Sparkles className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">The Appeal</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">Datadog, New Relic, Honeycomb</p>
                        </div>
                    </div>
                    <ul className="space-y-4 pt-2">
                        <li className="flex gap-4 items-start">
                            <div className="p-1 bg-jam-teal/20 rounded text-jam-teal mt-1"><ExternalLink size={16} /></div>
                            <p className="text-obs-white/80 text-lg"><strong>Polished UI:</strong> Extremely low barrier to entry for devs.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-1 bg-jam-teal/20 rounded text-jam-teal mt-1"><ExternalLink size={16} /></div>
                            <p className="text-obs-white/80 text-lg"><strong>Specialized Features:</strong> High-cardinality analysis (e.g., BubbleUp).</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="p-1 bg-jam-teal/20 rounded text-jam-teal mt-1"><ExternalLink size={16} /></div>
                            <p className="text-obs-white/80 text-lg"><strong>AI Insights:</strong> Mature anomaly detection and correlation.</p>
                        </li>
                    </ul>
                </div>

                {/* The Trade-offs */}
                <div className="glass-card p-10 space-y-6 border-red-500/10 relative group">
                    <div className="absolute top-0 right-0 p-24 bg-red-500/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-red-500/10 transition-all duration-500" />
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-red-400">
                            <Wallet className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">The Trade-offs</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">Considerations</p>
                        </div>
                    </div>
                    <ul className="space-y-4 pt-2">
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Data Sovereignty:</strong> Telemetry data leaves your VPC (Security risk).</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Egress Costs:</strong> Paying AWS to send data <em>out</em> to the vendor.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Vendor Premium:</strong> Can become prohibitively expensive at scale.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="glass-card p-6 mt-8 border-obs-yellow/20 flex items-center justify-center gap-4 bg-obs-yellow/5">
                <Database className="text-obs-yellow" />
                <p className="text-xl font-bold text-obs-white">Decision Point: <span className="text-obs-yellow font-black">Buy vs. Build (on Managed Services)</span></p>
            </div>
        </div>
    );
};

export default Slide6d_ThirdPartySaaS;
