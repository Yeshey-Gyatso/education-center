import React from 'react'
import Link from 'next/link';

const Navbar = () => {

  

  return (
    
    <div className=' w-screen flex  justify-between items-center cursor-default'>
  <div className=' p-2'>
    navbar logo
  </div>
  <ul className=' flex gap-4 items-center p-2'>
    <li>
      <Link href="/" >Home</Link>
    </li>
    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/courses">Courses</Link>
    </li>
    <li>
      <Link href="/faculty1">Faculty</Link>
    </li>
    <li>
      <Link href="/gallery">Gallery</Link>
    </li>
    <li>
      <Link href="/achievement">Achievement</Link>
    </li>
    <li>
      <Link href="/career">Career</Link>
    </li>
    <li>
      <Link href="/contact-us">Contact Us</Link>
    </li>
  </ul>

      <ul className=' flex gap-3 items-center p-3'>
        <li>
        <Link href="https://www.youtube.com/channel/UCyLuGOimahg8ci6_dFgsLBw"><img 
        className=' h-10 w-9'
        src="yt.svg" alt="" /></Link>
          </li>
          <Link href="https://www.facebook.com/"><img 
        className=' h-7 w-10'
        src="fb.svg" alt="" /></Link>
        <Link href="https://www.facebook.com/"><img 
        className=' h-8 w-10'
        src="li.svg" alt="" /></Link>
        <Link href="https://www.facebook.com/"><img 
        className=' h-8 w-10'
        src="ig.svg" alt="" /></Link>
      </ul>
      </div>
  )
}

export default Navbar