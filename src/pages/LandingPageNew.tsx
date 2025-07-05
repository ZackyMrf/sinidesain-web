import { useState, useEffect, useCallback } from "react";

// Import sections
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromoSection } from "@/components/sections/PromoSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PortfolioModal } from "@/components/sections/PortfolioModal";
import { TermsSection } from "@/components/sections/TermsSection";
import { Footer } from "@/components/sections/Footer";

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

  // Handle portfolio image click
  const handleImageClick = (item: typeof portfolioData[0]) => {
    setSelectedImage({
      src: item.image,
      title: item.client,
      client: item.client,
      description: item.description,
      category: item.category
    });
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
      <PortfolioModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNavigate={navigateImage}
        currentIndex={getCurrentImageIndex()}
        totalItems={portfolioData.length}
      />
      
      <div className="font-sans bg-white text-gray-900 scroll-smooth">
        {/* Navigation Bar */}
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

        {/* Main Content Sections */}
        <HeroSection />
        <PromoSection />
        <SocialProofSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection 
          portfolioData={portfolioData}
          onImageClick={handleImageClick}
        />
        <TestimonialsSection />
        <TermsSection />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
