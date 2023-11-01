import React from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import { FacultyCardProps } from './facultytypes';

export default function FacultyCard({ id, name, Education, pic, Motto, showDetails, FacultyDetail,toggleDetails }: FacultyCardProps) {
  return (
    <div className={`w-full cursor-pointer duration-200 
    transform hover:scale-105   ${!showDetails ? 'md:w-1/2 ':''} p-4 ${showDetails ? 'fixed inset-0 w-screen h-screen flex items-center justify-center z-20 bg-gray-800 transition-opacity duration-300' : ''}`}>
      {showDetails ? (
        <div className="bg-white rounded-lg shadow-md relative p-5">
          <button className="absolute top-2 right-2 
           text-gray-500 cursor-pointer duration-200 transform hover:scale-125" 
           onClick={() => toggleDetails(id)}>
          <AiFillCloseCircle/>
          </button>
          <div className="font-thin hover:font-normal cursor-pointer">
            <h1 className="text-xl font-semibold">{name}</h1>
          </div>
          <div className="">
            <img src={pic} alt="image" className="mx-auto w-48 h-48 object-cover rounded-full duration-200 transform hover:scale-105" />
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Education: {Education}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              Motto: {Motto}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4" onClick={() => toggleDetails(id)}>
          <div className="font-thin hover:font-normal cursor-pointer">
            <h1 className="text-xl font-semibold">{name}</h1>
          </div>
          <div className="">
            <img src={pic} alt="image" className="mx-auto w-48 h-48 object-cover rounded-full duration-200 transform hover:scale-105" />
          </div>
          <div className="mt-4 text-gray-600">
          {FacultyDetail}
          </div>
        </div>
      )}
    </div>
  );
}
