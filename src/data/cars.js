// src/data/cars.js
import xforece from "../assets/cars/xforece.jpeg"
import xpanderexceedTourer from "../assets/cars/xpanderexceedTourer.jpeg"
import xpanderultimate from "../assets/cars/xpanderultimate.jpeg"
import xpandercross from "../assets/cars/xpandercross.jpeg"
import destinator from "../assets/cars/destinator.jpeg"
import pajerosport from "../assets/cars/pajerosport.jpeg"
import triton from "../assets/cars/triton.jpeg"
import l300 from "../assets/cars/l300.jpeg"

export const cars = [
  {
    id: 1,
    name: "XForece",
    model: "XForece",
    transmission: "Automatic",
    priceValue: 429,
    price: "Rp 429,350,000",
    image: xforece,
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
    image: xpanderexceedTourer,
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
    image: xpanderultimate,
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
    image: xpandercross,
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
    image: destinator,
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
    image: pajerosport,
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
    image: triton,
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
    image: l300,
    featured: true,
    popular: false,
  },
]
