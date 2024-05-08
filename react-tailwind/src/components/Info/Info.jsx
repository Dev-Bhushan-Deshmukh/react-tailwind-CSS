import React from 'react'
import profile from '../../assets/WhatsApp Image 2024-05-08 at 10.51.22 PM.jpeg'
export const Info = () => {
  return (
    <div className='h-1/2 flex justify-center items-center gap-4 mt-2 flex-col md:flex-row' >

<img src={profile} alt="" className='h-full object-cover rounded '/>
<div className=' flex flex-col justify-end h-full  '>
<h1 className='text-navcolor font-bold text-2xl'>Hey Welcome!</h1>
<h2 className='text-navcolor font-bold text-2xl'>This is Bhushan Deshmukh</h2>
<h2 className='text-navcolor font-bold text-1xl'>26 years.</h2>
<h2 className='text-blue-500 font-bold text-2xl'>ReactJS developer</h2>
<h2 className='text-navcolor-300 font-bold '>India  based Software Engineer Freelancer <br /> skilled in React JS development and a MERN  <br /> stack developer.

Living in Pune Maharashtra-India
</h2>

</div>
    
    </div>
  )
}
