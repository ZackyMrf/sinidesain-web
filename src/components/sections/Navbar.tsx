import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { SiniDesainLogo } from "@/components/Logo";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const Navbar = ({ isMenuOpen, toggleMenu, closeMenu }: NavbarProps) => {
  return (
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
  );
};
