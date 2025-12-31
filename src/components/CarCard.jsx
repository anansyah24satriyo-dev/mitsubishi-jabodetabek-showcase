import { Link } from "react-router-dom"
import React from "react"

export default function CarCard({
  id,
  image,
  name,
  transmission,
  price,
}) {
  return (
    <Link
      to={`/cars/${id}`}
      className="
        group relative block
        bg-zinc-900 rounded-xl overflow-hidden
        border border-zinc-800
        transition
        hover:border-red-600/40
      "
    >
      {/* RED UNDERLINE */}
      <div
        className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-red-600
          transition-all duration-300
          group-hover:w-full
        "
      />

      {/* IMAGE */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{name}</h3>

        {/* TRANSMISSION */}
        <p className="text-sm text-gray-400 mt-1">
          {transmission}
        </p>

        {/* PRICE */}
        <p className="mt-4 font-bold text-red-600">
          {price}
        </p>

        {/* PRICE NOTE */}
        <p className="text-[11px] text-gray-500 leading-tight mt-1">
          *Harga dapat berubah sewaktu-waktu
        </p>
      </div>
    </Link>
  )
}
