"use client"

import Logo from "@/components/Logo"

const Hero = () => {
  return ( 
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-50">
      <Logo fill="#000" width={80} height={80}/>
      <h1 className="text-3xl font-bold">YBMTech</h1>
    </div>
  )
}

export default Hero
