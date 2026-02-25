# Speaker Script - Modern Observability

Use this as a near-verbatim talk track. Read naturally, pause between sections, and adapt examples to your audience.

## Slide 1 - Title
Say:
"Good [morning/afternoon], everyone. I’m Ken Tan, Lead Solutions Architect at Just After Midnight, and I’m joined by Shaun Teo, our Country Manager. Today we’re covering modern observability, beyond traditional monitoring. The goal of this session is practical: help you reduce incident resolution time, improve deployment confidence, and control observability cost as systems scale. By the end, you should have a clear blueprint for what to instrument, where to route telemetry, and how to operate this as an ongoing capability."

Transition:
"Let me quickly show you today’s agenda."

## Slide 2 - Agenda
Say:
"We’ll move through three parts. First, the case for observability, and why this has become urgent now. Second, architecture and economics, including AWS native, managed open-source, and SaaS trade-offs. Third, operational excellence at scale: how to keep observability effective over time using SLOs, sampling, and ownership discipline. Then we’ll do a short demo and close with concrete next steps."

Transition:
"Before architecture, we need one shared definition."

## Slide 3 - What is Observability
Say:
"Observability is the ability to understand a system’s internal state from external outputs: logs, metrics, and traces. Metrics tell us trends and health signals at scale. Traces tell us where time is spent and where requests fail across service boundaries. Logs provide event-level details and context for exact failure conditions. The key is correlation. If these three signals are siloed, you have data, but not insight."

Transition:
"That leads to an important distinction: monitoring versus observability."

## Slide 4 - Monitoring vs Observability
Say:
"Monitoring is excellent for predefined questions. For example: ‘Is CPU above 80 percent?’ or ‘Is error rate above threshold?’ Observability is for questions you did not predefine, like ‘Why is latency spiking only for users from one campaign and one API route after the latest deploy?’ In short, monitoring tells you when something is wrong. Observability tells you why it is wrong and where to fix it."

Transition:
"So why is this conversation happening now, and not ten years ago?"

## Slide 5 - Why Now
Say:
"Because architecture and delivery speed changed. We moved from fewer, centralized systems to distributed services, asynchronous workflows, and frequent releases. A single user request can now cross APIs, queues, databases, and third-party dependencies. Host-level graphs alone can’t explain user-impacting failures in that world. Reliability now depends on understanding interactions, not just individual components."

Transition:
"Let’s compare the old model and the modern model directly."

## Slide 6 - From Monoliths to Microservices
Say:
"Monoliths worked well for their time: one deployable, one codebase, one main database, fewer failure paths. Debugging was often local and straightforward. In modern distributed systems, one request can cross many services and network boundaries, so failures become partial, contextual, and harder to isolate. Observability wins in this environment because traces provide end-to-end flow, and correlated telemetry shows who is affected, where the failure is, and why it is happening now."

Transition:
"And that shift created a specific set of pain points for engineering teams."

## Slide 7 - Pain Points and Payoff
Say:
"Before observability maturity, teams face a black-box effect, high MTTR, alert fatigue, and fragmented tools. Incidents become search exercises instead of fix exercises. After implementing observability properly, teams get faster root cause analysis, alerts tied to user impact, and proactive optimization before major incidents happen. The biggest operational gain is MTTR reduction: less time locating the issue, more time fixing it."

Transition:
"A major enabler of this shift is OpenTelemetry."

## Slide 8 - Rise of OpenTelemetry
Say:
"OpenTelemetry became the common language for telemetry. That matters because it decouples instrumentation from backend choice. You can instrument once using open standards and route data to different analysis platforms as needs evolve. In practical terms, this lowers migration risk, reduces lock-in, and gives platform teams more control over long-term architecture decisions."

Transition:
"The core operational component in this model is the OpenTelemetry Collector."

## Slide 9 - OpenTelemetry Collector
Say:
"Think of the Collector as a telemetry control plane. It receives data once, processes it centrally, and routes it to one or many destinations. This is where you batch, enrich, sample, and redact telemetry before export. The strategic value is decoupling: application teams focus on emitting telemetry, while platform teams can change routing and policy without app rewrites."

Transition:
"Let’s break it into receiver, processor, and exporter."

## Slide 10 - Collector Receiver
Say:
"Receivers are the ingestion boundary. OTLP should be your default for traces, metrics, and logs from OpenTelemetry SDKs and agents. Additional receivers like Prometheus, Jaeger, Zipkin, and Fluent variants let legacy and mixed estates converge into one pipeline. Deployment can be edge-style as sidecars/daemons or centralized as gateway collectors, depending on topology and control requirements."

Transition:
"Once data is received, processors determine quality, cost, and compliance."

## Slide 11 - Collector Processor
Say:
"Processors are where policy lives. A common chain is memory limiter for stability, resource and attribute processors for metadata consistency, and batch for efficiency. Then you apply cost and quality controls like filtering and tail sampling to preserve high-value telemetry. This is also the right place for redaction of PII and secrets so governance is enforced centrally, not inconsistently in application code."

