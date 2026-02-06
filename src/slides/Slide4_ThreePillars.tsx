import React from 'react';
import { BarChart3, Map, FileCode } from 'lucide-react';

const Slide4_ThreePillars: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-16">
                The Three Pillars of Telemetry
            </h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="glass-card p-8 flex flex-col items-center text-center space-y-6 border-obs-white/10 group hover:-translate-y-2 transition-all duration-300">
                    <div className="p-5 bg-obs-white/5 rounded-full text-jam-blue-light group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 size={48} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-yellow mb-2">Metrics</h3>
                        <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">The Flare Gun / Dashboard</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        Numerical measurements (CPU usage, error rates) that show <span className="text-white font-bold">if or when</span> something is wrong at a glance.
                    </p>
                </div>

                <div className="glass-card p-8 flex flex-col items-center text-center space-y-6 border-obs-white/10 group hover:-translate-y-2 transition-all duration-300">
                    <div className="p-5 bg-obs-white/5 rounded-full text-jam-teal group-hover:scale-110 transition-transform duration-300">
                        <Map size={48} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-yellow mb-2">Traces</h3>
                        <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">The Map / Flight Recorder</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        Shows the end-to-end journey of a request across services to <span className="text-white font-bold">pinpoint where</span> a failure occurred.
                    </p>
                </div>

                <div className="glass-card p-8 flex flex-col items-center text-center space-y-6 border-obs-white/10 group hover:-translate-y-2 transition-all duration-300">
                    <div className="p-5 bg-obs-white/5 rounded-full text-jam-green group-hover:scale-110 transition-transform duration-300">
                        <FileCode size={48} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-obs-yellow mb-2">Logs</h3>
                        <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest">The Black Box</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        Immutable, timestamped records of discrete events that tell the <span className="text-white font-bold">detailed story</span> of what happened at the code level.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide4_ThreePillars;
