"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50">
    </nav>
  )
}
