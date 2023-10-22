"use client";
import Image from 'next/image'

import LoadingScreen from './components/loader';
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import C1 from './components/c1'
import C2 from './components/c2'
import C3 from './components/c3'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './components/landing';


export default function Home() {
  const [animationData, setAnimationData] = useState(null);
  const [animationData2, setAnimationData2] = useState(null);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fakeDatafetch =()=>{
      setTimeout(()=>{
        setLoading(false)
      },3400);
    }
  
    fakeDatafetch();
  }, []);

  useEffect(() => {
    fetch('/wheel.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);
  
  useEffect(() => {
    fetch('/self.json')
      .then(response => response.json())
      .then(data => setAnimationData2(data));
  }, []);

  return  loading ?(
    <LoadingScreen/>
  )
  :
  (
   <div> 
    <div className=' fixed z-10'>
      <Navbar/>
    </div>
     <Parallax pages={5} className=' hideScrollbar' >
       
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3.2 }} 
        className=' flex justify-start items-center '>
          <div className=" -ml-2 bg-purple-400 h-32 w-2/4 flex items-center ">
            <Lottie className='' animationData={animationData2} loop={true} />
           <p className=' font-sans text-lg'>"Education is the key that unlocks the doors to a world of possibilities."</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} 
        className='flex justify-end z-10  pr-4'
        >
          <div className=" mt-20 rounded-lg 
          shadow-lg bg-sky-300 h-2/4 p-4 w-2/4  flex flex-col items-center ">
          <h1 className=' text-3xl p-5 font-serif'>Our Focus</h1>
            <p className=' font-sans'>Our primary goal at this UPSC coaching center is to empower and guide aspirants on their journey to becoming successful civil servants. We are committed to providing comprehensive, top-quality education and support to help our students excel in the highly competitive civil services examination. Our mission is to instill in them not just the knowledge and skills necessary to pass the exam, but also the values and ethical principles that are integral to public service. We aspire to create a nurturing and motivating environment that fosters personal growth, critical thinking, and leadership qualities. Ultimately, our aim is to see our students succeed in their pursuit of serving the nation, making a meaningful impact on society, 
              and upholding the highest standards of governance.</p>
          </div>
          {/* <C1/> */}
        </ParallaxLayer>


        <ParallaxLayer offset={2.5} speed={1.5} 
        className='flex justify-end '
        >
          <div className=" rounded-s-full bg-sky-400 h-32 w-2/4  flex items-center ">
          
        <Lottie className=' ml-40' animationData={animationData} loop={true} />
          
          
          </div>
         
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.5} 
        className='flex justify-end  pr-5'
        >
          <div className="bg-yellow-400 rounded-lg shadow-lg h-2/4 w-2/4 border-r-2 flex flex-row items-center ">
          <h1 className=' text-3xl p-5 font-serif'>Our Story:</h1>
          <div className=' flex flex-col'>
          
            <p className=' font-sans'>"At Pedestal Education, we are a passionate and dedicated team committed to nurturing the academic and personal growth of our students. 
            We provide a supportive and inspiring environment,
            personalized guidance, and the tools for success. Our mission is to empower individuals, regardless of their background, to achieve their educational and professional 
            aspirations. With a focus on excellence, inclusivity, 
            and holistic development, we're here to shape futures and unlock the full potential of our students."
            </p>
            {/* <button className='bg-gray-200 p-4 mr-10 mt-36
           rounded-full shadow-lg 
           hover:scale-105 transition-transform duration-300 ease-in-out ml-72
          '>click here to know more</button> */}
          </div>
          
          
          </div>
        
        </ParallaxLayer>


        
        <ParallaxLayer offset={4} speed={0.5}
        
        >
           <Footer/>
          
        </ParallaxLayer>
          </Parallax>
          
         
   </div>
      
       
      
   
   
  )
}
