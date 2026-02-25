import React from 'react';

const SlidePreReq: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">Prerequisite to Observability</h2>
      </div>

      <div className="w-full">
        <img
          src={`${import.meta.env.BASE_URL}SlideRiseOfOpenTelemetry.png`}
          alt="Instrumentation and OpenTelemetry prerequisite infographic"
          className="w-full h-auto max-h-[250px] object-contain mx-auto"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="glass-card p-6 border-jam-green/35 bg-jam-green/5">
          <h3 className="text-2xl font-bold text-obs-white mb-4">OpenTelemetry Ingestion</h3>
          <ul className="space-y-2 text-lg text-obs-white/80 list-disc pl-6">
            <li>Open standard for logs, metrics, and traces</li>
            <li>Single instrumentation path across vendors</li>
            <li>Collector-based routing and processing flexibility</li>
            <li>Lower lock-in risk and easier platform changes</li>
          </ul>
        </div>

        <div className="glass-card p-6 border-rose-400/30 bg-rose-500/5">
          <h3 className="text-2xl font-bold text-obs-white mb-4">Proprietary Ingestion</h3>
          <ul className="space-y-2 text-lg text-obs-white/80 list-disc pl-6">
            <li>Vendor-specific agents, SDKs, and data formats</li>
            <li>Rework required when tools or vendors change</li>
            <li>Limited interoperability in multi-tool environments</li>
            <li>Higher migration cost and stronger lock-in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlidePreReq;
