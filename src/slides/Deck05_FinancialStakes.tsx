import React from 'react';
import { DollarSign, UserX, Target } from 'lucide-react';

const Slide2_FinancialStakes: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-12">
                The Financial Stakes
            </h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="glass-card p-8 flex flex-col space-y-6 border-obs-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-jam-blue-light/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-blue-light/20 transition-all duration-500" />
                    <div className="p-4 bg-obs-white/5 rounded-full text-jam-blue-light w-fit mx-auto">
                        <DollarSign size={32} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-obs-white mb-2">Cost of Downtime</h3>
                        <p className="text-obs-yellow text-4xl font-black">$100k - $300k</p>
                        <p className="text-obs-white/50 text-sm mt-2 font-mono uppercase tracking-widest">Per Hour (Avg)</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        For medium-sized enterprises, every hour of downtime bleeds significant revenue.
                    </p>
                </div>

                <div className="glass-card p-8 flex flex-col space-y-6 border-obs-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-jam-teal/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-teal/20 transition-all duration-500" />
                    <div className="p-4 bg-obs-white/5 rounded-full text-jam-teal w-fit mx-auto">
                        <UserX size={32} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-obs-white mb-2">The Human Toll</h3>
                        <p className="text-jam-teal text-lg font-bold">Burnout & Fatigue</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        Minutes spent "guessing" during an outage burn out engineering talent and cost thousands of dollars.
                    </p>
                </div>

                <div className="glass-card p-8 flex flex-col space-y-6 border-obs-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-obs-yellow/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-obs-yellow/20 transition-all duration-500" />
                    <div className="p-4 bg-obs-white/5 rounded-full text-obs-yellow w-fit mx-auto">
                        <Target size={32} />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-obs-white mb-2">The Goal</h3>
                        <p className="text-obs-yellow text-lg font-bold">Guessing → Knowing</p>
                    </div>
                    <p className="text-obs-white/80 font-medium leading-relaxed">
                        Transition from reactive guesswork to proactive, data-driven certainty.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide2_FinancialStakes;
