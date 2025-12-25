// src/components/FloatingWhatsapp.jsx
import React from "react"

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/628xxxxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999]
                 flex items-center gap-3
                 bg-green-500 hover:bg-green-600
                 text-white px-5 py-3
                 rounded-full shadow-2xl
                 transition-all duration-300
                 hover:scale-105"
    >
      {/* ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M13.601 2.326A7.75 7.75 0 0 0 1.58 12.59L.5 16l3.5-1.05a7.75 7.75 0 0 0 9.601-12.624ZM8 14.5a6.46 6.46 0 0 1-3.29-.9l-.24-.14-2.07.62.66-2.02-.16-.25A6.47 6.47 0 1 1 8 14.5Zm3.47-4.27c-.19-.1-1.12-.55-1.29-.61-.17-.06-.29-.1-.41.1-.12.19-.47.61-.58.74-.11.13-.21.15-.4.05-.19-.1-.8-.3-1.52-.96-.56-.5-.94-1.13-1.05-1.32-.11-.19-.01-.29.09-.39.09-.09.19-.21.29-.31.1-.1.13-.17.19-.29.06-.12.03-.23-.01-.33-.04-.1-.41-.99-.56-1.36-.15-.36-.31-.31-.41-.32h-.35c-.12 0-.33.04-.5.23-.17.19-.66.65-.66 1.58s.68 1.83.77 1.95c.09.12 1.33 2.03 3.22 2.85.45.19.8.3 1.07.38.45.14.86.12 1.18.07.36-.05 1.12-.46 1.28-.91.16-.45.16-.83.11-.91-.05-.08-.17-.12-.36-.22Z" />
      </svg>

      {/* TEXT */}
      <span className="hidden sm:inline font-medium">
        Chat WhatsApp
      </span>
    </a>
  )
}
