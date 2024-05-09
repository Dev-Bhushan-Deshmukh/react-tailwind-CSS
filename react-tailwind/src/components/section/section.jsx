import React from 'react'
import { Outlet } from 'react-router-dom'
export const Section = () => {
  return (
    <section className='h-full bg-hero-pattern bg-contain bg-no-repeat bg-right' >


<Outlet/>

    </section>
  )
}
