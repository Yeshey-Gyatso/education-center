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
          <div className=" p-4 pl-72">
            <div className=' bg-white' />
            <p className=' text-4xl'>"Your first step towards success"</p>
          </div>

          <div className="bg-indigo-200 p-4">
            <p>Text 1</p>
          </div>

          <div className="bg-pink-200 p-4">
            <p>Text 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
