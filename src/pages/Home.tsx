import { useState } from 'react';
import { ArrowRight, Star, ShieldCheck, Wrench, Briefcase, ChevronRight, Building2, Factory, HardHat, HeartPulse, Pickaxe, Tractor, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import IndonesiaMap from '../components/IndonesiaMap';

export default function Home() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: 'Maintenance & Overhaul Alat Berat',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, service, message } = formData;
    const text = `Halo tim CV Berkah Hidayatullah,%0A%0APerkenalkan saya *${name}* dari *${company}*.%0ASaya ingin berkonsultasi mengenai layanan *${service}*.%0A%0A*Pesan / Kebutuhan:*%0A${message}`;
    window.open(`https://wa.me/6281245613771?text=${text}`, '_blank');
  };
  
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

      {/* ===== CORE SERVICES FOCUS SECTION ===== */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#ff8a00] mb-4 px-4 py-1.5 border border-[#ff8a00]/40 bg-[#ff8a00]/10">
              ⚡ {t('home.coreServices.label')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight mb-4">
              {t('home.coreServices.title')}
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              {t('home.coreServices.desc')}
            </p>
          </div>

          {/* Two Feature Blocks */}
          <div className="grid lg:grid-cols-2 gap-6">
            {(t('home.coreServices.items') || []).map((item: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white/5 border border-white/10 hover:border-[#ff8a00]/50 overflow-hidden flex flex-col transition-all duration-300 group"
              >
                {/* Image Header */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden border-b border-white/10 bg-[#0a0f1a]">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#ff8a00] px-3 py-1 border border-[#ff8a00]/40 bg-slate-900/90 shadow-lg">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  {/* Top Icon */}
                  <div className="flex justify-end mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#ff8a00]/10 border border-[#ff8a00]/30 flex items-center justify-center group-hover:bg-[#ff8a00] transition-colors shadow-lg shadow-orange-500/10">
                      {idx === 0
                        ? <Wrench className="w-5 h-5 text-[#ff8a00] group-hover:text-white transition-colors" />
                        : <Briefcase className="w-5 h-5 text-[#ff8a00] group-hover:text-white transition-colors" />
                      }
                    </div>
                  </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-4 leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-8">
                  {(item.points || []).map((point: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0" />
                      <span className="text-sm text-slate-300 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/6281245613771?text=${encodeURIComponent(`Halo CV Berkah Hidayatullah, saya ingin konsultasi mengenai layanan: ${item.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#ff8a00] hover:text-white border border-[#ff8a00]/40 hover:border-[#ff8a00] hover:bg-[#ff8a00] px-5 py-2.5 transition-all duration-200"
                >
                  {item.cta} <ChevronRight className="w-4 h-4" />
                </a>

                {/* Subtle number watermark */}
                <div className="absolute bottom-6 right-8 text-7xl font-black text-white/3 select-none pointer-events-none">
                  0{idx + 1}
                </div>
                </div>
              </motion.div>
            ))}
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

      {/* ===== COVERAGE AREA SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#ff8a00] mb-3 px-3 py-1 bg-orange-50 border border-orange-200">
              📍 {t('home.coverage.label')}
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {t('home.coverage.title')}
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              {t('home.coverage.desc')}
            </p>
          </div>

          {/* Indonesia Map */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 max-w-4xl mx-auto overflow-hidden">
            <IndonesiaMap />
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* National Card */}
            <div className="relative bg-gradient-to-br from-[#0082b4] to-[#005f8a] rounded-2xl p-8 text-white overflow-hidden shadow-xl">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-5">
                  🌏 {t('home.coverage.national.badge')}
                </span>
                <h3 className="text-2xl font-black mb-3">{t('home.coverage.national.title')}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {t('home.coverage.national.desc')}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-blue-200 uppercase tracking-widest">
                  <div className="w-6 h-px bg-blue-300"></div>
                  34 Provinsi
                </div>
              </div>
            </div>

            {/* Regional Focus Card */}
            <div className="relative bg-gradient-to-br from-[#1a5c2a] to-[#0f3a1a] rounded-2xl p-8 text-white overflow-hidden shadow-xl">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
              
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-[#ff8a00] px-3 py-1 rounded-full mb-5">
                  📍 {t('home.coverage.regional.badge')}
                </span>
                <h3 className="text-2xl font-black mb-3">{t('home.coverage.regional.title')}</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-5">
                  {t('home.coverage.regional.desc')}
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {(t('home.coverage.regional.provinces') || []).map((prov: string, i: number) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0"></div>
                      <span className="text-[11px] text-green-100 font-medium">{prov}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CLIENTS & PARTNERS SECTION ===== */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-indigo-900 mb-3 px-3 py-1 bg-indigo-100 border border-indigo-200">
            🤝 {t('home.clients.label')}
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
            {t('home.clients.title')}
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            {t('home.clients.desc')}
          </p>
        </div>

        {/* Infinite Carousel / Marquee */}
        <div className="relative flex overflow-x-hidden w-full group">
          <div className="flex animate-[scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] items-center space-x-8 md:space-x-16 px-4">
            {/* We double the logos to create the seamless loop effect */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-8 md:space-x-16">
                {[
                  { name: "Pemerintah Daerah", icon: Building2 },
                  { name: "Kementerian PUPR", icon: HardHat },
                  { name: "Dinas Kesehatan", icon: HeartPulse },
                  { name: "BUMN Karya", icon: Factory },
                  { name: "Sektor Swasta", icon: Briefcase },
                  { name: "Industri Tambang", icon: Pickaxe },
                  { name: "Sektor Agribisnis", icon: Tractor },
                ].map((client, idx) => {
                  const Icon = client.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center justify-center min-w-[140px] opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-default">
                      <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-3 shadow-sm hover:border-[#ff8a00] transition-colors">
                        <Icon className="w-8 h-8 text-slate-600 hover:text-[#ff8a00] transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">
                        {client.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* ===== B2B CONTACT FORM SECTION ===== */}
      <section id="contact" className="bg-slate-900 py-20 rounded-t-[40px] px-4 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff8a00]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left: Text & CTA */}
          <div className="text-left text-white">
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-[#ff8a00] mb-4 px-3 py-1 bg-[#ff8a00]/10 border border-[#ff8a00]/30 rounded-sm">
              💬 {t('home.contactForm.label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              {t('home.contactForm.title')}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
              {t('home.contactForm.desc')}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-[#ff8a00] fill-current" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Respon Cepat</p>
                <p className="text-sm font-medium text-white">Tim kami membalas dalam 1x24 Jam</p>
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNjYmQ1ZTEiLz48L3N2Zz4=')] opacity-50"></div>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('home.contactForm.name')}</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#ff8a00] focus:ring-1 focus:ring-[#ff8a00] transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('home.contactForm.company')}</label>
                  <input required type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#ff8a00] focus:ring-1 focus:ring-[#ff8a00] transition-all" placeholder="PT Rekayasa Industri" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('home.contactForm.service')}</label>
                <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#ff8a00] focus:ring-1 focus:ring-[#ff8a00] transition-all appearance-none cursor-pointer">
                  <option value={t('home.contactForm.options.maintenance')}>{t('home.contactForm.options.maintenance')}</option>
                  <option value={t('home.contactForm.options.procurement')}>{t('home.contactForm.options.procurement')}</option>
                  <option value={t('home.contactForm.options.other')}>{t('home.contactForm.options.other')}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('home.contactForm.message')}</label>
                <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#ff8a00] focus:ring-1 focus:ring-[#ff8a00] transition-all resize-none" placeholder="Tuliskan spesifikasi, jumlah, atau rincian masalah alat berat Anda..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#ff8a00] hover:bg-orange-500 text-white font-bold tracking-wide py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20 group">
                {t('home.contactForm.submit')}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
