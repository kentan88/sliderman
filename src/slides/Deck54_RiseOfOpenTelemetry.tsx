import React from 'react';

const SlideRiseOfOpenTelemetry: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-10">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">Rise of OpenTelemetry</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          OpenTelemetry has become the common telemetry standard, making instrumentation portable
          and reducing vendor lock-in across modern platforms.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="glass-card p-8 border-obs-yellow/25 border-dashed min-h-[280px] flex flex-col justify-between">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-obs-yellow/80">Infographic Space</p>
          <p className="text-2xl font-bold text-obs-white">Adoption Trend</p>
        </div>
        <div className="glass-card p-8 border-obs-yellow/25 border-dashed min-h-[280px] flex flex-col justify-between">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-obs-yellow/80">Infographic Space</p>
          <p className="text-2xl font-bold text-obs-white">Ecosystem Growth</p>
        </div>
        <div className="glass-card p-8 border-obs-yellow/25 border-dashed min-h-[280px] flex flex-col justify-between">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-obs-yellow/80">Infographic Space</p>
          <p className="text-2xl font-bold text-obs-white">Enterprise Standardization</p>
        </div>
      </div>
    </div>
  );
};

export default SlideRiseOfOpenTelemetry;
