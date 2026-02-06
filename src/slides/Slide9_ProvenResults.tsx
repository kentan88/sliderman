import React from 'react';
import { TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const Slide9_ProvenResults: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-16">
                Proven Results
            </h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="glass-card p-8 flex flex-col items-center text-center space-y-8 border-obs-white/10 hover:border-obs-yellow/50 transition-colors duration-500">
                    <div className="p-6 bg-obs-white/5 rounded-full text-jam-green mb-4">
                        <TrendingDown size={48} />
                    </div>
                    <div>
                        <span className="text-6xl font-black text-obs-white">40%</span>
                        <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest mt-2">Reduction</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed px-4">
                        In total observability spending by eliminating vendor premiums.
                    </p>
                    <div className="text-xs text-obs-white/20 uppercase font-bold tracking-widest">Source: Apica</div>
                </div>

                <div className="glass-card p-8 flex flex-col items-center text-center space-y-8 border-obs-white/10 hover:border-obs-yellow/50 transition-colors duration-500">
                    <div className="p-6 bg-obs-white/5 rounded-full text-obs-yellow mb-4">
                        <Clock size={48} />
                    </div>
                    <div>
                        <span className="text-6xl font-black text-obs-white">85%</span>
                        <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest mt-2">Faster MTTR</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed px-4">
                        Dropping from 30 minutes to 5 minutes recovery time.
                    </p>
                    <div className="text-xs text-obs-white/20 uppercase font-bold tracking-widest">Source: Lenovo</div>
                </div>

                <div className="glass-card p-8 flex flex-col items-center text-center space-y-8 border-obs-white/10 hover:border-obs-yellow/50 transition-colors duration-500">
                    <div className="p-6 bg-obs-white/5 rounded-full text-jam-blue-light mb-4">
                        <ShieldCheck size={48} />
                    </div>
                    <div>
                        <span className="text-6xl font-black text-obs-white">60%</span>
                        <p className="text-obs-white/50 text-sm font-mono uppercase tracking-widest mt-2">Less Downtime</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed px-4">
                        By using real-time data to proactively remediate bugs.
                    </p>
                    <div className="text-xs text-obs-white/20 uppercase font-bold tracking-widest">Source: B2B Startup</div>
                </div>
            </div>
        </div>
    );
};

export default Slide9_ProvenResults;
