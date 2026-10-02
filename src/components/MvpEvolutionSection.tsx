import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Milestone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

export const MvpEvolutionSection: React.FC = () => {
  const agoraItems = [
    'Dashboard operacional centralizado',
    'Cadastro de Produtos e embalagens',
    'Conversão automática (caixas/fardos em un)',
    'Gestão e organização de Rotas',
    'Registro de Carregamentos diários',
    'Controle de Retornos no baú físico',
    'Importação e registro de Vendas',
    'Apuração isolada de Trocas e avarias',
    'Motor de Conferência automática',
    'Relatórios e exportações de fechamento',
  ];

  const futuroItems = [
    'Integração direta com WhatsApp',
    'IA para interpretar mensagens e pedidos de áudio',
    'Integração nativa com ERP da distribuidora',
    'Aplicativo mobile dedicado para o motorista',
    'Rastreamento e telemetria por GPS',
    'Automação de importação de NFe e XMLs',
    'Novas personalizações e fluxos sob medida',
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            <Milestone className="w-3.5 h-3.5 text-slate-500" />
            <span>Escopo & Visão de Futuro</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Começamos com o essencial e evoluímos junto com a operação.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            “O CargaFácil começa resolvendo o problema principal e pode crescer conforme a operação.”
          </p>
        </motion.div>

        {/* 2 Comparison Columns with Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
        >
          {/* Column 1: AGORA (MVP Essencial) */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-[#F8FAFC] border-2 border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#009e75] bg-[#00C896]/10 px-2.5 py-1 rounded-md border border-[#00C896]/20">
                    FASE 01 • MVP
                  </span>
                  <h3 className="text-2xl font-bold text-[#1F2937] mt-2">
                    AGORA (Entrega Imediata)
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00C896] shadow-2xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-[#64748B] mb-6">
                Tudo o que sua equipe precisa para eliminar planilhas soltas e conferir cargas de ponta a ponta desde o primeiro dia.
              </p>

              <ul className="space-y-3">
                {agoraItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#00C896]/15 text-[#009e75] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400">
              Escopo 100% garantido no pacote inicial de contratação.
            </div>
          </motion.div>

          {/* Column 2: FUTURO (Evolução Planejada) */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xs relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    FASE 02 & ROADMAP
                  </span>
                  <h3 className="text-2xl font-bold text-[#1F2937] mt-2">
                    FUTURO (Evoluções Possíveis)
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-[#64748B] mb-6">
                Com a rotina estabilizada, novos recursos avançados podem ser integrados conforme a maturidade e volume da transportadora.
              </p>

              <ul className="space-y-3">
                {futuroItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-400">
              Módulos opcionais construídos sobre a mesma base sólida de dados.
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
