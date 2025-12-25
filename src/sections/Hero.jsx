import React from "react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
      
      <div className="container mx-auto px-6 pt-40 pb-28 flex flex-col lg:flex-row items-center gap-12">
        
        {/* TEXT */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Find Your
            <span className="text-red-600"> Mitsubishi </span>
            Dream Car
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Powerful performance, modern design, and unmatched durability
            for every journey.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#featured"
              className="bg-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
            >
              Explore Cars
            </a>

            <a
              href="#popular"
              className="border border-gray-600 px-8 py-4 rounded-xl hover:border-red-600 transition"
            >
              Best Sellers
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:w-1/2">
          <img
            src="./Hero.jpg"
            alt="Mitsubishi Car"
            className="w-full max-w-xl mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          />
        </div>

      </div>
    </section>
  )
}
