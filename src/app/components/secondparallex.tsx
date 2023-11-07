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
    <div className=' w-screen h-full bg-amber-300 flex'>
      <Image className=' opacity-50'
        src="/wave2.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />
      <div className=' w-1/2'>

      </div>
      <div className=" rounded-s-full bg-sky-400 mt-24 h-32 w-2/4  flex items-center ">
    <Lottie className=' ml-48' animationData={animationData} loop={true} /> 
      </div>
 
    </div>
   
  )
}

export default SecondParallex