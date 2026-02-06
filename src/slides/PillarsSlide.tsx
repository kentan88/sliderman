import React from 'react';
import { Activity, Binary, BarChart3, Zap } from 'lucide-react';

const PillarsSlide: React.FC = () => {
    return (
        <div className="w-full max-w-5xl space-y-12">
            <h2 className="text-5xl font-bold text-obs-yellow mb-16 items-center flex gap-4">
                <Activity className="w-12 h-12" /> The Three Pillars
            </h2>
            <div className="grid grid-cols-3 gap-8">
                {[
                    { title: 'Logs', icon: <Binary />, desc: 'Individual events recorded over time. The "what" and "why" of system behavior.' },
                    { title: 'Metrics', icon: <BarChart3 />, desc: 'Aggregated numeric data. The "how much" and "how frequent".' },
                    { title: 'Traces', icon: <Zap />, desc: 'End-to-end journey of a request. The "where" across distributed systems.' }
                ].map((item) => (
                    <div key={item.title} className="glass-card p-8 flex flex-col items-center text-center space-y-4 border-obs-white/10">
                        <div className="p-4 bg-obs-white/5 rounded-full text-obs-yellow">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-obs-yellow">{item.title}</h3>
                        <p className="text-obs-white font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PillarsSlide;
