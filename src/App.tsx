import { useState, useEffect, useCallback, useMemo } from 'react';
import Slide from './components/Slide';
import { Maximize2, Minimize2, Star } from 'lucide-react';

// Import slide components
import TitleSlide from './slides/Deck01_Title';
import SlideAgenda from './slides/Deck02_Agenda';
import SlideWhatIsObservability from './slides/Deck03_WhatIsObservability';
import SlideBiggestPainPoints from './slides/Deck03a_BiggestPainPoints';
import Slide1_WhyNow from './slides/Deck04_WhyNow';
import SlideMonolithsToMicroservices from './slides/Deck04b_MonolithsToMicroservices';
import SlidePainPointsBeforeAfter from './slides/Deck04a_PainPointsBeforeAfter';
import Slide3_Evolution from './slides/Deck05_MonitoringVsObservability';
import SlideRiseOfOpenTelemetry from './slides/Deck06_RiseOfOpenTelemetry';
import SlideOpenTelemetryCollector from './slides/Deck06a_TheOpenTelemetryCollector';
import SlideCollectorReceiver from './slides/Deck06a_SlideCollectorReceiver';
import SlideEdgeAgentFlow from './slides/Deck06a_SlideEdgeAgentFlow';
import SlideCollectorProcessor from './slides/Deck06a_SlideCollectorProcessor';
import SlideCollectorExporter from './slides/Deck06a_SlideCollectorExporter';
import SlideCollectorConfigFile from './slides/Deck06b_CollectorConfigFile';
import SlideCollectorAdvancedConfig from './slides/Deck06b_CollectorAdvancedConfig';

import Slide4b_Adoption from './slides/Deck07_AutoInstrumentation';
import Slide5_TheBridge from './slides/Deck08_OTelBridge';
import Slide5a_Collector from './slides/Deck09_OTelCollector';
import Slide6_MarketLandscape from './slides/Deck10_MarketLandscape';
import Slide6a_AWSNativeServices from './slides/Deck12_AWSNativeServices';
import Slide6b_AWSNativeWorkflow from './slides/Deck13_AWSNativeWorkflow';
import Slide6c_AWSManagedOSS from './slides/Deck15_AWSManagedOSS';
import Slide6d_ThirdPartySaaS from './slides/Deck16_ThirdPartySaaS';
import Slide6f_AWSCoverageMap from './slides/Deck14_AWSCoverageMap';
import Slide6h_DecisionMatrix from './slides/Deck11_DecisionMatrix';
import Slide6j_OperationalBurden from './slides/Deck17_OperationalBurden';
import Slide6t_MaturityModel from './slides/Deck21_MaturityModel';

import Slide7_TCO from './slides/Deck18_TCO';
import Slide7a_TCODeepDive from './slides/Deck19_TCODeepDive';
import Slide8a_Sampling from './slides/Deck20_SmartSampling';
import Slide9a_SLOs from './slides/Deck23_SLOs';
import Slide10_Conclusion from './slides/Deck26_Conclusion';
import Slide10b_NotSetAndForget from './slides/Deck25_NotSetAndForget';
import Slide11_Demo from './slides/Deck24_Demo';

import logo from './assets/logo.svg';

const slides = [
  // Intro
  { id: 1, content: <TitleSlide /> },
  { id: 52, content: <SlideAgenda /> },
  { id: 53, content: <SlideWhatIsObservability /> },
  { id: 63, content: <SlideBiggestPainPoints /> },
  { id: 7, content: <Slide3_Evolution /> },
  { id: 5, content: <Slide1_WhyNow /> },
  { id: 61, content: <SlideMonolithsToMicroservices /> },
  { id: 6, content: <SlidePainPointsBeforeAfter /> },
  { id: 54, content: <SlideRiseOfOpenTelemetry /> },
  { id: 55, content: <SlideOpenTelemetryCollector /> },
  { id: 56, content: <SlideCollectorReceiver /> },
  { id: 62, content: <SlideEdgeAgentFlow /> },
  { id: 57, content: <SlideCollectorProcessor/> },
  { id: 58, content: <SlideCollectorExporter/> },
  { id: 59, content: <SlideCollectorConfigFile /> },
  { id: 60, content: <SlideCollectorAdvancedConfig /> },

  // 2) Foundations
  { id: 11, content: <Slide4b_Adoption /> },
  { id: 12, content: <Slide5_TheBridge /> },
  { id: 13, content: <Slide5a_Collector /> },

  // 3) Platform choices and architecture
  { id: 15, content: <Slide6_MarketLandscape /> },
  { id: 16, content: <Slide6h_DecisionMatrix /> },
  { id: 17, content: <Slide6a_AWSNativeServices /> },
  { id: 18, content: <Slide6b_AWSNativeWorkflow /> },
  { id: 19, content: <Slide6f_AWSCoverageMap /> },
  { id: 21, content: <Slide6c_AWSManagedOSS /> },
  { id: 23, content: <Slide6d_ThirdPartySaaS /> },

  // 4) Operating model
  { id: 28, content: <Slide6j_OperationalBurden /> },
  { id: 41, content: <Slide6t_MaturityModel /> },

  // 5) Economics and reliability execution
  { id: 37, content: <Slide7_TCO /> },
  { id: 38, content: <Slide7a_TCODeepDive /> },
  { id: 39, content: <Slide9a_SLOs /> },
  { id: 40, content: <Slide8a_Sampling /> },

  // 6) Outcomes and close
  { id: 47, content: <Slide11_Demo /> },
  { id: 48, content: <Slide10b_NotSetAndForget /> },
  { id: 49, content: <Slide10_Conclusion /> },
];

