import React from 'react';
import { ArrowRightLeft, Layers, ShieldCheck } from 'lucide-react';

const Slide5_TheBridge: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-16">
                The "Bridge" — OpenTelemetry (OTel) and ADOT
            </h2>
            <div className="grid grid-cols-2 gap-8 items-stretch">
                <div className="col-span-1 glass-card p-8 space-y-6 border-obs-white/10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-lg text-obs-yellow">
                            <Layers size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">OpenTelemetry</h3>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        A CNCF open-source framework providing a standardized, vendor-neutral way to collect telemetry data.
                    </p>
                </div>

                <div className="col-span-1 glass-card p-8 space-y-6 border-obs-white/10">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-lg text-obs-yellow">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">AWS Distro for OTel (ADOT)</h3>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        The AWS-supported version of OTel that bridges data to services like CloudWatch, X-Ray, or Managed Prometheus.
                    </p>
                </div>

                <div className="col-span-2 glass-card p-10 mt-4 border-obs-yellow/20 bg-gradient-to-r from-obs-dark to-obs-white/5 flex items-center justify-between">
                    <div className="max-w-xl">
                        <h3 className="text-3xl font-bold text-obs-yellow mb-4">The Benefit</h3>
                        <p className="text-obs-white text-xl font-medium">
                            "Instrument Once, Export Anywhere"
                        </p>
                    </div>
                    <div className="flex items-center gap-6 text-obs-white/60">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-xl bg-obs-white/10 flex items-center justify-center mb-2 mx-auto">
                                <span className="font-mono text-sm">App</span>
                            </div>
                        </div>
                        <ArrowRightLeft className="text-obs-yellow animate-pulse" />
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-xl bg-obs-white/10 flex items-center justify-center mb-2 mx-auto">
                                <span className="font-mono text-xs">Vendor A</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-xl bg-obs-white/10 flex items-center justify-center mb-2 mx-auto">
                                <span className="font-mono text-xs">Vendor B</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide5_TheBridge;
