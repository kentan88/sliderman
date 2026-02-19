import React from 'react';

const agendaItems = [
  'The Case for Observability',
  'Architecture & Economics',
  'Operational Excellence at Scale',
];

const SlideAgenda: React.FC = () => {
  return (
    <div className="w-full max-w-5xl space-y-12">
      <div className="text-center space-y-4">
        <h2 className="slide-title mb-0">Agenda</h2>
      </div>

      <div className="space-y-5">
        {agendaItems.map((item, index) => (
          <div
            key={item}
            className="glass-card border-obs-white/10 px-8 py-6 flex items-center gap-6"
          >
            <div className="h-12 w-12 shrink-0 rounded-full bg-obs-yellow/15 border border-obs-yellow/40 flex items-center justify-center">
              <span className="text-xl font-black text-obs-yellow">{index + 1}</span>
            </div>
            <p className="text-3xl font-semibold text-obs-white tracking-tight">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideAgenda;
