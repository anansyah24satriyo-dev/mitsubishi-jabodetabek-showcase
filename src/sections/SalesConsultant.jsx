import React from "react"

export default function SalesConsultant() {
  const clientPhotos = [
    "/clients/client1.jpeg",
    "/clients/client2.jpeg",
    "/clients/client3.jpeg",
    "/clients/client4.jpeg",
  ]

  return (
    <section
      id="sales"
      className="bg-gradient-to-b from-zinc-950 to-black text-white py-28"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-10">

            {/* SALES PHOTO */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl shadow-black/40">
                <img
                  src="/Sales.png"
                  alt="Sales Resmi Mitsubishi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600" />
              </div>
            </div>

            {/* CLIENT GALLERY */}
            <div>
              <p className="text-sm text-gray-400 mb-4">
                Dokumentasi Serah Terima Unit
              </p>

              <div className="grid grid-cols-4 gap-3 max-w-sm">
                {clientPhotos.map((img, i) => (
                  <div
                    key={i}
                    className="group relative aspect-square rounded-lg overflow-hidden border border-zinc-800"
                  >
                    <img
                      src={img}
                      alt={`Client Mitsubishi ${i + 1}`}
                      className="
                        w-full h-full object-cover
                        transition-all duration-300
                        group-hover:scale-105
                      "
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT */}
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

            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Konsultasi kebutuhan & budget",
                "Info promo & unit ready",
                "Test drive & simulasi kredit",
                "Harga bisa dinegosiasikan",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-600">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="https://wa.me/6283111778286"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-3
                  bg-red-600 px-8 py-4 rounded-xl
                  font-semibold transition
                  hover:bg-red-700 hover:scale-[1.02]
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
