import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className="  md:pl-52">
            <p className=' lg:text-5xl border-b-4 border-white cursor-default '>"Welcome to Pedestal Education"</p>
          </div>
            <br /><br />  
          <div className=" lg:text-2xl md:pl-72 cursor-default">
          <p>The one-stop solution for clearing competitive exams in Sikkim.
            <br />
            Join us for guidance in UPSC/SPSC/Banking examinations.
            <br />
             Let us help you every step of your way in your journey</p>
          </div>

          <div className="p-4 md:pl-72">
          <p className=' font-thin'> click here for additional information.</p>
          </div>
          <Link href={"/courses"} className=' bg-gray-200 p-4
           rounded-full shadow-lg hover:scale-105 
           transition-transform duration-300 ease-in-out ml-72
          '>  COURSES</Link> 
          <Link href="https://wa.me/7407383714" className='ml-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-200 p-4'>
            WHATSAPP</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
