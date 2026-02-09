import React from 'react';
import { Laptop, RefreshCw, Server } from 'lucide-react';
import Watermark from '../components/Watermark';

const Slide10a_DevLoop: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8 relative">
            <Watermark />

            <h2 className="slide-title mb-12 relative z-10">
                The Developer Loop: "It Runs on My Machine"
            </h2>

            <div className="grid grid-cols-2 gap-12 relative z-10">
                {/* Local Setup */}
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-lg text-jam-blue-light">
                            <Laptop size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">Local Dev</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-jam-blue-light" />
                            <p className="text-obs-white/80">Spin up Jaeger + Collector via <code className="bg-obs-white/10 px-1 rounded">docker-compose</code>.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-jam-blue-light" />
                            <p className="text-obs-white/80">See traces immediately on your laptop.</p>
                        </li>
                    </ul>
                    <div className="bg-obs-dark/50 p-4 rounded-lg border border-obs-white/5 font-mono text-xs text-obs-white/60">
                        services:<br />
                        &nbsp;&nbsp;jaeger:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;image: jaegertracing/all-in-one
                    </div>
                </div>

                {/* Prod Parity */}
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-lg text-jam-teal">
                            <Server size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">Production</h3>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-jam-teal" />
                            <p className="text-obs-white/80">Same instrumentation code.</p>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-jam-teal" />
                            <p className="text-obs-white/80">Just point the Collector to AMP instead of Jaeger.</p>
                        </li>
                    </ul>
                    <div className="bg-obs-dark/50 p-4 rounded-lg border border-obs-white/5 font-mono text-xs text-obs-white/60">
                        exporters:<br />
                        &nbsp;&nbsp;prometheusremotewrite:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;endpoint: "amp-workspace-url"
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 mt-8 border-obs-yellow/20 bg-obs-yellow/5 flex items-center justify-center gap-6 relative z-10">
                <RefreshCw className="text-obs-yellow w-8 h-8 animate-spin-slow" />
                <p className="text-xl font-medium text-obs-white">
                    "Debug locally with the <strong>exact same tools</strong> you use in production."
                </p>
            </div>
        </div>
    );
};

export default Slide10a_DevLoop;
