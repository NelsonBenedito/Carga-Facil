import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InteractiveDemoSection } from './components/InteractiveDemoSection';
import { PricingSection } from './components/PricingSection';
import { WhySaasSection } from './components/WhySaasSection';
import { ImplementationSection } from './components/ImplementationSection';
import { MvpEvolutionSection } from './components/MvpEvolutionSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPlanModal, setSelectedPlanModal] = useState<string>('saas');

  const handleOpenContact = (sourceOrPlan = 'geral') => {
    setSelectedPlanModal(sourceOrPlan);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1F2937] flex flex-col font-['Poppins',sans-serif] selection:bg-[#00C896]/20 selection:text-[#008f6b]">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Seção 1 — Hero */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Seção 2 — O Problema */}
        <ProblemSection />

        {/* Seção 3 — A Solução */}
        <SolutionSection />

        {/* Seção 4 — Funcionalidades */}
        <FeaturesSection />

        {/* Seção 5 — Como Funciona */}
        <HowItWorksSection />

        {/* Seção 6 — Demonstração Visual */}
        <InteractiveDemoSection />

        {/* Seção 7 — Modelos de Contratação */}
        <PricingSection onOpenContact={handleOpenContact} />

        {/* Seção 8 — Por que o SaaS é Recomendado */}
        <WhySaasSection onOpenContact={handleOpenContact} />

        {/* Seção 9 — Implantação */}
        <ImplementationSection />

        {/* Seção 10 — MVP Agora e Evoluções Futuras */}
        <MvpEvolutionSection />

        {/* Seção 11 — CTA Final & Contato */}
        <FinalCtaSection onOpenContact={handleOpenContact} />
      </main>

      {/* Rodapé Oficial */}
      <Footer />

      {/* Lead & Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultPlan={selectedPlanModal}
      />
    </div>
  );
}

export default App;