Transition:
"After processing, exporters send telemetry to the right destinations."

## Slide 12 - Collector Exporter
Say:
"Exporters connect telemetry to AWS services, managed OSS, and third-party platforms. The important pattern here is multi-home or dual export during migration: send to both old and new backends, compare parity, then cut over safely. This approach reduces operational risk and gives teams evidence-based confidence before decommissioning legacy pipelines."

Transition:
"Now I’ll show how simple the config starts."

## Slide 13 - Collector Basic Config
Say:
"This is a minimal working collector config. Receivers define how data comes in, processors define what happens to data, exporters define where it goes, and service pipelines wire those together per signal type: traces, metrics, and logs. Starting with a debug exporter is intentional: validate ingestion and processing first, then add production destinations once signal quality is confirmed."

Transition:
"Here’s what production-grade config typically adds."

## Slide 14 - Collector Advanced Config
Say:
"In production, you add stability controls, metadata governance, selective retention, and multi-destination routing. Memory limiter protects against bursts, batch reduces write amplification, resource attributes standardize tags like environment and team, and tail sampling prioritizes slow or error traces. Multiple exporters let you route each signal to the best backend while keeping architecture portable. Credentials should be injected via environment variables or secret managers, never hardcoded."

Transition:
"If this sounds heavy, auto-instrumentation gets teams started quickly."

## Slide 15 - Auto-Instrumentation
Say:
"This is the adoption accelerant. Manual instrumentation gives precision but takes engineering time. Auto-instrumentation agents provide immediate baseline visibility for HTTP calls, database operations, and exceptions with very low effort. A practical approach is phased: start with auto-instrumentation for broad coverage, then add manual spans only for high-value business workflows where extra semantic detail matters."

Transition:
"Now let’s connect open standard telemetry to AWS execution."

## Slide 16 - OTel and ADOT Bridge
Say:
"OpenTelemetry gives us the vendor-neutral standard. ADOT is AWS’s supported distribution that integrates well with AWS observability services. Together, this gives teams a strong balance: portability from open standards and operational confidence from AWS support and integrations. The design principle here is simple: instrument once, export anywhere."

Transition:
"And the Collector remains the universal adapter in this design."

## Slide 17 - Collector Universal Adapter
Say:
"This slide reinforces the pipeline model: receivers bring data in, processors apply policy, exporters send data out. The key architectural benefit is decoupling backend choice from application instrumentation. That means changing tools later does not require broad code changes across services, which is critical for long-term platform agility."

Transition:
"With this foundation, let’s evaluate the main architectural pathways."

## Slide 18 - Architectural Pathways
Say:
"You typically choose among four paths. AWS native is ideal for AWS-centric teams optimizing for speed and low operational overhead. Managed OSS suits teams that want open-source interfaces without running infrastructure. Third-party SaaS is attractive for advanced features and fast onboarding. Self-hosted OSS offers maximum control but usually comes with significant operational labor."

Transition:
"To make this objective, we use a weighted decision matrix."

## Slide 19 - Decision Matrix
Say:
"This matrix scores options by weighted criteria: time to value, governance, operational effort, cost predictability, and customization. Under these weights, AWS native scores highest because rollout speed, governance controls, and low platform toil dominate the decision. If your priorities differ, change the weights. The model is a decision aid, not a fixed verdict."

Transition:
"Now let’s look at the AWS-native building blocks."

## Slide 20 - AWS Native Services
Say:
"In AWS native observability, CloudWatch acts as the central metrics, logs, and alarms layer, while X-Ray provides distributed tracing and service maps for dependency analysis. Together they offer a strong baseline with minimal platform maintenance. For many AWS-first organizations, this gets to production value quickly without standing up and operating a separate observability platform stack."

Transition:
"Here is the end-to-end workflow in that model."

## Slide 21 - AWS Native Workflow
Say:
"The flow is collection, ingestion, visualization, then action. Workloads emit telemetry, AWS services aggregate it, dashboards and maps surface insights, and alarms trigger operational responses such as notifications or scaling actions. The critical message is that observability is only valuable when it drives decisions and response, not when it only accumulates data."

Transition:
"Coverage is broader than just two services."

## Slide 22 - AWS Native Coverage Map
Say:
"A practical AWS observability footprint includes CloudWatch and X-Ray, plus CloudTrail for auditability, OpenSearch for log analytics, AMP and AMG for metrics and dashboards, and VPC Flow Logs for network-level telemetry. This usually gives teams strong day-one baseline visibility. Then you prioritize deeper instrumentation around your most critical user journeys and failure paths."

Transition:
"For teams that want OSS standards with less toil, managed OSS is compelling."

## Slide 23 - AWS Managed Open Source
Say:
"Managed OSS gives you open-source ecosystems without self-hosting complexity. AMP provides scalable Prometheus-compatible metrics, and AMG provides managed Grafana with enterprise access integration. This approach is often the best middle ground for teams that value open tooling but do not want to run and patch observability infrastructure themselves."

