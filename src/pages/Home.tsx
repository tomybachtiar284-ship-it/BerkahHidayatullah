import { ArrowRight, Star, ShieldCheck, Wrench, Briefcase, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  const statsItems = t('home.stats.items') || [];
  const servicesItems = t('home.services.items') || [];
  const projectsItems = t('home.projects.items') || [];

  return (
    <div className="pt-24 bg-[#eef5fa] min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-white">
        {/* Blue Curve Background with Image Overlay */}
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[#0082b4] rounded-bl-[100px] lg:rounded-bl-[200px] z-0 overflow-hidden shadow-2xl">
          <img
            src="/bg-hero.png"
            alt="Construction Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity hover:opacity-30 transition-opacity duration-1000"
          />
          {/* Tambahan gradient tipis agar transisi ke warna solid lebih halus */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0082b4]/80"></div>
        </div>
        {/* Orange Accent */}
        <div className="absolute bottom-0 left-0 w-[30%] h-[150px] bg-[#ff8a00] rounded-tr-[100px] z-0 hidden lg:block opacity-90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl bg-white/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 lg:p-0 rounded-2xl lg:rounded-none"
            >
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-6">
                {t('home.hero.title1')} <br /> {t('home.hero.title2')} <br /> <span className="text-[#0082b4]">{t('home.hero.title3')}</span>
              </h1>

              <p className="text-base lg:text-lg text-slate-600 mb-8 leading-relaxed">
                {t('home.hero.desc')}
              </p>

              <Link to="/catalog" className="inline-flex items-center justify-center bg-[#ff8a00] text-white px-8 py-3.5 text-[14px] font-bold tracking-wide hover:bg-orange-500 transition-colors rounded-full shadow-lg">
                {t('home.hero.cta')}
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full lg:w-[120%] xl:w-[135%] lg:translate-x-6 xl:translate-x-12"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full aspect-video group"
              >
                <img
                  src="/hero-image.png"
                  alt="Konstruksi Gorontalo"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </motion.div>

              {/* Dekorasi blur di belakang gambar untuk efek glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-[#ff8a00] opacity-20 blur-3xl -z-10 rounded-full pointer-events-none"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats & Features Section */}
      <section className="py-20 relative z-10 -mt-10 lg:-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left side text & rating */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                {t('home.stats.title')}
              </h2>
              <p className="text-sm text-slate-500 mb-6">{t('home.stats.subtitle')}</p>

              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-[#0082b4] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5.0
                </div>
                <div className="flex text-[#ff8a00]">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">{t('home.stats.trusted')}</p>
            </div>

            {/* Right side numbered boxes */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100 grid md:grid-cols-2 gap-8 relative">
                {statsItems.map((item: any, idx: number) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#0082b4] text-white flex items-center justify-center font-bold shrink-0 mt-1">{idx + 1}</div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services / Icons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">{t('home.services.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {servicesItems[0] && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ff8a00] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{servicesItems[0].title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{servicesItems[0].desc}</p>
              </div>
            )}
            
            {servicesItems[1] && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ff8a00] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{servicesItems[1].title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{servicesItems[1].desc}</p>
              </div>
            )}

            {servicesItems[2] && (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ff8a00] text-white flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{servicesItems[2].title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{servicesItems[2].desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects / Catalog Cards Section */}
      <section className="py-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {projectsItems.map((item: any, idx: number) => {
              const images = [
                "/proyek-sipil.png",
                "https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              ];
              return (
                <div key={idx} className="bg-white rounded-[30px] p-6 shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6">
                    <img src={images[idx]} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 mb-6 line-clamp-2">{item.desc}</p>
                  <Link to="/catalog" className="inline-flex items-center justify-center bg-[#ff8a00] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-orange-500 transition-colors w-max">
                    {t('home.projects.cta')}
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="bg-slate-900 py-16 rounded-t-[40px] text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">{t('home.ctaFooter.title')}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">{t('home.ctaFooter.desc')}</p>
        <a href="https://wa.me/6281245613771?text=Halo%20CV%20Berkah%20Hidayatullah,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20saya." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#ff8a00] text-white px-8 py-3.5 text-[13px] font-bold tracking-wide hover:bg-orange-500 transition-colors rounded-full shadow-lg">
          {t('home.ctaFooter.button')} <ChevronRight className="w-4 h-4" />
        </a>
      </section>

    </div>
  );
}
