"use client";
import Image from 'next/image'

import LoadingScreen from './components/loader';

import C1 from './components/c1'
import C2 from './components/c2'
import C3 from './components/c3'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './components/landing';

export default function Home() {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fakeDatafetch =()=>{
      setTimeout(()=>{
        setLoading(false)
      },4000);
    }
  
    fakeDatafetch();
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
        
        {/* <ParallaxLayer sticky={{start:0 , end:1}}
        className='bg-white z-0 '
        >
         
        </ParallaxLayer> */}
        
        <ParallaxLayer offset={0} speed={0.5}
        className='bg-neutral-300 z-10 flex justify-center items-center'
        >
          <Landing/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} 
        className=' flex justify-start items-center pl-10'>
          <div className="bg-red-300 h-20 w-1/4 border-r-2 flex items-center ">
            <p className=' text-xl pl-10'>I'm a sticky layer</p>
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
