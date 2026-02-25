import React from 'react';
import { CircleX, CircleCheck } from 'lucide-react';

const painPoints = [
  {
    title: 'The "Black Box" Effect',
    detail: 'Cannot track a single user request across dozens of microservices and databases.',
  },
  {
    title: 'High MTTR',
    detail: 'Engineers spend 80% of time finding the problem and only 20% fixing it.',
  },
  {
    title: 'Alert Fatigue',
    detail: 'Teams drown in alerts like "CPU at 90%" without user-impact context.',
  },
  {
    title: 'Siloed Troubleshooting',
    detail: 'Logs, metrics, and traces are fragmented across disconnected tools.',
  },
  {
    title: 'Reactive Firefighting',
    detail: 'Critical failures are often discovered by customer complaints first.',
  },
];

const benefits = [
  {
    title: 'End-to-End Visibility',
    detail: 'Distributed tracing maps exactly where bottlenecks and errors happen.',
  },
  {
    title: 'Faster Root Cause Analysis',
    detail: 'Correlating logs, metrics, and traces lowers MTTR and isolates failing code faster.',
  },
  {
    title: 'Actionable Context',
    detail: 'Alerts reflect user-facing impact, not only infrastructure symptoms.',
  },
  {
    title: 'Proactive Optimization',
    detail: 'Find degradations early and optimize resource use before breakage.',
  },
  {
    title: 'Better User Experience',
    detail: 'Higher reliability and uptime create happier, more engaged customers.',
  },
];

const SlidePainPointsBeforeAfter: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">The Pain Points and the Payoff</h2>
        {/* <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          Moving from monitoring-only to observability changes incident response from guesswork to precision.
        </p> */}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-card p-6 border-obs-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-rose-500/15 p-2 text-rose-300">
              <CircleX className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-obs-white">The "Before"</h3>
          </div>
          <div className="space-y-3">
            {painPoints.map((item) => (
              <div key={item.title} className="rounded-lg border border-obs-white/10 bg-obs-dark/40 p-3">
                <p className="text-obs-white text-lg font-semibold">{item.title}</p>
                <p className="text-obs-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 border-obs-yellow/30 bg-obs-yellow/5 ring-1 ring-obs-yellow/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-jam-green/15 p-2 text-jam-green">
              <CircleCheck className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-obs-white">The "After"</h3>
          </div>
          <div className="space-y-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-lg border border-obs-white/10 bg-obs-dark/40 p-3">
                <p className="text-obs-white text-lg font-semibold">{item.title}</p>
                <p className="text-obs-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidePainPointsBeforeAfter;
