import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    
    <div className=' w-screen flex  justify-between items-center cursor-default'>
  <div className=' p-2 pl-10 pt-5'>
    <img src="P.png" alt="" className=' rounded-full h-16 w-16' />
  </div>
  <ul className=' flex gap-4 items-center p-2  -mt-1 '>
    <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/">Home</Link>
    </li>
    <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/about">About Us</Link>
    </li>
    <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/courses">Courses</Link>
    </li>
    <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/faculty1">Faculty</Link>
    </li>
    {/* <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/gallery">Gallery</Link>
    </li> */}
    {/* <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/achievement">Achievement</Link>
    </li> */}
    {/* <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/career">Career</Link>
    </li> */}
    <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
      <Link href="/contact-us">Contact Us</Link>
    </li>
  </ul>

      <ul className=' flex gap-3 items-center p-3'>
        <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
        <Link href="https://www.youtube.com/channel/UCyLuGOimahg8ci6_dFgsLBw"><img 
        className=' h-10 w-9'
        src="yt.svg" alt="" /></Link>
          </li>
          <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
          <Link href="https://www.facebook.com/"><img 
        className=' h-7 w-10'
        src="fb.svg" alt="" /></Link>
          </li>
          
          <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
          <Link href="https://www.linkedin.com/in/yeshey-gyatso-a180b21a9/"><img 
        className=' h-8 w-10'
        src="li.svg" alt="" /></Link>
          </li>
        <li className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
        <Link href="https://www.instagram.com/explore/"><img 
        className=' h-8 w-10'
        src="ig.svg" alt="" /></Link>
        </li>
        
      </ul>
      </div>
  )
}

export default Navbar