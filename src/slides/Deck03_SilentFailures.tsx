import React from 'react';
import { CheckCircle2, ShoppingCart, UserX, XCircle } from 'lucide-react';

const Slide1b_SilentFailures: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-12">
                "It's Green, But It's Broken"
            </h2>

            <div className="grid grid-cols-2 gap-16 items-center">
                {/* Server View */}
                <div className="glass-card p-8 border-jam-green/50 bg-jam-green/5 space-y-6 opacity-60">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-obs-white">Server Dashboard</h3>
                        <div className="px-3 py-1 bg-jam-green/20 rounded-full text-jam-green text-sm font-mono border border-jam-green/50">
                            Status: Healthy
                        </div>
                    </div>

                    <div className="space-y-3 font-mono text-sm">
                        <div className="flex justify-between p-3 bg-obs-dark/50 rounded border-l-4 border-jam-green">
                            <span className="text-jam-green">GET /checkout</span>
                            <span className="text-obs-white">200 OK</span>
                        </div>
                        <div className="flex justify-between p-3 bg-obs-dark/50 rounded border-l-4 border-jam-green">
                            <span className="text-jam-green">GET /inventory</span>
                            <span className="text-obs-white">200 OK</span>
                        </div>
                        <div className="flex justify-between p-3 bg-obs-dark/50 rounded border-l-4 border-jam-green">
                            <span className="text-jam-green">POST /payment</span>
                            <span className="text-obs-white">200 OK</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-jam-green/80 italic text-sm">
                        <CheckCircle2 size={16} />
                        <span>All systems operational. No alerts triggered.</span>
                    </div>
                </div>

                {/* User Reality */}
                <div className="glass-card p-8 border-red-500/50 bg-red-500/10 space-y-6 relative">
                    <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-1 rounded-full font-bold shadow-lg animate-pulse">
                        THE REALITY
                    </div>

                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-obs-white">User Experience</h3>
                        <UserX className="text-red-500" size={32} />
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                            <ShoppingCart size={48} className="text-obs-white/20" />
                            <XCircle size={24} className="text-red-500 absolute -bottom-1 -right-1 bg-obs-dark rounded-full" />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-red-400">Checkout Failed</p>
                            <p className="text-sm text-obs-white/60">Button clicked 10 times. Nothing happened.</p>
                        </div>
                        <div className="w-full bg-obs-dark/50 p-2 rounded text-xs font-mono text-left text-red-300 overflow-hidden">
                            Uncaught TypeError: Cannot read properties of undefined (reading 'price')
                        </div>
                    </div>

                    <div className="text-red-400 italic text-sm font-medium text-center">
                        "I'm taking my business elsewhere."
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-2xl font-light text-obs-white">
                    Silent Failures <span className="text-obs-yellow font-bold">&gt;</span> Loud Outages
                </p>
                <p className="text-obs-white/50 text-sm mt-2">
                    Because loud outages get fixed. Silent failures kill trust slowly.
                </p>
            </div>
        </div>
    );
};

export default Slide1b_SilentFailures;
