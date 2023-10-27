import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <div className=' h-full w-screen  '>
    <div className=" bg-gray-200 pt-52 pb-6 z-10">
       <Image src={'aboutUs.svg'} alt={''}
  height={300}
  width={300}
  ></Image>
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-gray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6 flex">
          <div className=' -mt-2'>
          <Link href="https://www.youtube.com/channel/UCyLuGOimahg8ci6_dFgsLBw">
            <img 
        className=' h-10 w-9'
        src="yt.svg" alt="" /> </Link>
          </div>
            
            <div className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
          <Link href="https://www.facebook.com/"><img 
        className=' h-7 w-10'
        src="fb.svg" alt="" /></Link>
          </div>
            
          
          <div className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
          <Link href="https://www.linkedin.com/in/yeshey-gyatso-a180b21a9/"><img 
        className=' h-8 w-10'
        src="li.svg" alt="" /></Link>
          </div>
          
          
          <div className='hover:scale-105
          transition-transform duration-300 ease-in-out'>
        <Link href="https://www.instagram.com/explore/"><img 
        className=' h-8 w-10'
        src="ig.svg" alt="" /></Link>
        </div> 
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Blog</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/">Github</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com">  License</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="" className="text-gray-500 hover:text-gray-800" /> NextJs 13 by
          <a href="mellowgyatso.com" className="text-gray-500 hover:text-gray-800"> Mellow Gyatso</a>.
        </div>
      </div>
    </div>
  </div>
</div>
   </div> 

  )
}

export default Footer