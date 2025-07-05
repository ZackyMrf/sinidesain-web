import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const SocialProofSection = () => {
  return (
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
  );
};
