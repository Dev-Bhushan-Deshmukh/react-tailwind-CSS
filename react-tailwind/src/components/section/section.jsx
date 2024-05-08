import React from 'react'
import { Outlet } from 'react-router-dom'
export const Section = () => {
  return (
    <section className='h-full' >


<Outlet/>

    </section>
  )
}
