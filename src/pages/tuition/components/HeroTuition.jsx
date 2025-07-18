import React from 'react'
import image from "@assets/image/nahpi-pic.jpg"

const HeroTuition = () => {
  return (
    <section>
<div className="relative w-full h-[450px]">
  <img src={image} alt="" className="w-full h-full object-cover" />

  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
    <h1 className="text-black text-6xl bg-[#FFC627] h-20 text-center font-bold px-5">
        <span>Tuition Costs and Fees</span></h1>
  </div>
</div>


</section>
  )
}

export default HeroTuition

