import React from 'react';

const Slide1_WhyNow: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title">
                Why Are We Talking About Observability Now?
            </h2>
            <div className="w-full">
                <img
                    src={`${import.meta.env.BASE_URL}Slide1_WhyNow.png`}
                    alt="Why now observability overview"
                    className="w-full h-auto max-h-[400px] object-contain mx-auto"
                />
            </div>
        </div>
    );
};

export default Slide1_WhyNow;
