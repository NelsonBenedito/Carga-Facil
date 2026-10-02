import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Truck,
  Calendar,
  User,
  Eye,
  Info,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CargaFacilTruckIcon } from './CargaFacilLogo';
import { fadeInUp, defaultViewport } from '../utils/motion';

interface ProductRow {
  id: string;
  name: string;
  category: string;
  packaging: string;
  carregamento: number;
  retorno: number;
  vendaEsperada: number;
  venda: number;
  diferenca: number;
  status: 'bateu' | 'pequena' | 'media' | 'grande';
}

export const InteractiveDemoSection: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const initialProducts: ProductRow[] = [
    {
      id: 'prod-1',
      name: 'Papa Ovo 150g',
      category: 'Biscoitos & Salgados',
      packaging: 'Fardo c/ 20 un',
      carregamento: 60,
      retorno: 20,
      vendaEsperada: 40,
      venda: 40,
      diferenca: 0,
      status: 'bateu',
    },
    {
      id: 'prod-2',
      name: 'Papa Ovo 300g',
      category: 'Biscoitos & Salgados',
      packaging: 'Fardo c/ 20 un',
      carregamento: 100,
      retorno: 25,
      vendaEsperada: 75,
      venda: 70,
      diferenca: 5,
      status: 'pequena',
    },
    {
      id: 'prod-3',
      name: 'Bolo Caseiro',
      category: 'Confeitaria',
      packaging: 'Caixa c/ 12 un',
      carregamento: 48,
      retorno: 10,
      vendaEsperada: 38,
      venda: 41,
      diferenca: -3,
      status: 'pequena',
    },
    {
      id: 'prod-4',
      name: 'Biscoito Cream Cracker 400g',
      category: 'Biscoitos',
      packaging: 'Fardo c/ 30 un',
      carregamento: 150,
      retorno: 30,
      vendaEsperada: 120,
      venda: 106,
      diferenca: 14,
      status: 'media',
    },
    {
      id: 'prod-5',
      name: 'Pão de Forma Tradicional',
      category: 'Panificação',
      packaging: 'Caixa c/ 16 un',
      carregamento: 96,
      retorno: 16,
      vendaEsperada: 80,
      venda: 54,
      diferenca: 26,
      status: 'grande',
    },
    {
      id: 'prod-6',
      name: 'Torrada Multigrãos 140g',
      category: 'Torradas',
      packaging: 'Caixa c/ 24 un',
      carregamento: 48,
      retorno: 12,
      vendaEsperada: 36,
      venda: 36,
      diferenca: 0,
      status: 'bateu',
    },
  ];

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        selectedStatus === 'todos' || item.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus]);

  const getStatusBadge = (status: ProductRow['status']) => {
    switch (status) {
      case 'bateu':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100/70 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Bateu
          </span>
        );
      case 'pequena':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100/70 text-amber-800 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Diferença pequena
          </span>
        );
      case 'media':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100/70 text-orange-800 border border-orange-200">
            <AlertCircle className="w-3.5 h-3.5 text-orange-600" />
            Diferença média
          </span>
        );
      case 'grande':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100/70 text-rose-800 border border-rose-200">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            Diferença grande
          </span>
        );
    }
  };

  return (
    <section id="demonstracao" className="py-20 md:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C896]/10 text-[#009e75] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#00C896]/20">
            <Eye className="w-3.5 h-3.5 text-[#00C896]" />
            <span>Demonstração Visual da Aplicação</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] tracking-tight leading-tight">
            Experiência de software profissional, simples e sem ruídos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto">
            Veja como a tela de conferência de rotas do CargaFácil calcula e sinaliza o status de cada item em segundos.
          </p>
        </motion.div>

        {/* Real Product Interactive Mockup Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="bg-[#F8FAFC] border border-slate-200 rounded-3xl shadow-xl overflow-hidden"
        >
          
          {/* Mockup App Header */}
          <div className="bg-slate-900 text-white px-5 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <CargaFacilTruckIcon className="w-8 h-8" color="#00C896" />
              <div>
                <div className="text-sm font-bold flex items-center gap-2">
                  <span>CargaFácil</span>
                  <span className="text-xs font-normal text-slate-400">| Conferência de Rota</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Visualização do Módulo de Fechamento
                </div>
              </div>
            </div>

            {/* Route Meta Details */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#00C896]" />
                <span className="font-semibold text-white">Rota #02:</span>
                <span>Colatina → Baixo Guandu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>Motorista: Marcos Silva</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Hoje</span>
              </div>
            </div>
          </div>

          {/* Quick Stats Ribbon in Mockup */}
          <div className="p-4 sm:p-6 bg-white border-b border-slate-200 grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                Total Carregado
              </span>
              <span className="text-lg sm:text-xl font-bold font-mono text-slate-800">
                502 un
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                Total Retorno
              </span>
              <span className="text-lg sm:text-xl font-bold font-mono text-blue-600">
                113 un
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                Venda Teórica
              </span>
              <span className="text-lg sm:text-xl font-bold font-mono text-slate-900">
                389 un
              </span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                Vendas Declaradas
              </span>
              <span className="text-lg sm:text-xl font-bold font-mono text-emerald-600">
                347 un
              </span>
            </div>
            <div className="col-span-2 md:col-span-1 bg-amber-50 p-3 rounded-xl border border-amber-200">
              <span className="text-[10px] uppercase font-bold text-amber-700 block mb-0.5">
                Diferença Apurada
              </span>
              <span className="text-lg sm:text-xl font-bold font-mono text-amber-600">
                42 un
              </span>
            </div>
          </div>

          {/* Interactive Filters Bar */}
          <div className="p-4 sm:p-5 bg-[#F8FAFC] border-b border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrar por nome do produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00C896]"
              />
            </div>

            {/* Filter by Status Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto text-xs">
              <span className="text-slate-500 font-medium mr-1 text-[11px] hidden sm:inline">
                Status:
              </span>
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'bateu', label: 'Bateu' },
                { id: 'pequena', label: 'Diferença pequena' },
                { id: 'media', label: 'Diferença média' },
                { id: 'grande', label: 'Diferença grande' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedStatus(btn.id)}
                  className={`px-2.5 py-1.5 rounded-md font-medium transition-colors ${
                    selectedStatus === btn.id
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

          </div>

          {/* Demonstration Table */}
          <div className="overflow-x-auto bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4">Produto</th>
                  <th className="py-3.5 px-3 text-right">Carregamento</th>
                  <th className="py-3.5 px-3 text-right">Retorno</th>
                  <th className="py-3.5 px-3 text-right font-semibold text-slate-700">
                    Venda Esperada
                  </th>
                  <th className="py-3.5 px-3 text-right text-emerald-700">Venda</th>
                  <th className="py-3.5 px-3 text-right">Diferença</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <AnimatePresence>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((row) => (
                      <motion.tr
                        key={row.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="hover:bg-slate-50/60 transition-colors font-mono"
                      >
                        <td className="py-3.5 px-4 font-sans font-medium text-slate-900">
                          <div>{row.name}</div>
                          <div className="text-[10px] text-slate-400 font-sans font-normal">
                            {row.packaging}
                          </div>
                        </td>

                        <td className="py-3.5 px-3 text-right font-medium text-slate-800">
                          {row.carregamento}
                        </td>

                        <td className="py-3.5 px-3 text-right font-medium text-blue-600">
                          {row.retorno}
                        </td>

                        <td className="py-3.5 px-3 text-right font-semibold text-slate-900 bg-slate-50/40">
                          {row.vendaEsperada}
                        </td>

                        <td className="py-3.5 px-3 text-right font-semibold text-emerald-700">
                          {row.venda}
                        </td>

                        <td
                          className={`py-3.5 px-3 text-right font-bold ${
                            row.diferenca === 0
                              ? 'text-emerald-600'
                              : row.diferenca > 0
                              ? 'text-amber-600'
                              : 'text-blue-600'
                          }`}
                        >
                          {row.diferenca === 0
                            ? '0'
                            : row.diferenca > 0
                            ? `+${row.diferenca}`
                            : row.diferenca}
                        </td>

                        <td className="py-3.5 px-4 text-center font-sans">
                          {getStatusBadge(row.status)}
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        Nenhum produto encontrado com os filtros atuais.
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Interactive Disclaimer Banner */}
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                <strong>Atenção:</strong> Esses dados são apenas demonstração visual e representam dados de exemplo da interface do CargaFácil.
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Demonstração B2B • Fechamento de Carga
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
