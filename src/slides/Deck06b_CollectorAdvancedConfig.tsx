import React from 'react';
import { FileCode2 } from 'lucide-react';

const advancedCollectorConfig = `receivers:
  otlp:
    protocols:
      grpc:
      http:
  prometheus:
    config:
      scrape_configs:
        - job_name: "otel-collector"
          static_configs:
            - targets: ["0.0.0.0:8888"]

processors:
  memory_limiter:
    check_interval: 1s
    limit_mib: 1024
  batch:
    timeout: 5s
    send_batch_size: 2048
  resource:
    attributes:
      - key: environment
        value: production
        action: upsert
      - key: team
        value: platform
        action: upsert
  tail_sampling:
    decision_wait: 10s
    num_traces: 50000
    policies:
      - name: errors
        type: status_code
        status_code: {status_codes: [ERROR]}
      - name: slow-traces
        type: latency
        latency: {threshold_ms: 1000}

exporters:
  awsxray: {}
  awsemf: {}
  prometheusremotewrite:
    endpoint: "https://aps-workspaces.us-east-1.amazonaws.com/workspaces/ws-xxxx/api/v1/remote_write"
  otlphttp:
    endpoint: "https://api.honeycomb.io"
    headers:
      x-honeycomb-team: \${HONEYCOMB_API_KEY}

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [memory_limiter, resource, tail_sampling, batch]
      exporters: [awsxray, otlphttp]
    metrics:
      receivers: [otlp, prometheus]
      processors: [memory_limiter, resource, batch]
      exporters: [awsemf, prometheusremotewrite]
    logs:
      receivers: [otlp]
      processors: [memory_limiter, resource, batch]
      exporters: [otlphttp]`;

const SlideCollectorAdvancedConfig: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <div className="text-center space-y-3">
        <h2 className="slide-title mb-0">OTel Collector: Advanced Config</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          Production-style setup with enrichment, sampling, and multi-destination export.
        </p>
      </div>

      <div className="glass-card border-obs-yellow/30 bg-obs-dark/60 ring-1 ring-obs-yellow/20 p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg bg-obs-yellow/10 p-2 text-obs-yellow">
            <FileCode2 className="h-5 w-5" />
          </div>
          <p className="text-sm uppercase tracking-widest text-obs-white/60 font-bold">
            collector-config-advanced.yaml
          </p>
        </div>
        <pre className="max-h-[560px] overflow-auto rounded-xl border border-obs-white/10 bg-[#0b1328] p-4 text-[13px] leading-[1.3] text-obs-white/85">
          <code className="font-mono whitespace-pre">{advancedCollectorConfig}</code>
        </pre>
      </div>
    </div>
  );
};

export default SlideCollectorAdvancedConfig;
