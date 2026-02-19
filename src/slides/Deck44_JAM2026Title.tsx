import React from 'react';
import { CalendarCheck2, Target } from 'lucide-react';

const Slide44_JAM2026Title: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <div className="text-center space-y-6">
                <p className="text-sm uppercase tracking-[0.25em] text-obs-white/50 font-bold">One-Pager to Action</p>
                <h2 className="slide-title mb-0">Observability Plan 2026</h2>
                <p className="slide-subtitle mb-0">Just After Midnight</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="glass-card p-8 border-obs-yellow/20 bg-obs-yellow/5 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-obs-yellow/15 flex items-center justify-center">
                        <Target className="w-6 h-6 text-obs-yellow" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Primary Goal</h3>
                    <p className="text-obs-white/80 leading-relaxed">
                        Build a repeatable observability capability across client accounts with clear standards, stronger skills, and platform-fit delivery.
                    </p>
                </div>

                <div className="glass-card p-8 border-obs-white/10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-jam-teal/15 flex items-center justify-center">
                        <CalendarCheck2 className="w-6 h-6 text-jam-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">This Year Focus</h3>
                    <p className="text-obs-white/80 leading-relaxed">
                        Workshops, upskilling in observability and OpenTelemetry, gap identification across existing clients, and platform option decisions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slide44_JAM2026Title;
