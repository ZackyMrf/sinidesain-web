import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const TermsSection = () => {
  const termsData = [
    {
      title: "1. Layanan yang Disediakan",
      content: [
        "Poster promosi",
        "Pricelist / daftar menu",
        "Slide presentasi (PPT)",
        "Banner / spanduk",
        "Feed dan story Instagram"
      ],
      icon: "🎨"
    },
    {
      title: "2. Proses Pemesanan",
      content: [
        "Pemesanan dilakukan melalui WhatsApp",
        "Pelanggan wajib mengisi brief dengan lengkap (isi teks, gambar produk, dll)",
        "Desain akan dikerjakan setelah konfirmasi brief dan pembayaran dilakukan"
      ],
      icon: "📝"
    },
    {
      title: "3. Waktu Pengerjaan",
      content: [
        "Waktu pengerjaan dihitung sejak brief lengkap diterima",
        "Estimasi waktu tergantung jenis desain (lihat pricelist)",
        "Revisi hanya bisa dilakukan sesuai ketentuan (biasanya maksimal 2 revisi ringan)"
      ],
      icon: "⏰"
    },
    {
      title: "4. Revisi dan Batasan",
      content: [
        "Revisi hanya mencakup perbaikan minor (warna, posisi, teks)",
        "Revisi besar (ganti konsep) dikenakan biaya tambahan",
        "Revisi di luar batas waktu (>3 hari setelah file final dikirim) tidak dilayani kecuali disepakati sebelumnya"
      ],
      icon: "🔄"
    },
    {
      title: "5. Hak Cipta dan Penggunaan",
      content: [
        "File desain hanya untuk keperluan bisnis atau promosi pribadi klien",
        "Klien dilarang menjual ulang, mengedit besar-besaran, atau mengklaim desain sebagai karya pribadi",
        "SiniDesain berhak menampilkan hasil desain (dengan sensor data jika perlu) sebagai portofolio"
      ],
      icon: "⚖️"
    },
    {
      title: "6. Pembayaran",
      content: [
        "Pembayaran dilakukan di awal (100%) sebelum pengerjaan dimulai",
        "Tidak ada sistem refund kecuali terjadi kesalahan dari pihak SiniDesain",
        "Pembayaran dapat dilakukan via transfer bank/e-wallet yang disepakati"
      ],
      icon: "💳"
    },
    {
      title: "7. Kejadian Tak Terduga",
      content: [
        "SiniDesain tidak bertanggung jawab atas keterlambatan atau kegagalan layanan akibat kejadian di luar kendali (mati listrik, gangguan internet, bencana, dll)"
      ],
      icon: "⚠️"
    },
    {
      title: "8. Batasan Konten yang Diterima",
      content: [
        "Konten dewasa/pornografi",
        "Kekerasan atau kebencian (SARA, rasisme, diskriminasi)",
        "Hoaks, ujaran kebencian, atau provokasi",
        "Unsur politik sensitif atau kampanye tanpa izin",
        "Jika ditemukan pelanggaran, SiniDesain berhak menolak atau membatalkan pesanan tanpa pengembalian dana"
      ],
      icon: "🚫"
    },
    {
      title: "9. Kejujuran Konten Produk",
      content: [
        "Klien wajib memberikan materi (foto/teks) yang asli dan sesuai dengan produk/jasa yang dimiliki",
        "SiniDesain tidak bertanggung jawab atas klaim palsu atau penipuan yang dilakukan oleh klien",
        "Kami berhak menolak desain yang terindikasi tidak jujur atau berpotensi menyesatkan konsumen"
      ],
      icon: "✅"
    }
  ];

  return (
    <section id="terms" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
              📋 Penting untuk Dibaca
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Syarat dan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ketentuan</span> Layanan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Harap membaca dengan seksama sebelum menggunakan layanan kami untuk memastikan kerjasama yang lancar
          </motion.p>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {termsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.content.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-gray-600">
                        <span className="text-blue-600 text-sm mt-1.5">•</span>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 lg:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
              ⚠️
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perhatian Penting!</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Dengan melakukan pemesanan, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan di atas. 
                Jika ada pertanyaan atau keraguan, silakan hubungi kami sebelum melakukan pemesanan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/628813701497" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl">
                    <Phone size={16} className="mr-2" />
                    Tanya Sebelum Pesan
                  </Button>
                </a>
                <Button size="sm" variant="outline" className="w-full sm:w-auto rounded-xl border-gray-300">
                  Saya Mengerti
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
