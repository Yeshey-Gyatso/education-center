import React from 'react'
import {TiTickOutline} from "react-icons/ti"
const Goals = () => {
  return (
    <div className="bg-yellow-400 rounded-lg shadow-lg h-screen w-screen border-r-2 flex flex-row  items-center ">
          <h1 className=' text-5xl ml-10 p-5 font-serif text-zinc-700 font-bold
           border-b-8 border-yellow-500 border-l-8 border-t-2 border-r-2 cursor-default
          '>OUR OBJECTIVES:</h1>
          <div className=' flex flex-col justify-center items-center'>
          
            <ul className='lg:ml-40 font-serif'>
              <li className=' text-3xl  flex items-center'> <span>Quality and affordable guidance</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
              <br />
              <li className=' text-3xl '><span className=' flex items-center '>Class room programme <TiTickOutline className="text-7xl pl-3"/></span>
              
              </li>
              <br />
              <li className=' text-3xl  flex items-center'><span>An Inclusive study space</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
              <br />
              <li className=' text-3xl  flex items-center'><span>All-round personal mentorship</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
              <br />
              <li className=' text-3xl  flex items-center'> <span>Employment focused philosophy</span>
              <TiTickOutline className="text-7xl pl-3"/>
              </li>
            </ul>
            {/* <button className='bg-gray-200 p-4 mr-10 mt-36
           rounded-full shadow-lg 
           hover:scale-105 transition-transform duration-300 ease-in-out ml-72
          '>click here to know more</button> */}
          </div>
          
          
          </div>
  )
}

export default Goals