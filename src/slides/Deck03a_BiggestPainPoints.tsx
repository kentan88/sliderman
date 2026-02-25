import React from 'react';
import { AlarmClockOff, Flame, Siren } from 'lucide-react';

const painPoints = [
  {
    title: 'High MTTR',
    detail:
      'Teams spend too long finding the root cause, extending outages and increasing customer impact.',
    icon: AlarmClockOff,
    accent: 'text-rose-300 bg-rose-500/15',
  },
  {
    title: 'Alert Fatigue',
    detail:
      'Engineers are flooded with noisy alerts, making it harder to detect the incidents that truly matter.',
    icon: Siren,
    accent: 'text-amber-300 bg-amber-500/15',
  },
  {
    title: 'Reactive Firefight',
    detail:
      'Work becomes incident-driven, with teams responding after damage instead of preventing failures early.',
    icon: Flame,
    accent: 'text-orange-300 bg-orange-500/15',
  },
];

const SlideBiggestPainPoints: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">Biggest Pain Points</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {painPoints.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="glass-card p-6 border-obs-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`rounded-lg p-2 ${item.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-2xl font-bold text-obs-white">{item.title}</p>
              </div>
              <p className="text-lg leading-relaxed text-obs-white/75">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideBiggestPainPoints;
