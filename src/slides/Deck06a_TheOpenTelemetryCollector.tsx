import React from 'react';
import { Download, Send, SlidersHorizontal } from 'lucide-react';

const SlideOpenTelemetryCollector: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">The OpenTelemetry Collector</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          A vendor-neutral telemetry pipeline that lets you receive once, process centrally,
          and route to one or many backends without changing application code.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-4">
          <img
            src={`${import.meta.env.BASE_URL}Deck06a_TheOpenTelemetryCollector.png`}
            alt="OpenTelemetry Collector architecture overview"
            className="w-full h-auto max-h-[470px] object-contain"
          />
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-4">
          <div className="glass-card p-5 border-obs-white/10 space-y-3">
            <div className="w-fit rounded-xl bg-jam-blue-light/10 p-3 text-jam-blue-light">
              <Download className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-obs-white">Receive</h3>
            <p className="text-obs-white/75 leading-relaxed">
              Ingest OTLP, Prometheus, Jaeger, Zipkin, and other inputs from services and agents.
            </p>
          </div>

          <div className="glass-card p-5 border-obs-yellow/30 bg-obs-yellow/5 ring-1 ring-obs-yellow/20 space-y-3">
            <div className="w-fit rounded-xl bg-obs-yellow/10 p-3 text-obs-yellow">
              <SlidersHorizontal className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-obs-white">Process</h3>
            <p className="text-obs-white/75 leading-relaxed">
              Batch, sample, enrich, and redact telemetry in one control plane before export.
            </p>
          </div>

          <div className="glass-card p-5 border-obs-white/10 space-y-3">
            <div className="w-fit rounded-xl bg-jam-green/10 p-3 text-jam-green">
              <Send className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-obs-white">Route</h3>
            <p className="text-obs-white/75 leading-relaxed">
              Send data to CloudWatch, X-Ray, AMP/Grafana, or third-party tools in parallel.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card border-obs-white/10 p-5 text-center">
        <p className="text-lg text-obs-white/90">
          <span className="font-bold text-obs-yellow">Why it matters:</span> the Collector decouples
          instrumentation from backend choice and makes migrations lower-risk.
        </p>
      </div>
    </div>
  );
};

export default SlideOpenTelemetryCollector;
