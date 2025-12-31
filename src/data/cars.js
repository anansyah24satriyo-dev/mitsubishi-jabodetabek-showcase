// src/data/cars.js
import XForece from "../assets/cars/XForece.jpeg"
import XPanderExceedTourer from "../assets/cars/XPanderExceedTourer.jpeg"
import XpanderUtimate from "../assets/cars/XPanderUtimate.jpeg"
import XpanderCross from "../assets/cars/XpanderCross.jpeg"
import Destinator from "../assets/cars/Destinator.jpeg"
import PajeroSport from "../assets/cars/PajeroSport.jpeg"
import Triton from "../assets/cars/Triton.jpeg"
import L300 from "../assets/cars/L300.jpeg"

export const cars = [
  {
    id: 1,
    name: "XForece",
    model: "XForece",
    transmission: "Automatic",
    priceValue: 429,
    price: "Rp 429,350,000",
    image: XForece,
    featured: true,
    popular: true,
  },
  {
    id: 2,
    name: "XPander Exceed Tourer",
    model: "XPander Exceed Tourer Cvt",
    transmission: "Automatic",
    priceValue: 297,
    price: "Rp 297,900,000",
    image: XPanderExceedTourer,
    featured: true,
    popular: true,
  },
  {
    id: 3,
    name: "Xpander ultimate",
    model: "Xpander ultimate Cvt",
    transmission: "Manual",
    priceValue: 337,
    price: "Rp 337,800,000",
    image: XpanderUtimate,
    featured: false,
    popular: true,
  },
  {
    id: 4,
    name: "Xpander Cross",
    model: "Xpander Cross Premium Cvt",
    transmission: "Automatic",
    priceValue: 364,
    price: "Rp 364,200,000",
    image: XpanderCross,
    featured: true,
    popular: false,
  },
  {
    id: 5,
    name: "Destinator",
    model: "Destinator",
    transmission: "Automatic",
    priceValue: 485,
    price: "Rp 485,000,000",
    image: Destinator,
    featured: true,
    popular: false,
  },
  {
    id: 6,
    name: "Pajero Sport",
    model: "Pajero Sport",
    transmission: "Automatic",
    priceValue: 665,
    price: "Rp 665,300,000",
    image: PajeroSport,
    featured: true,
    popular: false,
  },
  {
    id: 7,
    name: "Triton",
    model: "Triton",
    transmission: "Automatic",
    priceValue: 543,
    price: "Rp 543,750,000",
    image: Triton,
    featured: true,
    popular: false,
  },
  {
    id: 8,
    name: "COLT L300",
    model: "L300",
    transmission: "Automatic",
    priceValue: 251,
    price: "Rp 251,200,000",
    image: L300,
    featured: true,
    popular: false,
  },
]
