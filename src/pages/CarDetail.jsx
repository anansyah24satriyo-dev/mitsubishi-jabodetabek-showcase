import React, { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { cars } from "../data/cars"

export default function CarDetail() {
  const { id } = useParams()
  const car = cars.find(c => c.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!car) {
    return (
      <section className="py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Car Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          The car you’re looking for doesn’t exist or has been removed.
        </p>

        <Link
          to="/"
          className="inline-block bg-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Back to Home
        </Link>
      </section>
    )
  }

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* INFO */}
          <div className="space-y-6">

            {/* TITLE */}
            <div>
              <h1 className="text-4xl font-bold leading-tight">
                {car.name}
              </h1>
              <p className="text-gray-400 mt-1">
                {car.model} • {car.transmission}
              </p>
            </div>

            {/* PRICE */}
            <div className="bg-zinc-900 p-5 rounded-xl">
              <p className="text-sm text-gray-400">
                Starting from
              </p>
              <p className="text-3xl font-bold text-red-500">
                {car.price}
              </p>
            </div>

            {/* SPECS */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Spec label="Model" value={car.model} />
              <Spec label="Transmission" value={car.transmission} />
              <Spec label="Fuel" value={car.fuel || "Gasoline"} />
              <Spec label="Condition" value="New" />
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/628xxxxxxxxx"
                target="_blank"
                className="flex-1 bg-red-600 text-center px-6 py-4 rounded-xl font-semibold hover:bg-red-700 transition"
              >
                Book Test Drive
              </a>

              <Link
                to="/"
                className="px-6 py-4 rounded-xl border border-gray-600 hover:border-red-600 transition"
              >
                Back
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

function Spec({ label, value }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg">
      <p className="text-gray-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  )
}
