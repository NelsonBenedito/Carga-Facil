import React from 'react';
import {
  Package,
  MapPin,
  Truck,
  RotateCcw,
  Receipt,
  Repeat,
  CheckCircle,
  LayoutDashboard,
  FileSpreadsheet,
  Layers,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      num: '01',
      title: 'Produtos',
      desc: 'Cadastro e fatores de conversão.',
      details: 'Defina pesos, códigos internos e quantas unidades compõem fardos ou caixas.',
      icon: Package,
    },
    {
      num: '02',
      title: 'Rotas',
      desc: 'Origem, destino, motorista e veículo.',
      details: 'Vincule a placa do caminhão, o condutor responsável e o roteiro do dia.',
      icon: MapPin,
    },
    {
      num: '03',
      title: 'Carregamentos',
      desc: 'Registro das quantidades enviadas.',
      details: 'Lançamento ágil de saída por produto, setor físico do caminhão e lote.',
      icon: Truck,
    },
    {
      num: '04',
      title: 'Retornos',
      desc: 'Registro do que voltou.',
      details: 'Controle preciso dos itens físicos que retornaram ao término da entrega.',
      icon: RotateCcw,
    },
    {
      num: '05',
      title: 'Vendas',
      desc: 'Controle das vendas registradas.',
      details: 'Apuração dos pedidos consolidados, notas faturadas e vendas a prazo/à vista.',
      icon: Receipt,
    },
    {
      num: '06',
      title: 'Trocas',
      desc: 'Registro separado das trocas.',
      details: 'Acompanhamento isolado de devoluções por avaria ou substituição de cliente.',
      icon: Repeat,
    },
    {
      num: '07',
      title: 'Conferência',
      desc: 'Cálculo automático e comparação dos dados.',
      details: 'Cruzamento matemático instantâneo para encontrar sobras ou faltas.',
      icon: CheckCircle,
      highlight: true,
    },
    {
      num: '08',
      title: 'Dashboard',
      desc: 'Visão geral da operação.',
      details: 'Métricas diárias, rotas ativas, status de apuração e alertas visuais.',
      icon: LayoutDashboard,
    },
    {
      num: '09',
      title: 'Relatórios',
      desc: 'Exportação e acompanhamento dos resultados.',
      details: 'Histórico completo por rota, período e motorista para tomada de decisão.',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
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
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            <span>Módulos do Sistema</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            O que o CargaFácil entrega
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Uma estrutura modular e direta ao ponto, desenvolvida sob medida para a rotina diária de
            carregamento, vendas em rota e conferência de estoque.
          </p>
        </motion.div>

        {/* 9 Features Grid with Staggered Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.num}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl p-7 transition-shadow duration-300 flex flex-col justify-between border ${
                  item.highlight
                    ? 'bg-gradient-to-b from-[#00C896]/10 to-transparent border-[#00C896]/40 shadow-xs'
                    : 'bg-[#F8FAFC] border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        item.highlight
                          ? 'bg-[#00C896] text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-800 mb-2">
                    {item.desc}
                  </p>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {item.details}
                  </p>
                </div>

                {item.highlight && (
                  <div className="mt-4 pt-3 border-t border-[#00C896]/20 flex items-center gap-1.5 text-xs font-semibold text-[#009e75]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C896]" />
                    <span>Coração operacional do CargaFácil</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
