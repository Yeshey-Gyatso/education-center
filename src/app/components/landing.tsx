import React from 'react';
import Image from 'next/image';

const Landing = () => {
  return (
    <div className='h-full w-screen relative md:pt-60'>
      {/* Background image */}
      <Image
        src="/wave2.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
      />

      <div className='bg-transparent grid grid-cols-12 h-full relative w-screen'>
        <div className="col-span-4 bg-image-container p-4">
          {/* Use a standard HTML img element for non-background images */}
          <img className=' rounded-full' src="/P.png" alt='' />
        </div>

        <div className="col-span-8">
          <div className=" p-4 md:pl-72">
            <p className=' text-4xl border-b-4 border-white'>"Your first step towards success"</p>
          </div>
            <br /><br />
          <div className=" p-4 text-xl md:pl-72">
          <p>This is some additional content for Text 1. You can add more details or information here.</p>
          </div>

          <div className="bg-pink-200 p-4 md:pl-80">
          <p className=' font-thin'> Here's additional content for Text 2.</p>
          </div>
          <button className=' bg-gray-200 p-4
           rounded-full shadow-lg hover:scale-105 
           transition-transform duration-300 ease-in-out
          '>button 1</button>
          <button className=' 
          rounded-full shadow-lg hover:scale-105
          transition-transform duration-300 ease-in-out
          bg-gray-200 p-4'>button 2</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
