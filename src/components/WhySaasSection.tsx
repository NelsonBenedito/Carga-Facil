import React from 'react';
import { Wallet, Server, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

interface WhySaasSectionProps {
  onOpenContact: (plan?: string) => void;
}

export const WhySaasSection: React.FC<WhySaasSectionProps> = ({ onOpenContact }) => {
  const pillars = [
    {
      title: 'BAIXO INVESTIMENTO INICIAL',
      quote: 'Comece com R$ 1.800 de implantação.',
      description:
        'Não imobiliza o caixa da empresa em uma aquisição pesada logo no início. Você inicia a operação com um investimento enxuto.',
      icon: Wallet,
    },
    {
      title: 'INFRAESTRUTURA INCLUÍDA',
      quote: 'Hospedagem, banco, backups e manutenção já fazem parte da operação.',
      description:
        'Sua empresa não precisa se preocupar em contratar servidores à parte, configurar rotinas de segurança ou pagar por bancos de dados adicionais.',
      icon: Server,
    },
    {
      title: 'EVOLUÇÃO CONTÍNUA',
      quote: 'O sistema pode evoluir conforme novas necessidades surgirem.',
      description:
        'Conforme sua frota cresce ou novas regras operacionais aparecem, a plataforma recebe melhorias constantes com suporte contínuo.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C896]/10 text-[#009e75] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00C896]/20">
            <span>Visão Estratégica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Por que recomendamos o modelo SaaS?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Uma abordagem equilibrada entre custo acessível de entrada, segurança técnica e tranquilidade operacional para o seu negócio.
          </p>
        </motion.div>

        {/* 3 Pillars Grid with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-[#00C896]/40 transition-shadow hover:shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#009e75] mb-6 shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Pilar 0{idx + 1}
                  </span>

                  <h3 className="text-lg font-bold text-[#1F2937] mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-sm font-semibold text-[#009e75] mb-3">
                    “{pillar.quote}”
                  </div>

                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transparent Price Highlight Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="max-w-3xl mx-auto bg-gradient-to-r from-slate-900 to-[#1F2937] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00C896] mb-3">
              Proposta Clara & Sem Entrelinhas
            </span>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-4">
              <div className="text-center sm:text-right">
                <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                  R$ 1.800
                </div>
                <div className="text-xs text-slate-300 font-medium">para começar (setup)</div>
              </div>

              <div className="text-2xl font-bold text-[#00C896]">+</div>

              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-black font-mono text-[#00C896]">
                  R$ 380<span className="text-base font-normal text-slate-300">/mês</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  hospedagem, backups e suporte contínuo
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-4 leading-relaxed">
              Você tem um software estável, atualizado pelo desenvolvedor e focado exclusivamente na
              produtividade da sua equipe de conferência.
            </p>

            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenContact('why_saas_cta')}
                className="inline-flex items-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-semibold px-7 py-3 rounded-xl transition-colors shadow-md cursor-pointer"
              >
                <span>Falar sobre o modelo SaaS</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
