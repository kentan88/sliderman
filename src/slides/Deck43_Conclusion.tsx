import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Slide10_Conclusion: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <div className="text-center space-y-6">
                <h2 className="slide-title">
                    Conclusion & Call to Action
                </h2>
                <p className="slide-subtitle">
                    Observability is a journey, not a product.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12">
                <div className="glass-card p-8 flex items-center gap-8 border-obs-white/10 group cursor-pointer hover:bg-obs-white/5 transition-all">
                    <div className="w-16 h-16 rounded-full bg-obs-dark flex items-center justify-center text-obs-yellow font-black text-2xl border-2 border-obs-white/10 group-hover:border-obs-yellow transition-colors">
                        1
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-obs-white group-hover:text-obs-yellow transition-colors">Audit Blind Spots</h3>
                        <p className="text-obs-white/60 text-lg mt-1">Identify where you are "flying blind" today.</p>
                    </div>
                    <CheckCircle2 className="text-obs-white/20 group-hover:text-obs-yellow w-8 h-8 transition-colors" />
                </div>

                <div className="glass-card p-8 flex items-center gap-8 border-obs-white/10 group cursor-pointer hover:bg-obs-white/5 transition-all">
                    <div className="w-16 h-16 rounded-full bg-obs-dark flex items-center justify-center text-obs-yellow font-black text-2xl border-2 border-obs-white/10 group-hover:border-obs-yellow transition-colors">
                        2
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-obs-white group-hover:text-obs-yellow transition-colors">Pilot ADOT</h3>
                        <p className="text-obs-white/60 text-lg mt-1">Implement AWS Distro for OpenTelemetry on one critical microservice.</p>
                    </div>
                    <CheckCircle2 className="text-obs-white/20 group-hover:text-obs-yellow w-8 h-8 transition-colors" />
                </div>

                <div className="glass-card p-8 flex items-center gap-8 border-obs-white/10 group cursor-pointer hover:bg-obs-white/5 transition-all">
                    <div className="w-16 h-16 rounded-full bg-obs-dark flex items-center justify-center text-obs-yellow font-black text-2xl border-2 border-obs-white/10 group-hover:border-obs-yellow transition-colors">
                        3
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-obs-white group-hover:text-obs-yellow transition-colors">Deploy with Confidence</h3>
                        <p className="text-obs-white/60 text-lg mt-1">Move from reactive dashboards to proactive tracing.</p>
                    </div>
                    <ArrowRight className="text-obs-white/20 group-hover:text-obs-yellow w-8 h-8 transition-colors" />
                </div>
            </div>

            <div className="pt-8 text-center">
                <p className="text-obs-white/40 italic">
                    "Give engineers the confidence to deploy on Friday afternoon."
                </p>
            </div>
        </div>
    );
};

export default Slide10_Conclusion;
