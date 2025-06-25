import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SiniDesainLogo } from "@/components/Logo";
import { useState, useEffect, useCallback } from "react";

// Portfolio data moved outside component to avoid re-renders
const portfolioData = [
  // Feed Instagram Portfolio
  { 
    category: "Feed Instagram", 
    client: "Bakery & Pastry", 
    image: "/porto_feed/bakery.png",
    description: "Desain feed Instagram yang appetizing untuk bisnis bakery dengan tone warm dan cozy"
  },
  { 
    category: "Feed Instagram", 
    client: "Food & Beverage", 
    image: "/porto_feed/food.png",
    description: "Feed Instagram F&B dengan visual yang menggugah selera dan branding yang konsisten"
  },
  { 
    category: "Feed Instagram", 
    client: "Fashion Brand Mabel", 
    image: "/porto_feed/mabel.png",
    description: "Feed Instagram fashion dengan aesthetic minimalis dan color palette yang elegant"
  },
  // Poster Portfolio
  { 
    category: "Poster Promosi", 
    client: "Event Pendidikan", 
    image: "/porto_poster/pendidikan.jpg",
    description: "Poster event pendidikan dengan desain yang clean dan informatif"
  },
  { 
    category: "Poster Promosi", 
    client: "Kampus & Universitas", 
    image: "/porto_poster/pendidikan2.jpg",
    description: "Design poster akademik dengan typography yang profesional dan mudah dibaca"
  },
  { 
    category: "Poster Promosi", 
    client: "Business Promotion", 
    image: "/porto_poster/promosi.png",
    description: "Poster promosi bisnis dengan visual hierarchy yang baik dan call-to-action yang jelas"
  },
  { 
    category: "Poster Promosi", 
    client: "Marketing Campaign", 
    image: "/porto_poster/promosi2.png",
    description: "Poster marketing yang eye-catching dengan color scheme yang menarik perhatian"
  },
  // PowerPoint Portfolio - Gabungan dari ppt_usaha dan PPT_tugas
  { 
    category: "PowerPoint", 
    client: "Corporate Business", 
    image: "/porto_ppt/ppt_usaha/1.jpg",
    description: "Presentation slide yang profesional dengan infografik yang menarik"
  },
  { 
    category: "PowerPoint", 
    client: "Marketing Agency", 
    image: "/porto_ppt/ppt_usaha/5.jpg",
    description: "Slide presentasi dengan data visualization yang mudah dipahami"
  },
  { 
    category: "PowerPoint", 
    client: "Consulting Firm", 
    image: "/porto_ppt/ppt_usaha/6.jpg",
    description: "Template slide bisnis dengan layout yang clean dan professional"
  },
  { 
    category: "PowerPoint", 
    client: "Financial Report", 
    image: "/porto_ppt/ppt_usaha/10.jpg",
    description: "Slide laporan keuangan dengan chart dan grafik yang informatif"
  },
  { 
    category: "PowerPoint", 
    client: "Educational Content", 
    image: "/porto_ppt/PPT_tugas/1.png",
    description: "Slide edukasi dengan design yang engaging dan mudah dipahami"
  },
  { 
    category: "PowerPoint", 
    client: "Academic Presentation", 
    image: "/porto_ppt/PPT_tugas/3.png",
    description: "Template akademik dengan struktur yang rapi dan professional"
  },
  // Pricelist & Menu Portfolio
  { 
    category: "Pricelist & Menu", 
    client: "Kafe Lokal", 
    image: "/porto_pricelist_dan_buku_menu/menu1.png",
    description: "Menu design yang appetizing dengan layout yang user-friendly"
  },
  { 
    category: "Pricelist & Menu", 
    client: "UMKM Kuliner", 
    image: "/porto_pricelist_dan_buku_menu/1.png",
    description: "Pricelist dengan design yang clean dan informasi harga yang jelas"
  },
  { 
    category: "Pricelist & Menu", 
    client: "Restaurant Chain", 
    image: "/porto_pricelist_dan_buku_menu/2.png",
    description: "Buku menu dengan branding yang konsisten dan layout yang profesional"
  }
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    client: string;
    description: string;
    category: string;
  } | null>(null);

  // Get current image index for navigation
  const getCurrentImageIndex = useCallback(() => {
    if (!selectedImage) return -1;
    return portfolioData.findIndex(item => item.image === selectedImage.src);
  }, [selectedImage]);

  // Navigate to next/previous image
  const navigateImage = useCallback((direction: 'next' | 'prev') => {
    const currentIndex = getCurrentImageIndex();
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex + 1 >= portfolioData.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? portfolioData.length - 1 : currentIndex - 1;
    }
    
    const newImage = portfolioData[newIndex];
    setSelectedImage({
      src: newImage.image,
      title: newImage.client,
      client: newImage.client,
      description: newImage.description,
      category: newImage.category
    });
  }, [getCurrentImageIndex]);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close modal with Escape key and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (event.key === 'Escape') {
        setSelectedImage(null);
      } else if (event.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (event.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigateImage]);

  return (
    <>
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
      
      {/* Portfolio Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <X size={20} />
            </button>

            {/* Previous Button */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Button */}
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={`${selectedImage.category} - ${selectedImage.client}`}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">⭐</span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm ml-auto">
                  {getCurrentImageIndex() + 1} / {portfolioData.length}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.client}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{selectedImage.description}</p>
              
              <div className="flex gap-3">
                <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Phone size={16} className="mr-2" />
                    Pesan Desain Serupa
                  </Button>
                </a>
                <Button variant="outline" onClick={() => setSelectedImage(null)}>
                  Tutup
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      <div className="font-sans bg-white text-gray-900 scroll-smooth">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo - Responsive size */}
          <SiniDesainLogo iconSize={180} showText={false} className="sm:hidden" />
          <SiniDesainLogo iconSize={180} showText={false} className="hidden sm:block" />
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base">Tentang</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base">Layanan</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base">Portfolio</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors text-sm xl:text-base">Harga</a>
            <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-xl text-xs xl:text-sm">
                <Phone size={14} className="mr-1 xl:mr-2" />
                <span className="hidden sm:inline">Hubungi Kami</span>
                <span className="sm:hidden">WA</span>
              </Button>
            </a>
          </div>
          
          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Tentang</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Layanan</a>
            <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-xl text-xs">
                <Phone size={14} className="mr-1" />
                Hubungi
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-xl px-3">
                <Phone size={14} />
              </Button>
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="text-gray-600" />
              ) : (
                <Menu size={20} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#about" 
              onClick={closeMenu}
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tentang Kami
            </a>
            <a 
              href="#services" 
              onClick={closeMenu}
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Layanan
            </a>
            <a 
              href="#portfolio" 
              onClick={closeMenu}
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#pricing" 
              onClick={closeMenu}
              className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              Harga & Paket
            </a>
            <div className="pt-3 border-t border-gray-100">
              <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Phone size={16} className="mr-2" />
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
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

      {/* Promo Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-y-4 border-orange-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-4 animate-pulse">
                🔥 PROMO SPESIAL AKHIR TAHUN 🔥
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900"
            >
              Paket <span className="text-orange-600">Super Hemat</span> Untuk Bisnis Anda!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base font-medium"
            >
              Dapatkan desain berkualitas profesional dengan harga terjangkau. Promo terbatas, jangan sampai terlewat!
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              {
                title: "Poster Promosi",
                price: "20K",
                originalPrice: "35K",
                features: ["1 Konsep desain", "2 Revisi", "Pengerjaan 1-2 hari", "File PNG/JPG"],
                icon: "📸",
                popular: true
              },
              {
                title: "Pricelist 1 Lembar",
                price: "35K",
                originalPrice: "50K",
                features: ["Layout harga & foto produk", "2 Revisi", "Design menarik", "File siap cetak"],
                icon: "💰",
                popular: false
              },
              {
                title: "Daftar Menu Single",
                price: "40K",
                originalPrice: "65K",
                features: ["Cocok gerobak/kafe kecil", "Pengerjaan 24 jam", "Layout profesional", "File print ready"],
                icon: "📋",
                popular: true
              },
              {
                title: "Buku Menu",
                price: "20K",
                originalPrice: "30K",
                features: ["Per halaman", "Min. 4 halaman", "Cover +15K", "Design konsisten"],
                icon: "📖",
                popular: false
              },
              {
                title: "Banner / X-Banner",
                price: "35K",
                originalPrice: "55K",
                features: ["Ukuran hingga 60×160 cm", "File siap cetak", "Design eye-catching", "High resolution"],
                icon: "🏷️",
                popular: false
              },
              {
                title: "Spanduk Besar",
                price: "70K",
                originalPrice: "100K",
                features: ["Ukuran >1 meter", "Layout multi-foto", "Design impactful", "File print ready"],
                icon: "🎯",
                popular: false
              },
              {
                title: "Slide PPT",
                price: "6K",
                originalPrice: "12K",
                features: ["Per slide", "Include ikon & infografik", "+Animasi 15K/slide", "Template modern"],
                icon: "💻",
                popular: true
              },
              {
                title: "Paket Komplit",
                price: "150K",
                originalPrice: "250K",
                features: ["3 Poster + 1 Pricelist", "1 Banner + 5 Slide PPT", "Hemat 100K!", "Bonus konsultasi"],
                icon: "🎁",
                popular: true
              }
            ].map(({ title, price, originalPrice, features, icon, popular }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full relative overflow-hidden ${popular ? 'ring-2 ring-orange-400 bg-gradient-to-br from-orange-50 to-red-50' : 'bg-white'}`}>
                  {popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-bl-xl font-bold">
                      HOT! 🔥
                    </div>
                  )}
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto">
                        {icon}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{title}</h3>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-2xl sm:text-3xl font-bold text-orange-600">{price}</span>
                          {title === "Buku Menu" && (
                            <span className="text-gray-500 text-sm">/halaman</span>
                          )}
                          {title === "Slide PPT" && (
                            <span className="text-gray-500 text-sm">/slide</span>
                          )}
                          {title !== "Buku Menu" && title !== "Slide PPT" && (
                            <span className="text-gray-500 text-sm">/item</span>
                          )}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                            HEMAT {Math.round((1 - parseInt(price.replace('K', '')) / parseInt(originalPrice.replace('K', ''))) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <ul className="space-y-2 mb-4">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                            <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                            <span className="text-gray-700 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                          popular 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg' 
                            : 'bg-gray-800 hover:bg-black text-white'
                        }`}
                      >
                        <Phone size={16} className="mr-2" />
                        Pesan Sekarang
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Promo Timer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
              <h3 className="font-bold text-xl sm:text-2xl mb-4">⏰ Promo Terbatas!</h3>
              <p className="text-red-100 mb-6 text-sm sm:text-base">
                Harga spesial ini hanya berlaku hingga akhir bulan. Jangan sampai terlewat kesempatan emas ini!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 rounded-xl px-8 text-base sm:text-lg font-bold">
                    <Phone size={20} className="mr-2" />
                    Ambil Promo Sekarang!
                  </Button>
                </a>
                <div className="text-red-100 text-sm font-medium">
                  💬 Fast response dalam 2 jam!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof & Benefits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8">Dipercaya oleh berbagai jenis bisnis</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">U</div>
                <span className="text-lg font-bold text-gray-400">UMKM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">S</div>
                <span className="text-lg font-bold text-gray-400">Startup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">C</div>
                <span className="text-lg font-bold text-gray-400">Creator</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">B</div>
                <span className="text-lg font-bold text-gray-400">Brand</span>
              </div>
            </div>
          </motion.div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Response",
                desc: "Respon dalam 2 jam",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: "💎",
                title: "Kualitas Premium",
                desc: "Desain berkelas tinggi",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: "💰",
                title: "Harga Terjangkau",
                desc: "Ramah di kantong UMKM",
                color: "from-green-400 to-blue-500"
              },
              {
                icon: "🔄",
                title: "Revisi Unlimited",
                desc: "Sampai Anda puas",
                color: "from-purple-400 to-pink-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto border border-blue-100">
              <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-900">
                Sudah siap meningkatkan brand Anda? 🚀
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Konsultasi gratis untuk mengetahui kebutuhan desain bisnis Anda
              </p>
              <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl px-8 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Phone size={18} className="mr-2" />
                  Mulai Konsultasi Gratis
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            >
              Mengapa Memilih <span className="text-blue-600">SiniDesain</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
            >
              Kami bukan hanya membuat desain, tapi membantu brand Anda berkomunikasi dengan audiens secara efektif
            </motion.p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: "⚡",
                    title: "Fast Response",
                    desc: "Respon maksimal 2 jam di hari kerja, revisi cepat tanpa ribet"
                  },
                  {
                    icon: "🎨",
                    title: "Desain Personal & Estetik",
                    desc: "Setiap desain disesuaikan dengan brand personality dan target audience Anda"
                  },
                  {
                    icon: "💰",
                    title: "Paket Ramah di Kantong",
                    desc: "Harga transparan, tidak ada biaya tersembunyi, cocok untuk UMKM"
                  },
                  {
                    icon: "🔄",
                    title: "Unlimited Revisi*",
                    desc: "Revisi sampai Anda puas sesuai dengan paket yang dipilih"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Tim kreatif SiniDesain sedang bekerja"
                  width={600}
                  height={400}
                  className="rounded-xl sm:rounded-2xl shadow-lg w-full relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
            >
              Layanan <span className="text-blue-600">Profesional</span> Kami
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
            >
              Solusi lengkap untuk semua kebutuhan visual brand Anda, dari konsep hingga eksekusi
            </motion.p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Desain Feed Instagram", 
                icon: "🖼️",
                desc: "Feed Instagram yang konsisten dan eye-catching untuk meningkatkan engagement",
                popular: false
              },
              { 
                title: "Cover Reels & Thumbnail YouTube", 
                icon: "🎬",
                desc: "Thumbnail yang menarik untuk meningkatkan CTR dan views konten Anda",
                popular: true
              },
              { 
                title: "Pricelist / Menu Digital", 
                icon: "📋",
                desc: "Desain menu dan pricelist yang informatif dan mudah dibaca",
                popular: false
              },
              { 
                title: "Template Story Instagram", 
                icon: "📱",
                desc: "Template story IG yang konsisten dengan brand guideline Anda",
                popular: false
              },
              { 
                title: "Paket Langganan Konten", 
                icon: "📦",
                desc: "Paket bulanan untuk kebutuhan konten visual yang berkelanjutan",
                popular: true
              },
            ].map(({ title, icon, desc, popular }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full relative overflow-hidden ${popular ? 'ring-2 ring-blue-200' : ''}`}>
                  {popular && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                      Populer
                    </div>
                  )}
                  <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center gap-3 sm:gap-4 h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-2">
                      {icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">{desc}</p>
                    <Button variant="outline" size="sm" className="mt-3 sm:mt-4 rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm">
                      Pelajari Lebih Lanjut
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-100/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100/30 rounded-full blur-2xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                🎨 Karya Terbaik Kami
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Portfolio <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Terpilih</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg"
            >
              Beberapa karya terbaik kami yang telah membantu klien meningkatkan brand awareness dan penjualan
            </motion.p>
            
            {/* Portfolio Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {["Semua", "Feed Instagram", "Poster Promosi", "PowerPoint", "Pricelist & Menu"].map((filter) => (
                <Button 
                  key={filter}
                  variant={filter === "Semua" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full px-4 sm:px-6 text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300"
                >
                  {filter}
                </Button>
              ))}
            </motion.div>
          </div>
          
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioData.map(({ category, client, image, description }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image 
                      src={image} 
                      alt={`Portfolio ${category} - ${client}`} 
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {category}
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{client}</h3>
                      <p className="text-sm text-gray-200 mb-3 leading-relaxed">{description}</p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-white text-black hover:bg-gray-100 rounded-lg text-xs"
                          onClick={() => setSelectedImage({
                            src: image,
                            title: client,
                            client: client,
                            description: description,
                            category: category
                          })}
                        >
                          Lihat Detail
                        </Button>
                        <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-lg text-xs">
                            Pesan Serupa
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{client}</h4>
                      <p className="text-xs text-gray-500">{category}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Portfolio CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Suka dengan hasil karya kami? 🎨</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Lihat lebih banyak portfolio dan mulai konsultasi gratis untuk proyek desain Anda!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 font-semibold">
                  Lihat Portfolio Lengkap
                </Button>
                <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50 px-8 font-semibold">
                    <Phone size={18} className="mr-2" />
                    Konsultasi Sekarang
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                💝 Kata Mereka
              </div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Apa Kata <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Klien</span> Kami?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Kepuasan klien adalah prioritas utama kami. Simak testimonial mereka yang telah merasakan layanan profesional kami
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Feed Instagram aku jadi super rapih dan konsisten! Tim SiniDesain sangat responsif dan memahami brand aku. Engagement rate naik 150% dalam 2 bulan!",
                name: "Putri Maharani",
                role: "Founder Skincare Brand",
                rating: 5,
                avatar: "👩‍💼"
              },
              {
                quote: "Thumbnail YouTube yang dibuat SiniDesain bener-bener game changer! CTR naik dari 3% jadi 8%. Worth it banget!",
                name: "Rudi Hartawan",
                role: "Content Creator Tech",
                rating: 5,
                avatar: "👨‍💻"
              },
              {
                quote: "Desain feed Instagram dan brand identity yang dibuat sangat profesional. Klien saya jadi lebih percaya dengan bisnis saya. Terima kasih SiniDesain!",
                name: "Maya Sari",
                role: "UMKM Kuliner",
                rating: 5,
                avatar: "👩‍🍳"
              },
            ].map(({ quote, name, role, rating, avatar }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm h-full border-0 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                  <CardContent className="p-8">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="text-yellow-400 text-lg animate-pulse"
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>
                    
                    <p className="italic text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">&ldquo;{quote}&rdquo;</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                        {avatar}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">{name}</p>
                        <p className="text-sm text-blue-600 group-hover:text-blue-700 font-medium transition-colors duration-300">{role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 text-sm mb-6">Dipercaya oleh 500+ bisnis di Indonesia</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">UMKM</div>
              <div className="text-2xl font-bold text-gray-400">Startup</div>
              <div className="text-2xl font-bold text-gray-400">Creator</div>
              <div className="text-2xl font-bold text-gray-400">Brand</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Paket <span className="text-blue-600">Investasi</span> Terbaik
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda. Semua paket sudah termasuk konsultasi gratis!
            </motion.p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { 
                name: "Starter", 
                price: "100K", 
                originalPrice: "199K",
                period: "/paket",
                features: [
                  "3 Desain Feed Instagram",
                  "1x Revisi per desain",
                  "File format PNG/JPG",
                  "Konsultasi via WhatsApp",
                  "Waktu pengerjaan 2-3 hari"
                ],
                popular: false,
                description: "Cocok untuk bisnis yang baru memulai"
              },
              { 
                name: "Growth", 
                price: "250K", 
                originalPrice: "449K",
                period: "/paket",
                features: [
                  "10 Desain Feed Instagram",
                  "3 Template Story IG",
                  "2x Revisi per desain",
                  "File format PNG/JPG + AI/PSD",
                  "Brand guideline sederhana",
                  "Konsultasi unlimited",
                  "Waktu pengerjaan 5-7 hari"
                ],
                popular: true,
                description: "Paling populer untuk UMKM berkembang"
              },
              { 
                name: "Professional", 
                price: "600K", 
                originalPrice: "899K",
                period: "/paket",
                features: [
                  "20 Desain Feed Instagram",
                  "5 Cover Reels/Story IG",
                  "3 Thumbnail YouTube",
                  "Unlimited revisi",
                  "Brand guideline lengkap",
                  "File semua format",
                  "Priority support 24/7",
                  "Waktu pengerjaan 7-10 hari"
                ],
                popular: false,
                description: "Untuk brand yang ingin tampil premium"
              },
            ].map(({ name, price, originalPrice, period, features, popular, description }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative ${popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                <Card className={`rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden ${popular ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-white' : 'bg-white'}`}>
                  {popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm px-6 py-2 rounded-b-2xl font-semibold">
                      🔥 TERPOPULER
                    </div>
                  )}
                  
                  <CardContent className={`p-8 flex flex-col h-full ${popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-blue-600">{price}</span>
                          <span className="text-gray-500">{period}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                            HEMAT {Math.round((1 - parseInt(price.replace('K', '')) / parseInt(originalPrice.replace('K', ''))) * 100)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <ul className="space-y-4 mb-8">
                        {features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <span className="text-green-600 text-xs">✓</span>
                            </div>
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="block">
                      <Button 
                        className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
                          popular 
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg' 
                            : 'bg-gray-900 hover:bg-black text-white'
                        }`}
                      >
                        <Phone size={18} className="mr-2" />
                        Pilih Paket {name}
                      </Button>
                    </a>
                    
                    <p className="text-center text-xs text-gray-500 mt-4">
                      💰 Garansi uang kembali 100% jika tidak puas
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="font-bold text-xl mb-4">🎯 Butuh Paket Custom?</h3>
              <p className="text-gray-600 mb-6">
                Kami juga menyediakan paket langganan bulanan dan custom sesuai kebutuhan spesifik bisnis Anda. 
                Mulai dari Rp 1.5jt/bulan untuk unlimited design request!
              </p>
              <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-50">
                  Konsultasi Paket Custom
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              ⚡ Jangan Sampai Terlewat!
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            Siap Membuat Bisnis Anda <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Lebih Menarik?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Konsultasi gratis sekarang juga! Tim ahli kami siap membantu mewujudkan visual impian bisnis Anda
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-10 py-5 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone size={24} className="mr-3 group-hover:rotate-12 transition-transform" />
                Mulai Konsultasi Gratis
              </Button>
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Online 24/7 - Response Cepat</span>
            </div>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Garansi Revisi</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Pengerjaan Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💎</span>
              <span>Kualitas Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>100% Aman</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-2 lg:col-span-2">
              <SiniDesainLogo 
                iconSize={180} 
                showText={false} 
                variant="white" 
                className="mb-4 sm:mb-6" 
              />
              <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Jasa desain grafis profesional yang membantu UMKM, kreator, dan bisnis online tampil lebih menarik dan konsisten di media sosial.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://www.instagram.com/sinidesain" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="text-sm sm:text-lg">📱</span>
                </a>
                <a href="https://wa.me/628813701497" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="text-sm sm:text-lg">💬</span>
                </a>
                <a href="mailto:hello@sinidesain.com" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-sm sm:text-lg">✉️</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Layanan</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Desain Instagram</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Thumbnail YouTube</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Template Story</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Paket Langganan</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Perusahaan</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Harga</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center mb-8 sm:mb-12">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">Siap Meningkatkan Brand Anda?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">Konsultasi gratis untuk mengetahui kebutuhan desain bisnis Anda</p>
            <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-6 sm:px-8 text-sm sm:text-base">
                <Phone size={18} className="mr-1 sm:mr-2" />
                Mulai Konsultasi Gratis
              </Button>
            </a>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} SiniDesain. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>Made with ❤️ in Indonesia</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}
