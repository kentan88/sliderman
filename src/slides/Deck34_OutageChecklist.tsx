import React from 'react';
import { Search, AlertCircle, Play } from 'lucide-react';

const Slide8_OutageChecklist: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-16">
                The 3 AM Outage Checklist
            </h2>
            <div className="grid grid-cols-4 gap-6 relative">
                {/* Connecting Line */}
                <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-obs-white/5 via-obs-yellow/50 to-obs-white/5 -z-10" />

                <div className="glass-card p-6 flex flex-col items-center text-center space-y-6 border-obs-white/10 relative">
                    <div className="w-24 h-24 rounded-full bg-obs-dark border-4 border-obs-white/10 flex items-center justify-center z-10 mb-2 shadow-2xl">
                        <AlertCircle className="text-red-400 w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-obs-yellow">1. Detection</h3>
                    <p className="text-obs-white/80 text-sm leading-relaxed">
                        Identifying a specific spike (e.g., 99th Percentile Latency) rather than a vague error.
                    </p>
                </div>

                <div className="glass-card p-6 flex flex-col items-center text-center space-y-6 border-obs-white/10 relative">
                    <div className="w-24 h-24 rounded-full bg-obs-dark border-4 border-obs-white/10 flex items-center justify-center z-10 mb-2 shadow-2xl">
                        <Search className="text-jam-teal w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-obs-yellow">2. Isolation</h3>
                    <p className="text-obs-white/80 text-sm leading-relaxed">
                        Using a Service Map to find the specific red node (e.g., a timing-out Payment Gateway).
                    </p>
                </div>

                <div className="glass-card p-6 flex flex-col items-center text-center space-y-6 border-obs-white/10 relative">
                    <div className="w-24 h-24 rounded-full bg-obs-dark border-4 border-obs-white/10 flex items-center justify-center z-10 mb-2 shadow-2xl">
                        <div className="text-obs-yellow w-10 h-10 font-mono text-lg font-bold flex items-center justify-center border-2 border-obs-yellow rounded-lg">ID</div>
                    </div>
                    <h3 className="text-xl font-bold text-obs-yellow">3. Identification</h3>
                    <p className="text-obs-white/80 text-sm leading-relaxed">
                        Drilling into a Trace ID to find the exact 3rd-party API call causing the hang.
                    </p>
                </div>

                <div className="glass-card p-6 flex flex-col items-center text-center space-y-6 border-obs-white/10 relative">
                    <div className="w-24 h-24 rounded-full bg-obs-dark border-4 border-obs-white/10 flex items-center justify-center z-10 mb-2 shadow-2xl">
                        <Play className="text-jam-green w-10 h-10 fill-current" />
                    </div>
                    <h3 className="text-xl font-bold text-obs-yellow">4. Resolution</h3>
                    <p className="text-obs-white/80 text-sm leading-relaxed">
                        Bypassing the gateway or triggering a circuit breaker. <br />
                        <span className="text-jam-green font-bold block mt-2">MTTR: 30m → 5m</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide8_OutageChecklist;
