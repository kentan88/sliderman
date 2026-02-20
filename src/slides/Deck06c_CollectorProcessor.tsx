import React from 'react';
import { Filter, Shield, Layers, TimerReset } from 'lucide-react';

const SlideCollectorProcessor: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">OTel Collector: Processor</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          Processors transform and control telemetry before it is shipped to backends.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-card p-7 border-obs-yellow/30 bg-obs-yellow/5 ring-1 ring-obs-yellow/20">
          <h3 className="text-2xl font-bold text-obs-white mb-5 flex items-center gap-3">
            <Layers className="text-obs-yellow" />
            Most Common Processor Chain
          </h3>
          <div className="space-y-3 text-obs-white/85 text-lg">
            <p><span className="font-bold text-obs-yellow">memory_limiter</span> to prevent OOM in bursts</p>
            <p><span className="font-bold text-obs-yellow">batch</span> to reduce network and backend write load</p>
            <p><span className="font-bold text-obs-yellow">attributes/resource</span> to normalize env, team, and service tags</p>
          </div>
        </div>

        <div className="glass-card p-7 border-obs-white/10">
          <h3 className="text-2xl font-bold text-obs-white mb-5 flex items-center gap-3">
            <Filter className="text-jam-teal" />
            Cost + Compliance Controls
          </h3>
          <div className="space-y-4 text-obs-white/80 text-lg leading-relaxed">
            <p><span className="font-bold text-jam-teal">Filter/Tail sampling:</span> keep high-value events, cut noisy low-value telemetry.</p>
            <p><span className="font-bold text-jam-teal">Redaction:</span> remove PII/secrets before export.</p>
            <p><span className="font-bold text-jam-teal">Routing by signal:</span> metrics, traces, logs can follow different destinations.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="glass-card border-obs-white/10 p-4 flex items-center gap-3">
          <Shield className="h-5 w-5 text-jam-green shrink-0" />
          <p className="text-obs-white/85">Security posture improves when scrubbing happens centrally.</p>
        </div>
        <div className="glass-card border-obs-white/10 p-4 flex items-center gap-3">
          <TimerReset className="h-5 w-5 text-obs-yellow shrink-0" />
          <p className="text-obs-white/85">Sampling policies can be adjusted quickly without app redeploys.</p>
        </div>
      </div>
    </div>
  );
};

export default SlideCollectorProcessor;
