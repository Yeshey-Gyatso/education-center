"use client";
import Image from 'next/image'

import C1 from './components/c1'
import C2 from './components/c2'
import C3 from './components/c3'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <div>
        <Parallax pages={5} >
        
        <ParallaxLayer offset={0} speed={0.5}
        className=' flex justify-center items-center'
        >
          <p className="text-xl">Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} 
        className=' flex justify-start items-center'>
          <div className="bg-red-300 h-10 w-1/4 border-r-2">
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

          </Parallax>
      
    </div>
   
  )
}
