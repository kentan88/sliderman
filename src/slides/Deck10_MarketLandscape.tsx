import React from 'react';

type Pathway = {
  title: string;
  bestFor: string;
  detail: string;
  image: string;
  alt: string;
};

const pathways: Pathway[] = [
  {
    title: 'AWS Native (CloudWatch)',
    bestFor: 'Pure AWS shops, small teams, low complexity.',
    detail: '',
    image: 'Deck12_MarketLandscape_1.png',
    alt: 'AWS Native placeholder icon',
  },
  {
    title: 'Managed OSS',
    bestFor: 'Standards-based scaling without infrastructure maintenance.',
    detail: '',
    image: 'Deck12_MarketLandscape_2.png',
    alt: 'Managed OSS placeholder icon',
  },
  {
    title: 'Third-Party SaaS',
    bestFor: "Feature-richness, 'buy vs. build,' fast-moving teams.",
    detail: '',
    image: 'Deck12_MarketLandscape_3.png',
    alt: 'Third-party SaaS placeholder icon',
  },
  {
    title: 'Self-Hosted OSS',
    bestFor: 'Extreme scale or data privacy. Warning: Significant labor costs.',
    detail: '',
    image: 'Deck12_MarketLandscape_4.png',
    alt: 'Self-hosted OSS placeholder icon',
  },
];

const Slide6_MarketLandscape: React.FC = () => {
  return (
    <div className="w-full max-w-6xl">
      <h2 className="mb-10 text-center text-5xl font-black tracking-tight text-obs-yellow">
        Architectural Pathways for Observability
      </h2>

      <div className="relative px-6 py-5 lg:px-8 lg:py-6">
        {/* <div className="pointer-events-none absolute left-1/2 top-5 bottom-5 w-px -translate-x-1/2 bg-obs-white/35" /> */}
        {/* <div className="pointer-events-none absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-obs-white/35 lg:left-8 lg:right-8" /> */}

        <div className="grid grid-cols-1 md:grid-cols-2">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.title}
              className={[
                'flex min-h-[250px] gap-6 p-6 lg:p-8',
                index % 2 === 0 ? 'md:pr-10' : 'md:pl-10',
              ].join(' ')}
            >
              <img
                src={`${import.meta.env.BASE_URL}${pathway.image}`}
                alt={pathway.alt}
                className="h-24 w-24 shrink-0 object-contain opacity-95 lg:h-28 lg:w-28"
              />

              <div className="pt-1">
                <h3 className="mb-3 text-4xl font-black leading-[1.05] text-obs-yellow">
                  {pathway.title}
                </h3>
                <p className="max-w-[30ch] text-[1.8rem] leading-tight text-obs-white/95">
                  <span className="font-black">Best for:</span>{' '}
                  <span className="font-medium">{pathway.bestFor}</span>
                </p>
                {pathway.detail ? (
                  <p className="mt-2 text-sm text-obs-white/70">{pathway.detail}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide6_MarketLandscape;
