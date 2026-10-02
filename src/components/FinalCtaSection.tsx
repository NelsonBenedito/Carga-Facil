import React, { useState } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CargaFacilTruckIcon } from './CargaFacilLogo';
import { fadeInUp, defaultViewport } from '../utils/motion';

interface FinalCtaSectionProps {
  onOpenContact: (mode?: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    rotas: '1 a 3 rotas',
    modelo: 'SaaS (Recomendado)',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá Nelson! Tenho interesse no projeto CargaFácil para minha empresa (${formData.empresa || 'Empresa'}). ` +
        `Meu nome é ${formData.nome || 'Interessado'} e gostaria de conversar sobre a implantação no modelo ${formData.modelo}.`
    );
    return `https://wa.me/5527999999999?text=${text}`;
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00C896]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Box with Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: CTA Content & Developer Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C896]/20 border border-[#00C896]/30 text-xs font-semibold text-[#00C896]">
                <CargaFacilTruckIcon className="w-4 h-4" color="#00C896" />
                <span>Próximo Passo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Pronto para colocar sua operação sob controle?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                “O CargaFácil foi pensado para reduzir o trabalho manual da conferência e
                transformar dados operacionais em uma visão clara da operação.”
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenContact('cta_final_implantacao')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-colors cursor-pointer"
                >
                  <span>Quero falar sobre a implantação</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#investimento"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-4 rounded-xl border border-slate-700 transition-colors"
                >
                  <span>Conhecer o modelo SaaS</span>
                </motion.a>
              </div>

              {/* Developer Attribution Card */}
              <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[#00C896] font-bold text-lg">
                  NB
                </div>
                <div>
                  <div className="text-base font-bold text-white">Nelson Benedito</div>
                  <div className="text-xs text-slate-400">Desenvolvedor do Projeto CargaFácil</div>
                  <div className="text-xs text-[#00C896] italic mt-0.5">
                    “Sua carga no controle, sempre.”
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Quick Proposal / Contact Box */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200">
                <h3 className="text-xl font-bold text-[#1F2937] mb-1">
                  Iniciar Conversa de Implantação
                </h3>
                <p className="text-xs text-[#64748B] mb-5">
                  Preencha os dados básicos da sua operação para agendarmos uma apresentação técnica.
                </p>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center space-y-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#00C896] text-white flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="font-bold text-slate-800 text-sm">
                        Mensagem preparada com sucesso!
                      </div>
                      <p className="text-xs text-slate-600">
                        Obrigado, {formData.nome || 'amigo(a)'}! Deseja acelerar o contato via WhatsApp direto com Nelson Benedito?
                      </p>
                      <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#00C896] hover:bg-[#00b084] text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow-xs transition"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Abrir no WhatsApp</span>
                      </a>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-3 text-xs"
                    >
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Seu Nome *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex.: Carlos Mendes"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">
                            Empresa / Distribuidora *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Nome da empresa"
                            value={formData.empresa}
                            onChange={(e) =>
                              setFormData({ ...formData, empresa: e.target.value })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                          />
                        </div>

                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">
                            WhatsApp / Telefone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(00) 00000-0000"
                            value={formData.whatsapp}
                            onChange={(e) =>
                              setFormData({ ...formData, whatsapp: e.target.value })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">
                            Modelo de Interesse
                          </label>
                          <select
                            value={formData.modelo}
                            onChange={(e) =>
                              setFormData({ ...formData, modelo: e.target.value })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                          >
                            <option value="SaaS (Recomendado)">SaaS (R$ 1.800 + R$ 380/mês)</option>
                            <option value="Licença de Uso">Licença de Uso (R$ 5.800)</option>
                            <option value="Quero avaliar ambos">Quero avaliar ambos</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-semibold text-slate-700 mb-1">
                            Volume Operacional
                          </label>
                          <select
                            value={formData.rotas}
                            onChange={(e) =>
                              setFormData({ ...formData, rotas: e.target.value })
                            }
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white"
                          >
                            <option value="1 a 2 rotas diárias">1 a 2 rotas diárias</option>
                            <option value="3 a 5 rotas diárias">3 a 5 rotas diárias</option>
                            <option value="Mais de 5 rotas diárias">Mais de 5 rotas diárias</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Mensagem ou dúvida específica (opcional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Ex.: Nossos produtos usam caixas de 12 e 24 unidades..."
                          value={formData.mensagem}
                          onChange={(e) =>
                            setFormData({ ...formData, mensagem: e.target.value })
                          }
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:border-[#00C896] focus:bg-white resize-none"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Enviar e Falar sobre a Implantação</span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
