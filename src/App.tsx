import { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import { Star } from 'lucide-react';

// Import slide components
import TitleSlide from './slides/TitleSlide';
import Slide1a_PainPoints from './slides/Slide1a_PainPoints';
import Slide1_WhyNow from './slides/Slide1_WhyNow';
import Slide2_FinancialStakes from './slides/Slide2_FinancialStakes';
import Slide3_Evolution from './slides/Slide3_Evolution';
import Slide4_ThreePillars from './slides/Slide4_ThreePillars';
import Slide4a_Prerequisites from './slides/Slide4a_Prerequisites';
import Slide4b_Adoption from './slides/Slide4b_Adoption';
import Slide5_TheBridge from './slides/Slide5_TheBridge';
import Slide5a_Collector from './slides/Slide5a_Collector';
import Slide6_MarketLandscape from './slides/Slide6_MarketLandscape';
import Slide6a_AWSNativeServices from './slides/Slide6a_AWSNativeServices';
import Slide6b_AWSNativeWorkflow from './slides/Slide6b_AWSNativeWorkflow';
import Slide6c_AWSManagedOSS from './slides/Slide6c_AWSManagedOSS';
import Slide6d_ThirdPartySaaS from './slides/Slide6d_ThirdPartySaaS';
import Slide6e_Security from './slides/Slide6e_Security';
import Slide6f_AWSCoverageMap from './slides/Slide6f_AWSCoverageMap';
import Slide6g_AWSArchitectureReference from './slides/Slide6g_AWSArchitectureReference';
import Slide6h_DecisionMatrix from './slides/Slide6h_DecisionMatrix';
import Slide6i_MigrationPath from './slides/Slide6i_MigrationPath';
import Slide6j_OperationalBurden from './slides/Slide6j_OperationalBurden';
import Slide6k_ComplianceAudit from './slides/Slide6k_ComplianceAudit';
import Slide6l_DataResidency from './slides/Slide6l_DataResidency';
import Slide6m_FinOps from './slides/Slide6m_FinOps';
import Slide6n_IncidentAutomation from './slides/Slide6n_IncidentAutomation';
import Slide6o_InstrumentationReadiness from './slides/Slide6o_InstrumentationReadiness';
import Slide6p_ServiceOwnership from './slides/Slide6p_ServiceOwnership';
import Slide6q_ManagedServicesTiers from './slides/Slide6q_ManagedServicesTiers';
import Slide6r_VendorSprawl from './slides/Slide6r_VendorSprawl';
import Slide6s_SuccessBlueprint from './slides/Slide6s_SuccessBlueprint';
import Slide6t_MaturityModel from './slides/Slide6t_MaturityModel';

import Slide7_TCO from './slides/Slide7_TCO';
import Slide7a_TCODeepDive from './slides/Slide7a_TCODeepDive';
import Slide8_OutageChecklist from './slides/Slide8_OutageChecklist';
import Slide8a_Sampling from './slides/Slide8a_Sampling';
import Slide8b_GoldenPath from './slides/Slide8b_GoldenPath';
import Slide9_ProvenResults from './slides/Slide9_ProvenResults';
import Slide9a_SLOs from './slides/Slide9a_SLOs';
import Slide10_Conclusion from './slides/Slide10_Conclusion';
import Slide10a_DevLoop from './slides/Slide10a_DevLoop';
import Slide10b_NotSetAndForget from './slides/Slide10b_NotSetAndForget';
import Slide11_Demo from './slides/Slide11_Demo';

import logo from './assets/logo.svg';

const slides = [
  { id: 1, content: <TitleSlide /> },
  { id: 1.1, content: <Slide1a_PainPoints /> }, // Start with the problem
  { id: 2, content: <Slide1_WhyNow /> },
  { id: 3, content: <Slide2_FinancialStakes /> },
  { id: 4, content: <Slide3_Evolution /> },
  { id: 5, content: <Slide4_ThreePillars /> },
  { id: 5.1, content: <Slide4b_Adoption /> }, // Solution: Easy to start
  { id: 6, content: <Slide4a_Prerequisites /> },
  { id: 7, content: <Slide5_TheBridge /> },
  { id: 7.1, content: <Slide5a_Collector /> }, // Nice to have
  { id: 8, content: <Slide6_MarketLandscape /> },
  { id: 9, content: <Slide6a_AWSNativeServices /> },
  { id: 10, content: <Slide6b_AWSNativeWorkflow /> },
  { id: 11, content: <Slide6c_AWSManagedOSS /> },
  { id: 12, content: <Slide6d_ThirdPartySaaS /> },
  { id: 12.1, content: <Slide6e_Security /> }, // Nice to have
  { id: 12.2, content: <Slide6f_AWSCoverageMap /> },
  { id: 12.3, content: <Slide6g_AWSArchitectureReference /> },
  { id: 12.4, content: <Slide6h_DecisionMatrix /> },
  { id: 12.5, content: <Slide6i_MigrationPath /> },
  { id: 12.6, content: <Slide6j_OperationalBurden /> },
  { id: 12.7, content: <Slide6k_ComplianceAudit /> },
  { id: 12.8, content: <Slide6l_DataResidency /> },
  { id: 12.9, content: <Slide6m_FinOps /> },
  { id: 12.91, content: <Slide6n_IncidentAutomation /> },
  { id: 12.92, content: <Slide6o_InstrumentationReadiness /> },
  { id: 12.93, content: <Slide6p_ServiceOwnership /> },
  { id: 12.94, content: <Slide6q_ManagedServicesTiers /> },
  { id: 12.95, content: <Slide6r_VendorSprawl /> },
  { id: 12.96, content: <Slide6s_SuccessBlueprint /> },
  { id: 12.97, content: <Slide6t_MaturityModel /> },
  { id: 13, content: <Slide11_Demo /> },
  { id: 14, content: <Slide7_TCO /> },
  { id: 15, content: <Slide7a_TCODeepDive /> },
  { id: 16, content: <Slide8_OutageChecklist /> },
  { id: 16.1, content: <Slide8a_Sampling /> }, // Nice to have
  { id: 16.2, content: <Slide8b_GoldenPath /> }, // Nice to have
  { id: 17, content: <Slide9_ProvenResults /> },
  { id: 17.1, content: <Slide9a_SLOs /> }, // Measuring success
  { id: 18, content: <Slide10_Conclusion /> },
  { id: 18.1, content: <Slide10a_DevLoop /> }, // Nice to have
  { id: 18.2, content: <Slide10b_NotSetAndForget /> }, // Emphasize continuous ownership
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    const nextSlide = currentSlide + newDirection;
    if (nextSlide >= 0 && nextSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(nextSlide);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

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
      <div className="absolute bottom-6 left-10 text-obs-white/20 text-[10px] uppercase tracking-widest font-bold">
        Use Arrow Keys to Navigate
      </div>
    </div>
  );
}

export default App;
