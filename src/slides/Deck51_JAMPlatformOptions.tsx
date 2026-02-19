import React from 'react';
import { Cloud, Container, Layers3 } from 'lucide-react';

const Slide51_JAMPlatformOptions: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-10">
            <div className="text-center space-y-4">
                <h2 className="slide-title mb-0">Platform Options and Recommendation</h2>
                <p className="slide-subtitle mb-0">OpenTelemetry baseline, platform-fit selection per client</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <Cloud className="w-7 h-7 text-jam-blue-light" />
                    <h3 className="text-xl font-bold text-obs-white">A. Single Vendor</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-obs-white/75 text-sm leading-relaxed">
                        <li>Fastest path to operational simplicity</li>
                        <li>Lower in-house platform overhead</li>
                        <li>Best for teams optimizing for speed</li>
                    </ul>
                </div>

                <div className="glass-card p-7 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <Container className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-xl font-bold text-obs-white">B. OTel + Backend</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-obs-white/75 text-sm leading-relaxed">
                        <li>Recommended default approach</li>
                        <li>OpenTelemetry standardization across services</li>
                        <li>Backend flexibility with lower lock-in risk</li>
                    </ul>
                </div>

                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <Layers3 className="w-7 h-7 text-jam-teal" />
                    <h3 className="text-xl font-bold text-obs-white">C. Hybrid</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-obs-white/75 text-sm leading-relaxed">
                        <li>Strong fit for complex enterprise estates</li>
                        <li>Allows use-case specific tooling choices</li>
                        <li>Needs stronger governance and integration discipline</li>
                    </ul>
                </div>
            </div>

            <div className="glass-card p-5 border-obs-white/10">
                <p className="text-obs-white/90 text-base font-semibold mb-2">2026 outcome</p>
                <ul className="list-disc pl-5 space-y-1.5 text-obs-white/85 text-sm leading-relaxed">
                    <li>Clearer observability standards across client accounts</li>
                    <li>Faster incident detection and response</li>
                    <li>Repeatable delivery model for JAM engagements</li>
                </ul>
            </div>
        </div>
    );
};

export default Slide51_JAMPlatformOptions;
