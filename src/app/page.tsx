"use client";
import LoadingScreen from './components/loader';
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './components/landing';

import Goals from './components/goals';
import SecondParallex from './components/secondparallex';
import CoursesLanding from './components/courses';



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
     <Parallax pages={6} className=' hideScrollbar ' >
     
        <ParallaxLayer offset={0} speed={0.5}>
          <Landing/>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2 }} 
        className=' flex justify-start items-center '>
          <div className=" -ml-2 bg-purple-400 h-32 w-2/4 flex items-center ">
            <Lottie className='' animationData={animationData2} loop={true} />
           <p className=' font-sans text-xl'>"Welcome to Pedestal Education"</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} 
        className='flex justify-end z-10  pr-4'
        >
          <div className=" mt-20 rounded-lg 
          shadow-lg bg-sky-300 h-2/4 p-4 w-2/4  flex flex-col items-center ">
          <h1 className=' text-3xl p-5 font-serif'>Our Vision</h1>
            <p className=' font-sans'>Pedestal Education is an educational venture to tap into the human potential of young people of Sikkim 
            and to inculcate a competitive spirit among students and aspirants.
            Civil services and government service has always captured the 
            interest of the youth. In Sikkim, UPSC civil service exam has garnered a sense of mysticism 
            with very few of Sikkimese clearing such exams and even fewer represented in governance.
            We hope to provide quality and inclusive guidance and mentorship 
            to overcome any obstacle and illuminate a pathway to not only civil service exams but various other government exams. 
            We at Pedestal pride ourselves in our student centric approach and have assembled a well rounded team to help aspirants in any way they require.
            </p>
            </div>
    
        </ParallaxLayer>


        <ParallaxLayer offset={2.5} speed={1.5} 
        className='flex justify-end '
        >
          <SecondParallex/>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={1.5} >
          <div className=' p-2'>
          <Goals/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.5}
        >
           <CoursesLanding/>
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.5}
        >
           <Footer/>
        </ParallaxLayer>
          </Parallax>
   </div> 
  )
}
function componentDidMount(arg0: () => void) {
  throw new Error('Function not implemented.');
}

