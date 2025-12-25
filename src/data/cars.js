// src/data/cars.js
import pajero from "../assets/cars/pajero.jpg"
import xpander from "../assets/cars/xpander.jpg"
import triton from "../assets/cars/triton.jpg"
import outlander from "../assets/cars/outlander.jpg"

export const cars = [
  {
    id: 1,
    name: "Pajero Sport",
    model: "Pajero Sport",
    transmission: "Automatic",
    priceValue: 600,
    price: "Rp 600.000.000",
    image: pajero,
    featured: true,
    popular: true,
  },
  {
    id: 2,
    name: "Xpander",
    model: "Xpander",
    transmission: "Automatic",
    priceValue: 300,
    price: "Rp 300.000.000",
    image: xpander,
    featured: true,
    popular: true,
  },
  {
    id: 3,
    name: "Triton",
    model: "Triton",
    transmission: "Manual",
    priceValue: 450,
    price: "Rp 450.000.000",
    image: triton,
    featured: false,
    popular: true,
  },
  {
    id: 4,
    name: "Outlander",
    model: "Outlander",
    transmission: "Automatic",
    priceValue: 750,
    price: "Rp 750.000.000",
    image: outlander,
    featured: true,
    popular: false,
  },
]
