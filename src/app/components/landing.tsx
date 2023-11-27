import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <div className='h-screen w-screen md:pt-60'>
      {/* Background image */}
      <Image className=' opacity-25'
        src="/lib2.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
      <Image className=' '
        src="/wave.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
      

      <div className='bg-transparent md:grid md:grid-cols-12 h-full relative w-screen'>
        <div className="col-span-5 bg-image-container p-4 ">
          
          <img className=' rounded-full h-auto md:h-5/6  lg:-mt-16 lg:ml-20' src="/Ologo.png" alt=''  />
        </div>

        <div className="md:col-span-7">
          <div className=" ">
            <p className=' text-center md:text-left text-xl lg:text-5xl border-b-8 border-gray-400 cursor-default '>"Welcome to Pedestal Education"</p>
          </div>
            <br /><br />  
          <div className=" text-sm text-center md:text-left lg:text-2xl md:pl-10 cursor-default ">
          <p>The one-stop solution for clearing competitive exams in Sikkim.
            <br />
            Join us for guidance in UPSC/SPSC/Banking examinations.
            <br />
             Let us help you every step of your way in your journey</p>
          </div>

          <div className=" tall:pb-10 md:p-6 md:pl-12 lg:pb-10">
          <p className=' hidden md:block  font-thin'> click here for additional information.</p>
          </div>
          <div className=' hidden tall:flex '>
          <Link href={"/courses"} className=' bg-gray-200  p-4
           rounded-full shadow-lg hover:scale-105 
           transition-transform duration-300 ease-in-out ml-10 lg:ml-12
          '>  COURSES</Link> 
          <Link href="https://wa.me/7407383714" className='ml-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out bg-gray-200 p-4'>
            WHATSAPP</Link>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Landing;
