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
    fetch('/scholar.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
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

        <ParallaxLayer sticky={{ start: 1, end: 3 }} 
        className=' flex justify-start items-center pl-10'>
          <div className=" h-72 w-auto  flex items-center ">
        <Lottie animationData={animationData} loop={true} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} 
        className='flex justify-end  pr-5'
        >
          <div className="bg-purple-400 h-20 w-1/4 border-r-2 flex items-center ">
            <p>I'm not</p>
          </div>
          {/* <C1/> */}
        </ParallaxLayer>


        <ParallaxLayer offset={2.5} speed={1.5} 
        className='flex justify-end  pr-5'
        >
          <div className="bg-purple-400 h-20 w-1/4 border-r-2 flex items-center ">
            <p>not me as well</p>
          </div>
          {/* <C1/> */}
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={1.5} 
        className='flex justify-end  pr-5'
        >
          <div className="bg-yellow-400 h-20 w-1/4 border-r-2 flex items-center ">
            <p>not me as well</p>
          </div>
        
        </ParallaxLayer>


        
        <ParallaxLayer offset={4} speed={0.5}
        className='bg-neutral-300 z-10 flex justify-center items-center'
        >
          <p className="text-xl">Footer</p>
        </ParallaxLayer>

          </Parallax>
         
   </div>
      
       
      
   
   
  )
}
