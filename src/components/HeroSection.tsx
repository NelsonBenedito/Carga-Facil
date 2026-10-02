import React, { useState } from 'react';
import {
  ArrowRight,
  PlayCircle,
  Truck,
  TrendingUp,
  RotateCcw,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CargaFacilTruckIcon } from './CargaFacilLogo';
import { fadeInUp, staggerContainer, scaleUp } from '../utils/motion';

interface HeroSectionProps {
  onOpenContact: (source?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'rotas'>('geral');

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle SaaS Grid & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#00C896]/10 to-transparent blur-3xl opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#1F2937 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Calls to Action */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-xs font-semibold text-[#009e75]">
              <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
              <span>Sua carga no controle, sempre</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-bold text-[#1F2937] tracking-tight leading-[1.18]">
              Do carregamento à conferência{' '}
              <span className="relative inline-block text-[#00C896]">
                sem dor de cabeça.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-[#00C896]/30 hidden sm:block"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              O <strong className="text-slate-800 font-semibold">CargaFácil</strong> organiza carregamentos,
              retornos, vendas e trocas em um único sistema, automatizando a conferência e dando mais clareza para a operação.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenContact('hero_cta_principal')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#00C896] hover:bg-[#00b084] text-white font-semibold px-7 py-3.5 rounded-xl shadow-md shadow-[#00C896]/20 transition-all duration-200 cursor-pointer"
              >
                <span>Conhecer o CargaFácil</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#como-funciona"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
              >
                <PlayCircle className="w-5 h-5 text-slate-500" />
                <span>Ver como funciona</span>
              </motion.a>
            </motion.div>

            {/* Supporting Statement / Brand Signature */}
            <motion.div variants={fadeInUp} className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-semibold tracking-wide uppercase text-slate-400">
              <span className="text-[#1F2937]">Simples.</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#1F2937]">Prático.</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#00C896]">Eficiente.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Dashboard Mockup with entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Outer Window Container */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                
                {/* Window Top Bar */}
                <div className="bg-slate-900 text-slate-300 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                      app.cargafacil.com.br/dashboard
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C896] animate-pulse" />
                      Operação Ativa
                    </span>
                  </div>
                </div>

                {/* Dashboard Subheader */}
                <div className="p-4 sm:p-5 bg-slate-50/70 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Rota Ativa #04
                    </div>
                    <div className="text-base font-bold text-slate-800 flex items-center gap-2">
                      <span>Linhares → Colatina</span>
                      <span className="text-xs font-normal text-slate-500 hidden sm:inline">
                        (Caminhão Mercedes 1620 • Placa QTF-9241)
                      </span>
                    </div>
                  </div>

                  {/* Mockup Tab Selector */}
                  <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-xs font-medium">
                    <button
                      onClick={() => setActiveTab('geral')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'geral'
                          ? 'bg-white text-slate-900 shadow-xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Resumo
                    </button>
                    <button
                      onClick={() => setActiveTab('rotas')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'rotas'
                          ? 'bg-white text-slate-900 shadow-xs font-semibold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Conferência
                    </button>
                  </div>
                </div>

                {/* 5 Core Indicator Cards (Exact requested numbers) */}
                <div className="p-4 sm:p-5 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    
                    {/* Carregamento */}
                    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between hover:border-[#00C896]/40 transition">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-[11px] font-semibold tracking-tight text-slate-600">
                          Carregamento
                        </span>
                        <Truck className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 font-mono">
                        2.479
                      </div>
                      <span className="text-[10px] text-slate-400">unidades saídas</span>
                    </div>

                    {/* Vendas */}
                    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between hover:border-[#00C896]/40 transition">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-[11px] font-semibold tracking-tight text-slate-600">
                          Vendas
                        </span>
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-emerald-600 font-mono">
                        1.562
                      </div>
                      <span className="text-[10px] text-slate-400">pedidos faturados</span>
                    </div>

                    {/* Retorno */}
                    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between hover:border-[#00C896]/40 transition">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-[11px] font-semibold tracking-tight text-slate-600">
                          Retorno
                        </span>
                        <RotateCcw className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-blue-600 font-mono">
                        911
                      </div>
                      <span className="text-[10px] text-slate-400">físico no baú</span>
                    </div>

                    {/* Trocas */}
                    <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-xl p-3 flex flex-col justify-between hover:border-[#00C896]/40 transition">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-[11px] font-semibold tracking-tight text-slate-600">
                          Trocas
                        </span>
                        <RefreshCw className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-amber-600 font-mono">
                        101
                      </div>
                      <span className="text-[10px] text-slate-400">avarias / substituição</span>
                    </div>

                    {/* Divergência */}
                    <div className="col-span-2 sm:col-span-1 bg-amber-50/70 border border-amber-200 rounded-xl p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-amber-800 mb-1">
                        <span className="text-[11px] font-bold tracking-tight">
                          Divergência
                        </span>
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-amber-600 font-mono">
                        6
                      </div>
                      <span className="text-[10px] font-medium text-amber-700">apurada na rota</span>
                    </div>

                  </div>

                  {/* Formula Preview / Automatic Cross-Check */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00C896]" />
                        Cálculo Automático de Apuração
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">Equação em tempo real</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-[11px]">
                      <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                          Venda Esperada (Teórica)
                        </span>
                        <div className="font-mono font-medium text-slate-800 mt-0.5">
                          2.479 <span className="text-slate-400">(Carga)</span> − 911 <span className="text-slate-400">(Retorno)</span> ={' '}
                          <strong className="text-slate-900 font-semibold">1.568 un</strong>
                        </div>
                      </div>

                      <div className="bg-white p-2 rounded-lg border border-slate-200/70">
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                          Divergência Final
                        </span>
                        <div className="font-mono font-medium text-amber-700 mt-0.5">
                          1.568 <span className="text-slate-400">(Esperado)</span> − 1.562 <span className="text-slate-400">(Vendas)</span> ={' '}
                          <strong className="text-amber-600 font-bold">6 unidades</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Explicit Mandatory Disclaimer */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <span>Dados e números de exemplo para demonstração visual da interface.</span>
                    </div>
                    <span className="hidden sm:inline font-mono text-slate-400">v1.0 MVP</span>
                  </div>

                </div>

              </div>

              {/* Floating decorative badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:flex absolute -bottom-5 -left-5 bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-lg items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00C896]/15 flex items-center justify-center text-[#00C896]">
                  <CargaFacilTruckIcon className="w-6 h-6" color="#00C896" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-bold text-slate-800">Conferência Automatizada</div>
                  <div className="text-[11px] text-slate-500">Sem planilhas manuais quebradas</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
