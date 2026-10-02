import React from 'react';
import { CargaFacilLogo } from './CargaFacilLogo';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <CargaFacilLogo variant="light" size="lg" showSubtitle={true} />
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-2">
              Plataforma web de gestão e conferência de cargas criada para empresas que trabalham com carregamento de produtos, vendas, retornos e trocas.
            </p>

            <div className="text-xs text-slate-500 font-mono">
              “Sua carga no controle, sempre.” • Simples. Prático. Eficiente.
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#00C896] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#problema" className="hover:text-[#00C896] transition-colors">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#solucao" className="hover:text-[#00C896] transition-colors">
                  A Solução
                </a>
              </li>
              <li>
                <a href="#funcionalidades" className="hover:text-[#00C896] transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#00C896] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-[#00C896] transition-colors">
                  Demonstração Visual
                </a>
              </li>
              <li>
                <a href="#investimento" className="hover:text-[#00C896] transition-colors">
                  Modelos de Contratação
                </a>
              </li>
              <li>
                <a href="#implantacao" className="hover:text-[#00C896] transition-colors">
                  Prazo de Implantação
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Attribution & Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Desenvolvimento
            </div>
            <div className="text-xs text-slate-300">
              <strong className="text-white block text-sm">Nelson Benedito</strong>
              <span>Desenvolvedor do Projeto</span>
            </div>
            
            <div className="text-xs text-slate-500 pt-2">
              Projeto focado em tecnologia aplicada à logística e conferência operacional real.
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao topo</span>
            </motion.button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-400">CargaFácil</strong>. Todos os direitos reservados.
          </div>
          <div>
            Nelson Benedito — Desenvolvedor do Projeto
          </div>
        </div>

      </div>
    </footer>
  );
};
