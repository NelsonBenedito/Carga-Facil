import React from 'react';
import {
  Check,
  Star,
  Shield,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

interface PricingSectionProps {
  onOpenContact: (plan: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="investimento" className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
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
            <span>Modelos de Aquisição Transparentes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Escolha a forma de contratação que melhor se adapta à empresa.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Sem pegadinhas ou custos ocultos. Duas opções estruturadas para atender desde quem busca
            menor desembolso inicial até quem prefere amortizar a licença de uso.
          </p>
        </motion.div>

        {/* 2 Big Pricing Cards with Staggered Slide-up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
        >
          
          {/* CARD 1 — RECOMENDADO (CargaFácil SaaS) */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl border-2 border-[#00C896] shadow-xl p-8 sm:p-10 flex flex-col justify-between transition-shadow duration-300"
          >
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-8 bg-[#00C896] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>RECOMENDADO</span>
            </div>

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mt-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F2937]">CargaFácil SaaS</h3>
                  <p className="text-xs text-[#009e75] font-semibold mt-0.5">
                    Menor investimento inicial e sistema sempre atualizado.
                  </p>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="bg-[#00C896]/5 border border-[#00C896]/20 rounded-2xl p-5 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                  {/* Implantação */}
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-500 block">
                      Implantação
                    </span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-600">R$</span>
                      <span className="text-3xl font-extrabold font-mono text-slate-900">
                        1.800
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      taxa única de setup inicial
                    </span>
                  </div>

                  {/* Mensalidade */}
                  <div className="pt-3 sm:pt-0 sm:pl-4">
                    <span className="text-[11px] uppercase font-bold text-[#009e75] block">
                      Mensalidade
                    </span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-600">R$</span>
                      <span className="text-3xl font-extrabold font-mono text-[#009e75]">
                        380
                      </span>
                      <span className="text-xs text-slate-500 font-sans">/mês</span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      inclui suporte e infraestrutura
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#00C896]/20 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Prazo de implantação:
                  </span>
                  <span className="font-bold text-slate-800">Até 5 semanas</span>
                </div>
              </div>

              {/* What is included */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  O que está incluso:
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {[
                    'Sistema web completo para gestão e conferência',
                    'Hospedagem em nuvem de alta disponibilidade',
                    'Banco de dados gerenciado e seguro',
                    'Rotinas de backups diários e automáticos',
                    'Atualizações contínuas de segurança e melhorias',
                    'Manutenção preventiva e corretiva',
                    'Suporte técnico direto com o desenvolvedor',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#00C896]/20 text-[#009e75] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenContact('plano_saas')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-semibold py-3.5 px-6 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>Escolher modelo SaaS</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                Ideal para começar rápido com baixo custo de entrada.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 — LICENÇA DE USO */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 flex flex-col justify-between transition-shadow duration-300"
          >
            <div>
              {/* Header */}
              <div className="mt-2 mb-4">
                <h3 className="text-2xl font-bold text-[#1F2937]">Licença de Uso</h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Estrutura para quem prefere amortizar a licença antecipadamente.
                </p>
              </div>

              {/* Pricing breakdown */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                  {/* Investimento */}
                  <div>
                    <span className="text-[11px] uppercase font-bold text-slate-500 block">
                      Investimento
                    </span>
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-600">R$</span>
                      <span className="text-3xl font-extrabold font-mono text-slate-900">
                        5.800
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      valor total da licença
                    </span>
                  </div>

                  {/* Parcelamento */}
                  <div className="pt-3 sm:pt-0 sm:pl-4">
                    <span className="text-[11px] uppercase font-bold text-slate-500 block">
                      Condição de Pagamento
                    </span>
                    <div className="mt-1 text-base sm:text-lg font-bold text-slate-800">
                      Até 4× de R$ 1.450
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      parcelamento do investimento
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    Prazo de implantação:
                  </span>
                  <span className="font-bold text-slate-800">Até 5 semanas</span>
                </div>
              </div>

              {/* What is included */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  O que está incluso:
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {[
                    'Implantação completa do sistema',
                    'Configuração inicial de produtos, rotas e regras',
                    'Licença de uso do sistema',
                    '3 meses de hospedagem inclusos',
                    '3 meses de suporte técnico inclusos',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Important Clarification */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 text-xs text-slate-600 space-y-2 mb-8">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-slate-500" />
                  Regras claras da Licença de Uso:
                </div>
                <p>
                  <strong>A licença de uso não possui mensalidade obrigatória.</strong>
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Após os 3 primeiros meses, caso a empresa queira continuar utilizando os
                  serviços de hospedagem, suporte e manutenção fornecidos pelo desenvolvedor,
                  esses serviços podem ser contratados opcionalmente por <strong>R$ 450/mês</strong>.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenContact('plano_licenca')}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3.5 px-6 rounded-xl border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <span>Escolher Licença de Uso</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <p className="text-center text-[11px] text-slate-400 mt-2.5">
                Estrutura de pagamento com serviços opcionais posteriores.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
