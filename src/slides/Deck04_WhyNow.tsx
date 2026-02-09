import React from 'react';
import { AlertTriangle, Server, Network } from 'lucide-react';

const Slide1_WhyNow: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title">
                Why Are We Talking About Observability Now?
            </h2>
            <div className="space-y-6">
                <div className="glass-card p-6 flex items-start gap-6">
                    <div className="p-3 bg-obs-white/5 rounded-full text-obs-yellow mt-1">
                        <Server size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-yellow mb-2">The Hook</h3>
                        <p className="slide-body">
                            Moves from the simple, predictable world of monolithic applications to complex distributed systems (microservices, serverless, event-driven architectures).
                        </p>
                    </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-6">
                    <div className="p-3 bg-obs-white/5 rounded-full text-obs-yellow mt-1">
                        <AlertTriangle size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-yellow mb-2">The Problem</h3>
                        <p className="slide-body">
                            Traditional monitoring tools cannot handle the complexity of modern systems, leaving teams "flying blind" during 3 AM outages.
                        </p>
                    </div>
                </div>

                <div className="glass-card p-6 flex items-start gap-6">
                    <div className="p-3 bg-obs-white/5 rounded-full text-jam-blue-light mt-1">
                        <Network size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-jam-blue-light mb-2">The Reality</h3>
                        <p className="slide-body">
                            Critical failures often stem from "unknown-unknowns"—unexpected interactions that teams didn't know they should monitor.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide1_WhyNow;
