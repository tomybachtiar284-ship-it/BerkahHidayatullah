import { useState } from 'react';
import { Package, Tractor, Hammer, Fish, Presentation, Check, X, ChevronRight, Star, Wrench, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

type FeaturedItem = {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  image: string;
  highlights: string[];
  longDesc: string[];
};

type CatalogItem = {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  longDesc?: string[];
};

export default function Catalog() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFeatured, setSelectedFeatured] = useState<FeaturedItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  const featuredItems: FeaturedItem[] = t('catalog.featured') || [];
  const catalogItems: CatalogItem[] = t('catalog.items') || [];
  const cats = t('catalog.categories') || {};

  const origCategories = ['konstruksi','konstruksi','eceran','eceran','agribisnis','agribisnis','perikanan','jasa','konstruksi'];

  const categories = [
    { id: 'all', labelKey: 'all', icon: Package },
    { id: 'konstruksi', labelKey: 'konstruksi', icon: Hammer },
    { id: 'eceran', labelKey: 'eceran', icon: Package },
    { id: 'agribisnis', labelKey: 'agribisnis', icon: Tractor },
    { id: 'perikanan', labelKey: 'perikanan', icon: Fish },
    { id: 'jasa', labelKey: 'jasa', icon: Presentation },
  ];

  const filteredItems = activeCategory === 'all'
    ? catalogItems
    : catalogItems.filter((_: any, idx: number) => origCategories[idx] === activeCategory);

  const waLink = (title: string) =>
    `https://wa.me/6281245613771?text=${encodeURIComponent(`Halo CV Berkah Hidayatullah, saya ingin menanyakan lebih lanjut tentang layanan: ${title}`)}`;

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif italic text-slate-900 tracking-tight mb-4">{t('catalog.title')}</h1>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto tracking-wide font-medium">
            {t('catalog.desc')}
          </p>
        </div>
      </div>

      {/* ===== FEATURED SERVICES SECTION ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#ff8a00] fill-current" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#ff8a00]">{t('catalog.featuredLabel')}</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#ff8a00]/30 to-transparent"></div>
        </div>

        {/* Two Big Featured Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#ff8a00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5">
                  <h2 className="text-white font-black text-2xl leading-tight mb-1">{item.title}</h2>
                  <p className="text-slate-300 text-xs">{item.tagline}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0" />
                      <span className="text-[11px] text-slate-600 font-medium leading-tight">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedFeatured(item)}
                    className="flex-1 flex items-center justify-center gap-2 border border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white text-[11px] font-bold uppercase tracking-widest py-3 transition-all duration-200"
                  >
                    {t('catalog.detail')} <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={waLink(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#ff8a00] hover:bg-orange-500 text-white text-[11px] font-bold uppercase tracking-widest py-3 transition-colors"
                  >
                    {t('catalog.order')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== OTHER SERVICES SECTION ===== */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-slate-400" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">{t('catalog.otherLabel')}</span>
          </div>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest transition-all ${
                  isActive
                    ? 'bg-indigo-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3 h-3" />
                {cats[cat.labelKey] || cat.labelKey}
              </button>
            );
          })}
        </div>

        {/* Other Services Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-slate-200">
          <AnimatePresence>
            {filteredItems.map((item: CatalogItem) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white border-b border-r border-slate-200 flex flex-col group p-5 cursor-pointer hover:shadow-lg transition-shadow relative"
              >
                <div className="relative h-36 overflow-hidden bg-slate-100 mb-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-indigo-900 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">{item.category}</span>
                  </div>
                </div>
                <h3 className="text-[11px] font-bold uppercase text-slate-900 tracking-wide mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-[10px] leading-relaxed flex-1 line-clamp-2">{item.desc}</p>
                <div className="mt-3 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-indigo-900 border-t border-slate-100 pt-3">
                  <span>{t('catalog.detail')}</span>
                  <Check className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ===== FEATURED DETAIL MODAL ===== */}
      <AnimatePresence>
        {selectedFeatured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedFeatured(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={selectedFeatured.image} alt={selectedFeatured.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-6 right-14">
                  <span className="inline-flex items-center gap-1.5 bg-[#ff8a00] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 mb-3">
                    <Star className="w-3 h-3 fill-current" /> {selectedFeatured.badge}
                  </span>
                  <h2 className="text-white font-black text-2xl leading-tight">{selectedFeatured.title}</h2>
                  <p className="text-slate-300 text-xs mt-1">{selectedFeatured.tagline}</p>
                </div>
                <button
                  onClick={() => setSelectedFeatured(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-9 h-9 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-6 bg-slate-50 border-b border-slate-200">
                {selectedFeatured.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff8a00] shrink-0" />
                    <span className="text-[11px] text-slate-700 font-semibold">{h}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-8 space-y-4">
                {selectedFeatured.longDesc.map((para, i) => (
                  <p key={i} className="text-slate-600 text-sm leading-relaxed">{para}</p>
                ))}
              </div>

              <div className="px-6 md:px-8 pb-8">
                <a
                  href={waLink(selectedFeatured.title)}
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

      {/* ===== OTHER ITEM DETAIL MODAL ===== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto relative"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-12">
                  <span className="bg-indigo-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{selectedItem.category}</span>
                  <h2 className="text-white font-black text-xl mt-2 leading-tight">{selectedItem.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white w-9 h-9 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                {selectedItem.longDesc && selectedItem.longDesc.length > 0
                  ? selectedItem.longDesc.map((para, i) => (
                      <p key={i} className="text-slate-600 text-sm leading-relaxed">{para}</p>
                    ))
                  : <p className="text-slate-500 text-sm">{t('catalog.noDetail')}</p>
                }
              </div>

              <div className="px-6 md:px-8 pb-8">
                <a
                  href={waLink(selectedItem.title)}
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
