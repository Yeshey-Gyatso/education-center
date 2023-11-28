"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './navbar';
import Footer from './footer';
import Landing from './landing';
import Vision from './vison';
import Goals from './goals';
import SecondParallex from './secondparallex';
import PhoneNavbar from './phone.nav';
import { useRecoilState } from 'recoil';
import { hasLoadedHomeState } from '../recoil/atoms';



export default function Home() {
 
  const [animationData2, setAnimationData2] = useState(null);
  const [hasLoadedHome, setHasLoadedHome] = useRecoilState(hasLoadedHomeState);
 
  
  useEffect(() => {
    setHasLoadedHome(true);
    console.log(hasLoadedHome+"this is from home ")
    
  }, []);

  

  useEffect(() => {
    fetch('/self.json')
      .then(response => response.json())
      .then(data => setAnimationData2(data));
  }, []);

  return(<div> 
    <div className='hidden md:block fixed z-10'>
      <Navbar/>
    </div>
    <div className=' md:hidden fixed z-10'>
      <PhoneNavbar/>
    </div>
   
     <Parallax pages={5} className=' hideScrollbar ' >
     
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2.05 }} 
        className=' relative -z-10 sm:z-10 flex justify-start items-center '>
          <div className=" md:-ml-2 bg-purple-400 md:h-32 md:w-2/4 flex items-center ">
            <Lottie className='' animationData={animationData2} loop={true} />
           <p className=' font-sans md:text-xl'>"Welcome to Pedestal Education"</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} 
        className='flex justify-end z-10  md:pr-4'
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


