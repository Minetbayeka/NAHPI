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

{/* <div className='flex flex-col'>
    <h1 className='font-semibold text-3xl leading-tight '>Definitions of NAHPI tuition costs and fees</h1>
    <p className='leading-relaxed'>As an NAHPI student, you will pay tuition (the cost of taking your classes) 
        and fees (a charge for the use of something like technology ).
         Your tuition and fees will differ from other students based on a variety of factors.</p>
</div> */}

    {/* <div>
     <div className="text-sm">
          <a href="#" className="text-red-800 hover:underline">English</a>
          <span className="mx-1">|</span>
          <a href="#" className="text-red-800 hover:underline">Español</a>
        </div>
      </div> */}

    


</section>
  )
}

export default HeroTuition

