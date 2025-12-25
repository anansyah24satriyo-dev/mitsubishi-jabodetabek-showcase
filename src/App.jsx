import React from "react"
import { useState, useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { cars } from "./data/cars"

import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import SearchFilter from "./sections/SearchFilter"
import FeaturedCars from "./sections/FeaturedCars"
import Services from "./sections/Services"
import Benefits from "./sections/Benefits"
import PopularCars from "./sections/PopularCars"
import CarCard from "./components/CarCard"
import CarDetail from "./pages/CarDetail"
import FloatingWhatsapp from "./components/FloatingWhatsapp"
import SalesConsultant from "./sections/SalesConsultant"
import Footer from "./components/Footer"

/* SCROLL TO TOP ON ROUTE CHANGE */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const [filters, setFilters] = useState({
    model: "",
    transmission: "",
    price: "",
  })

  const resultRef = useRef(null)
  const location = useLocation()

  const filteredCars = cars.filter(car => {
    if (filters.model && car.model !== filters.model) return false
    if (filters.transmission && car.transmission !== filters.transmission)
      return false

    if (filters.price === "low" && car.priceValue >= 300) return false
    if (
      filters.price === "mid" &&
      (car.priceValue < 300 || car.priceValue > 500)
    )
      return false
    if (filters.price === "high" && car.priceValue <= 500) return false

    return true
  })

  const isFiltering =
    filters.model !== "" ||
    filters.transmission !== "" ||
    filters.price !== ""

  useEffect(() => {
    if (isFiltering && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [isFiltering])

  const isDetailPage = location.pathname.startsWith("/cars/")

  return (
    <div className="bg-black min-h-screen text-white">
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SearchFilter
                filters={filters}
                setFilters={setFilters}
              />

              {isFiltering ? (
                <section ref={resultRef} className="py-20">
                  <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-8">
                      Search Results
                    </h2>

                    {filteredCars.length === 0 ? (
                      <div className="text-center py-20">
                        <p className="text-gray-400 mb-4">
                          No cars match your current filters.
                        </p>
                        <button
                          onClick={() =>
                            setFilters({
                              model: "",
                              transmission: "",
                              price: "",
                            })
                          }
                          className="text-red-500 font-semibold hover:underline"
                        >
                          Reset filters
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredCars.map(car => (
                          <CarCard key={car.id} {...car} />
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              ) : (
                <>
                  <FeaturedCars />
                  <Services />
                  <Benefits />
                  <PopularCars />
                  <SalesConsultant />
                </>
              )}
            </>
          }
        />

        {/* CAR DETAIL */}
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>

      {/* GLOBAL */}
      {!isDetailPage && <FloatingWhatsapp />}
      <Footer />
    </div>
  )
}
