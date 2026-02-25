import React from 'react';

const SlideEdgeAgentFlow: React.FC = () => {
  return (
    <div className="w-full max-w-6xl">
      <img
        src={`${import.meta.env.BASE_URL}SlideEdgeAgentFlow.png`}
        alt="Edge and agent flow diagram"
        className="w-full h-auto max-h-[860px] object-contain mx-auto"
      />
    </div>
  );
};

export default SlideEdgeAgentFlow;
