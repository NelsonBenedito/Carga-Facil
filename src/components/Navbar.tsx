import React, { useState, useEffect } from 'react';
import { CargaFacilLogo } from './CargaFacilLogo';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenContact: (source?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'inicio',
        'problema',
        'solucao',
        'funcionalidades',
        'como-funciona',
        'demonstracao',
        'investimento',
        'implantacao',
        'contato',
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'O Problema', href: '#problema', id: 'problema' },
    { label: 'A Solução', href: '#solucao', id: 'solucao' },
    { label: 'Funcionalidades', href: '#funcionalidades', id: 'funcionalidades' },
    { label: 'Como Funciona', href: '#como-funciona', id: 'como-funciona' },
    { label: 'Demonstração', href: '#demonstracao', id: 'demonstracao' },
    { label: 'Investimento', href: '#investimento', id: 'investimento' },
    { label: 'Implantação', href: '#implantacao', id: 'implantacao' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-2 transition-opacity hover:opacity-95 focus:outline-none"
            aria-label="CargaFácil Início"
          >
            <CargaFacilLogo size="md" showSubtitle={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative hover:text-[#00C896] ${
                  activeSection === link.id
                    ? 'text-[#00C896] font-semibold'
                    : 'text-slate-600'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeSectionIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00C896] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Button & Contact */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
            >
              Falar com o Especialista
            </a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenContact('menu_topo')}
              className="inline-flex items-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-xs hover:shadow transition-colors cursor-pointer"
            >
              <span>Conhecer o CargaFácil</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenContact('menu_mobile_cta')}
              className="md:hidden text-xs bg-[#00C896] text-white font-medium px-3 py-1.5 rounded-md hover:bg-[#00b084] transition"
            >
              Conhecer
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Alternar Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#00C896]/10 text-[#00C896] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Falar sobre a implantação
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact('menu_drawer');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00C896] hover:bg-[#00b084] text-white font-medium text-sm py-2.5 rounded-lg shadow-xs"
                >
                  <span>Conhecer o CargaFácil</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
