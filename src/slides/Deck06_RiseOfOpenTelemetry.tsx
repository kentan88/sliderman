import React from 'react';

const SlideRiseOfOpenTelemetry: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-10">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">Pre-Req</h2>
        <p className="text-xl text-obs-white/75 max-w-4xl mx-auto">
          compare datadog agent vs opentelemetry collector agent
        </p>
      </div>

      <div className="w-full">
        <img
          src={`${import.meta.env.BASE_URL}SlideRiseOfOpenTelemetry.png`}
          alt="Rise of OpenTelemetry infographic"
          className="w-full h-auto max-h-[250px] object-contain mx-auto"
        />
      </div>
    </div>
  );
};

export default SlideRiseOfOpenTelemetry;
