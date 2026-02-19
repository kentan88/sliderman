import React from 'react';
import { Handshake, GraduationCap, SearchCheck, Container, Gauge, Flag, ArrowRight } from 'lucide-react';

const Slide50_JAMOnePager: React.FC = () => {
    return (
        <div className="w-full max-w-none px-1 space-y-5">
            <div className="flex items-end justify-between border-b border-obs-white/15 pb-3">
                <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-obs-yellow/90 font-semibold">JAM 2026</p>
                    <h2 className="slide-title mb-0 leading-tight">Observability Execution</h2>
                </div>
                <p className="text-sm text-obs-white/75 text-right max-w-md">
                    Workshops, enablement, and gap closure delivered as one repeatable account model.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="glass-card p-4 border-obs-white/10 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-obs-yellow/80" />
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-obs-white/25">01</span>
                        <Handshake className="w-6 h-6 text-obs-yellow" />
                    </div>
                    <h3 className="text-base font-bold text-obs-white mb-2">Workshops</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-obs-white/85 leading-relaxed">
                        <li>Service map, incident themes, critical journeys</li>
                        <li>Target-state standards, ownership, rollout sequence</li>
                        <li>90-day account plan with risk register</li>
                    </ul>
                </div>

                <div className="glass-card p-4 border-obs-yellow/25 bg-obs-yellow/5 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-obs-yellow" />
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-obs-white/25">02</span>
                        <GraduationCap className="w-6 h-6 text-obs-yellow" />
                    </div>
                    <h3 className="text-base font-bold text-obs-white mb-2">Upskilling (OTel)</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-obs-white/85 leading-relaxed">
                        <li>Logs, metrics, traces, signal correlation, SLO alerting</li>
                        <li>Semantic conventions, naming, and propagation standards</li>
                        <li>Labs, clinics, and reusable onboarding playbooks</li>
                    </ul>
                </div>

                <div className="glass-card p-4 border-obs-white/10 relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-jam-teal/80" />
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-black text-obs-white/25">03</span>
                        <SearchCheck className="w-6 h-6 text-jam-teal" />
                    </div>
                    <h3 className="text-base font-bold text-obs-white mb-2">Gap Assessment</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-obs-white/85 leading-relaxed">
                        <li>Coverage, trace continuity, alert noise, ownership gaps</li>
                        <li>Prioritize fixes by business risk and effort</li>
                        <li>Quarterly maturity scorecard by account</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 glass-card p-4 border-obs-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Container className="w-5 h-5 text-obs-yellow" />
                            <h3 className="text-base font-bold text-obs-white">Platform Direction</h3>
                        </div>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-obs-yellow/80">Client-fit model</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="rounded-md border border-obs-white/10 bg-obs-white/[0.02] px-3 py-2 text-obs-white/85">A. Single vendor for speed and simplicity</div>
                        <div className="rounded-md border border-obs-yellow/30 bg-obs-yellow/10 px-3 py-2 text-obs-white font-semibold">B. OTel-first + backend (default)</div>
                        <div className="rounded-md border border-obs-white/10 bg-obs-white/[0.02] px-3 py-2 text-obs-white/85">C. Hybrid for complex regulated estates</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-obs-white/75">
                        <ArrowRight className="w-4 h-4 text-obs-yellow" />
                        <p>Selection criteria: architecture, compliance, data residency, TCO, team capability, integration depth.</p>
                    </div>
                </div>

                <div className="col-span-2 glass-card p-4 border-obs-yellow/25 bg-obs-yellow/5 space-y-3">
                    <div className="flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-obs-yellow" />
                        <h3 className="text-base font-bold text-obs-white">2026 Success Measures</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="rounded-md border border-obs-white/10 px-3 py-2 text-obs-white/90">Higher maturity across priority accounts</p>
                        <p className="rounded-md border border-obs-white/10 px-3 py-2 text-obs-white/90">Faster detection and lower MTTR</p>
                        <p className="rounded-md border border-obs-white/10 px-3 py-2 text-obs-white/90">Reusable JAM delivery cadence</p>
                    </div>
                    <div className="flex items-start gap-2 border-t border-obs-white/10 pt-3">
                        <Flag className="w-4 h-4 text-obs-yellow mt-0.5" />
                        <p className="text-sm font-medium text-obs-white">Immediate next step: launch workshop wave one and baseline account maturity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide50_JAMOnePager;
