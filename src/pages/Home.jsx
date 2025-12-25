import Hero from "../components/Hero"
import SearchFilter from "../components/SearchFilter"
import FeaturedCars from "../sections/FeaturedCars"
import Benefits from "../sections/Benefits"
import PopularCars from "../sections/PopularCars"

export default function Home() {
  return (
    <>
      <Hero />
      <SearchFilter />
      <FeaturedCars />
      <Benefits />
      <PopularCars />
    </>
  )
}
