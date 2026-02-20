import React from 'react';
import { Download, Activity, Router, ShieldCheck } from 'lucide-react';

const SlideCollectorReceiver: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">OTel Collector: Receiver</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          Receivers ingest telemetry from apps, agents, and infrastructure using open and vendor protocols.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-4">
          <img
            src={`${import.meta.env.BASE_URL}Deck06a_SlideCollectorReceiver.png`}
            alt="Collector receiver diagram"
            className="w-full h-auto max-h-[470px] object-contain"
          />
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-4">
          <div className="glass-card p-5 border-obs-yellow/30 bg-obs-yellow/5 ring-1 ring-obs-yellow/20">
            <div className="mb-3 w-fit rounded-xl bg-obs-yellow/10 p-3 text-obs-yellow">
              <Download className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-obs-white mb-2">OTLP First</h3>
            <p className="text-obs-white/75 leading-relaxed">
              Standard endpoint for traces, metrics, and logs from OpenTelemetry SDKs and agents.
            </p>
          </div>

          <div className="glass-card p-5 border-obs-white/10">
            <div className="mb-3 w-fit rounded-xl bg-jam-blue-light/10 p-3 text-jam-blue-light">
              <Activity className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-obs-white mb-2">Protocol Coverage</h3>
            <p className="text-obs-white/75 leading-relaxed">
              Prometheus, Jaeger, Zipkin, Fluent Forward, and others let mixed estates feed one pipeline.
            </p>
          </div>

          <div className="glass-card p-5 border-obs-white/10">
            <div className="mb-3 w-fit rounded-xl bg-jam-teal/10 p-3 text-jam-teal">
              <Router className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-obs-white mb-2">Edge Or Gateway</h3>
            <p className="text-obs-white/75 leading-relaxed">
              Deploy as sidecar/daemon for local collection or centrally as a gateway for aggregation.
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card border-obs-white/10 p-5 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-jam-green shrink-0" />
        <p className="text-obs-white/85 text-lg">
          Receiver strategy: standardize ingest at the collector boundary to reduce app-level coupling.
        </p>
      </div>
    </div>
  );
};

export default SlideCollectorReceiver;