Transition:
"Third-party SaaS is another common choice, with clear benefits and trade-offs."

## Slide 24 - Third-Party SaaS
Say:
"SaaS platforms are strong on user experience, advanced analytics, and rapid onboarding. The trade-offs are usually cost at scale, data egress, and sovereignty concerns when telemetry leaves your boundary. So this is fundamentally a buy-versus-build decision shaped by compliance, cost predictability, and required feature depth."

Transition:
"Over time, operational burden is often the deciding factor."

## Slide 25 - Operational Burden Comparison
Say:
"This comparison shows the hidden platform work: patching, scaling, availability engineering, and security hardening. Self-hosted options shift all of that into your team’s backlog. Managed models reduce that burden significantly. For most organizations, the winning strategy is whichever lets engineers spend more time improving service reliability and less time operating telemetry infrastructure."

Transition:
"Technology choices are only part of success; maturity is the other half."

## Slide 26 - Observability Maturity Model
Say:
"Observability adoption is a staged journey. Teams usually start with baseline dashboards and alerts, then improve correlation and root-cause speed, then mature into SLO-driven operations and proactive reliability engineering. The practical advice is to identify your current stage honestly and set the next stage as your near-term target. Don’t try to do everything at once."

Transition:
"Now let’s connect this to real cost over time."

## Slide 27 - TCO Overview
Say:
"Total cost is not just licensing. It includes infrastructure, engineering labor, data movement, and operational risk. Self-hosted often looks cheap on license but expensive in maintenance effort. SaaS can be fast to start but can become expensive at volume. AWS managed with OTel standards often provides a strong blend of control, flexibility, and predictable economics."

Transition:
"Let’s ground that with a concrete scenario."

## Slide 28 - TCO Deep Dive
Say:
"In this scenario, labor dominates self-hosted total cost, even when software license is zero. In SaaS, platform fees plus egress and growth-based overages create uncertainty. AWS native shows lower three-year cost here because it avoids egress for in-boundary telemetry and reduces operational maintenance burden. The exact numbers vary by environment, but the cost shape is what matters for strategic planning."

Transition:
"Cost control also depends on telemetry policy, especially trace sampling."

## Slide 29 - SLOs
Say:
"SLOs convert reliability into an explicit operating contract. SLI is the measurement, SLO is the target, and error budget is the allowed failure window that balances reliability and release velocity. For example, a 99.9 percent monthly SLO gives roughly 43 minutes of budgeted unavailability. Burn-rate based alerting then focuses attention by urgency, reducing noise and improving on-call effectiveness."

Transition:
"Sampling is the companion mechanism for balancing fidelity and spend."

## Slide 30 - Smart Sampling
Say:
"Head sampling is cheap and efficient, but it can miss rare, high-impact failures. Tail sampling waits for request outcome and keeps slow or failed traces, which improves diagnostic value at moderate processing cost. The practical strategy is hybrid: sample healthy high-volume traffic aggressively, but retain near-complete visibility for failures and latency outliers."

Transition:
"Let’s show this in action with a short demo."

## Slide 31 - Demo
Say:
"In this demo, we’ll trigger a controlled issue, follow a trace across services, correlate with logs and metrics, and identify root cause quickly. As we go, watch how the telemetry flow supports decision-making: detect, isolate, and respond. The point is not the dashboard clicks; it’s the reduction in time from symptom to confident fix."

Transition:
"After the demo, one final operating principle."

## Slide 32 - Not Set-and-Forget
Say:
"Observability is not a one-time project. Systems evolve, telemetry quality drifts, ownership changes, and cost and reliability targets move. That means observability needs product-style ownership: backlog, roadmap, quality reviews, and regular tuning. Teams that treat this as continuous discipline sustain reliability gains; teams that treat it as a setup task usually regress."

Transition:
"Let’s close with specific actions you can take next."

## Slide 33 - Conclusion and Call to Action
Say:
"Three actions. First, audit blind spots across critical user journeys, not just infrastructure components. Second, run an ADOT and Collector pilot on one high-impact service and validate end-to-end signal quality. Third, operationalize with SLOs, burn-rate alerting, and a sampling policy so reliability and cost are managed together. If you do these three well, your teams will ship faster with more confidence and fewer incident surprises. Thank you, and happy to take questions."

## Optional Q&A Answers (Short Form)
If asked "Where should we start this quarter?" say:
"Start with one service that has both high business impact and frequent incidents. Instrument it end-to-end, define 2-3 SLOs, and establish one clear on-call runbook using correlated telemetry."

If asked "How do we avoid vendor lock-in?" say:
"Adopt OpenTelemetry for instrumentation and use Collector-based routing. Keep semantic conventions clean and avoid backend-specific code in application services."

If asked "How do we cut cost quickly?" say:
"Tune retention by signal value, apply targeted sampling for traces, drop low-value high-cardinality dimensions, and enforce telemetry ownership per service team."
