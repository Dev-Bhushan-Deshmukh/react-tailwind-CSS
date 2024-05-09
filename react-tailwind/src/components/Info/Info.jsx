import React from 'react'
import profile from '../../assets/WhatsApp Image 2024-05-08 at 10.51.22 PM.jpeg'
export const Info = () => {
  return (
    <div className='h-full gap-4 mt-2 ml-2  md:flex flex-row justify-center items-start  ' >

<img src={profile} alt="" className='h-1/2 object-cover rounded max-[291px]:h-1/4 '/>
<div className='flex flex-col justify-top h-1/2 w-full sm:w-1/2 md:w-1/3 justify-end'>
<h1 className='text-navcolor font-bold  max-[291px]:text-1xl min-[292px]:text-2xl'>Hey Welcome!</h1>
<h2 className='text-navcolor font-bold   max-[291px]:text-1xl min-[292px]:text-2xl'>This is Bhushan Deshmukh</h2>
<h2 className='text-navcolor font-bold  max-[291px]:text-1xl min-[292px]:text-2xl'>26 years.</h2>
<h2 className='text-navcolor font-bold   max-[291px]:text-1xl min-[292px]:text-2xl'>Pune India</h2>
<h2 className='text-blue-500 font-bold max-[291px]:text-1xl min-[292px]:text-2xl'>ReactJS developer</h2>
<h2 className='text-navcolor-300 font-bold  max-[291px]:text-xs min-[292px]:text-1xl '>India  based Software Engineer Freelancer  skilled in React JS development and a MERN stack developer.

Living in Pune Maharashtra-India
</h2>

</div>
    
    </div>
  )
}
