import React from "react"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 200)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all
        ${
          scrolled
            ? "bg-black/80 backdrop-blur border-b border-zinc-800"
            : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* LOGO */}
        <NavLink to="/" className="text-xl font-bold tracking-wide">
          MITSUBISHI
        </NavLink>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink
            to="/"
            className="relative group text-gray-400 hover:text-white transition"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full" />
          </NavLink>

          {[
            { name: "Models", id: "popular" },
            { name: "Services", id: "benefits" },
            { name: "Contact", id: "sales" },
          ].map(item => (
            <button
              key={item.name}
              onClick={() => goToSection(item.id)}
              className="relative group text-gray-400 hover:text-white transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-600 transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => goToSection("sales")}
          className="hidden md:inline-block px-5 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium transition"
        >
          Test Drive
        </button>
      </div>
    </header>
  )
}
