import React from 'react';
import { BarChart, Server } from 'lucide-react';

const Slide6c_AWSManagedOSS: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-8">
                AWS Managed Open Source
            </h2>

            <div className="bg-obs-white/5 border border-obs-white/10 rounded-2xl p-6 text-center mb-8">
                <p className="text-xl text-obs-white font-medium">
                    <span className="text-obs-yellow font-bold">The Best of Both Worlds:</span> Open standards without the operational toil.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-12">
                {/* AMP */}
                <div className="glass-card p-10 space-y-6 border-obs-white/10 relative group">
                    <div className="absolute top-0 right-0 p-24 bg-jam-teal/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-teal/20 transition-all duration-500" />
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-teal">
                            <Server className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">AMP</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">Amazon Managed Service for Prometheus</p>
                        </div>
                    </div>
                    <ul className="space-y-4 pt-2">
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-teal mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Scalable:</strong> Ingests millions of metrics without managing storage.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-teal mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Secure:</strong> Integrated with AWS IAM for granular access control.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-teal mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Compatible:</strong> 100% PromQL support for existing dashboards.</p>
                        </li>
                    </ul>
                </div>

                {/* AMG */}
                <div className="glass-card p-10 space-y-6 border-obs-white/10 relative group">
                    <div className="absolute top-0 right-0 p-24 bg-jam-green/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-jam-green/20 transition-all duration-500" />
                    <div className="flex items-center gap-6 border-b border-obs-white/10 pb-6">
                        <div className="p-4 bg-obs-white/5 rounded-2xl text-jam-green">
                            <BarChart className="w-12 h-12" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-obs-white">AMG</h3>
                            <p className="text-obs-white/40 text-sm font-mono uppercase tracking-wider mt-1">Amazon Managed Grafana</p>
                        </div>
                    </div>
                    <ul className="space-y-4 pt-2">
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-green mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Visuals:</strong> Rich, interactive dashboards everyone loves.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-green mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>SSO:</strong> Seamless login with AWS SSO / Corporate Identity.</p>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-jam-green mt-2" />
                            <p className="text-obs-white/80 text-lg"><strong>Data Sources:</strong> Plugins for CloudWatch, X-Ray, and Timestream.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slide6c_AWSManagedOSS;
