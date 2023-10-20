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
      <Link href="/faculty">Faculty</Link>
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

      <ul className=' flex gap-3 items-center p-2'>
        <li>
          ig
          </li>
        <li>facebook</li>
        <li>linkedIn</li>
        <li>yt</li>
      </ul>
      </div>
  )
}

export default Navbar