const STAGE_WIDTH = 1920;
const STAGE_HEIGHT = 1080;
const STAGE_OVERSCAN = 1.3;

function App() {
  const getInitialSlide = () => {
    const params = new URLSearchParams(window.location.search);
    const rawSlide = Number(params.get('slide'));
    if (!Number.isFinite(rawSlide)) return 0;
    const zeroBased = Math.floor(rawSlide) - 1;
    if (zeroBased < 0 || zeroBased >= slides.length) return 0;
    return zeroBased;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);
  const [direction, setDirection] = useState(0);
  const isExportMode = new URLSearchParams(window.location.search).get('export') === '1';
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement));
  const [viewportSize, setViewportSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  const stars = useMemo(
    () =>
      [...Array(50)].map((_, index) => ({
        id: index,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 1}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`,
        rotation: `${Math.random() * 360}deg`,
      })),
    [],
  );

  const stageScale =
    Math.min(viewportSize.width / STAGE_WIDTH, viewportSize.height / STAGE_HEIGHT) *
    STAGE_OVERSCAN;

  const paginate = useCallback((newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide]);

  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        void toggleFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [paginate, toggleFullscreen]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[radial-gradient(1200px_650px_at_20%_0%,rgba(22,58,129,0.35),transparent_55%),radial-gradient(900px_500px_at_85%_100%,rgba(70,120,134,0.22),transparent_60%),linear-gradient(165deg,#0d1833_0%,#101F40_45%,#132e60_100%)] font-sans text-obs-white selection:bg-obs-yellow selection:text-obs-dark">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className="relative overflow-hidden"
          style={{
            width: STAGE_WIDTH,
            height: STAGE_HEIGHT,
            transform: `scale(${stageScale})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Background elements - now using Star icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
              <Star
                key={star.id}
                className="absolute text-white opacity-40 animate-pulse"
                fill="currentColor"
                strokeWidth={0}
                style={{
                  scale: 4,
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  animationDuration: star.animationDuration,
                  animationDelay: star.animationDelay,
                  transform: `rotate(${star.rotation})`,
                }}
              />
            ))}
          </div>

          {/* Branding */}
          {currentSlide > 0 && (
            <div className="absolute top-8 left-8 z-50">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Just After Midnight" className="h-10 w-auto" />
              </div>
            </div>
          )}

          <div className="absolute inset-0 z-10 w-full h-full">
            {slides.map((slide, index) => (
              <Slide key={slide.id} isActive={index === currentSlide} direction={direction}>
                {slide.content}
              </Slide>
            ))}
          </div>
        </div>
      </div>

      {/* Helper Text */}
      {!isExportMode && (
        <div className="absolute bottom-6 left-10 text-obs-white/20 text-[10px] uppercase tracking-widest font-bold">
          Use Arrow Keys to Navigate • Press F for Fullscreen
        </div>
      )}

      {!isExportMode && (
        <button
          type="button"
          onClick={() => void toggleFullscreen()}
          className="absolute bottom-5 right-8 z-50 inline-flex items-center gap-2 rounded-full border border-obs-white/30 bg-obs-dark/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-obs-white transition hover:border-obs-white/60 hover:bg-obs-dark/90"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      )}
    </div>
  );
}

export default App;
