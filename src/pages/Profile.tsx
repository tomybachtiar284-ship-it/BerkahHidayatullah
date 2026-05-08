import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Target, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Profile() {
  const { t } = useLanguage();
  const sidebarItems = t('profile.sidebar.items') || [];
  const valuesItems = t('profile.values.items') || [];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-24">
      {/* Editorial Header */}
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: '#1a5c2a' }}>{t('profile.title')}</h1>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tight">
              {t('profile.subtitle1')} <br className="hidden md:block"/> {t('profile.subtitle2')}
            </h2>
            <p className="text-base text-slate-600 leading-[1.8] font-normal">
              {t('profile.desc1')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            <section className="bg-white p-8 md:p-12 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-900 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-[13px] font-bold tracking-tight" style={{ color: '#1a5c2a' }}>{t('profile.legal.title')}</h3>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>{t('profile.legal.desc')}</p>
                <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-slate-200">
                  <div className="bg-slate-50 p-4 border-b border-r border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{t('profile.legal.labels.akta')}</span>
                    <span className="block text-slate-900 font-medium text-sm">{t('profile.legal.values.akta')}</span>
                  </div>
                  <div className="bg-slate-50 p-4 border-b border-r border-slate-200">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{t('profile.legal.labels.notaris')}</span>
                    <span className="block text-slate-900 font-medium text-sm">{t('profile.legal.values.notaris')}</span>
                  </div>
                  <div className="bg-slate-50 p-4 border-b border-r border-slate-200 sm:col-span-2">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{t('profile.legal.labels.kedudukan')}</span>
                    <span className="block text-slate-900 font-medium text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      {t('profile.legal.values.kedudukan')}
                    </span>
                  </div>
                </div>
                <div className="mt-6 border border-slate-200 overflow-hidden w-full h-[300px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30835.992824832174!2d122.904980843612!3d0.6487904580712411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32793040bd300a7b%3A0xba8a085c96fa3866!2sOmbulo%2C%20Kec.%20Limboto%20Bar.%2C%20Kabupaten%20Gorontalo%2C%20Gorontalo!5e1!3m2!1sid!2sid!4v1777356670823!5m2!1sid!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-900 flex items-center justify-center text-white shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-[13px] font-bold tracking-tight" style={{ color: '#1a5c2a' }}>{t('profile.management.title')}</h3>
              </div>
              
              <div className="mb-8">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t('profile.management.desc')}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 relative border-t border-slate-200 pt-6">
                  
                  <div className="relative pb-6 sm:pb-0">
                    <span className="inline-flex items-center px-2 py-1 text-[10px] uppercase font-bold tracking-widest bg-indigo-100 text-indigo-900 mb-4">
                      {t('profile.management.direktur')}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Tuan Efendi Payuyu</h4>
                    <p className="text-sm text-slate-500 mb-4">Pesero Pengurus Aktif</p>
                    <p className="text-xs text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-3">Bertanggung jawab penuh atas operasional dan arah strategis jalannya perusahaan.</p>
                  </div>
                  
                  <div className="relative pt-6 sm:pt-0 sm:pl-6 border-t sm:border-t-0 border-slate-200 sm:border-l">
                    <span className="inline-flex items-center px-2 py-1 text-[10px] uppercase font-bold tracking-widest bg-slate-200 text-slate-700 mb-4">
                      {t('profile.management.komanditer')}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Tuan Darwin Djafar</h4>
                    <p className="text-sm text-slate-500 mb-4">Silent Partner</p>
                    <p className="text-xs text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-3">Bertindak sebagai penyedia dukungan finansial perusahaan yang menunjang kesuksesan proyek.</p>
                  </div>
                </div>
              </div>

              <div className="text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4" style={{ backgroundColor: '#1a5c2a', borderLeftColor: '#b8892a' }}>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#a8d5b5' }}>{t('profile.management.modal.title')}</span>
                  <span className="text-3xl md:text-4xl font-black tracking-tight">{t('profile.management.modal.value')}</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between md:justify-end gap-12 border-b border-indigo-800 pb-2">
                    <span className="text-indigo-200 text-xs">{t('profile.management.modal.porsi1')}</span>
                    <span className="font-semibold text-right text-lg">{t('profile.management.modal.val1')}</span>
                  </div>
                  <div className="flex justify-between md:justify-end gap-12 pt-1">
                    <span className="text-indigo-200 text-xs">{t('profile.management.modal.porsi2')}</span>
                    <span className="font-semibold text-right text-lg">{t('profile.management.modal.val2')}</span>
                  </div>
                </div>
              </div>

            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-50 p-8 border border-slate-200 sticky top-28">
              <div className="w-10 h-10 bg-indigo-900 flex items-center justify-center mb-6">
                <Target className="text-white w-5 h-5" />
              </div>
              <h3 className="text-[13px] font-bold tracking-tight mb-4" style={{ color: '#1a5c2a' }}>{t('profile.sidebar.title')}</h3>
              <p className="text-slate-600 text-[13px] leading-[1.8] mb-6 font-normal">
                {t('profile.sidebar.desc')}
              </p>
              
              <ul className="space-y-4">
                {sidebarItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 border-l-2 pl-3" style={{ borderLeftColor: '#b8892a' }}>
                    <span className="text-[13px] font-semibold text-slate-700 tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
