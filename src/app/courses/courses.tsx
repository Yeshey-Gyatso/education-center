import React from 'react'
import Navbar from '../components/navbar'

const Courses = () => {
  return (
    <div className=' h-screen w-screen overflow-x-hidden'>
      <Navbar/>
        
        <div className="flex flex-col h-screen">
  <div className=" bg-blue-400 h-screen">
       <div className=' relative pt-10 left-40'>
          <h1 className=' text-4xl text-gray-700'> Courses Available </h1>
          <h1 className=' font-light'>are listed below</h1>
       <div>
        
       </div>
        </div> 
  </div>
  <div className=" bg-green-400 h-screen w-screen"> 

        <div className=' relative pt-10 left-40'>
       <h1 className=' text-4xl text-gray-700'> Courses Available </h1>
       <h1 className=' font-light'>are listed below</h1>
        </div> 
    <div>
        <h1>hello</h1>
        
        </div>
  </div>
</div>
        </div>
  )
}

export default Courses