import React from 'react';
import { Cloud, Radar, ShieldCheck, Database, Activity, Layers } from 'lucide-react';

const Slide6f_AWSCoverageMap: React.FC = () => {
    const services = [
        { name: 'CloudWatch', desc: 'Metrics, logs, alarms', icon: <Activity className="w-6 h-6" />, tone: 'text-jam-blue-light' },
        { name: 'X-Ray', desc: 'Distributed tracing', icon: <Radar className="w-6 h-6" />, tone: 'text-jam-teal' },
        { name: 'CloudTrail', desc: 'Audit events', icon: <ShieldCheck className="w-6 h-6" />, tone: 'text-jam-green' },
        { name: 'OpenSearch', desc: 'Searchable logs', icon: <Database className="w-6 h-6" />, tone: 'text-obs-white/80' },
        { name: 'AMP / AMG', desc: 'Managed metrics + dashboards', icon: <Layers className="w-6 h-6" />, tone: 'text-obs-yellow' },
        { name: 'VPC Flow Logs', desc: 'Network telemetry', icon: <Cloud className="w-6 h-6" />, tone: 'text-obs-white/70' },
    ];

    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">AWS Native Coverage Map</h2>

            <div className="grid grid-cols-3 gap-8">
                {services.map((service) => (
                    <div key={service.name} className="glass-card p-6 border-obs-white/10 space-y-3">
                        <div className={`p-3 bg-obs-white/5 rounded-xl w-fit ${service.tone}`}>
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-obs-white">{service.name}</h3>
                        <p className="text-obs-white/70 text-sm font-medium">{service.desc}</p>
                    </div>
                ))}
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 flex items-center justify-between">
                <div>
                    <p className="text-obs-white text-xl font-bold">Coverage Outcome</p>
                    <p className="text-obs-white/70 text-sm">Most AWS workloads get baseline telemetry with zero extra infrastructure.</p>
                </div>
                <div className="text-right">
                    <p className="text-obs-yellow text-4xl font-black">80%+</p>
                    <p className="text-obs-white/50 text-xs uppercase tracking-widest">Day-1 Visibility</p>
                </div>
            </div>
        </div>
    );
};

export default Slide6f_AWSCoverageMap;
