import React from 'react'
import profile from '../../assets/Rectangle 36.png'

export const Info = () => {
  return (
    <div className='h-full gap-4 mt-2 ml-2  md:flex flex-row justify-start items-start max-[765px]:bg-white  ' >

<img src={profile} alt="" className='h-1/2 object-cover  max-[485px]:h-1/4 '/>
<div className='  flex flex-col  h-1/2 p-3 filter blur-1xl  rounded-2xl  opacity-80 bg-slate-100  max-[765px]:bg-white  max-[765px]:w-full  max-[765px]:justify-top md:w-1/3 md:justify-center'>
<h1 className='text-navcolor font-bold  max-[291px]:text-1xl min-[292px]:text-2xl'>Hey Welcome!</h1>
<h2 className='text-navcolor font-bold   max-[291px]:text-1xl min-[292px]:text-2xl'>This is Bhushan Deshmukh</h2>
<h2 className='text-navcolor font-bold  max-[291px]:text-1xl min-[292px]:text-2xl'>26 years.</h2>
<h2 className='text-navcolor font-bold   max-[291px]:text-1xl min-[292px]:text-2xl'>Pune India</h2>
<h2 className='text-texthighlighter font-bold max-[291px]:text-1xl min-[292px]:text-2xl'>ReactJS developer</h2>
<h2 className='text-navcolor-300 font-bold  max-[291px]:text-xs min-[292px]:text-1xl '>India  based Software Engineer Freelancer  skilled in React JS development and a MERN stack developer.

Living in Pune Maharashtra-India
</h2>

</div>
    
    </div>
  )
}
