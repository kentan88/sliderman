import React from 'react';
import { Users, Shield, Server } from 'lucide-react';

const rows = [
    { label: 'Instrumentation standards', customer: 'Approve', msp: 'Design', aws: '—' },
    { label: 'Collector / pipelines', customer: 'Review', msp: 'Operate', aws: 'Managed services' },
    { label: 'Storage & retention', customer: 'Policy', msp: 'Tune', aws: 'CloudWatch / AMP' },
    { label: 'SLOs & alerting', customer: 'Own', msp: 'Build', aws: 'Signals' },
    { label: 'On-call response', customer: 'Shared', msp: 'Lead', aws: '—' },
];

const Slide6p_ServiceOwnership: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Service Ownership Model (RACI)</h2>

            <div className="glass-card p-6 border-obs-white/10">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 items-center">
                    <div />
                    <div className="text-center space-y-2">
                        <Users className="w-6 h-6 text-obs-white/60 mx-auto" />
                        <p className="text-obs-white font-bold">Customer</p>
                    </div>
                    <div className="text-center space-y-2">
                        <Shield className="w-6 h-6 text-obs-yellow mx-auto" />
                        <p className="text-obs-white font-bold">MSP</p>
                    </div>
                    <div className="text-center space-y-2">
                        <Server className="w-6 h-6 text-obs-white/60 mx-auto" />
                        <p className="text-obs-white font-bold">AWS</p>
                    </div>

                    {rows.map((row) => (
                        <React.Fragment key={row.label}>
                            <p className="text-obs-white/80 text-sm font-medium">{row.label}</p>
                            <p className="text-center text-obs-white/70 text-sm">{row.customer}</p>
                            <p className="text-center text-obs-yellow text-sm font-bold">{row.msp}</p>
                            <p className="text-center text-obs-white/60 text-sm">{row.aws}</p>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">AWS handles the platform, MSP handles the operations, you own the outcomes.</p>
            </div>
        </div>
    );
};

export default Slide6p_ServiceOwnership;
