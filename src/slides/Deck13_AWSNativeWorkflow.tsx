import React from 'react';
import { ArrowRight, Box, Database, LineChart, Bell } from 'lucide-react';

const Slide6b_AWSNativeWorkflow: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-12">
            <h2 className="slide-title mb-8">
                AWS Native Workflow
            </h2>

            <div className="relative">
                {/* Flow Connector */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-obs-white/5 via-obs-yellow/30 to-obs-white/5 -translate-y-1/2 -z-10" />

                <div className="grid grid-cols-4 gap-6">
                    {/* Step 1: Collection */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="glass-card p-6 border-obs-white/10 w-full aspect-square flex flex-col items-center justify-center gap-4 group hover:border-obs-yellow/50 transition-colors">
                            <Box className="w-12 h-12 text-jam-blue-light" />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-obs-white">Collection</h3>
                                <p className="text-xs text-obs-white/50 mt-2">EC2, Lambda, ECS</p>
                            </div>
                        </div>
                        <div className="text-obs-white/40 text-sm font-mono">Emits Data</div>
                    </div>

                    {/* Step 2: Ingestion */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="glass-card p-6 border-obs-white/10 w-full aspect-square flex flex-col items-center justify-center gap-4 group hover:border-obs-yellow/50 transition-colors relative">
                            {/* Arrow Overlay */}
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-obs-dark p-1 rounded-full border border-obs-white/10">
                                <ArrowRight className="w-4 h-4 text-obs-yellow" />
                            </div>
                            <Database className="w-12 h-12 text-jam-teal" />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-obs-white">Ingestion</h3>
                                <p className="text-xs text-obs-white/50 mt-2">CloudWatch API <br /> X-Ray Daemon</p>
                            </div>
                        </div>
                        <div className="text-obs-white/40 text-sm font-mono">Aggregates</div>
                    </div>

                    {/* Step 3: Visualization */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="glass-card p-6 border-obs-white/10 w-full aspect-square flex flex-col items-center justify-center gap-4 group hover:border-obs-yellow/50 transition-colors relative">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-obs-dark p-1 rounded-full border border-obs-white/10">
                                <ArrowRight className="w-4 h-4 text-obs-yellow" />
                            </div>
                            <LineChart className="w-12 h-12 text-jam-green" />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-obs-white">Visualize</h3>
                                <p className="text-xs text-obs-white/50 mt-2">Dashboards <br /> ServiceLens Map</p>
                            </div>
                        </div>
                        <div className="text-obs-white/40 text-sm font-mono">Insights</div>
                    </div>

                    {/* Step 4: Action */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="glass-card p-6 border-obs-white/10 w-full aspect-square flex flex-col items-center justify-center gap-4 group hover:border-obs-yellow/50 transition-colors relative">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-obs-dark p-1 rounded-full border border-obs-white/10">
                                <ArrowRight className="w-4 h-4 text-obs-yellow" />
                            </div>
                            <Bell className="w-12 h-12 text-jam-blue-light" />
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-obs-white">Action</h3>
                                <p className="text-xs text-obs-white/50 mt-2">SNS Alarms <br /> Auto-Scaling</p>
                            </div>
                        </div>
                        <div className="text-obs-white/40 text-sm font-mono">Response</div>
                    </div>
                </div>
            </div>

            {/* <div className="text-center mt-12 bg-obs-white/5 p-4 rounded-xl border border-obs-white/10">
                <p className="text-obs-white text-lg font-medium">
                    "From code to click to alarm in one ecosystem."
                </p>
            </div> */}
        </div>
    );
};

export default Slide6b_AWSNativeWorkflow;
