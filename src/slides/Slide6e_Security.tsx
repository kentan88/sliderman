import React from 'react';
import { Lock, FileX, Globe, ShieldAlert } from 'lucide-react';
import Watermark from '../components/Watermark';

const Slide6e_Security: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8 relative">
            <Watermark />
            <h2 className="slide-title mb-12 relative z-10">
                Security & Governance: Safe by Design
            </h2>

            <div className="grid grid-cols-2 gap-12 relative z-10">
                {/* The Problem */}
                <div className="glass-card p-8 border-red-500/20 bg-red-500/5 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-500/10 rounded-lg text-red-400">
                            <ShieldAlert size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">The Risk</h3>
                    </div>
                    <p className="slide-body text-lg">
                        Developers accidentally logging PII (Emails, Credit Cards) or sending sensitive environment variables to the cloud.
                    </p>
                </div>

                {/* The Solution */}
                <div className="glass-card p-8 border-jam-green/20 bg-jam-green/5 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-jam-green/10 rounded-lg text-jam-green">
                            <Lock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-obs-white">The Solution</h3>
                    </div>
                    <p className="slide-body text-lg">
                        The Collector acts as a <strong>Privacy Firewall</strong>, scrubbing data <em>before</em> it leaves your VPC.
                    </p>
                </div>
            </div>

            <div className="glass-card p-8 mt-8 border-obs-white/10 relative z-10">
                <h3 className="text-xl font-bold text-obs-yellow mb-6">How it Works (Redaction Processor)</h3>
                <div className="flex items-center justify-between gap-4 font-mono text-sm">
                    {/* Input */}
                    <div className="flex-1 bg-obs-dark/50 p-4 rounded border border-red-500/30 opacity-70">
                        <div className="text-red-400 font-bold mb-2">RAW LOG</div>
                        <p className="text-obs-white/60">"User <span className="text-red-400 bg-red-500/10 px-1">jane@example.com</span> failed login..."</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 bg-obs-white/10 rounded text-obs-white">
                            <FileX size={24} />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-obs-white/50">Scrubbing</span>
                    </div>

                    {/* Output */}
                    <div className="flex-1 bg-obs-dark/50 p-4 rounded border border-jam-green/30">
                        <div className="text-jam-green font-bold mb-2">SAFE EXPORT</div>
                        <p className="text-obs-white/80">"User <span className="text-jam-green bg-jam-green/10 px-1">***REDACTED***</span> failed login..."</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-obs-white/40 text-sm mt-8 relative z-10">
                <Globe size={16} />
                <span>Compliant with GDPR, HIPAA, SOC2</span>
            </div>
        </div>
    );
};

export default Slide6e_Security;
