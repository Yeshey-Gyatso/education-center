"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function PhoneNavbar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-end flex-wrap bg-transparent p-6">
     <div className="block lg:hidden ">
       <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
         <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
       </button>
     </div>
     <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-white/60`}>
       <div className="text-sm lg:flex-grow ">
         <ul className=' flex flex-col gap-4 items-center p-2 -mt-1 '>
           <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
             <Link href="/">Home</Link>
           </li>
           <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
             <Link href="/about">About Us</Link>
           </li>
           <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
             <Link href="/courses">Courses</Link>
           </li>
           <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
             <Link href="/faculty1">Faculty</Link>
           </li>
           <li className='hover:scale-105 transition-transform duration-300 ease-in-out'>
             <Link href="/contact-us">Contact Us</Link>
           </li>
         </ul>
       </div>
     </div>
   </nav>
 );
}
