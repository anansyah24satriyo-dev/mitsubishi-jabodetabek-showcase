import React from "react"
import CarCard from "../components/CarCard"
import { cars } from "../data/cars"

export default function PopularCars() {
  return (
    <section
      id="popular"
      className="bg-black text-white py-28"
    >
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-bold">
            Most Popular Cars
          </h2>
          <p className="text-gray-400 mt-3">
            Best selling Mitsubishi models
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cars
            .filter(car => car.popular)
            .map(car => (
              <CarCard key={car.id} {...car} />
            ))}
        </div>

      </div>
    </section>
  )
}
