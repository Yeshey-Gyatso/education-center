import React from 'react'
import Image from 'next/image'
const Landing = () => {
  return (
    <div className=' h-full  w-screen '
    >
        <div style={{ position: 'relative' }} className=' z-20'>
        <Image
        src="/bg1.jpg" // path relative to the 'public' folder
        layout="fill"
        objectFit="cover" // Change to suit your needs
        quality={100} // Change to suit your needs
        alt="Background Image"
        />

        </div>
        {/* <div className='bg-neutral-300 z-10 grid grid-cols-12 h-full  relative w-screen '>
        <div className="col-span-1 bg-blue-200 p-4"></div>
        <div className="col-span-1 bg-green-200 p-4"></div>
        <div className="col-span-1 bg-red-200 p-4"></div>
        <div className="col-span-1 bg-yellow-200 p-4"></div>
        <div className="col-span-1 bg-indigo-200 p-4"></div>
        <div className="col-span-1 bg-pink-200 p-4"></div>
        <div className="col-span-1 bg-teal-200 p-4"></div>
        <div className="col-span-1 bg-orange-200 p-4"></div>
        <div className="col-span-1 bg-purple-200 p-4"></div>
        <div className="col-span-1 bg-cyan-200 p-4"></div>
        <div className="col-span-1 bg-gray-200 p-4"></div>
        <div className="col-span-1 bg-amber-200 p-4"></div>

        </div> */}
        
    </div>
        
        
  )
}

export default Landing