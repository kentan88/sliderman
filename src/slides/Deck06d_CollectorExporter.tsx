import React from 'react';
import { Cloud, BarChart3, Boxes } from 'lucide-react';

const SlideCollectorExporter: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">OTel Collector: Exporter</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          Exporters deliver processed telemetry to one or many destinations for analysis and alerting.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="glass-card p-7 border-obs-white/10">
          <div className="mb-4 w-fit rounded-xl bg-jam-blue-light/10 p-3 text-jam-blue-light">
            <Cloud className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-obs-white mb-3">AWS Destinations</h3>
          <p className="text-obs-white/75 leading-relaxed">CloudWatch, X-Ray, and AMP for managed observability on AWS.</p>
        </div>

        <div className="glass-card p-7 border-obs-white/10">
          <div className="mb-4 w-fit rounded-xl bg-jam-teal/10 p-3 text-jam-teal">
            <BarChart3 className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-obs-white mb-3">Third-Party Tools</h3>
          <p className="text-obs-white/75 leading-relaxed">Send to Datadog, Splunk, New Relic, or other analytics platforms.</p>
        </div>

        <div className="glass-card p-7 border-obs-yellow/30 bg-obs-yellow/5 ring-1 ring-obs-yellow/20">
          <div className="mb-4 w-fit rounded-xl bg-obs-yellow/10 p-3 text-obs-yellow">
            <Boxes className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-obs-white mb-3">Multi-Home Strategy</h3>
          <p className="text-obs-white/75 leading-relaxed">Mirror critical signals to multiple backends during migration or validation phases.</p>
        </div>
      </div>

      {/* <div className="glass-card border-obs-white/10 p-5 flex items-center gap-3">
        <Send className="h-5 w-5 text-obs-yellow shrink-0" />
        <p className="text-obs-white/85 text-lg">
          Migration pattern: dual-export first, compare dashboards/alerts, then decommission legacy pipelines.
        </p>
      </div> */}
    </div>
  );
};

export default SlideCollectorExporter;
