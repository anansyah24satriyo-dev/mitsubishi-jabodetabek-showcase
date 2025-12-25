import React from "react"

export default function Benefits() {
  const benefits = [
    {
      title: "Powerful Engine",
      desc: "Mesin tangguh dan efisien, cocok untuk segala medan.",
    },
    {
      title: "After Sales Service",
      desc: "Jaringan dealer luas dan layanan purna jual terpercaya.",
    },
    {
      title: "Safety Technology",
      desc: "Fitur keselamatan modern untuk kenyamanan berkendara.",
    },
    {
      title: "Proven Reliability",
      desc: "Teruji di berbagai kondisi jalan dan cuaca.",
    },
  ]

  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 max-w-xl">
          <h2 className="text-3xl font-bold">
            Why Choose Mitsubishi
          </h2>
          <p className="text-gray-400 mt-3">
            Built for durability, performance, and long-term reliability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="group bg-zinc-900 p-6 rounded-xl border border-zinc-800
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-red-600/50
                         hover:shadow-xl hover:shadow-red-600/10"
            >
              {/* ACCENT */}
              <div className="w-10 h-1 bg-red-600 mb-4 rounded-full" />

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
