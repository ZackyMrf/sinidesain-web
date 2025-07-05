import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, ArrowUp } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src="/siniputih.png"
                alt="SiniDesain Logo"
                width={160}
                height={50}
                className="mx-auto mb-6"
                priority
              />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Siap Wujudkan Desain Impian?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Konsultasi gratis untuk mendiskusikan kebutuhan desain bisnis Anda. Tim profesional kami siap membantu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Phone size={18} className="mr-2" />
                  Mulai Konsultasi Gratis
                </Button>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Response dalam 2 jam</span>
              </div>
            </div>
          </div>

          {/* Contact & Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center md:text-left">
            
            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Hubungi Kami</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone size={16} className="text-blue-400 flex-shrink-0" />
                  <a href="https://wa.me/628813701497" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +62 881-3701-497
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@sinidesain.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                    info@sinidesain.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Layanan Populer</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Feed Instagram</li>
                <li>• Poster Promosi</li>
                <li>• Pricelist & Menu</li>
                <li>• PowerPoint Slide</li>
                <li>• Banner & Spanduk</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Ikuti Kami</h4>
              <div className="flex justify-center md:justify-start gap-4 mb-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Phone size={18} />
                </a>
              </div>
              <p className="text-gray-400 text-xs">Senin - Jumat, 09:00 - 18:00 WIB</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} SiniDesain. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="text-gray-400">Made with</span>
              <span className="text-red-400">❤️</span>
              <span className="text-gray-400">in Indonesia</span>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 text-sm border border-white/10"
            >
              <ArrowUp size={16} />
              <span>Kembali ke Atas</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
