"use client";
import Navbar from "../components/navbar";
import { FiPhoneCall } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { ImLocation2 } from "react-icons/im";
// import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
email:string;
message:string;
}

const Contact = () => {
	
const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = formData =>{
       window.location.href=`mailto:pedestal.edu.sikkim@gmail.com?subject=Enquiry from ${formData.email}&body=Hi, my name is ${formData.email}. and my message is  ${formData.message}`;
    };


  const form = useRef();
  return (
    <div className="h-screen md:h-screen w-screen  overflow-x-hidden">
      <Navbar />
      <div
        id="contact"
        className="relative w-full h-full   md:p-0 
    bg-gradient-to-b from-teal-800 to-black
     text-white md:pb-10 
    
     "
      >
        <div
          className=" flex w-screen flex-col justify-center md:max-w-screen-lg md:mx-auto h-full
        md:pt-30 "
        >
          <div className=" md:pb-8 md:pt-20 p-10 ">
            <p
              className=" md:text-4xl font-bold inline border-b-4
                 border-gray-500 cursor-default 
                "
            >
              Get in touch with us
            </p>
            <p className=" py-6 cursor-default">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="flex-1">
              <div className="hidden md:flex">
                <img
                  src="/translogo.png"
                  className="h-3/4 w-3/4 rounded-3xl"
                  alt="logo pic"
                />
              </div>
            </div>

            <div className="flex-1  ">
              <ul>
                <li className="flex items-center mb-4">
                  <span className="mr-2">
                    <FiPhoneCall />
                  </span>
                  <span className="tracking-wider">0123456789</span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="mr-2">
                    <LuMail />
                  </span>{" "}
                  {/* Use an email icon of your choice */}
                  <span>coaching@pedesteleducation.in</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">
                    <ImLocation2 />
                  </span>{" "}
                  {/* Use a location icon of your choice */}
                  <span>Upper tadong , Gangtok, Sikkim</span>
                </li>
              </ul>
            </div>
            {/* onSubmit={sendEmail} */}
            <div className="p-2 md:w-1/3">
            <form

              action="#!"
              className="flex-1 flex flex-col w-full "
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"

                {...register('email')}
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4"
                required
              />
              <textarea
                {...register('message')}
                rows={10}
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              ></textarea>

              <button
                className="text-white bg-transparent px-6 py-3 
                 my-8 mx-auto flex items-center rounded-md border border-white hover:scale-110 duration-300"
              >
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;