"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar'
import FacultyCard from './facultycard';
import { FacultyData } from './facultytypes';
import PhoneNavbar from '../components/phone.nav';
const Faculty = () => {
 
  const [facultyData, setFacultyData]=useState<FacultyData[]>([
    {
      id:1,
      name:"Diken Sharma",
      Address:"From Nimtar Busty, Pakyong District",
      Education:"B. Tech Mechanical engineering North Eastern Regional Institute of Science and Technology. Pursing Masters in Anthropology, IGNOU",
      pic:"/diken.png",
      Motto:" Whether you think you can or you think you can’t you’re right. -Henry Ford.",
      Exam1:"Cleared Air force Selection board (AFCAT) 2019 ",
      Exam2:"Cleared written paper of Assistant Manager 2021 State Bank of Sikkim",
      Exam3:"Cleared UGC NET December 2022 ( Qualified for JRF and ASSISTANT PROFESSOR in Anthropology)",
      Exam4:"UPSC Mains appeared 2022",
      Subject1:" Geography",
      Subject2:"Environment",
      Subject3:"Ecology",
      Subject4:"Anthropology Optional",
      Exam5: null,
      Subject5:" CSAT and others.",
      FacultyDetail:"Faculty for: Geography, Environment, Ecology, Anthropology Optional",
      showDetails: false

    },
    {
      id:2,
      name:"Rigzen Wangchuk Bhutia",
      Address:"Gangtok",
      Education:"B.E. in Computer Science and Engineering M.S. Ramaiah Institute of Technology, Bengaluru",
      pic:"/rig.png",
      Motto:"“The mind is not a vessel to be filled but a fire to be ignited.” —Plutarch",
      Exam1:"UPSC Mains appeared 2021",
      Exam2:"UPSC Mains appeared 2022",
      Exam3:"UPSC CAPF(AC) interview 2022",
      Exam4:"Cleared SSC CGL 2022",
      Exam5:"Cleared written paper of Assistant Manager 2021 State Bank of Sikkim",
      
      Subject1:"Economics",
      Subject2:"CSAT ",
      Subject3:"Anthropology",
      Subject4: null,
      Subject5:null,

      FacultyDetail:"Faculty for: Economics, CSAT, Anthropology",

      showDetails: false
    },
    {
      id: 3,
      name: "Karma Lendup Sherpa",
      Address: "Pakyong",
      Education: "Btech civil(Bharath Institute of Higher Education,Chennai)",
      pic: "/karma.png",
      Motto: "'“By education, I mean all-around drawing out of the best in child and man-body mind and spirit”-Mahatma Gandhi",
      Exam1: null,
      Exam2: null,
      Exam3: null,
      Exam4: null,
      Exam5: null,
      Subject1: "Polity",
      Subject2: "History(modern, world)",
      Subject3: "Governance",
      Subject4: "Public administration optional",
      Subject5: null,
      FacultyDetail: "Faculty for: Polity, History(modern, world), Governance, Public administration optional",
      showDetails: false,
    },
    
    {
      id:4,
      name:"Nikhil Sherpa",
      Address:"Pakyong, Sikkim",
      Education:"B.Tech in Computer Science Engineering From National Institute of Technology, Sikkim",
      pic:"/nikhil.png",
      Motto:"“Every Star has its own Orbit.”  - G.B Shaw",
      Exam1:"UPSC Mains appeared 2022",
      Exam2:"UPSC Mains appeared 2023",
      Exam3:"Cleared SSC CGL 2022",
      Exam4:null,
      Exam5:null,
      Subject1:"Current affairs",
      Subject2:"Society",
      Subject3:"Anthropology Optional",
      Subject4: null,
      Subject5: null,
      FacultyDetail:"Faculty for: Current affairs, Society, Anthropology Optional ",

      showDetails: false

    },

  ])
  const toggleDetails = (id:Number) => {
    setFacultyData((prevData) => {
      return prevData.map((faculty) => {
        if (faculty.id === id) {
          return { ...faculty, showDetails: !faculty.showDetails };
        } else {
          return faculty;
        }
      });
    });
  };
  return (
    <div className="h-screen w-screen overflow-x-hidden cursor-default">
    <Navbar />
    <div className=' md:hidden fixed right-0 z-10'>
      <PhoneNavbar/>
    </div>
    <div className="flex flex-col h-screen">
      <div className="bg-cyan-600 h-40 w-screen flex justify-center items-center">
        <h1 className="text-2xl  p-5">Faculty</h1>
      </div>
      <div className="h-full w-screen bg-orange-50 flex justify-center items-center">
        <p className=" px-6 py-6 md:p-20 text-base tracking-wider">
          Our Teachers and mentors possess a diverse set of qualities and skills to engage and educate 
          students effectively. They are passionate, experts in subject matter, and adaptable. We pride ourselves in approachability and inclusiveness with no student left behind. 
          These qualities collectively contribute to a positive and effective teaching and learning environment, 
          fostering the academic growth and success of students.
        </p>
      </div>
      <div className=" p-6 md:p-20 w-screen bg-gray-300 flex justify-center items-center">
        <div className="flex flex-wrap">
          {facultyData.map((faculty) => (
            <FacultyCard key={faculty.id} toggleDetails={toggleDetails} {...faculty} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
};


export default Faculty