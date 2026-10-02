import React from 'react';
import { MessageSquareWarning, Calculator, GitCompare, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      step: '01',
      title: 'Comunicação fragmentada',
      description: 'Informações chegam por WhatsApp misturando caixas, fardos e unidades.',
      icon: MessageSquareWarning,
      tag: 'Canais dispersos',
      details:
        'Mensagens de áudio, textos soltos e fotos de cadernos geram confusão na triagem e dados incompletos.',
    },
    {
      step: '02',
      title: 'Conversão manual',
      description: 'A equipe precisa transformar embalagens em unidades para realizar a conferência.',
      icon: Calculator,
      tag: 'Risco de erro de cálculo',
      details:
        'Cada produto possui seu fator específico (ex.: fardo c/ 24, caixa c/ 12). Multiplicações manuais tomam tempo e causam enganos.',
    },
    {
      step: '03',
      title: 'Conferência pesada',
      description: 'Carregamento, vendas, retornos e trocas precisam ser comparados manualmente.',
      icon: GitCompare,
      tag: 'Fechamento demorado',
      details:
        'O confronto entre o que saiu do estoque, o que voltou físico no caminhão e os pedidos faturados consome horas ao fim do dia.',
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-28 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>O Gargalo Operacional</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            O problema não está na informação.{' '}
            <span className="text-[#64748B] block mt-1 font-semibold">
              Está no trabalho para organizá-la.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            A rotina de carregamentos e retornos é intensa. Quando os registros dependem de anotações
            dispersas e cruzamentos manuais, a conferência vira um processo exaustivo.
          </p>
        </motion.div>

        {/* 3 Large Problem Cards with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((prob) => {
            const IconComponent = prob.icon;
            return (
              <motion.div
                key={prob.step}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-[#F8FAFC] border border-slate-200 rounded-2xl p-7 flex flex-col justify-between transition-shadow duration-300 hover:shadow-md hover:border-slate-300"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-300 group-hover:text-[#00C896] transition-colors">
                      {prob.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 group-hover:text-[#00C896] group-hover:border-[#00C896]/30 transition-colors shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3 group-hover:text-slate-900">
                    {prob.title}
                  </h3>

                  {/* Highlighted Quote from User Prompt */}
                  <p className="text-base font-medium text-slate-800 leading-snug mb-3">
                    “{prob.description}”
                  </p>

                  {/* Operational Details */}
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {prob.details}
                  </p>
                </div>

                {/* Subtag */}
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <span className="inline-block text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {prob.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Visual Impact Banner with motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="mt-14 max-w-4xl mx-auto"
        >
          <div className="bg-slate-900 text-white rounded-2xl py-6 px-6 sm:px-10 shadow-lg text-center border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base md:text-lg font-semibold tracking-wide text-slate-200">
              <span className="text-rose-400">Mais trabalho manual</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-amber-400">Mais retrabalho</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-slate-300">Menos visibilidade</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-normal">
              A rotina operacional precisa de agilidade e confiabilidade na hora de fechar as contas da rota.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
