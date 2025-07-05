import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
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
  );
};
