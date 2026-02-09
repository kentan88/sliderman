import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const options = [
    { key: 'aws', label: 'AWS Native', note: 'Recommended', accent: 'bg-jam-light-yellow/15' },
    { key: 'managed', label: 'Managed OSS', note: 'Balanced', accent: 'bg-jam-mint/10' },
    { key: 'self', label: 'Self-Hosted', note: 'Control', accent: 'bg-jam-light-blue/10' },
] as const;

const criteria = [
    {
        label: 'Time to Value',
        weight: 30,
        scores: { aws: 5, managed: 4, self: 2 },
        values: { aws: 'Fast rollout', managed: 'Fast rollout', self: 'Slower rollout' },
    },
    {
        label: 'Security & Governance',
        weight: 25,
        scores: { aws: 5, managed: 4, self: 3 },
        values: { aws: 'Strong guardrails', managed: 'Strong guardrails', self: 'Depends on team' },
    },
    {
        label: 'Operational Effort',
        weight: 20,
        scores: { aws: 5, managed: 3, self: 1 },
        values: { aws: 'Low overhead', managed: 'Moderate overhead', self: 'Heavy overhead' },
    },
    {
        label: 'Cost Predictability',
        weight: 15,
        scores: { aws: 4, managed: 3, self: 2 },
        values: { aws: 'More predictable', managed: 'Moderate', self: 'Variable' },
    },
    {
        label: 'Customization',
        weight: 10,
        scores: { aws: 3, managed: 4, self: 5 },
        values: { aws: 'Good enough', managed: 'High flexibility', self: 'Maximum control' },
    },
] as const;

type OptionKey = (typeof options)[number]['key'];

const weightedScore = (option: OptionKey) => {
    const total = criteria.reduce((sum, row) => sum + row.scores[option] * row.weight, 0);
    return Math.round((total / (5 * 100)) * 100);
};

const scoreLabel = (score: number) => {
    if (score >= 85) return { text: 'Best Fit', tone: 'text-jam-green border-jam-green/30 bg-jam-green/10' };
    if (score >= 70) return { text: 'Good Fit', tone: 'text-jam-teal border-jam-teal/30 bg-jam-teal/10' };
    return { text: 'Niche Fit', tone: 'text-red-300 border-red-300/30 bg-red-300/10' };
};

const detailTone = (score: number) => {
    if (score >= 4) return 'text-jam-green';
    if (score === 3) return 'text-jam-teal';
    return 'text-red-300';
};

const Slide6h_DecisionMatrix: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-10">
            <h2 className="slide-title mb-12">Decision Matrix</h2>

            <div className="glass-card p-6 border-obs-white/10 bg-obs-dark/55">
                <div className="overflow-hidden rounded-xl border border-obs-white/10">
                    <table className="w-full table-fixed border-collapse">
                        <thead>
                            <tr>
                                <th className="w-[34%] px-4 py-4 text-left text-xs font-mono uppercase tracking-widest text-obs-white/60 bg-obs-dark/70">
                                    Criteria (Weight)
                                </th>
                                {options.map((option) => (
                                    <th key={option.key} className={`px-4 py-4 text-center border-l border-obs-white/10 ${option.accent}`}>
                                        <p className="text-obs-white font-bold text-base">{option.label}</p>
                                        <p className="text-obs-white/50 text-[11px] font-mono uppercase tracking-widest mt-1">{option.note}</p>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="bg-obs-dark/50">
                                <td className="px-4 py-4 border-t border-obs-white/10">
                                    <p className="text-obs-white/90 font-semibold">Weighted Score</p>
                                    <p className="text-obs-white/50 text-xs mt-1">Overall fit based on the selected weights</p>
                                </td>
                                {options.map((option) => {
                                    const score = weightedScore(option.key);
                                    const label = scoreLabel(score);
                                    return (
                                        <td key={option.key} className="px-4 py-4 border-l border-t border-obs-white/10 align-top">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-obs-white/70">Score</span>
                                                    <span className="font-black text-obs-white">{score}%</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-obs-white/10 overflow-hidden">
                                                    <div className="h-full rounded-full bg-jam-green" style={{ width: `${score}%` }} />
                                                </div>
                                                <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 border text-[11px] font-bold ${label.tone}`}>
                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                    {label.text}
                                                </div>
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>

                            {criteria.map((row) => (
                                <tr key={row.label} className="bg-obs-dark/35">
                                    <td className="px-4 py-3 border-t border-obs-white/10">
                                        <p className="text-obs-white/90 text-sm font-medium">{row.label}</p>
                                        <p className="text-obs-white/45 text-xs mt-1">Weight: {row.weight}%</p>
                                    </td>
                                    {options.map((option) => (
                                        <td key={`${row.label}-${option.key}`} className="px-4 py-3 border-l border-t border-obs-white/10 text-center">
                                            <span className={`text-sm font-medium ${detailTone(row.scores[option.key])}`}>{row.values[option.key]}</span>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Slide6h_DecisionMatrix;
