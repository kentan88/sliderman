import React from 'react';

const Slide7_TCO: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title mb-8">
                Total Cost of Ownership (TCO)
            </h2>
            <div className="glass-card p-1 border-obs-white/10 overflow-hidden rounded-2xl">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-jam-blue-light border-b border-obs-white/10 text-obs-white/90 text-sm uppercase tracking-widest font-bold">
                            <th className="p-6">Feature</th>
                            <th className="p-6 text-obs-white">Self-Hosted (OSS)</th>
                            <th className="p-6 text-obs-white">Third-Party SaaS</th>
                            <th className="p-6 text-obs-dark bg-obs-yellow">AWS Managed (ADOT)</th>
                        </tr>
                    </thead>
                    <tbody className="text-obs-white font-medium">
                        <tr className="border-b border-obs-white/5 hover:bg-obs-white/5 transition-colors">
                            <td className="p-6 text-obs-white/80 bg-jam-blue-light/30">Operational Toil</td>
                            <td className="p-6 text-red-400">High (Manual patching)</td>
                            <td className="p-6 text-green-400">Low</td>
                            <td className="p-6 text-obs-dark bg-jam-light-yellow font-bold">Very Low</td>
                        </tr>
                        <tr className="border-b border-obs-white/5 hover:bg-obs-white/5 transition-colors">
                            <td className="p-6 text-obs-white/80 bg-jam-blue-light/30">Data Control</td>
                            <td className="p-6 text-green-400">Full (Inside VPC)</td>
                            <td className="p-6 text-red-400">Low (Leaves VPC)</td>
                            <td className="p-6 text-obs-dark bg-jam-light-yellow font-bold">Full (Inside AWS)</td>
                        </tr>
                        <tr className="border-b border-obs-white/5 hover:bg-obs-white/5 transition-colors">
                            <td className="p-6 text-obs-white/80 bg-jam-blue-light/30">Price Model</td>
                            <td className="p-6">Infra + Headcount</td>
                            <td className="p-6 text-red-400">Per Host/Metric</td>
                            <td className="p-6 text-obs-dark bg-jam-light-yellow font-bold">Pay-as-you-go</td>
                        </tr>
                        <tr className="hover:bg-obs-white/5 transition-colors">
                            <td className="p-6 text-obs-white/80 bg-jam-blue-light/30">Flexibility</td>
                            <td className="p-6 text-green-400">High</td>
                            <td className="p-6 text-red-400">Low (Lock-in)</td>
                            <td className="p-6 text-obs-dark bg-jam-light-yellow font-bold">High (OTel Standard)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className="text-right text-obs-white/20 text-xs uppercase tracking-widest font-bold">Source: AWS/User Data</div> */}
        </div>
    );
};

export default Slide7_TCO;
