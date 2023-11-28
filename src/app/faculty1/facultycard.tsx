import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import { FacultyCardProps } from './facultytypes';

export default function FacultyCard({ id, name,Exam1,Exam2,Exam3,Exam4,Exam5, Education, Subject1,Subject2,Subject3,Subject4,Subject5, pic, Motto, showDetails, FacultyDetail,toggleDetails}: FacultyCardProps) {
  return (
    <div className={`w-full cursor-pointer ${!showDetails ? 'md:w-1/2 ':''} p-4
     ${showDetails ? 'fixed inset-0 w-screen h-screen flex items-center justify-center z-20 bg-gray-800 transition-opacity duration-300' : ''}`}>
      {showDetails ? (
        <div className="flex flex-col h-full bg-white rounded-lg shadow-md relative p-5 overflow-y-auto gap-6">
          <button className="absolute top-2 right-2 
           text-gray-500 cursor-pointer duration-200 transform hover:scale-125" 
           onClick={() => toggleDetails(id)}>
          <AiFillCloseCircle/>
          </button>
          <div className="w-full  font-thin hover:font-normal cursor-pointer">
            <h1 className="text-xl font-semibold">{name}</h1>
          </div>
          <div className="">
            <img src={pic} alt="image" className="mx-auto w-48 h-48 object-cover rounded-full duration-200 transform hover:scale-105" />
          </div>
          <div className="mt-4">
            <p className="text-gray-600 font-bold">
              Education: 
              </p>
              <p>
              {Education}
              </p>
            
          </div>
          {Exam1 ? (
     <div className="mt-4">
            <p className='text-gray-600 font-bold'>Exams Cleared:</p>
            <p className="text-gray-600">
              <ul>
                <li>{Exam1}</li>
                <li>{Exam2}</li>
                <li>{Exam3}</li>
                <li>{Exam4}</li>
                <li>{Exam5}</li>
              </ul>
            </p>
          </div>
        ) : null}
          <div className="mt-4">
            <p className='text-gray-600 font-bold'>Faculty For:</p>
            <p className="text-gray-600">
              <ul>
                <li>{Subject1}</li>
                <li>{Subject2}</li>
                <li>{Subject3}</li>
                <li>{Subject4}</li>
                <li>{Subject5}</li>
              </ul>
            </p>
          </div>


          <div className="mt-4">
            <p className="text-gray-600 font-bold">
              Motto:
            </p>
            <p>
            {Motto}
            </p>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col justify-center px-6 py-6 bg-white rounded-lg shadow-md  space-y-8 lg:min-h-[400px]   " onClick={() => toggleDetails(id)}>
          <div className="font-thin hover:font-normal cursor-pointer ">
            <h1 className="text-xl text-center font-semibold duration-200  transform hover:border-t-2" >{name}</h1>
          </div>
          <div className="">
            <img src={pic} alt="image" className="mx-auto w-48 h-48 object-cover rounded-full duration-200 transform hover:scale-105" />
          </div>
          <div className="mt-4 text-gray-600 text-center"> 
          {FacultyDetail}
          </div>
        </div>
      )}
    </div>
  );
}
