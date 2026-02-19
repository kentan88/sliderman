import React from 'react';
import { Activity, AlertTriangle, RefreshCw, Users } from 'lucide-react';
import Watermark from '../components/Watermark';

const reasons = [
    {
        icon: Activity,
        title: 'Systems Change Daily',
        body: 'New services, deploys, and architecture changes continuously create fresh blind spots.',
        color: 'text-jam-blue-light',
    },
    {
        icon: AlertTriangle,
        title: 'Signals Degrade Over Time',
        body: 'Dashboards drift, alerts get noisy, and missing telemetry quietly breaks incident response.',
        color: 'text-jam-teal',
    },
    {
        icon: Users,
        title: 'Ownership Moves',
        body: 'Teams reorganize and rotate, so standards, runbooks, and SLOs must be actively maintained.',
        color: 'text-jam-green',
    },
    {
        icon: RefreshCw,
        title: 'Optimization Never Stops',
        body: 'Cost, performance, and reliability targets evolve, requiring constant tuning and governance.',
        color: 'text-obs-yellow',
    },
];

const Slide10b_NotSetAndForget: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-10 relative">
            <Watermark />

            <div className="text-center space-y-4 relative z-10">
                <h2 className="slide-title mb-0">Observability Is Not Set-and-Forget</h2>
                <p className="slide-subtitle mb-0">
                    It is a full-time operating discipline, not a one-time installation.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 relative z-10">
                {reasons.map(({ icon: Icon, title, body, color }) => (
                    <div key={title} className="glass-card p-6 border-obs-white/10 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-obs-white/5 ${color}`}>
                                <Icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-obs-white">{title}</h3>
                        </div>
                        <p className="text-lg text-obs-white/75 leading-relaxed">{body}</p>
                    </div>
                ))}
            </div>

            <div className="glass-card p-5 border-obs-yellow/20 bg-obs-yellow/5 text-center relative z-10">
                <p className="text-xl font-semibold text-obs-white">
                    Treat observability as a product with dedicated ownership, roadmap, and weekly iteration.
                </p>
            </div>
        </div>
    );
};

export default Slide10b_NotSetAndForget;
