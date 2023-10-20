import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-screen flex  justify-between items-center '>
      <div className=' p-2'>
        navbar logo
      </div>
      <ul className=' flex gap-4 items-center p-2'>
      <li>home</li>
        <li>about us</li>
        <li>courses</li>
        <li>faculty</li>
        <li>gallery</li>
        <li>achievement</li>
        <li>career</li>
        <li>contact us</li>
      </ul>

      <ul className=' flex gap-3 items-center p-2'>
        <li>
          ig
          </li>
        <li>facebook</li>
        <li>linkedIn</li>
        <li>yt</li>
      </ul>
      </div>
  )
}

export default Navbar