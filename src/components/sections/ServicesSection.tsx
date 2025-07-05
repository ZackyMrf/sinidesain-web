import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  return (
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
  );
};
