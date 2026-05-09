import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-slate-50 flex items-center justify-center p-4">
      <SEO 
        title="404 Halaman Tidak Ditemukan — CV Berkah Hidayatullah"
        description="Halaman yang Anda cari tidak dapat ditemukan."
      />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center border border-slate-100"
      >
        <div className="w-20 h-20 bg-orange-100 text-[#ff8a00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-10">
          Mohon maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau Anda salah mengetikkan alamat (URL).
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => window.history.back()}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest py-4 px-4 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali
          </button>
          <Link 
            to="/" 
            className="flex-1 flex items-center justify-center gap-2 bg-[#0082b4] hover:bg-[#006f9a] text-white text-xs font-bold uppercase tracking-widest py-4 px-4 rounded-xl transition-colors shadow-lg shadow-[#0082b4]/20"
          >
            <Home className="w-4 h-4" /> Beranda
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
