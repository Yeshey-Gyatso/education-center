import React from 'react'
import Navbar from '../components/navbar'
import Link from 'next/link'
import PhoneNavbar from '../components/phone.nav'

const Courses = () => {
  return (
    <div className='h-screen w-screen overflow-x-hidden'>
    <Navbar/>
    <div className=' md:hidden fixed right-0 z-10'>
      <PhoneNavbar/>
    </div>
  <div className='flex flex-col  h-screen cursor-default'>
    <div className='bg-cyan-600 h-40 w-screen flex justify-center items-center '>
      <h1 className=' text-2xl p-5'>Courses</h1>
    </div>
    <div className=' h-80 w-screen bg-orange-50 flex justify-center items-center '>
      <p className=' p-5 text-sm md:text-base tracking-wider text-gray-600'>
      Our institute is dedicated to providing an integrated UPSC/SPSC classroom foundation course, bridging the gap between national and state civil services.
        </p>
    </div>
    
    <div className=' p-5'>
      <p className=' text-base md:text-xl font-bold underline'> Integrated UPSC/SPSC classroom foundation course:</p>
      <span className=' font-light '>
</span>
    

    </div>

    <div className=' px-6 py-10 items-center md:p-20 w-screen bg-gray-300 flex flex-col md:flex-row justify-center gap-5 md:gap-20'>
      <div className=' h-full  '>
<img src="lappy.png"  className='  rounded-3xl  ' alt="Image Description" />
        
      </div>
<div className='flex flex-col'>
  <p className='text-lg tracking-wider'>
  For beginners to Civil Service Examinations, will enable student to grasp concepts  related to UPSC and SPSC exams as they require similar foundational knowledge
  </p>
  <br />
  <ul className="list-disc space-y-2 text-base ">
    <li >Duration: 10-month long course to cover General Studies syllabus.</li>
    <li >Academic Subjects: Course covers core subjects, including History, Geography, Polity, and social studies.
    This course will also cover UPSC(mains) specific topics.</li>
    <li >Skill Development: In addition to academic content, foundation courses often focus on essential skills like study techniques and communication.</li>
    <li >Study Habits and Time Management: Students are taught how to manage their time effectively and develop good study habits.</li>
    <li >Career Guidance: Counseling on government exam calendar and guide students according to their strength.</li>
    <li >Assessment and Evaluation: Regular assessments, quizzes, discussion, and answer writing exercises gauge students' progress and understanding.</li>
    <li >Mentoring and Counseling: Mentoring and counseling to help students navigate their academic journey and address any challenges they may face.</li>
    <li >Flexible Content: The content of integrated foundation courses may be tailored to the specific needs and goals of the students, whether they are absolute beginners or students who have already been preparing.</li>
</ul>
<Link className='text-black bg-transparent px-6 py-3 
                 my-8 mx-auto flex items-center rounded-md border
                  border-black hover:scale-110 duration-300'
                  href={"/contact-us"}
                  >
                  contact us
                </Link>

</div>
</div>

{/* //2nd course */}

<div className=' px-6 py-10 md:p-20 w-screen bg-gray-300 flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-20'>
<div className='flex flex-col relative '>
  <div className=' h-full'>
  <p className='text-xl tracking-wider font-bold underline p-5   '>
  PEDESTAL EDUCATION is delighted to announce availability of coaching for optionals in following subjects:
  </p>
  </div>
  <br />
  <ul className="list-disc space-y-2 text-base p-4 ">
 <li>Anthropology</li> 
 <li>Sociology</li> 
 <li>Public Administration</li> 
 <li>Political science and International Relations</li>
  </ul>
  <p className='text-lg tracking-wider'>Why optional?</p>
  <br />
  <p>The role that Optional plays  in helping you clear your written mains examination cannot be emphasized enough.
    <br /> Not only does doing good in optional allows you a chance to qualify for interview ,but it also gives you an edge over other candidates in the concerned examination.
    <br /> Right from Upsc civil services to spsc civil services such as US, Dy SP, AO, SI etc an optional has ben made mandatory. <br />
   The fact that a candidate has a good grip over certain area which will help him/her in future course of duty is usually checked via the optional subjects in the exam.</p>
<Link className='text-black bg-transparent px-6 py-3 
                 my-8 mx-auto flex items-center rounded-md border
                  border-black hover:scale-110 duration-300'
                  href={"/contact-us"}
                  >
                  contact us
                </Link>

</div>
<div className=''>
<img src="map.png"  className='  rounded-3xl  ' alt="Image Description" />
        
      </div>
</div>

    

  </div>
  
    
  </div>
    
  )
}

export default Courses