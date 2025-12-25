import React from "react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-400">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-white text-xl font-bold">
            Mitsubishi Motors
          </h3>
          <p className="mt-3 text-sm">
            Sales resmi Mitsubishi Indonesia.  
            Konsultasi, promo & test drive.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>Featured Cars</li>
            <li>Popular Models</li>
            <li>Why Mitsubishi</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 +62 8xxx xxxx</li>
            <li>📍 Indonesia</li>
            <li>🕘 08:00 – 20:00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Test Drive
          </h4>
          <a
            href="https://wa.me/628xxxxxxxxx"
            target="_blank"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            WhatsApp Now
          </a>
        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} Mitsubishi Dealer. All rights reserved.
      </div>
    </footer>
  )
}
