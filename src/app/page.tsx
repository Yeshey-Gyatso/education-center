"use client";
import LoadingScreen from './components/loader';
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './components/landing';
import Vision from './components/vison';
import Goals from './components/goals';
import SecondParallex from './components/secondparallex';




export default function Home() {

  const [animationData2, setAnimationData2] = useState(null);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3400);

    return () => {
      clearTimeout(timeoutId);
    };
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
     <Parallax pages={5} className=' hideScrollbar ' >
     
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2.1 }} 
        className=' flex justify-start items-center '>
          <div className=" -ml-2 bg-purple-400 h-32 w-2/4 flex items-center ">
            <Lottie className='' animationData={animationData2} loop={true} />
           <p className=' font-sans text-xl'>"Welcome to Pedestal Education"</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} 
        className='flex justify-end z-10  pr-4'
        >
         <Vision/>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={1.5} 
        className='flex justify-end '
        >
          <SecondParallex/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.7} >
          <div >
           <Goals/>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={4} speed={0.5}
        >
           <CoursesLanding/>
        </ParallaxLayer> */}
        <ParallaxLayer offset={4} speed={0.5}
        >
           <Footer/>
        </ParallaxLayer>
          </Parallax>
   </div> 
  )
}


