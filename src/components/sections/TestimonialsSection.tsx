import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  return (
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
  );
};
