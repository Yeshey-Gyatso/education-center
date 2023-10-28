import React from 'react'
import Navbar from '../components/navbar'

const Courses = () => {
  return (
    <div className=' h-screen w-screen'>
      <Navbar/>
        
        <div className="flex h-screen">
  <div className="w-1/2 bg-blue-400">
       <div className=' relative pt-10 left-40'>
          <h1 className=' text-4xl text-gray-700'> Courses Available </h1>
          <h1 className=' font-light'>are listed below</h1>
       <div>
        
       </div>
        </div> 
  </div>
  <div className="w-1/2 bg-green-400"> 

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