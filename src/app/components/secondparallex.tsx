import Lottie from 'lottie-react'
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
const SecondParallex = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/wheel.json')
          .then(response => response.json())
          .then(data => setAnimationData(data));
      }, []);
      
  return (
    <div className=' w-screen h-full bg-blue-300 flex items-center justify-center '>
      <Image className=' opacity-70'
        src="/lib3.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
      <div className='md: w-1/2 '>
      </div>
      <div className=" hidden rounded-s-full bg-sky-400 mt-24 h-32 w-2/4  md:flex items-center ">
    <Lottie className='relative inset-60' animationData={animationData} loop={true} /> 
      </div>
      <div className=' absolute p-5 md:p-10 bg-black/70 rounded-3xl hover:scale-110 duration-300 '>
        <h1 className=' p-10 cursor-default text-2xl md:text-5xl font-bold text-white'> "Your first step towards success." </h1>
      </div>
 
    </div>
   
  )
}

export default SecondParallex