import React from 'react'

const Contactform = () => {
  return (
    <div id='contact'
    className=' w-full h-screen
    bg-gradient-to-b from-teal-800 to-black
     p-4 text-white pb-10 
    
     ' >
        <div className=' flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen
        md:pt-30'>
            <div className=' md:pb-8 md:pt-20 '>
                <p className=' text-4xl font-bold inline border-b-4
                 border-gray-500 cursor-default 
                '>Leave us a message</p>
                <p className=' py-6 cursor-default'>Submit the form below to get in touch with me</p>
            </div>
            <div className=' flex justify-center items-center'>
                
                
                <form  action="https://getform.io/f/181ef0a5-c953-41ed-817c-4e3f02b46c40" 
                className=' flex flex-col w-full md:w-1/2
                '
                method='POST'>
                    <input type="text" name='name'
                     placeholder='Enter your name'
                     className=' p-2 bg-transparent border-2 
                     rounded-md text-white focus:outline-none'
                     required
                    />
                    <input type="text" name='email' 
                     placeholder='Enter your email'
                     className=' p-2 bg-transparent border-2 
                     rounded-md text-white focus:outline-none my-4'
                     required
                    />
                    <textarea name="message" rows={10}
                    placeholder='Enter your message'
                    className=' p-2 bg-transparent border-2 
                    rounded-md text-white focus:outline-none '
                    required
                    ></textarea>

                    <button className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                     flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contactform