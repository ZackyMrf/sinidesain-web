import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface PortfolioItem {
  category: string;
  client: string;
  image: string;
  description: string;
}

interface PortfolioSectionProps {
  portfolioData: PortfolioItem[];
  onImageClick: (image: PortfolioItem) => void;
}

export const PortfolioSection = ({ portfolioData, onImageClick }: PortfolioSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const categories = ["Semua", "Feed Instagram", "Poster Promosi", "PowerPoint", "Pricelist & Menu"];
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const filteredData = activeCategory === "Semua" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(filteredData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🎨 Portfolio Terbaik
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
          >
            Karya <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pilihan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base"
          >
            Hasil karya terbaik yang telah membantu klien meningkatkan brand awareness dan penjualan
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((filter) => (
            <Button 
              key={filter}
              variant={filter === activeCategory ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setActiveCategory(filter);
                setCurrentSlide(0);
              }}
              className={`rounded-full px-3 sm:px-4 text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === activeCategory 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 -translate-x-5"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 translate-x-5"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
                    {filteredData
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((item, idx) => (
                        <motion.div
                          key={`${slideIndex}-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image 
                              src={item.image} 
                              alt={`${item.category} - ${item.client}`} 
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                            
                            {/* Category Badge */}
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-xs font-medium">
                              {item.category}
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="absolute bottom-3 left-3 right-3 text-white">
                                <h3 className="font-semibold text-sm mb-1">{item.client}</h3>
                                <p className="text-xs text-gray-200 mb-2 leading-relaxed line-clamp-2">{item.description}</p>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    className="bg-white text-black hover:bg-gray-100 rounded-lg text-xs px-3 py-1 h-auto"
                                    onClick={() => onImageClick(item)}
                                  >
                                    Detail
                                  </Button>
                                  <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-lg text-xs px-3 py-1 h-auto">
                                      Pesan
                                    </Button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Card Info */}
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.client}</h4>
                            <p className="text-xs text-gray-500">{item.category}</p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-lg border border-gray-100">
            <h3 className="font-bold text-lg sm:text-xl mb-3 text-gray-900">Tertarik dengan hasil karya kami? 🎨</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Konsultasi gratis untuk membahas kebutuhan desain proyek Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 sm:px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone size={18} className="mr-2" />
                  Konsultasi Gratis
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
