import React, { useState } from 'react';
import {
  Truck,
  RotateCcw,
  Cpu,
  FileCheck,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

export const HowItWorksSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Carregar',
      summary: 'Registrar o que saiu.',
      icon: Truck,
      description:
        'No início do expediente, o operador lança os produtos carregados no veículo, especificando quantidades e organização por compartimento.',
      badge: 'Expedição matinal',
    },
    {
      num: '02',
      title: 'Retornar',
      summary: 'Registrar o que voltou.',
      icon: RotateCcw,
      description:
        'Ao término das entregas, o motorista retorna à base e a equipe confere fisicamente as caixas e unidades que permaneceram no baú.',
      badge: 'Retorno à base',
    },
    {
      num: '03',
      title: 'Calcular',
      summary: 'O sistema converte e calcula automaticamente.',
      icon: Cpu,
      description:
        'Sem intervenção manual, o CargaFácil transforma embalagens em unidades e calcula a Venda Teórica (Carregamento − Retorno).',
      badge: 'Processamento imediato',
    },
    {
      num: '04',
      title: 'Conferir',
      summary: 'Registrar vendas e trocas.',
      icon: FileCheck,
      description:
        'São importados ou digitados os totais das vendas faturadas na rota e as trocas/avarias recolhidas junto aos clientes.',
      badge: 'Confronto de pedidos',
    },
    {
      num: '05',
      title: 'Apurar',
      summary: 'Visualizar divergências e fechar a operação.',
      icon: CheckCircle,
      description:
        'O sistema exibe o status de cada item: se bateu exatamente ou se houve sobra ou falta, permitindo fechar o acerto com total clareza.',
      badge: 'Fechamento diário',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Passo a Passo da Operação</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Do lançamento ao fechamento da rota
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Cinco etapas simples que substituem o caos de anotações no WhatsApp por um processo
            padronizado e auditável.
          </p>
        </motion.div>

        {/* 5-Step Horizontal Timeline for Desktop */}
        <div className="relative mb-12">
          
          {/* Connector Line behind steps */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-6 z-0" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10"
          >
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isSelected = selectedStep === index;
              return (
                <motion.div
                  key={step.num}
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  onClick={() => setSelectedStep(index)}
                  className={`cursor-pointer rounded-2xl p-5 border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#00C896] shadow-md ring-2 ring-[#00C896]/20'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-2xl font-black font-mono ${
                          isSelected ? 'text-[#00C896]' : 'text-slate-300'
                        }`}
                      >
                        {step.num}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#00C896] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-[#1F2937] mb-1">
                      {step.title}
                    </h3>

                    {/* Short Summary */}
                    <p className="text-xs font-medium text-slate-700 mb-3 leading-snug">
                      {step.summary}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase text-slate-400">
                      {step.badge}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C896]" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Step Detailed View Card with Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#00C896]/10 text-[#009e75] rounded-md border border-[#00C896]/20">
                ETAPA {steps[selectedStep].num} DE 05
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#1F2937]">
                {steps[selectedStep].title}: {steps[selectedStep].summary}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={selectedStep === 0}
                onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition"
              >
                Anterior
              </button>
              <button
                disabled={selectedStep === steps.length - 1}
                onClick={() => setSelectedStep((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#00C896] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00b084] transition"
              >
                Próxima
              </button>
            </div>
          </div>

          <div className="pt-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-sm sm:text-base text-slate-600 leading-relaxed"
              >
                {steps[selectedStep].description}
              </motion.p>
            </AnimatePresence>

            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
              <span>
                <strong>Benefício prático:</strong> Elimina o gargalo do final da tarde com prestação de contas rápida entre conferentes e motoristas.
              </span>
              <span className="text-slate-400 font-mono text-[11px] hidden md:inline">
                CargaFácil Workflow
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
