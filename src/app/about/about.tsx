import React from 'react'
import Navbar from '../components/navbar'

const About = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
      <Navbar/>
    <div className='flex flex-col  h-screen'>
      <div className='bg-cyan-600 h-40 w-screen flex justify-center items-center '>
        <h1 className=' text-2xl p-5'>About Us</h1>
      </div>
      <div className=' h-80 w-screen bg-orange-50 flex justify-center items-center '>
        <p className=' p-20 text-base tracking-wider'>
        Pedestal Education is an educational initiative aimed at unlocking the potential of the youth in Sikkim and fostering a competitive mindset among students and those aspiring for civil services and government positions. The allure of civil services and government careers has always captivated young individuals. In Sikkim, 
        the UPSC civil service examination has taken on an almost mythical quality, as very few Sikkimese individuals have successfully cleared these exams,
         and even fewer have made their mark in the realm of governance.
        Our mission is to offer high-quality and all-encompassing guidance and mentorship, helping students overcome any challenges they may encounter. We aim to not only illuminate the path to civil service exams but also to guide individuals preparing for various other government examinations. At Pedestal, we take immense pride in our 
        student-centric approach and have assembled a dedicated team capable of providing comprehensive support to aspirants in any way they may need.
        </p>
      </div>

      <div className=' p-20 w-screen bg-gray-300 flex flex-row justify-center items-center'>
        <div className=' mr-20'>
  <img src="bonsai.png"  className=' rounded-bl-full  ' alt="Image Description" />
          
        </div>
  <div className='flex flex-col'>
    <p className='text-lg tracking-wider '>
      We endeavor to make each of our students succeed in related exams by providing various classroom programs and courses.
    </p>
    <br />
    <ul className='text-base list-disc pl-10  space-y-2'>
      <li>  UPSC Classroom Foundation course</li>
      <li>Sikkim Public Service Commission exams foundation course</li>
      <li>Integrated UPSC/SPSC foundation course</li>
      <li>Optionals for UPSC/SPSC</li>
      <li>CSAT foundation</li>
      <li>CSAT+ (CGL, Banking)</li>
    </ul>
  </div>
</div>

      

    </div>
    
      
    </div>
  )
}

export default About