import React from 'react';
import { BookOpenCheck, Component, GraduationCap } from 'lucide-react';

const Slide46_UpskillingOTel: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-10">Upskilling: Observability + OpenTelemetry</h2>

            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <GraduationCap className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-2xl font-bold text-obs-white">Core Capability</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Train teams on metrics, logs, traces, signal correlation, SLOs, and alert design.
                    </p>
                </div>

                <div className="glass-card p-7 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <Component className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-2xl font-bold text-obs-white">OpenTelemetry Adoption</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Standardize service naming, semantic conventions, context propagation, and collector patterns.
                    </p>
                </div>

                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <BookOpenCheck className="w-7 h-7 text-jam-teal" />
                    <h3 className="text-2xl font-bold text-obs-white">Delivery Format</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Hands-on labs, implementation clinics, and reusable playbooks to speed account onboarding.
                    </p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <p className="text-obs-white text-lg font-medium">Expected outcome: broader delivery confidence and less reliance on a few specialists.</p>
            </div>
        </div>
    );
};

export default Slide46_UpskillingOTel;
