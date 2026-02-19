import React from 'react';
import { AlertTriangle, Gauge, Target } from 'lucide-react';

const Slide9a_SLOs: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <h2 className="slide-title">SLOs: Turn Reliability into an Operating Contract</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-card border-obs-white/10 p-7">
          <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-obs-white">
            <Target className="text-obs-yellow" />
            Core Model
          </h3>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="text-obs-white/90">
              <span className="font-bold text-obs-yellow">SLI:</span> the user-facing metric
              (good events / valid events).
            </p>
            <p className="text-obs-white/90">
              <span className="font-bold text-obs-yellow">SLO:</span> the target reliability,
              for example <span className="font-mono text-obs-white">99.9%</span> per 30 days.
            </p>
            <p className="text-obs-white/90">
              <span className="font-bold text-obs-yellow">Error Budget:</span> the allowed failure
              window that aligns dev velocity with risk.
            </p>
          </div>
          <div className="mt-6 rounded-xl border border-obs-yellow/30 bg-obs-yellow/10 p-4 text-sm text-obs-white/85">
            <span className="font-bold text-obs-yellow">99.9% monthly SLO</span> = ~43 minutes
            budgeted unavailability.
          </div>
        </div>

        <div className="glass-card border-obs-white/10 p-7">
          <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-obs-white">
            <Gauge className="text-jam-teal" />
            Starter SLO Set
          </h3>
          <div className="space-y-3 text-lg text-obs-white/90">
            <p><span className="font-bold text-jam-teal">Availability:</span> successful requests / valid requests</p>
            <p><span className="font-bold text-jam-teal">Latency:</span> p95 request time below user tolerance</p>
            <p><span className="font-bold text-jam-teal">Freshness:</span> data/event delay within target window</p>
          </div>
          <div className="mt-6 rounded-xl border border-jam-teal/30 bg-jam-teal/10 p-4 text-sm text-obs-white/85">
            Scope each SLO to one critical user journey (login, checkout, API write, etc.).
          </div>
        </div>
      </div>

      <div className="glass-card border-obs-white/10 p-6">
        <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-obs-white">
          <AlertTriangle className="text-red-400" />
          Alerting Policy by Burn Rate
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="rounded-lg border border-jam-green/40 bg-jam-green/10 p-4">
            <p className="font-bold text-jam-green">Healthy</p>
            <p className="text-sm text-obs-white/80">Within budget. No page.</p>
          </div>
          <div className="rounded-lg border border-obs-yellow/40 bg-obs-yellow/10 p-4">
            <p className="font-bold text-obs-yellow">Fast Burn</p>
            <p className="text-sm text-obs-white/80">Ticket + team alert.</p>
          </div>
          <div className="rounded-lg border border-red-400/40 bg-red-500/10 p-4">
            <p className="font-bold text-red-300">Exhaustion Risk</p>
            <p className="text-sm text-obs-white/80">Page on-call immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9a_SLOs;
