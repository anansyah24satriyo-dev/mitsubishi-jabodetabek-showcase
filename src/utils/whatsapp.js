export function buildWhatsappMessage(car) {
  const phone = "6283111778286" // GANTI nomor kamu

  const message = `
Halo, saya tertarik dengan mobil berikut:

Nama: ${car.name}
Model: ${car.model}
Transmisi: ${car.transmission}
Harga: ${car.price}

Mohon info lebih lanjut & promo terbaru.
`.trim()

  const encodedMessage = encodeURIComponent(message)

  return `https://wa.me/${phone}?text=${encodedMessage}`
}
