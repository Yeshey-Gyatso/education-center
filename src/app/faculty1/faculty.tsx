import React from 'react'
import Navbar from '../components/navbar'

const Faculty = () => {
  const faculty=[
    {
      id:1,
      name:"Diken Sharma",
      DOB:"07-07-1997",
      Address:"From Nimtar Busty, Pakyong District",
      Education:"B. Tech Mechanical engineering North Eastern Regional Institute of Science and Technology. Pursing Masters in Anthropology, IGNOU",
      pic:"/diken.png",
      Motto:" Whether you think you can or you think you can’t you’re right. -Henry Ford.",
      Exam1:"1)2019 Appeared and cleared Air force Selection board (AFCAT) ",
      Exam2:"",

      Facultyfor:"Faculty for Geography, Environment Ecology , Anthropology Optional , CSAT and others."
    },
    {

    },
    {

    },
    {

    },

  ]
  return (
    <div className='h-screen w-screen overflow-x-hidden '>
      <Navbar/>
    <div className='flex flex-col  h-screen'>
      <div className='bg-cyan-600 h-40 w-screen flex justify-center items-center '>
        <h1 className=' text-3xl'>Faculty</h1>
      </div>
      <div className=' h-80 w-screen bg-orange-50 flex justify-center items-center '>
        <p className=' p-20 text-lg'>
        Our Teachers and mentors possess a diverse set of qualities and skills to engage and educate  students effectively. 
        They are passionate, experts in subject matter and adaptable. We pride ourselves in approachability and inclusiveness with no student left behind. 
        These qualities collectively contribute to a positive and effective teaching and learning environment, fostering the academic growth and success of students.

        </p>
      </div>

      <div className='  p-20  w-screen bg-gray-300 flex flex-col justify-center items-center'>
      
      
      

      </div>
      

    </div>
    
      
    </div>
  )
}


export default Faculty