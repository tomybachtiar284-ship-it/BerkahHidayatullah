import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useLanguage();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/profile' },
    { name: t('nav.catalog'), path: '/catalog' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md" style={{ boxShadow: '0 4px 20px -2px rgba(0, 130, 180, 0.3), 0 8px 30px -5px rgba(255, 138, 0, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo-resmi.png"
              alt="Logo CV Berkah Hidayatullah"
              className="h-20 w-auto object-contain"
              decoding="async"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#0082b4]'
                    : 'text-slate-600 hover:text-[#0082b4]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 border-l border-slate-200 pl-6">
              <button 
                onClick={() => setLang('id')}
                className={`text-[12px] font-bold transition-colors ${lang === 'id' ? 'text-[#ff8a00]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                ID
              </button>
              <span className="text-slate-300">|</span>
              <button 
                onClick={() => setLang('en')}
                className={`text-[12px] font-bold transition-colors ${lang === 'en' ? 'text-[#ff8a00]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
            </div>

            <a
              href="https://wa.me/6281245613771"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#ff8a00' }}
              className="text-white px-6 py-2.5 text-[12px] font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center gap-2 rounded-full shadow-md"
            >
              {t('nav.contact')}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-[#0082b4] p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: '#ffffff' }}
            className="md:hidden border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-[13px] font-bold tracking-wide border-b border-slate-50 ${
                    location.pathname === link.path ? 'text-[#0082b4]' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-4 py-3 border-b border-slate-50">
                <button 
                  onClick={() => { setLang('id'); setIsOpen(false); }}
                  className={`text-[12px] font-bold transition-colors ${lang === 'id' ? 'text-[#ff8a00]' : 'text-slate-400'}`}
                >
                  ID
                </button>
                <span className="text-slate-300">|</span>
                <button 
                  onClick={() => { setLang('en'); setIsOpen(false); }}
                  className={`text-[12px] font-bold transition-colors ${lang === 'en' ? 'text-[#ff8a00]' : 'text-slate-400'}`}
                >
                  EN
                </button>
              </div>
              <a
                href="https://wa.me/6281245613771"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{ backgroundColor: '#ff8a00' }}
                className="block mx-4 mt-4 text-center text-white px-5 py-3 text-[12px] font-bold tracking-widest hover:opacity-90 rounded-full shadow-md"
              >
                {t('nav.contact')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
