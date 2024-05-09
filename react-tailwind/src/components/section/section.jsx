import React from 'react'
import { Outlet } from 'react-router-dom'
export const Section = () => {
  return (
    <section className='relative h-full bg-hero-pattern bg-contain bg-no-repeat bg-right' >
{/* <div className=' absolute bottom-0 left-0 h-1/2 w-1/2 filter blur-2xl bg-purple-800 rounded-full mix-blend-multiply opacity-40' ></div>

<div className=' absolute bottom-10 left-9 h-1/3 w-1/3 filter blur-3xl bg-red-600 rounded-full mix-blend-multiply opacity-60' ></div>

<div className='  absolute bottom-40 left-0 h-2/3 w-2/3 filter blur-2xl bg-green-600 rounded-full mix-blend-multiply opacity-60' ></div> */}
<Outlet/>

    </section>
  )
}
