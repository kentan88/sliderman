import React from 'react';
import { Lock, MapPin, Shield } from 'lucide-react';

const Slide6l_DataResidency: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-12">Data Residency & Access Control</h2>

            <div className="grid grid-cols-3 gap-8">
                <div className="glass-card p-8 border-obs-white/10 text-center space-y-4">
                    <div className="p-4 bg-obs-white/5 rounded-2xl w-fit mx-auto text-obs-yellow">
                        <Lock className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Stay In-Account</h3>
                    <p className="text-obs-white/70 text-sm">Telemetry never leaves your AWS boundary by default.</p>
                </div>

                <div className="glass-card p-8 border-obs-white/10 text-center space-y-4">
                    <div className="p-4 bg-obs-white/5 rounded-2xl w-fit mx-auto text-jam-green">
                        <MapPin className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Regional Control</h3>
                    <p className="text-obs-white/70 text-sm">Choose where data lives to meet residency requirements.</p>
                </div>

                <div className="glass-card p-8 border-obs-white/10 text-center space-y-4">
                    <div className="p-4 bg-obs-white/5 rounded-2xl w-fit mx-auto text-jam-teal">
                        <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-obs-white">Access Boundaries</h3>
                    <p className="text-obs-white/70 text-sm">IAM policies control every query and export.</p>
                </div>
            </div>

            <div className="glass-card p-6 border-obs-yellow/20 bg-obs-yellow/5 text-center">
                <p className="text-obs-white text-xl font-bold">Reduce risk by keeping observability data where your controls already exist.</p>
            </div>
        </div>
    );
};

export default Slide6l_DataResidency;
