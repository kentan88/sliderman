import { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import { BarChart3, Blocks, Compass, Maximize2, Minimize2, ShieldCheck, Star, Target } from 'lucide-react';

// Import slide components
import TitleSlide from './slides/Deck01_Title';
import SlideAgenda from './slides/Deck02_Agenda';
import SlideWhatIsObservability from './slides/Deck53_WhatIsObservability';
import Slide1a_PainPoints from './slides/Deck02_PainPoints';
import Slide1b_SilentFailures from './slides/Deck03_SilentFailures';
import Slide1_WhyNow from './slides/Deck04_WhyNow';
import Slide2_FinancialStakes from './slides/Deck05_FinancialStakes';
import Slide3_Evolution from './slides/Deck06_MonitoringVsObservability';
import SlideRiseOfOpenTelemetry from './slides/Deck54_RiseOfOpenTelemetry';
import Slide4_ThreePillars from './slides/Deck07_ThreePillars';
import Slide4a_Prerequisites from './slides/Deck08_Prerequisites';
import Slide4b_Adoption from './slides/Deck09_AutoInstrumentation';
import Slide5_TheBridge from './slides/Deck10_OTelBridge';
import Slide5a_Collector from './slides/Deck11_OTelCollector';
import Slide6_MarketLandscape from './slides/Deck12_MarketLandscape';
import Slide6a_AWSNativeServices from './slides/Deck14_AWSNativeServices';
import Slide6b_AWSNativeWorkflow from './slides/Deck15_AWSNativeWorkflow';
import Slide6c_AWSManagedOSS from './slides/Deck18_AWSManagedOSS';
import Slide6d_ThirdPartySaaS from './slides/Deck20_ThirdPartySaaS';
import Slide6e_Security from './slides/Deck30_SecurityGovernance';
import Slide6f_AWSCoverageMap from './slides/Deck16_AWSCoverageMap';
import Slide6g_AWSArchitectureReference from './slides/Deck17_AWSArchitectureReference';
import Slide6h_DecisionMatrix from './slides/Deck13_DecisionMatrix';
import Slide6i_MigrationPath from './slides/Deck22_MigrationPath';
import Slide6j_OperationalBurden from './slides/Deck24_OperationalBurden';
import Slide6k_ComplianceAudit from './slides/Deck28_ComplianceAudit';
import Slide6l_DataResidency from './slides/Deck29_DataResidency';
import Slide6m_FinOps from './slides/Deck31_FinOps';
import Slide6n_IncidentAutomation from './slides/Deck27_IncidentAutomation';
import Slide6o_InstrumentationReadiness from './slides/Deck26_InstrumentationReadiness';
import Slide6p_ServiceOwnership from './slides/Deck25_ServiceOwnershipRACI';
import Slide6q_ManagedServicesTiers from './slides/Deck23_ManagedServicesTiers';
import Slide6r_VendorSprawl from './slides/Deck21_VendorSprawl';
import Slide6s_SuccessBlueprint from './slides/Deck37_SuccessBlueprint';
import Slide6t_MaturityModel from './slides/Deck36_MaturityModel';

import Slide7_TCO from './slides/Deck32_TCO';
import Slide7a_TCODeepDive from './slides/Deck33_TCODeepDive';
import Slide8_OutageChecklist from './slides/Deck34_OutageChecklist';
import Slide8a_Sampling from './slides/Deck35_SmartSampling';
import Slide8b_GoldenPath from './slides/Deck19_GoldenPathArchitecture';
import Slide9_ProvenResults from './slides/Deck38_ProvenResults';
import Slide9a_SLOs from './slides/Deck39_SLOs';
import Slide10_Conclusion from './slides/Deck43_Conclusion';
import Slide10a_DevLoop from './slides/Deck40_DeveloperLoop';
import Slide10b_NotSetAndForget from './slides/Deck42_NotSetAndForget';
import Slide11_Demo from './slides/Deck41_Demo';
import ArcSlide from './slides/ArcSlide';
import Slide50_JAMOnePager from './slides/Deck50_JAMOnePager';
import Slide51_JAMPlatformOptions from './slides/Deck51_JAMPlatformOptions';

import logo from './assets/logo.svg';

const slides = [
  // Intro
  { id: 1, content: <TitleSlide /> },
  { id: 52, content: <SlideAgenda /> },
  { id: 53, content: <SlideWhatIsObservability /> },
  // { id: 2, content: <ArcSlide title="Problem Framing" subtitle="Why current monitoring leaves teams flying blind." icon={Target} /> },
  // { id: 3, content: <Slide1a_PainPoints /> },
  // { id: 4, content: <Slide1b_SilentFailures /> },
  { id: 5, content: <Slide1_WhyNow /> },
  // { id: 6, content: <Slide2_FinancialStakes /> },
  { id: 7, content: <Slide3_Evolution /> },
  { id: 54, content: <SlideRiseOfOpenTelemetry /> },

  // 2) Foundations
  // { id: 8, content: <ArcSlide title="Foundations" subtitle="The telemetry model and standards needed to start right." icon={Blocks} /> },
  // { id: 9, content: <Slide4_ThreePillars /> },
  { id: 10, content: <Slide4a_Prerequisites /> },
  { id: 11, content: <Slide4b_Adoption /> },
  { id: 12, content: <Slide5_TheBridge /> },
  { id: 13, content: <Slide5a_Collector /> },

  // 3) Platform choices and architecture
  { id: 14, content: <ArcSlide title="Options & Architecture" subtitle="How to choose the right platform path and technical blueprint." icon={Compass} /> },
  { id: 15, content: <Slide6_MarketLandscape /> },
  { id: 16, content: <Slide6h_DecisionMatrix /> },
  { id: 17, content: <Slide6a_AWSNativeServices /> },
  { id: 18, content: <Slide6b_AWSNativeWorkflow /> },
  { id: 19, content: <Slide6f_AWSCoverageMap /> },
  // { id: 20, content: <Slide6g_AWSArchitectureReference /> },
  { id: 21, content: <Slide6c_AWSManagedOSS /> },
  { id: 22, content: <Slide8b_GoldenPath /> },
  { id: 23, content: <Slide6d_ThirdPartySaaS /> },
  { id: 24, content: <Slide6r_VendorSprawl /> },
  { id: 25, content: <Slide6i_MigrationPath /> },

  // 4) Operating model
  { id: 26, content: <ArcSlide title="Operating Model" subtitle="Who owns observability and how it runs day to day." icon={ShieldCheck} /> },
  { id: 27, content: <Slide6q_ManagedServicesTiers /> },
  { id: 28, content: <Slide6j_OperationalBurden /> },
  { id: 29, content: <Slide6p_ServiceOwnership /> },
  { id: 30, content: <Slide6o_InstrumentationReadiness /> },
  { id: 31, content: <Slide6n_IncidentAutomation /> },
  { id: 32, content: <Slide6k_ComplianceAudit /> },
  { id: 33, content: <Slide6l_DataResidency /> },
  { id: 34, content: <Slide6e_Security /> },

  // 5) Economics and reliability execution
  { id: 35, content: <ArcSlide title="Economics & Reliability" subtitle="Control cost while improving incident response and resilience." icon={BarChart3} /> },
  // { id: 36, content: <Slide6m_FinOps /> },
  { id: 37, content: <Slide7_TCO /> },
  { id: 38, content: <Slide7a_TCODeepDive /> },
  // { id: 39, content: <Slide8_OutageChecklist /> },
  { id: 40, content: <Slide8a_Sampling /> },
  { id: 41, content: <Slide6t_MaturityModel /> },
  // { id: 42, content: <Slide6s_SuccessBlueprint /> },

  // 6) Outcomes and close
  { id: 43, content: <ArcSlide title="Outcomes" subtitle="What success looks like and what to do next." icon={Star} /> },
  { id: 44, content: <Slide9_ProvenResults /> },
  { id: 45, content: <Slide9a_SLOs /> },
  // { id: 46, content: <Slide10a_DevLoop /> },
  { id: 47, content: <Slide11_Demo /> },
  { id: 48, content: <Slide10b_NotSetAndForget /> },
  { id: 49, content: <Slide10_Conclusion /> },

  // 7) JAM 2026 one-pager (condensed)
  // { id: 50, content: <Slide50_JAMOnePager /> },
  // { id: 51, content: <Slide51_JAMPlatformOptions /> },
];

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

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [paginate, toggleFullscreen]);

  return (
    <div className="relative h-screen w-screen bg-obs-dark overflow-hidden font-sans text-obs-white selection:bg-obs-yellow selection:text-obs-dark">
      {/* Background elements - now using Star icons */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white opacity-40 animate-pulse"
            fill="currentColor"
            strokeWidth={0}
            style={{
              scale: 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`, // Random size between 1px and 5px
              height: `${Math.random() * 4 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`, // Random rotation
            }}
          />
        ))}
      </div>

      {/* Branding */}
      {currentSlide > 0 && (
        <div className="fixed top-8 left-8 z-50">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Just After Midnight" className="h-10 w-auto" />
          </div>
        </div>
      )}

      {/* Helper Text */}
      <div className="absolute inset-0 z-10 w-full h-full">
        {slides.map((slide, index) => (
          <Slide key={slide.id} isActive={index === currentSlide} direction={direction}>
            {slide.content}
          </Slide>
        ))}
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
