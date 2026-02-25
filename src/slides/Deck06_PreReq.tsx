import React from 'react';

const SlidePreReq: React.FC = () => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">Prerequisite to Observability</h2>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <img
          src={`${import.meta.env.BASE_URL}Deck06_PreReq.png`}
          alt="Prerequisites to observability diagram"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default SlidePreReq;
