import React from 'react';
import { Cloud, Container, Layers3 } from 'lucide-react';

const Slide48_PlatformOptions: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-10">Observability Platform Options</h2>

            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-8 flex flex-col border-obs-white/10 h-full">
                    <div className="mb-5 p-3 bg-jam-blue-light/10 rounded-xl w-fit">
                        <Cloud className="w-7 h-7 text-jam-blue-light" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-3">A. Single Vendor Managed</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed flex-grow">
                        Fastest route to operational simplicity with consolidated support and lower platform overhead.
                    </p>
                    <p className="text-xs uppercase tracking-widest font-bold text-jam-blue-light mt-4">Best for speed</p>
                </div>

                <div className="glass-card p-8 flex flex-col border-obs-yellow/20 ring-1 ring-obs-yellow/20 bg-obs-yellow/5 h-full">
                    <div className="mb-5 p-3 bg-obs-yellow/15 rounded-xl w-fit">
                        <Container className="w-7 h-7 text-obs-yellow" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-3">B. OTel-First + Vendor Backend</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed flex-grow">
                        OpenTelemetry instrumentation baseline with backend flexibility to reduce lock-in risk over time.
                    </p>
                    <p className="text-xs uppercase tracking-widest font-bold text-obs-yellow mt-4">Recommended default</p>
                </div>

                <div className="glass-card p-8 flex flex-col border-obs-white/10 h-full">
                    <div className="mb-5 p-3 bg-jam-teal/15 rounded-xl w-fit">
                        <Layers3 className="w-7 h-7 text-jam-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white mb-3">C. Hybrid / Multi-Platform</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed flex-grow">
                        Strong fit for complex estates but needs tighter governance, standards, and integration discipline.
                    </p>
                    <p className="text-xs uppercase tracking-widest font-bold text-jam-teal mt-4">Best for complex estates</p>
                </div>
            </div>
        </div>
    );
};

export default Slide48_PlatformOptions;
