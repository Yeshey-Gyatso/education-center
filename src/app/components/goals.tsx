import React from 'react'

const Goals = () => {
  return (
    <div className="bg-yellow-400 rounded-lg shadow-lg h-screen w-screen border-r-2 flex flex-row  items-center ">
          <h1 className=' text-5xl ml-10 p-5 font-serif text-zinc-700 font-bold'>OUR OBJECTIVES:</h1>
          <div className=' flex flex-col justify-center items-center'>
          
            <ul className='lg:ml-40 font-serif'>
              <li className=' text-3xl border-b-4 border-blue-400'>Quality and affordable guidance
              
              </li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'>Class room programme</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'>An Inclusive study space</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'>All-round personal mentorship</li>
              <br />
              <li className=' text-3xl border-b-4 border-blue-400'> Employment focused philosophy</li>
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