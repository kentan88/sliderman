import React from 'react';
import { Cloud, Box, ExternalLink } from 'lucide-react';

const Slide6_MarketLandscape: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-16">
                Comparing the Options
            </h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-8 flex flex-col border-obs-white/10 h-full">
                    <div className="mb-6 p-4 bg-jam-blue-light/10 rounded-xl w-fit">
                        <Cloud className="text-jam-blue-light w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-2">AWS Native</h3>
                    <p className="text-sm text-obs-white/40 font-mono mb-6">CloudWatch, X-Ray</p>
                    <p className="text-obs-white/80 font-medium leading-relaxed mb-8 flex-grow">
                        Best for "one-click" integration and zero infrastructure management.
                    </p>
                    <div className="border-t border-obs-white/10 pt-4">
                        <span className="text-xs font-bold text-jam-blue-light uppercase tracking-widest">Easiest Start</span>
                    </div>
                </div>

                <div className="glass-card p-8 flex flex-col border-obs-yellow/20 h-full ring-1 ring-obs-yellow/20 relative bg-obs-white/5">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-obs-yellow text-obs-dark text-xs font-bold uppercase rounded-bl-lg">
                        Balanced
                    </div>
                    <div className="mb-6 p-4 bg-obs-yellow/10 rounded-xl w-fit">
                        <Box className="text-obs-yellow w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-2">AWS Managed Open Source</h3>
                    <p className="text-sm text-obs-white/40 font-mono mb-6">Managed Prometheus, Grafana</p>
                    <p className="text-obs-white/80 font-medium leading-relaxed mb-8 flex-grow">
                        Allows the use of industry-standard tools without the "heavy-lifting" of hosting and scaling them.
                    </p>
                    <div className="border-t border-obs-white/10 pt-4">
                        <span className="text-xs font-bold text-obs-yellow uppercase tracking-widest">Best of Both</span>
                    </div>
                </div>

                <div className="glass-card p-8 flex flex-col border-obs-white/10 h-full">
                    <div className="mb-6 p-4 bg-jam-teal/10 rounded-xl w-fit">
                        <ExternalLink className="text-jam-teal w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-2">Third-Party SaaS</h3>
                    <p className="text-sm text-obs-white/40 font-mono mb-6">Honeycomb, Datadog</p>
                    <p className="text-obs-white/80 font-medium leading-relaxed mb-8 flex-grow">
                        Offer high-end analytics but may involve vendor premiums and data egress considerations.
                    </p>
                    <div className="border-t border-obs-white/10 pt-4">
                        <span className="text-xs font-bold text-jam-teal uppercase tracking-widest">Advanced Features</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide6_MarketLandscape;
