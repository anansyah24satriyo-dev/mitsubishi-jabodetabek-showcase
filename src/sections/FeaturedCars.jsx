import React from "react"
import CarCard from "../components/CarCard"
import { cars } from "../data/cars"

export default function FeaturedCars() {
  return (
        <section
      id="featured"
      className="bg-black text-white py-28"
    >
    <section className="bg-gradient-to-b from-black to-zinc-900 py-28">
      <div className="container mx-auto px-6">

        <div className="mb-14">
          <h2 className="text-3xl font-bold">Featured Cars</h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            Popular Mitsubishi models recommended for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cars
            .filter(car => car.featured)
            .map(car => (
              <CarCard
                key={car.id}
                {...car}
                variant="featured"
              />
            ))}
        </div>

      </div>
    </section>
    </section>
  )
}
