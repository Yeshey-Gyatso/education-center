import React from 'react'
import {TiTickOutline} from "react-icons/ti"
import Image from 'next/image'
import Link from 'next/link'

const Goals = () => {
  return (
    <div className="bg-yellow-400 h-screen w-screen p-2 md:p-0  md:flex flex-row  items-center ">
       <Image className=' opacity-10'
        src="/lib.jpg"
        alt="Background Image"  
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
          <h1 className=' text-2xl md:text-5xl ml-10 p-5 font-serif text-zinc-700 font-bold
           border-b-8 border-yellow-700 border-l-8 border-t-2 border-r-2 cursor-default
          '>OUR OBJECTIVES:</h1>
          <div className=' flex flex-col justify-center items-center'>
          
            <ul className='lg:ml-40 font-serif'>
              <li className='text-xl md:text-3xl  flex items-center'> <span>Quality and affordable guidance</span>
              <TiTickOutline className="text-7xl pl-3 "/>
              </li>
              <br />
              <li className=' text-xl md:text-3xl '><span className=' flex items-center '>Class room programme <TiTickOutline className="text-7xl pl-3"/></span>
              
              </li>
              <br />
              <li className=' text-xl md:text-3xl flex items-center'><span>An Inclusive study space</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
              <br />
              <li className=' text-xl md:text-3xl  flex items-center'><span>All-round personal mentorship</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
              <br />
              <li className=' text-xl md:text-3xl  flex items-center'> <span>Employment focused philosophy</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
            </ul>
            
           
          </div>
          
          
          </div>
  )
}

export default Goals