import React from 'react';

const Slide6t_MaturityModel: React.FC = () => {
    return (
        <div className="w-full max-w-6xl space-y-8">
            <h2 className="slide-title">Observability Maturity Model</h2>
            <div className="w-full">
                <img
                    src={`${import.meta.env.BASE_URL}Slide6t_MaturityModel.png`}
                    alt="Observability maturity model"
                    className="w-full h-auto max-h-[440px] object-contain mx-auto"
                />
            </div>
        </div>
    );
};

export default Slide6t_MaturityModel;
