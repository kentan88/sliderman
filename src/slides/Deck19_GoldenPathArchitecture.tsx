import React from 'react';
import { ArrowRight, Cloud, Container, Database, Layers } from 'lucide-react';
import Watermark from '../components/Watermark';

const Slide8b_GoldenPath: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8 relative">
            <Watermark />
            <h2 className="slide-title mb-12 relative z-10">
                The "Golden Path" Architecture
            </h2>

            <div className="relative flex items-center justify-between gap-4">
                {/* 1. App + Sidecar */}
                <div className="glass-card p-6 border-obs-white/10 flex flex-col items-center gap-4 w-1/4 relative z-10">
                    <div className="bg-obs-white/5 p-3 rounded-lg text-jam-blue-light">
                        <Container className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-obs-white">EKS / ECS App</h3>
                        <p className="text-xs text-obs-white/50 mt-1">Your Microservice</p>
                    </div>
                    <div className="w-full border-t border-obs-white/10 pt-3">
                        <div className="bg-obs-yellow/10 p-2 rounded text-center border border-obs-yellow/20">
                            <span className="text-xs font-mono font-bold text-obs-yellow">ADOT Sidecar</span>
                        </div>
                    </div>
                </div>

                <ArrowRight className="text-obs-white/20 w-8 h-8 flex-shrink-0" />

                {/* 2. AMP */}
                <div className="glass-card p-6 border-obs-white/10 flex flex-col items-center gap-4 w-1/4 relative z-10">
                    <div className="bg-obs-white/5 p-3 rounded-lg text-jam-teal">
                        <Database className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-obs-white">AMP</h3>
                        <p className="text-xs text-obs-white/50 mt-1">Managed Prometheus</p>
                    </div>
                    <p className="text-xs text-obs-white/60 text-center italic mt-2">
                        Scalable Metric Storage
                    </p>
                </div>

                <ArrowRight className="text-obs-white/20 w-8 h-8 flex-shrink-0" />

                {/* 3. AMG */}
                <div className="glass-card p-6 border-obs-white/10 flex flex-col items-center gap-4 w-1/4 relative z-10">
                    <div className="bg-obs-white/5 p-3 rounded-lg text-jam-green">
                        <Layers className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-obs-white">AMG</h3>
                        <p className="text-xs text-obs-white/50 mt-1">Managed Grafana</p>
                    </div>
                    <p className="text-xs text-obs-white/60 text-center italic mt-2">
                        SSO & Visualization
                    </p>
                </div>
            </div>

            {/* Connecting Context - X-Ray */}
            <div className="mt-8 flex justify-center">
                <div className="glass-card p-4 border-obs-white/10 flex items-center gap-4 w-2/3 bg-obs-dark/30">
                    <div className="bg-obs-white/5 p-2 rounded text-obs-white">
                        <Cloud className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-obs-white">AWS X-Ray</h4>
                        <p className="text-xs text-obs-white/50">Simultaneously receives trace data from the same ADOT Sidecar.</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12 bg-obs-yellow/5 p-4 rounded-xl border border-obs-yellow/10 max-w-3xl mx-auto">
                <p className="text-obs-white text-lg font-medium">
                    "This stack provides <span className="text-obs-yellow font-bold">Standardization</span> (OTel) + <span className="text-obs-yellow font-bold">Scalability</span> (AWS Managed) + <span className="text-obs-yellow font-bold">Cost Control</span>."
                </p>
            </div>
        </div>
    );
};

export default Slide8b_GoldenPath;
