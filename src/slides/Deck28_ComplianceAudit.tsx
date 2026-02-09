import React from 'react';
import { ShieldCheck, FileCheck, Lock, ClipboardList } from 'lucide-react';

const Slide6k_ComplianceAudit: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Compliance & Audit Trail Readiness</h2>

            <div className="grid grid-cols-2 gap-8">
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-xl text-jam-green">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-obs-white">Native Audit Signals</h3>
                            <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">CloudTrail + Config</p>
                        </div>
                    </div>
                    <p className="text-obs-white/80 text-lg">Activity logs stay in your account, searchable and immutable.</p>
                    <div className="flex items-center gap-3 text-obs-white/70 text-sm">
                        <FileCheck className="w-4 h-4" />
                        Evidence collection becomes a query, not a scramble.
                    </div>
                </div>

                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-xl text-obs-yellow">
                            <ClipboardList className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-obs-white">Policy Alignment</h3>
                            <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">IAM + Org Policies</p>
                        </div>
                    </div>
                    <p className="text-obs-white/80 text-lg">Access controls mirror your security model without extra vendors.</p>
                    <div className="flex items-center gap-3 text-obs-white/70 text-sm">
                        <Lock className="w-4 h-4" />
                        Least-privilege access is built in.
                    </div>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">AWS native observability aligns with compliance from day one.</p>
            </div>
        </div>
    );
};

export default Slide6k_ComplianceAudit;
