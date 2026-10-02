import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Truck,
  RotateCcw,
  ShoppingBag,
  CheckCircle2,
  AlertCircle,
  Boxes,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

export const SolutionSection: React.FC = () => {
  const [selectedProduct] = useState({
    name: 'Papa Ovo 150g',
    boxFactor: 24,
    unitName: 'fardos',
  });
  const [packageQty, setPackageQty] = useState(15);
  const [looseUnits, setLooseUnits] = useState(8);

  const totalCalculated = packageQty * selectedProduct.boxFactor + looseUnits;

  const [activeZone, setActiveZone] = useState<'frente' | 'meio' | 'traseira'>('frente');

  const flowSteps = [
    {
      id: 'carregamento',
      label: 'CARREGAMENTO',
      desc: 'O que sai no caminhão',
      icon: Truck,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'retorno',
      label: 'RETORNO',
      desc: 'O que volta físico no baú',
      icon: RotateCcw,
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'vendas',
      label: 'VENDAS',
      desc: 'Notas e pedidos faturados',
      icon: ShoppingBag,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 'conferencia',
      label: 'CONFERÊNCIA',
      desc: 'Cálculo e cruzamento automático',
      icon: CheckCircle2,
      color: 'bg-teal-50 text-[#009e75] border-[#00C896]/40',
    },
    {
      id: 'divergencias',
      label: 'DIVERGÊNCIAS',
      desc: 'Apuração clara por produto',
      icon: AlertCircle,
      color: 'bg-amber-50 text-amber-700 border-amber-200',
    },
  ];

  return (
    <section id="solucao" className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
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
            <span>A Abordagem CargaFácil</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Uma operação organizada em um único fluxo.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Em vez de cruzar papéis e conversões de cabeça, o sistema padroniza as entradas e gera
            comparações matemáticas instantâneas.
          </p>
        </motion.div>

        {/* Visual Workflow Diagram */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm mb-14"
        >
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 text-center mb-8">
            Fluxo Contínuo de Apuração
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {flowSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full text-center p-5 rounded-2xl border ${step.color} shadow-2xs flex flex-col items-center`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/90 shadow-2xs flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm tracking-wide mb-1 font-mono">
                      {step.label}
                    </span>
                    <span className="text-xs opacity-80 leading-snug">
                      {step.desc}
                    </span>
                  </motion.div>

                  {/* Arrow for Desktop */}
                  {idx < flowSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 shadow-2xs">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  )}

                  {/* Arrow for Mobile */}
                  {idx < flowSteps.length - 1 && (
                    <div className="flex md:hidden my-2 text-slate-400">
                      <ArrowDown className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mathematical Formulations Display */}
          <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00C896]" />
                Regra 01 • Venda Teórica
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800 font-mono tracking-tight">
                Venda teórica = Carregamento − Retorno
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Determina exatamente quanto deveria ter sido vendido se todo o saldo que não retornou no veículo foi comercializado.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Regra 02 • Apuração de Divergência
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-800 font-mono tracking-tight">
                Divergência = Venda teórica − Vendas registradas
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Aponta instantaneamente sobras ou faltas físicas versus o montante documentado nos pedidos e notas.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Dual Features: Unit Conversion & Physical Zoning */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Automatic Packaging to Unit Conversion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-7 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#00C896]/10 text-[#00C896] flex items-center justify-center mb-4">
                <Boxes className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                Conversão Automática de Embalagens
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                “O sistema transforma automaticamente caixas e fardos em unidades conforme os fatores
                cadastrados para cada produto.”
              </p>

              {/* Interactive Demo Simulator */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                <div className="text-xs font-semibold uppercase text-slate-500 flex items-center justify-between">
                  <span>Simulador de Conversão Cadastrada</span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200">
                    Fator: 1 fardo = 24 un
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-500 mb-1">
                      Fardos ou Caixas
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={packageQty}
                      onChange={(e) => setPackageQty(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#00C896]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-500 mb-1">
                      Unidades Soltas
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={looseUnits}
                      onChange={(e) => setLooseUnits(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#00C896]"
                    />
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">
                    Total convertido no sistema:
                  </span>
                  <div className="text-right">
                    <span className="text-xl font-bold font-mono text-[#009e75]">
                      {totalCalculated}
                    </span>
                    <span className="text-xs text-slate-400 ml-1 font-mono">unidades</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              O operador digita como o motorista informa (ex.: "15 fardos e 8 avulsos") e o CargaFácil calcula o estoque unitário exato.
            </p>
          </motion.div>

          {/* Card 2: Physical Organization by Front, Middle, Rear */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-7 flex flex-col justify-between shadow-2xs"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                Organização Física por Compartimento
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                “Organização física por <strong className="text-slate-800 font-semibold">Frente</strong>,{' '}
                <strong className="text-slate-800 font-semibold">Meio</strong> e{' '}
                <strong className="text-slate-800 font-semibold">Traseira</strong>.”
              </p>

              {/* Truck Compartment Visualizer */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                <div className="text-xs font-semibold uppercase text-slate-500 mb-3 flex items-center justify-between">
                  <span>Distribuição no Baú de Carga</span>
                  <span className="text-[11px] text-[#009e75] font-medium">Clique para inspecionar</span>
                </div>

                {/* Truck outline layout */}
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-3 bg-white">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    
                    {/* Frente */}
                    <button
                      type="button"
                      onClick={() => setActiveZone('frente')}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        activeZone === 'frente'
                          ? 'bg-[#00C896]/15 border-[#00C896] text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-bold uppercase tracking-wider text-[11px] mb-1">
                        Frente
                      </div>
                      <div className="text-[11px] text-slate-500">Próximo à cabine</div>
                      <div className="mt-2 text-[10px] font-mono font-medium text-[#009e75]">
                        Cargas pesadas / reserva
                      </div>
                    </button>

                    {/* Meio */}
                    <button
                      type="button"
                      onClick={() => setActiveZone('meio')}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        activeZone === 'meio'
                          ? 'bg-[#00C896]/15 border-[#00C896] text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-bold uppercase tracking-wider text-[11px] mb-1">
                        Meio
                      </div>
                      <div className="text-[11px] text-slate-500">Corredor central</div>
                      <div className="mt-2 text-[10px] font-mono font-medium text-[#009e75]">
                        Mix intermediário & trocas
                      </div>
                    </button>

                    {/* Traseira */}
                    <button
                      type="button"
                      onClick={() => setActiveZone('traseira')}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        activeZone === 'traseira'
                          ? 'bg-[#00C896]/15 border-[#00C896] text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-bold uppercase tracking-wider text-[11px] mb-1">
                        Traseira
                      </div>
                      <div className="text-[11px] text-slate-500">Porta de descarga</div>
                      <div className="mt-2 text-[10px] font-mono font-medium text-[#009e75]">
                        Primeiras entregas & retorno
                      </div>
                    </button>

                  </div>
                </div>

                <div className="mt-3 text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-800">Zona ativa: </span>
                  {activeZone === 'frente' && (
                    <span>Ideal para produtos que não saem no início da rota ou itens de alta densidade.</span>
                  )}
                  {activeZone === 'meio' && (
                    <span>Equilíbrio do peso e separação das trocas recolhidas ao longo do trajeto.</span>
                  )}
                  {activeZone === 'traseira' && (
                    <span>Acesso rápido para conferência imediata das caixas de retorno ao voltar à base.</span>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Facilita a conferência visual física sem precisar descarregar todo o caminhão para auditar.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
