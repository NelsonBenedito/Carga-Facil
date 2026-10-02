import React from 'react';
import {
  Calendar,
  CheckCircle2,
  FileCode,
  Sliders,
  Users,
  Rocket,
  Info,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, defaultViewport } from '../utils/motion';

export const ImplementationSection: React.FC = () => {
  const weeks = [
    {
      week: 'SEMANA 1',
      title: 'Descoberta e configuração',
      icon: Sliders,
      items: ['Produtos e códigos', 'Fatores de conversão', 'Mapeamento de rotas', 'Regras operacionais'],
      color: 'border-slate-300',
    },
    {
      week: 'SEMANA 2',
      title: 'Construção',
      icon: FileCode,
      items: ['Estrutura dos módulos', 'Painel de dashboard', 'Modelagem do banco', 'Fluxo de dados'],
      color: 'border-slate-300',
    },
    {
      week: 'SEMANA 3',
      title: 'Conferência',
      icon: CheckCircle2,
      items: ['Regras de cálculo', 'Apuração de divergências', 'Status de fechamento', 'Relatórios base'],
      color: 'border-slate-300',
    },
    {
      week: 'SEMANA 4',
      title: 'Validação',
      icon: Users,
      items: ['Importação de dados reais', 'Testes com a equipe', 'Ajustes finos', 'Treinamento prático'],
      color: 'border-slate-300',
    },
    {
      week: 'SEMANA 5',
      title: 'GO-LIVE',
      icon: Rocket,
      items: ['Publicação em produção', 'Primeira rota real', 'Acompanhamento assistido', 'Estabilização'],
      color: 'border-[#00C896]',
      isGoLive: true,
    },
  ];

  return (
    <section id="implantacao" className="py-20 md:py-28 bg-[#F8FAFC] overflow-hidden">
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
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Cronograma Estruturado</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Implantação em até 5 semanas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Um plano de implementação claro, faseado e com marcos de entrega bem definidos para colocar o sistema em produção sem interromper a sua rotina.
          </p>
        </motion.div>

        {/* 5-Week Grid with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10"
        >
          {weeks.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.week}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-5 border flex flex-col justify-between transition-shadow duration-200 ${
                  item.isGoLive
                    ? 'bg-white border-[#00C896] shadow-md ring-2 ring-[#00C896]/10'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        item.isGoLive
                          ? 'bg-[#00C896] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.week}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.isGoLive
                          ? 'text-[#00C896] bg-[#00C896]/10'
                          : 'text-slate-500 bg-slate-100'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#1F2937] mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {item.items.map((sub, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
                            item.isGoLive ? 'bg-[#00C896]' : 'bg-slate-300'
                          }`}
                        />
                        <span className="leading-tight">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 text-right">
                  Etapa {index + 1}/5
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Observation Notice with Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-slate-600 shadow-2xs"
        >
          <Info className="w-5 h-5 text-slate-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Observação importante:</strong> “O prazo considera o recebimento das
            informações e validações necessárias pela empresa.”
          </p>
        </motion.div>

      </div>
    </section>
  );
};
