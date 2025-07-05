import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export const PromoSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-y-2 sm:border-y-4 border-orange-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 sm:mb-3 md:mb-4 animate-pulse shadow-lg">
              🔥 PROMO SPESIAL JULI 🔥
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-gray-900 px-2"
          >
            Paket <span className="text-orange-600">Super Hemat</span> Untuk Bisnis Anda!
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 leading-relaxed"
          >
            Dapatkan desain berkualitas profesional dengan harga terjangkau. Promo terbatas, jangan sampai terlewat!
          </motion.p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {[
            {
              title: "Poster Promosi",
              price: "20K",
              originalPrice: "35K",
              features: ["1 Konsep desain", "2 Revisi", "Pengerjaan Cepat", "File PNG/JPG"],
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
              features: ["Cocok gerobak/kafe kecil", "Pengerjaan Cepat", "Layout profesional", "File print ready"],
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
              <Card className={`rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full relative overflow-hidden ${popular ? 'ring-1 sm:ring-2 ring-orange-400 bg-gradient-to-br from-orange-50 to-red-50' : 'bg-white'}`}>
                {popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 sm:px-3 py-1 rounded-bl-lg sm:rounded-bl-xl font-bold">
                    HOT! 🔥
                  </div>
                )}
                
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col h-full">
                  <div className="text-center mb-2 sm:mb-3 md:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2 md:mb-3 mx-auto">
                      {icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base lg:text-lg leading-tight px-1">{title}</h3>
                    
                    <div className="mb-2 sm:mb-3">
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1">
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-600">{price}</span>
                        {title === "Buku Menu" && (
                          <span className="text-gray-500 text-xs sm:text-sm">/halaman</span>
                        )}
                        {title === "Slide PPT" && (
                          <span className="text-gray-500 text-xs sm:text-sm">/slide</span>
                        )}
                        {title !== "Buku Menu" && title !== "Slide PPT" && (
                          <span className="text-gray-500 text-xs sm:text-sm">/item</span>
                        )}
                      </div>
                      <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
                        <span className="text-gray-400 line-through text-xs sm:text-sm">{originalPrice}</span>
                        <span className="bg-red-100 text-red-600 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium whitespace-nowrap">
                          HEMAT {Math.round((1 - parseInt(price.replace('K', '')) / parseInt(originalPrice.replace('K', ''))) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 mb-2 sm:mb-3 md:mb-4">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm">
                          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      className={`w-full py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm ${
                        popular 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-md hover:shadow-lg' 
                          : 'bg-gray-800 hover:bg-black text-white'
                      }`}
                    >
                      <Phone size={12} className="mr-1 sm:mr-1.5 md:mr-2" />
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
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4">⏰ Promo Terbatas!</h3>
            <p className="text-red-100 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
              Harga spesial ini hanya berlaku hingga akhir bulan. Jangan sampai terlewat kesempatan emas ini!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-red-600 hover:bg-gray-100 rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold">
                  <Phone size={16} className="mr-2" />
                  Ambil Promo Sekarang!
                </Button>
              </a>
              <div className="text-red-100 text-xs sm:text-sm font-medium">
                💬 Fast response dalam 2 jam!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
