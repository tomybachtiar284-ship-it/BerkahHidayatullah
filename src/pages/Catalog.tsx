import { useState } from 'react';
import { Package, Tractor, Hammer, Fish, Presentation, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Catalog() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const catalogItems = t('catalog.items') || [];
  const cats = t('catalog.categories') || {};

  const categories = [
    { id: 'all', labelKey: 'all', icon: Package },
    { id: 'konstruksi', labelKey: 'konstruksi', icon: Hammer },
    { id: 'eceran', labelKey: 'eceran', icon: Package },
    { id: 'agribisnis', labelKey: 'agribisnis', icon: Tractor },
    { id: 'perikanan', labelKey: 'perikanan', icon: Fish },
    { id: 'jasa', labelKey: 'jasa', icon: Presentation },
  ];

  const filteredItems = activeCategory === 'all'
    ? catalogItems.map((item: any, idx: number) => ({ ...item, originalIdx: idx }))
    : catalogItems
        .map((item: any, idx: number) => ({ ...item, originalIdx: idx }))
        .filter((_: any, idx: number) => {
          const origCategories = ['konstruksi','konstruksi','eceran','eceran','agribisnis','agribisnis','perikanan','jasa','konstruksi'];
          return origCategories[idx] === activeCategory;
        });

  const selectedItem = selectedIndex !== null ? catalogItems[selectedIndex] : null;

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic text-slate-900 tracking-tight mb-4">{t('catalog.title')}</h1>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto uppercase tracking-widest font-medium">
            {t('catalog.desc')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 text-[10px] uppercase font-bold tracking-widest transition-all ${
                  isActive
                    ? 'bg-indigo-900 text-white border border-indigo-900'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                {cats[cat.labelKey] || cat.labelKey}
              </button>
            );
          })}
        </div>

        {/* Catalog Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-slate-200">
          <AnimatePresence>
            {filteredItems.map((item: any) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                onClick={() => setSelectedIndex(item.originalIdx)}
                className="bg-white border-b border-r border-slate-200 flex flex-col group p-6 cursor-pointer hover:shadow-xl transition-shadow relative z-10"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200 mb-6 border border-slate-200 pointer-events-none">
                  <div className="absolute inset-0 bg-slate-900/20 z-10 mix-blend-multiply group-hover:bg-slate-900/10 transition-colors"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-indigo-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 pointer-events-none">
                  <h3 className="text-xs font-bold uppercase text-slate-900 tracking-wide mb-2 leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-6 flex-1">{item.desc}</p>
                </div>
                <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-indigo-900 border-t border-slate-200 pt-4 hover:text-indigo-700 transition-colors group/btn">
                  <span>{t('catalog.detail')}</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-slate-100 group-hover/btn:bg-indigo-900 group-hover/btn:text-white transition-colors">
                    <Check className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto relative"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-14">
                  <span className="bg-indigo-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{selectedItem.category}</span>
                  <h2 className="text-white font-black text-xl mt-2 leading-tight">{selectedItem.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-9 h-9 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                {selectedItem.longDesc && selectedItem.longDesc.length > 0
                  ? selectedItem.longDesc.map((para: string, i: number) => (
                      <p key={i} className="text-slate-600 text-sm leading-relaxed">{para}</p>
                    ))
                  : <p className="text-slate-500 text-sm">{t('catalog.noDetail')}</p>
                }
              </div>

              <div className="px-6 md:px-8 pb-8">
                <a
                  href={`https://wa.me/6281245613771?text=${encodeURIComponent(`Halo CV Berkah Hidayatullah, saya ingin menanyakan harga untuk layanan: ${selectedItem.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#ff8a00] hover:bg-orange-500 text-white font-bold text-sm py-4 transition-colors tracking-wide"
                >
                  {t('catalog.order')} →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
