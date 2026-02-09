import React from 'react';
import { Siren, ArrowRight, Bell, ClipboardCheck, PlayCircle } from 'lucide-react';

const Slide6n_IncidentAutomation: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Incident Response Automation</h2>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-4">
                <div className="glass-card p-5 border-obs-white/10 text-center space-y-2">
                    <Siren className="w-6 h-6 text-red-400 mx-auto" />
                    <p className="text-obs-white font-bold">Alarm</p>
                    <p className="text-obs-white/60 text-xs">CloudWatch</p>
                </div>
                <ArrowRight className="text-obs-yellow w-8 h-8" />
                <div className="glass-card p-5 border-obs-white/10 text-center space-y-2">
                    <Bell className="w-6 h-6 text-obs-yellow mx-auto" />
                    <p className="text-obs-white font-bold">Notify</p>
                    <p className="text-obs-white/60 text-xs">SNS / ChatOps</p>
                </div>
                <ArrowRight className="text-obs-yellow w-8 h-8" />
                <div className="glass-card p-5 border-obs-white/10 text-center space-y-2">
                    <ClipboardCheck className="w-6 h-6 text-jam-teal mx-auto" />
                    <p className="text-obs-white font-bold">Ticket</p>
                    <p className="text-obs-white/60 text-xs">ITSM</p>
                </div>
                <ArrowRight className="text-obs-yellow w-8 h-8" />
                <div className="glass-card p-5 border-obs-white/10 text-center space-y-2">
                    <PlayCircle className="w-6 h-6 text-jam-green mx-auto" />
                    <p className="text-obs-white font-bold">Runbook</p>
                    <p className="text-obs-white/60 text-xs">SSM / Automation</p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">AWS native signals plug directly into your incident workflow.</p>
            </div>
        </div>
    );
};

export default Slide6n_IncidentAutomation;
