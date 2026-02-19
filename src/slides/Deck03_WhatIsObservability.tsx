import React from 'react';
import { Activity, FileText, Search } from 'lucide-react';

const SlideWhatIsObservability: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-10">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">What is Observability</h2>
      </div>

      <div className="glass-card p-10 border-obs-yellow/20 bg-obs-yellow/5 space-y-6">
        <p className="text-3xl leading-relaxed text-obs-white font-medium">
          "Observability is the ability to understand a system&apos;s internal state by analyzing its
          external outputs, such as logs, metrics, and traces."
        </p>
        <p className="text-sm font-mono uppercase tracking-[0.25em] text-obs-yellow/80">Red Hat</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="glass-card p-6 border-obs-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-jam-blue-light" />
            <span className="text-xl font-semibold text-obs-white">Metrics</span>
          </div>
          <p className="text-base leading-relaxed text-obs-white/75">
            Numerical measurements (CPU usage, error rates) that show if or when something is wrong at a glance.
          </p>
        </div>
        <div className="glass-card p-6 border-obs-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 text-jam-green" />
            <span className="text-xl font-semibold text-obs-white">Traces</span>
          </div>
          <p className="text-base leading-relaxed text-obs-white/75">
            Shows the end-to-end journey of a request across services to pinpoint where a failure occurred.
          </p>
        </div>
        <div className="glass-card p-6 border-obs-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-obs-yellow" />
            <span className="text-xl font-semibold text-obs-white">Logs</span>
          </div>
          <p className="text-base leading-relaxed text-obs-white/75">
            Immutable, timestamped records of discrete events that tell the detailed story of what happened at the code level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideWhatIsObservability;
