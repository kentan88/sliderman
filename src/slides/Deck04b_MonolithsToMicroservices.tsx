import React from 'react';
import { Building2, Boxes, Eye, Gauge } from 'lucide-react';

const monolithWorkedBecause = [
  'Single deployable, single codebase, and one shared database made changes straightforward.',
  'Low service-to-service communication reduced network failure modes and operational complexity.',
  'Smaller traffic and team sizes meant local debugging and basic dashboards were often enough.',
];

const modernObservabilityWinsBecause = [
  'Distributed tracing follows one request across many services, queues, and databases.',
  'Correlated logs, metrics, and traces turn noisy symptoms into fast root-cause analysis.',
  'High-cardinality telemetry exposes per-tenant, per-endpoint, and per-release behavior in real time.',
];

const SlideMonolithsToMicroservices: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">From Monoliths to Microservices</h2>
        {/* <p className="text-xl text-obs-white/80 max-w-5xl mx-auto">
          Architecture changed from centralized systems to distributed platforms, so our troubleshooting model had to evolve too.
        </p> */}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="glass-card p-7 border-obs-white/10 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-obs-white/10">
            <div className="rounded-xl bg-jam-light-blue/15 p-3 text-jam-light-blue">
              <Building2 className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-obs-white">Why Monoliths Worked</h3>
              <p className="text-obs-white/50 text-sm uppercase tracking-wider font-mono">Past strengths</p>
            </div>
          </div>

          <div className="space-y-3">
            {monolithWorkedBecause.map((item) => (
              <div key={item} className="rounded-lg border border-obs-white/10 bg-obs-dark/40 p-4">
                <p className="text-obs-white/90 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-7 border-obs-yellow/30 bg-obs-yellow/5 ring-1 ring-obs-yellow/20 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-obs-white/10">
            <div className="rounded-xl bg-obs-yellow/15 p-3 text-obs-yellow">
              <Boxes className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-obs-white">Why Observability Wins Now</h3>
              <p className="text-obs-yellow/60 text-sm uppercase tracking-wider font-mono">Modern reality</p>
            </div>
          </div>

          <div className="space-y-3">
            {modernObservabilityWinsBecause.map((item) => (
              <div key={item} className="rounded-lg border border-obs-yellow/20 bg-obs-dark/40 p-4">
                <p className="text-obs-white/90 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card border-obs-white/10 p-5 flex items-center gap-6">
        <div className="flex items-center gap-2 text-obs-yellow">
          <Eye className="h-5 w-5" />
          <Gauge className="h-5 w-5" />
        </div>
        <p className="text-obs-white/90 text-lg">
          <span className="font-bold text-obs-yellow">Bottom line:</span> Monolith-era monitoring answered
          <span className="font-semibold"> "is it up?"</span>. Modern observability answers
          <span className="font-semibold"> "where is it failing, for whom, and why right now?"</span>
        </p>
      </div>
    </div>
  );
};

export default SlideMonolithsToMicroservices;
