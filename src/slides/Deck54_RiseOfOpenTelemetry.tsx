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

      <div className="w-full">
        <img
          src="/SlideRiseOfOpenTelemetry.png"
          alt="Rise of OpenTelemetry infographic"
          className="w-full h-auto max-h-[250px] object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default SlideRiseOfOpenTelemetry;
