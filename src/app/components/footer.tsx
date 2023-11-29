import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className=' w-full h-full bg-gray-200 flex flex-col'>
        <div className='mt-20 flex flex-col md:flex-row items-center justify-evenly h-full '>
          <div className=' p-5'>
            <img src="/logo.png" className=' rounded-lg h-56 w-56'  alt="image of logo" />
          </div>
          <div className=' px-4 p-5'>
          <h4 className="text-3xl font-semibold text-gray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-4 lg:mb-0 mb-6 flex gap-10">
          <div className=' -mt-1 hover:scale-105
          transition-transform duration-300 ease-in-out'>
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
        </div>
        

      <div className=' w-full h-full hidden md:flex justify-between'>
        <div className="container mx-auto px-4 ">
         <div className="flex flex-wrap items">
          <div className="w-full px-4 ">
         <div className="w-full h-full rounded-3xl bg-stone-400/60 flex justify-between p-10">
          <div className="flex flex-wrap flex-col ">
          <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 cursor-default">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="https://upsc.gov.in/">UPSC</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="https://www.youtube.com/results?search_query=upsc+interview+2023">Interview</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="https://epaper.thehindu.com/reader?utm_source=google&utm_medium=cpc&utm_campaign=TH_ePaper_BrandSearchExact&tpcc=THEPGS&gad_source=1&gclid=EAIaIQobChMIp6CJzqudggMV8KRmAh3aiQnzEAAYASAAEgIipPD_BwE">The Hindu</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="https://www.gktoday.in/">Free GK</a>
              </li>
            </ul>
            
          </div>

          <div className=" ">
            <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 cursor-default">Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="https://github.com">  License</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className=" ">
            <span className="block uppercase text-gray-900 text-sm font-semibold mb-2 cursor-default">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm " href="https://github.com"> About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">GitHub</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Free Products</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="">Resources</a>
              </li>
            </ul>
          </div>  
        </div>
        </div>
        </div >
        
        <div className='w-full mt-auto'>
        <hr className="my-6 border-gray-800"/>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm font-semibold py-1">
                  Copyright © <span id="get-current-year">2023</span><a href="" className="text-gray-500 hover:text-gray-800" /> NextJs 13 by
                  <a href="https://mellowgyatso.com" className="text-gray-500 hover:text-gray-900"> Mellow Gyatso</a>.
        </div>
      </div>
    </div>

        </div>f
           
        </div>
        </div>
   
      
    </div>
  )
}

export default Footer