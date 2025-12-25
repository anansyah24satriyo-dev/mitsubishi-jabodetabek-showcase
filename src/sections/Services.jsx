// src/sections/Services.jsx
import React from "react"
import { Car, CreditCard, FileText, Wrench, Phone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Car size={28} />,
      title: "Konsultasi Mobil",
      desc: "Bantu pilih mobil sesuai kebutuhan, penggunaan, dan budget Anda."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Simulasi Kredit",
      desc: "Hitung cicilan, DP, tenor, dan promo leasing terbaik."
    },
    {
      icon: <Phone size={28} />,
      title: "Test Drive",
      desc: "Atur jadwal test drive langsung ke lokasi Anda."
    },
    {
      icon: <FileText size={28} />,
      title: "Pengurusan Dokumen",
      desc: "STNK, BPKB, dan administrasi kami bantu sampai selesai."
    },
    {
      icon: <Wrench size={28} />,
      title: "After Sales Support",
      desc: "Pendampingan servis, klaim, dan kebutuhan purna jual."
    },
  ]

  return (
    <section id="benefits" className="bg-zinc-950 py-24 text-white">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Layanan <span className="text-red-600">Kami</span>
          </h2>
          <p className="text-gray-400">
            Dari konsultasi hingga mobil diterima di rumah Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition"
            >
              <div className="text-red-600 mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
