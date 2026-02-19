import React from 'react';
import { ArrowRight, Box, Filter, Share2 } from 'lucide-react';
import Watermark from '../components/Watermark';

const Slide5a_Collector: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8 relative">
            <Watermark opacity="text-obs-white/10" />
            <h2 className="slide-title mb-12 relative z-10">
                The OTel Collector: The "Universal Adapter"
            </h2>

            <div className="relative">
                {/* Flow Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-obs-white/5 via-obs-yellow/30 to-obs-white/5 -translate-y-1/2 -z-10" />

                <div className="grid grid-cols-3 gap-8">
                    {/* Receivers */}
                    <div className="glass-card p-8 border-obs-white/10 flex flex-col items-center gap-6 relative group">
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-obs-dark p-2 rounded-full border border-obs-white/10">
                            <ArrowRight className="text-obs-yellow w-6 h-6 animate-pulse" />
                        </div>
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-blue-light">
                            <Box className="w-12 h-12" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-obs-white mb-2">Receivers</h3>
                            <p className="slide-body text-sm">
                                "Get data IN"
                            </p>
                        </div>
                        <div className="w-full space-y-2">
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">OTLP (gRPC/HTTP)</div>
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">Prometheus</div>
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">Jaeger / Zipkin</div>
                        </div>
                    </div>

                    {/* Processors */}
                    <div className="glass-card p-8 border-obs-yellow/20 bg-obs-yellow/5 flex flex-col items-center gap-6 relative group ring-1 ring-obs-yellow/20">
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-obs-dark p-2 rounded-full border border-obs-white/10">
                            <ArrowRight className="text-obs-yellow w-6 h-6 animate-pulse" />
                        </div>
                        <div className="p-4 bg-obs-yellow/10 rounded-2xl text-obs-yellow">
                            <Filter className="w-12 h-12" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-obs-white mb-2">Processors</h3>
                            <p className="slide-body text-sm">
                                "Do stuff to it"
                            </p>
                        </div>
                        <div className="w-full space-y-2">
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">Batch</div>
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-yellow font-bold">Filter / Sample</div>
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">Redact PII</div>
                        </div>
                    </div>

                    {/* Exporters */}
                    <div className="glass-card p-8 border-obs-white/10 flex flex-col items-center gap-6 relative group">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-green">
                            <Share2 className="w-12 h-12" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-obs-white mb-2">Exporters</h3>
                            <p className="slide-body text-sm">
                                "Send data OUT"
                            </p>
                        </div>
                        <div className="w-full space-y-2">
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">AWS X-Ray</div>
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">Prometheus (AMP)</div>
                            <div className="bg-obs-dark/50 p-2 rounded text-center text-xs font-mono text-obs-white/60">Datadog / Splunk</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8">
                <p className="text-obs-white/50 italic text-sm">
                    "This decoupling allows you to swap backends without rewriting application code."
                </p>
            </div>
        </div>
    );
};

export default Slide5a_Collector;
