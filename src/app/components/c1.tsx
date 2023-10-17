"use client";
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const C1 = () => {
  return (
    <div
    className=' w-auto h-screen bg-orange-50'
    > 
    <Parallax pages={1} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2.5}>
        <p>Parallax</p>
      </ParallaxLayer>
      </Parallax>this is C1</div>
  )
}

export default C1