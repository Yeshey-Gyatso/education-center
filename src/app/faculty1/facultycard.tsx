import React from 'react';
interface FacultyData {
    id: number;
    name: string;
    Education: string;
    pic: string;
    Motto: string;
    showDetails: boolean;
  }
  type ToggleDetails = (id: number) => void;
  
  interface FacultyCardProps {
    name: string;
    Motto:string;
    id:number;
    Education: string;
    pic: string;
    showDetails: boolean;
    toggleDetails: ToggleDetails;
  }
  
  export default function FacultyCard({ id, name, Education, pic, Motto, showDetails, toggleDetails }:FacultyCardProps) {
    return (
      <div className="w-full cursor-pointer md:w-1/2 lg:w-1/4 p-4" onClick={() => toggleDetails(id)}>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="font-thin hover:font-normal cursor-pointer" >
            <h1 className="text-xl font-semibold">{name}</h1>
          </div>
  
          <div className="">
            <img src={pic} alt="image" className="mx-auto w-48 h-48 object-cover 
            rounded-full duration-200 transform hover:scale-105" />
          </div>
  
          <div className="mt-4">
            <p className="text-gray-600">
              Education: {Education}
            </p>
          </div>
  
          {showDetails && (
            <div className="mt-4">
              <p className="text-gray-600">
                
                Motto: {Motto}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }