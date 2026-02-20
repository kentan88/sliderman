import React from 'react';
import { FileCode2 } from 'lucide-react';

const collectorConfig = `receivers:
  otlp:
    protocols:
      grpc:
      http:

processors:
  batch:
    timeout: 10s

exporters:
  debug: {}

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [debug]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [debug]
    logs:
      receivers: [otlp]
      processors: [batch]
      exporters: [debug]`;

const SlideCollectorConfigFile: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">OTel Collector: Basic Config</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          Minimal starter config: receive OTLP data, batch it, and output for validation.
        </p>
      </div>

      <div className="glass-card border-obs-yellow/30 bg-obs-dark/60 ring-1 ring-obs-yellow/20 p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-obs-yellow/10 p-2 text-obs-yellow">
            <FileCode2 className="h-5 w-5" />
          </div>
          <p className="text-sm uppercase tracking-widest text-obs-white/60 font-bold">
            collector-config-basic.yaml
          </p>
        </div>
        <pre className="overflow-hidden rounded-xl border border-obs-white/10 bg-[#0b1328] p-4 text-[15px] leading-[1.35] text-obs-white/85">
          <code className="font-mono whitespace-pre">{collectorConfig}</code>
        </pre>
      </div>
    </div>
  );
};

export default SlideCollectorConfigFile;
