import React from 'react';
import { DollarSign, SlidersHorizontal, BarChart3, Tag } from 'lucide-react';

const levers = [
    { label: 'Retention policies', desc: 'Right-size storage durations', icon: <SlidersHorizontal className="w-5 h-5" />, tone: 'text-obs-yellow' },
    { label: 'Sampling controls', desc: 'Reduce high-volume traces', icon: <BarChart3 className="w-5 h-5" />, tone: 'text-jam-teal' },
    { label: 'Log filters', desc: 'Drop low-value noise', icon: <SlidersHorizontal className="w-5 h-5" />, tone: 'text-jam-green' },
    { label: 'Tag-driven budgets', desc: 'Chargeback by team or service', icon: <Tag className="w-5 h-5" />, tone: 'text-jam-blue-light' },
];

const Slide6m_FinOps: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">FinOps for Observability</h2>

            <div className="grid grid-cols-2 gap-8">
                <div className="glass-card p-8 border-obs-white/10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-obs-white/5 rounded-xl text-obs-yellow">
                            <DollarSign className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-obs-white">Control the Curve</h3>
                            <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">Native cost levers</p>
                        </div>
                    </div>
                    <p className="text-obs-white/80 text-lg">AWS native services plug into existing budgets and tags.</p>
                </div>

                <div className="glass-card p-8 border-obs-white/10 grid grid-cols-2 gap-4">
                    {levers.map((lever) => (
                        <div key={lever.label} className="p-4 rounded-xl bg-obs-dark/40 border border-obs-white/5 space-y-2">
                            <div className={`w-fit p-2 rounded-lg bg-obs-white/5 ${lever.tone}`}>
                                {lever.icon}
                            </div>
                            <p className="text-obs-white font-bold text-sm">{lever.label}</p>
                            <p className="text-obs-white/60 text-xs">{lever.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">Observability spend becomes a managed line item, not a surprise bill.</p>
            </div>
        </div>
    );
};

export default Slide6m_FinOps;
