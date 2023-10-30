import React from 'react'
import Navbar from '../components/navbar'

const Faculty = () => {
  const faculty=[
    {
      id:1,
      name:"Diken Sharma",
      Address:"From Nimtar Busty, Pakyong District",
      Education:"B. Tech Mechanical engineering North Eastern Regional Institute of Science and Technology. Pursing Masters in Anthropology, IGNOU",
      pic:"/diken.png",
      Motto:" Whether you think you can or you think you can’t you’re right. -Henry Ford.",
      Exam1:"Cleared Air force Selection board (AFCAT) 2019 ",
      Exam2:"Cleared Assistant Manager 2021 State Bank of Sikkim",
      Exam3:"Cleared UGC NET December 2022 ( Qualified for JRF and ASSISTANT PROFESSOR in Anthropology)",
      Exam4:"UPSC Civil service Exam",
      Exam41:"Appeared prelims 2020 Failed GS , Cleared CSAT",
      Exam42:"Appeared prelims 2021 Failed GS , Cleared CSAT",
      Exam43:"Appeared Prelims 2022 Cleared Prelims",
      Exam44:"Appeared Mains  2022  Couldn’t qualify for CSE Interview.",
      Subject1:" Geography",
      Subject2:"Environment",
      Subject3:"Ecology",
      Subject4:"Anthropology Optional",
      Subject5:" CSAT and others."

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
      
      Subject1:"Economics",
      Subject2:"CSAT ",
      Subject3:"Anthropology",
    },
    {
      id:3,
      name:"Karma Lendup Sherpa ",
      Address:"Pakyong",
      Education:"Btech civil(Bharath Institute of Higher Education,Chennai)",
      pic:"/karma.png",
      Motto:"'“By education, I mean all-around drawing out of the best in child and man-body mind and spirit”-Mahatma Gandhi",
     
      
      Subject1:"Polity",
      Subject2:"History(modern, world ) ",
      Subject3:"Governance",
      Subject4:"Public administration optional"

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
      
      Subject1:"Current affairs",
      Subject2:"Society",
      Subject3:"Anthropology Optional",

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
    <div className=' '>
      {
        faculty.map(({id,name,Address,Education,pic,Motto,Exam1,Exam2,Exam3,Exam41,Exam42,Exam43,Exam44,Exam4,Subject1,Subject2,Subject3,Subject4,Subject5})=>(
          <div key={id} className=' shadow-md shadow-gray-600 rounded-lg p-3'>
                    <div className='p-3 font-thin hover:font-normal cursor-default'>
                        <h1>
                            {name}
                        </h1>
                    </div>
                    
                    <img src={pic} alt="image" className='
                     rounded-md duration-200  hover:scale-105
                     
                    '/>
                    <div className=' flex items-center justify-center '>
                      <p>address:{Address} <br />Education:{Education} <br /> Mottot:{Motto}</p><br />
                      <p>{Exam1} <br /> {Exam2} <br /> {Exam3} <br /> {Exam4} <br />{Exam41} <br /> {Exam42} <br /> {Exam43} <br /> {Exam44}</p>
                        <h1>Subjects: </h1>
                        <ul>
                          <li>
                            {Subject1}
                          </li>
                          <li>
                            {Subject2}
                          </li>
                          <li>
                            {Subject3}
                          </li>
                          <li>
                            {Subject4 }
                          </li>
                          <li>
                            {Subject5 }
                          </li>
                        </ul>
                        
                    </div>
                </div>
        ))
      }
    </div>
    
      
    </div>
  )
}


export default Faculty