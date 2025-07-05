import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface SelectedImage {
  src: string;
  title: string;
  client: string;
  description: string;
  category: string;
}

interface PortfolioModalProps {
  selectedImage: SelectedImage | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
  currentIndex: number;
  totalItems: number;
}

export const PortfolioModal = ({ 
  selectedImage, 
  onClose, 
  onNavigate, 
  currentIndex, 
  totalItems 
}: PortfolioModalProps) => {
  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
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
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <X size={20} />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate('next')}
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
              {currentIndex + 1} / {totalItems}
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
            <Button variant="outline" onClick={onClose}>
              Tutup
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
