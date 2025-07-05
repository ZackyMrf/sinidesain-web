import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

// Counter Animation Component
const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(end * progress));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    >
      {count}{suffix}
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16 sm:pt-20 overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-2 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-2 sm:right-10 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-indigo-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 animate-bounce delay-300">
          <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 left-16 animate-bounce delay-700">
          <div className="w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 left-20 animate-bounce delay-500">
          <div className="w-2 h-2 bg-indigo-400 rounded-full opacity-60"></div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block mb-4 sm:mb-6"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold animate-pulse shadow-lg">
            ✨ Dipercaya 500+ Klien Bahagia
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-[0.9]"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block animate-gradient">
            Mau Desain?
          </span>
          <span className="text-gray-900 block mt-2">diSINI aja!</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4"
        >
          Jasa desain grafis profesional khusus UMKM, kreator, & bisnis online yang butuh visual 
          <span className="font-bold text-blue-600"> keren dan konsisten</span> untuk 
          <span className="font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> meningkatkan penjualan!</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4"
        >
          <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="group w-full sm:w-auto rounded-2xl shadow-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold transform hover:scale-105 transition-all duration-300">
              <Phone size={22} className="mr-3 group-hover:rotate-12 transition-transform" />
              Konsultasi Gratis Sekarang!
            </Button>
          </a>
          <a href="#portfolio" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-2xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold transition-all duration-300">
              Lihat Portfolio
            </Button>
          </a>
        </motion.div>
        
        {/* Enhanced Stats - Responsive grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xs sm:max-w-lg mx-auto"
        >
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Counter end={500} suffix="+" />
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Klien Puas</div>
          </motion.div>
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Counter end={24} />
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Jam Response</div>
          </motion.div>
          <motion.div 
            className="text-center group"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Counter end={99} suffix="%" />
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Tingkat Kepuasan</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
