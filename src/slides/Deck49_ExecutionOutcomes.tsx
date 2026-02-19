import React from 'react';
import { BadgeCheck, Clock3, Wrench } from 'lucide-react';

const Slide49_ExecutionOutcomes: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-10">Execution Outcomes for 2026</h2>

            <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <Clock3 className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-2xl font-bold text-obs-white">Faster Detection & Recovery</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Better signal quality and cleaner ownership reduce incident triage and resolution times.
                    </p>
                </div>

                <div className="glass-card p-7 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <Wrench className="w-7 h-7 text-obs-yellow" />
                    <h3 className="text-2xl font-bold text-obs-white">Repeatable Delivery Model</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        Reusable workshop outputs, standards, and playbooks make delivery more consistent across accounts.
                    </p>
                </div>

                <div className="glass-card p-7 border-obs-white/10 space-y-4">
                    <BadgeCheck className="w-7 h-7 text-jam-teal" />
                    <h3 className="text-2xl font-bold text-obs-white">Future-Proof Platform Choices</h3>
                    <p className="text-obs-white/75 text-sm leading-relaxed">
                        OTel-aligned architecture supports flexibility while preserving governance, security, and cost control.
                    </p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-white/10 text-center">
                <p className="text-obs-white text-lg font-medium">Next step: validate priority accounts and start the first workshop wave.</p>
            </div>
        </div>
    );
};

export default Slide49_ExecutionOutcomes;
