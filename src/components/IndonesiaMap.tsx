import { motion } from 'motion/react';

export default function IndonesiaMap() {
  return (
    <div className="w-full h-auto flex items-center justify-center relative overflow-hidden p-4">
      {/* Subtle background glow effect */}
      <motion.div 
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [0.8, 1.05, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#0082b4] blur-[80px] -z-10 rounded-full pointer-events-none"
      />
      
      <motion.img 
        src="/peta-indonesia.jpg" 
        alt="Peta Wilayah Layanan Indonesia" 
        className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] z-10"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        animate={{ 
          y: [0, -12, 0],
        }}
        transition={{ 
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { duration: 0.8, ease: "easeOut" },
          scale: { duration: 0.8, ease: "easeOut" }
        }}
        whileHover={{ 
          scale: 1.03, 
          dropShadow: "0 25px 40px rgba(0,0,0,0.2)",
          transition: { duration: 0.4 } 
        }}
      />
    </div>
  );
}
