"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(buttonRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, "-=0.5")
  }, [])

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 ref={titleRef} className="text-6xl font-extrabold mb-4 text-center">
        Hola, soy <span className="text-blue-400">Yarbis</span>
      </h1>
      <p ref={subtitleRef} className="text-xl text-gray-300 mb-8 text-center">
        Desarrollador Fullstack | Amante de la tecnología 🚀
      </p>
    </section>
  )
}

export default Hero
