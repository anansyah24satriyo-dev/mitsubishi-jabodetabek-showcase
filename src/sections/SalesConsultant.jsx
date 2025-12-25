// src/sections/SalesConsultant.jsx
import React from "react"

export default function SalesConsultant() {
  return (
    <section
      id="sales"
      className="bg-gradient-to-b from-zinc-950 to-black text-white py-28"
    >
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* PHOTO */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="
                relative w-64 h-64 rounded-2xl overflow-hidden
                border border-zinc-800
                shadow-xl shadow-black/40
              "
            >
              <img
                src="/Sales.jpg"
                alt="Sales Resmi Mitsubishi"
                className="w-full h-full object-cover"
              />

              {/* RED ACCENT */}
              <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600" />
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-7 max-w-xl">
            <h2 className="text-3xl font-bold leading-tight">
              Dibantu Langsung oleh <br />
              <span className="text-red-600">
                Sales Resmi Mitsubishi
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Saya siap membantu Anda menemukan mobil Mitsubishi terbaik sesuai
              kebutuhan dan budget — mulai dari konsultasi, promo terbaik,
              hingga unit diterima di rumah Anda.
            </p>

            {/* BENEFITS */}
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-red-600">✔</span>
                Konsultasi kebutuhan & budget
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✔</span>
                Info promo & unit ready
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✔</span>
                Test drive & simulasi kredit
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✔</span>
                Harga bisa dinegosiasikan
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/628xxxxxxxxx"
                target="_blank"
                className="
                  inline-flex items-center gap-3
                  bg-red-600 px-8 py-4 rounded-xl
                  font-semibold
                  transition
                  hover:bg-red-700
                  hover:scale-[1.02]
                "
              >
                Chat WhatsApp Sekarang
                <span className="text-lg">→</span>
              </a>

              <p className="text-xs text-gray-500 mt-3">
                Respon cepat • Konsultasi gratis
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
