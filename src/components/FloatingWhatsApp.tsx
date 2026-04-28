import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281245613771?text=Halo%20CV%20Berkah%20Hidayatullah,%20saya%20ingin%20berkonsultasi."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip / Label yang muncul saat hover */}
      <div className="absolute right-full mr-4 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Konsultasi via WhatsApp
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
      </div>
      
      {/* Ping ring animation */}
      <div className="absolute inset-0 w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-50"></div>
    </motion.a>
  );
}
