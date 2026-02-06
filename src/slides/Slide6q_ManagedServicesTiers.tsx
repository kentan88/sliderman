import React from 'react';
import { BadgeCheck, Shield, Star } from 'lucide-react';

const tiers = [
    {
        name: 'Bronze',
        icon: <BadgeCheck className="w-6 h-6" />,
        tone: 'text-obs-white/80',
        items: ['Baseline dashboards', 'Monthly health review', 'Incident support'],
    },
    {
        name: 'Silver',
        icon: <Shield className="w-6 h-6" />,
        tone: 'text-obs-yellow',
        items: ['Custom alerts & SLOs', 'Weekly optimization', 'Cost tuning'],
    },
    {
        name: 'Gold',
        icon: <Star className="w-6 h-6" />,
        tone: 'text-jam-green',
        items: ['24/7 on-call', 'Automation runbooks', 'Dedicated success plan'],
    },
];

const Slide6q_ManagedServicesTiers: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Managed Services Tiers</h2>

            <div className="grid grid-cols-3 gap-8">
                {tiers.map((tier) => (
                    <div key={tier.name} className="glass-card p-8 border-obs-white/10 space-y-4">
                        <div className={`p-3 bg-obs-white/5 rounded-xl w-fit ${tier.tone}`}>
                            {tier.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">{tier.name}</h3>
                        <div className="space-y-2">
                            {tier.items.map((item) => (
                                <p key={item} className="text-obs-white/70 text-sm">• {item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">Adopt AWS native first, then choose the right level of managed support.</p>
            </div>
        </div>
    );
};

export default Slide6q_ManagedServicesTiers;
