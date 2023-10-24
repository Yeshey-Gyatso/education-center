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
import Contactform from './components/contact';


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
     <Parallax pages={6} className=' ' >
     {/* hideScrollbar */}
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2 }} 
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
          <h1 className=' text-3xl p-5 font-serif'>Our Vision</h1>
            <p className=' font-sans'>Pedestal Education is an educational venture to tap into the human potential of young people of Sikkim and to inculcate a competitive spirit among students and aspirants. Civil services and government service has always captured the 
            interest of the youth. In Sikkim, UPSC civil service exam has garnered a sense of mysticism with very few of Sikkimese clearing such exams and even fewer represented in governance. We hope to provide quality and inclusive guidance and mentorship 
            to overcome any obstacle and illuminate a pathway to not only civil service exams but various other government exams. We at Pedestal pride ourselves in our student centric approach and have assembled a well rounded team to help aspirants in any way they require.
            </p>
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
          <div className="bg-yellow-400 rounded-lg shadow-lg h-screen w-screen border-r-2 flex flex-row  items-center ">
          <h1 className=' text-5xl ml-10 p-5 font-serif text-zinc-700 font-bold'>OUR OBJECTIVES:</h1>
          <div className=' flex flex-col justify-center items-center'>
          
            <ul className='lg:ml-40 font-serif'>
              <li className=' text-3xl border-b-4 border-blue-400'>Quality and affordable guidance</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'>Class room programme</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'>An Inclusive study space</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'>All-round personal mentorship</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'> Employment focused philosophy</li>
            </ul>
            {/* <button className='bg-gray-200 p-4 mr-10 mt-36
           rounded-full shadow-lg 
           hover:scale-105 transition-transform duration-300 ease-in-out ml-72
          '>click here to know more</button> */}
          </div>
          
          
          </div>
        
        </ParallaxLayer>


        
        <ParallaxLayer offset={4} speed={0.5}
        
        >
           <Contactform/>
          
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5}
        
        >
           <Footer/>
          
        </ParallaxLayer>
          </Parallax>
          
         
   </div>
      
       
      
   
   
  )
}
