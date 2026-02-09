import React from 'react';
import { CheckCircle2, MinusCircle } from 'lucide-react';

const rows = [
    { label: 'Time to Value', aws: 'Strong', managed: 'Strong', self: 'Slow' },
    { label: 'Security & Governance', aws: 'Strong', managed: 'Strong', self: 'Variable' },
    { label: 'Operational Effort', aws: 'Low', managed: 'Medium', self: 'Heavy' },
    { label: 'Cost Predictability', aws: 'High', managed: 'Medium', self: 'Variable' },
    { label: 'Customization', aws: 'Medium', managed: 'High', self: 'Highest' },
];

const tone = (value: string) => {
    if (value === 'Strong' || value === 'Low' || value === 'High' || value === 'Highest') return 'text-jam-green';
    if (value === 'Medium') return 'text-jam-teal';
    return 'text-red-400';
};

const icon = (value: string) => {
    if (value === 'Slow' || value === 'Variable' || value === 'Heavy') return <MinusCircle className="w-4 h-4" />;
    return <CheckCircle2 className="w-4 h-4" />;
};

const Slide6h_DecisionMatrix: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Decision Matrix</h2>

            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] gap-4">
                <div />
                <div className="glass-card p-4 border-jam-light-yellow/40 bg-jam-light-yellow/15 text-center">
                    <p className="text-obs-white font-bold text-lg">AWS Native</p>
                    <p className="text-obs-white/50 text-xs font-mono uppercase tracking-widest">Recommended</p>
                </div>
                <div className="glass-card p-4 border-jam-mint/40 bg-jam-mint/10 text-center">
                    <p className="text-obs-white font-bold text-lg">Managed OSS</p>
                    <p className="text-obs-white/50 text-xs font-mono uppercase tracking-widest">Balanced</p>
                </div>
                <div className="glass-card p-4 border-jam-light-blue/40 bg-jam-light-blue/10 text-center">
                    <p className="text-obs-white font-bold text-lg">Self-Hosted</p>
                    <p className="text-obs-white/50 text-xs font-mono uppercase tracking-widest">Control</p>
                </div>

                {rows.map((row) => (
                    <React.Fragment key={row.label}>
                        <div className="glass-card p-4 border-jam-blue-light/30 bg-jam-blue-light/10">
                            <p className="text-obs-white/80 font-medium">{row.label}</p>
                        </div>
                        {[row.aws, row.managed, row.self].map((value, idx) => (
                            <div
                                key={`${row.label}-${idx}`}
                                className="glass-card p-4 border-obs-white/10 flex items-center justify-center gap-2 bg-obs-dark/40"
                            >
                                <span className={tone(value)}>{icon(value)}</span>
                                <span className={`text-sm font-bold ${tone(value)}`}>{value}</span>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>

            {/* <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">Start with AWS Native for speed and governance. Expand with MSP support only when you need deeper customization.</p>
            </div> */}
        </div>
    );
};

export default Slide6h_DecisionMatrix;
