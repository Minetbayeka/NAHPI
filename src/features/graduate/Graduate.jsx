import HeroSection from '@components/atoms/HeroSection'
import React from 'react'
import  image  from "@assets/image/engineers.jpg"
import GraduateDetails from './components/GraduateDetails'

const Graduate = () => {
  return (
    <div>
       <HeroSection

       image = {image}
       title ="Graduate degree programs"
       desc="Ira A. Fulton Schools of Engineering"
       
       />
       <GraduateDetails/>
    </div>
  )
}

export default Graduate
