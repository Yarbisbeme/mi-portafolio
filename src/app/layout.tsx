import "@/styles/globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Portafolio | Yarbis Beltre",
  description: "Mi portafolio personal con Next.js, TypeScript, Tailwind y GSAP",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-bg-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
