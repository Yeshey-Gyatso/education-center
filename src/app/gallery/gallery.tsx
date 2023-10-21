import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div   style={{
      // use relative position for the parent div
      position: "relative",
      width: "100vw",
      height: "100vh",
    }}>
        <Navbar/>
        <div className=' relative '>
        <Image
        src="/bg1.jpg" alt={'image'}    
        layout="fill"
        objectFit="cover"    
        />

        </div>
        <div
        style={{
          // use absolute position for the child element
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // use higher zIndex than the image
          zIndex: 1,
          background: "yellow",
          padding: "30px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1
          style={{
            fontSize: "25px",
            color: "black",
          }}
        >
          Welcome to Sling Academy!
        </h1>
      </div>

       
  
        Gallary</div>
  )
}

export default Gallery