// src/components/HeroSection.jsx
import React from "react";
import { Button } from "./Button";


const HeroSection = ({ image, title, desc }) => {
  return (
    <div className="relative w-full h-[500px]">
      <img src={image} alt="Hero" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg max-w-2xl">{desc}</p>
      </div>
   
    </div>
  );
};

export default HeroSection;
