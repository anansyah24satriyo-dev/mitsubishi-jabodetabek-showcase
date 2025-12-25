import React from "react"

export default function SearchFilter({ filters, setFilters }) {
  return (
    <section className="relative z-20 -mt-24">
      <div className="container mx-auto px-6">
        <div className="bg-zinc-900/90 backdrop-blur rounded-2xl p-6 md:p-8 shadow-2xl">

          {/* TITLE */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              Find Your Mitsubishi
            </h3>
            <p className="text-sm text-gray-400">
              Filter by model, transmission, and price range
            </p>
          </div>

          {/* FILTER GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* MODEL */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Model
              </label>
              <select
                className="w-full bg-black text-gray-300 px-4 py-3 rounded-md
                           border border-zinc-700 focus:border-red-600 focus:outline-none"
                value={filters.model}
                onChange={e =>
                  setFilters(f => ({ ...f, model: e.target.value }))
                }
              >
                <option value="">All Models</option>
                <option>Pajero Sport</option>
                <option>Xpander</option>
                <option>Triton</option>
                <option>Outlander</option>
              </select>
            </div>

            {/* TRANSMISSION */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Transmission
              </label>
              <select
                className="w-full bg-black text-gray-300 px-4 py-3 rounded-md
                           border border-zinc-700 focus:border-red-600 focus:outline-none"
                value={filters.transmission}
                onChange={e =>
                  setFilters(f => ({ ...f, transmission: e.target.value }))
                }
              >
                <option value="">Any</option>
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>

            {/* PRICE */}
            <div>
              <label className="block text-xs text-gray-400 mb-1">
                Price Range (Million IDR)
              </label>
              <select
                className="w-full bg-black text-gray-300 px-4 py-3 rounded-md
                           border border-zinc-700 focus:border-red-600 focus:outline-none"
                value={filters.price}
                onChange={e =>
                  setFilters(f => ({ ...f, price: e.target.value }))
                }
              >
                <option value="">Any</option>
                <option value="low">&lt; 300</option>
                <option value="mid">300 – 500</option>
                <option value="high">&gt; 500</option>
              </select>
            </div>

            {/* ACTION */}
            <div className="flex items-end">
              <button
                onClick={() =>
                  setFilters({
                    model: "",
                    transmission: "",
                    price: "",
                  })
                }
                className="w-full h-[52px] bg-red-600 hover:bg-red-700
                           rounded-md font-semibold transition"
              >
                Reset
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
