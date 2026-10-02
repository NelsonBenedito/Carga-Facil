import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CargaFacilTruckIcon } from './CargaFacilLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'saas',
}) => {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [telefone, setTelefone] = useState('');
  const [plano, setPlano] = useState<'saas' | 'licenca'>('saas');
  const [rotas, setRotas] = useState('1 a 3 rotas');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (defaultPlan.includes('licenca')) {
      setPlano('licenca');
    } else {
      setPlano('saas');
    }
    setEnviado(false);
  }, [defaultPlan, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  const getWhatsAppLink = () => {
    const planoEscolhido =
      plano === 'saas'
        ? 'CargaFácil SaaS (R$ 1.800 setup + R$ 380/mês)'
        : 'Licença de Uso (R$ 5.800 até 4x)';
    const text = encodeURIComponent(
      `Olá Nelson Benedito! Gostaria de conversar sobre a implantação do CargaFácil para minha empresa (${empresa || 'Minha Empresa'}). ` +
        `Meu nome é ${nome || 'Interessado'} (WhatsApp: ${telefone}). Temos em média ${rotas}. ` +
        `Temos interesse no modelo: ${planoEscolhido}. ` +
        (mensagem ? `Mensagem adicional: ${mensagem}` : '')
    );
    return `https://wa.me/5527999999999?text=${text}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with Motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Modal Card with Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {enviado ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-100 text-[#009e75] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-800">
                  Solicitação Registrada!
                </h3>

                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Obrigado, <strong className="text-slate-800">{nome}</strong>! Nelson Benedito entrará em contato para alinhar os detalhes da implantação do CargaFácil para a <strong className="text-slate-800">{empresa}</strong>.
                </p>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#00C896] hover:bg-[#00b084] text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Conversar Agora pelo WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-slate-600 block mx-auto pt-2"
                >
                  Fechar janela
                </button>
              </motion.div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#00C896]/15 flex items-center justify-center text-[#00C896]">
                    <CargaFacilTruckIcon className="w-6 h-6" color="#00C896" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">
                      Falar sobre a Implantação
                    </h3>
                    <span className="text-xs text-[#64748B]">CargaFácil • Resposta Direta</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-6">
                  Apresentação comercial e técnica sob medida para o fluxo da sua distribuidora.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                  {/* Modelo selector buttons */}
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Modelo de Preferência
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPlano('saas')}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          plano === 'saas'
                            ? 'border-[#00C896] bg-[#00C896]/10 text-slate-900 font-semibold'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span>CargaFácil SaaS</span>
                          <Star className="w-3 h-3 text-[#00C896] fill-current" />
                        </div>
                        <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                          R$ 1.800 + R$ 380/mês
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPlano('licenca')}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          plano === 'licenca'
                            ? 'border-slate-800 bg-slate-100 text-slate-900 font-semibold'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div className="text-[11px]">Licença de Uso</div>
                        <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                          R$ 5.800 (até 4x)
                        </div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome do responsável"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nome da empresa"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Quantidade de Rotas / Caminhões
                    </label>
                    <select
                      value={rotas}
                      onChange={(e) => setRotas(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                    >
                      <option value="1 a 2 rotas">1 a 2 rotas ativas</option>
                      <option value="3 a 5 rotas">3 a 5 rotas ativas</option>
                      <option value="Mais de 5 rotas">Mais de 5 rotas ativas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Observações ou Produtos Principais (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex.: Trabalhamos com biscoitos e pães, fardos e caixas..."
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Solicitar Contato do Especialista</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
