import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/logo-resmi.png"
                alt="Logo CV Berkah Hidayatullah"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {t('footer.desc')}
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">{t('footer.contactTitle')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#ff8a00] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer.address') }} />
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#ff8a00] shrink-0" />
                <span className="text-xs">cvberkahhidayatullah@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#ff8a00] shrink-0" />
                <span className="text-xs">+62 812-4561-3771</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">{t('footer.legalTitle')}</h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>Akta No. 24 (27 Juni 2024)</li>
              <li>Notaris: Dr. Kaharuddin Kamaru, S.H., M.Kn.</li>
              <li>SK Kemenkumham: AHU-0028817-AH.01.16 Tahun 2024</li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} CV Berkah Hidayatullah. {t('footer.rights')}</p>
          <p>{t('footer.legitimacy')}: AHU-0028817-AH.01.16</p>
        </div>
      </div>
    </footer>
  );
}
