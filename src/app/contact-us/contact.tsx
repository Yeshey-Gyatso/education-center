import React from 'react';
import Navbar from '../components/navbar';
import {FiPhoneCall} from 'react-icons/fi';
import {LuMail} from 'react-icons/lu';
import {ImLocation2} from 'react-icons/im';


const Contact = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <div id='contact'
    className=' w-full h-screen
    bg-gradient-to-b from-teal-800 to-black
     text-white pb-10 
    
     ' >
        <div className=' flex flex-col justify-center max-w-screen-lg mx-auto h-screen
        md:pt-30'>
            <div className=' md:pb-8 md:pt-20 '>
                <p className=' text-4xl font-bold inline border-b-4
                 border-gray-500 cursor-default 
                '>Get in touch with us</p>
                <p className=' py-6 cursor-default'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex-1'>
                <div className=''>
                  <img src="/P.png" className='h-2/3 w-2/3 rounded-3xl' alt="logo pic" />
                </div>
              </div>

              <div className='flex-1 h-auto'>
                <ul>
                  <li className='flex items-center mb-4'>
                    <span className='mr-2'><FiPhoneCall /></span>
                    <span className='tracking-wider'>0123456789</span>
                  </li>
                  <li className='flex items-center mb-4'>
                    <span className='mr-2'><LuMail /></span> {/* Use an email icon of your choice */}
                    <span>coaching@pedesteleducation.in</span>
                  </li>
                  <li className='flex items-center'>
                    <span className='mr-2'><ImLocation2 /></span> {/* Use a location icon of your choice */}
                    <span>Upper tadong , Gangtok, Sikkim</span>
                  </li>
                </ul>
              </div>

              <form action="#!" className='flex-1 flex flex-col w-full md:w-1/2' method='POST'>
                <input
                  type="text"
                  name='email'
                  placeholder='Enter your email'
                  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'
                  required
                />
                <textarea
                  name="message"
                  rows={10}
                  placeholder='Enter your message'
                  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                  required
                ></textarea>

                <button className='text-white bg-transparent px-6 py-3 
                 my-8 mx-auto flex items-center rounded-md border border-white hover:scale-110 duration-300'>
                  Send Message
                </button>

              </form>
            </div>

        </div>
    </div>
    </div>
    
  )
}

export default Contact