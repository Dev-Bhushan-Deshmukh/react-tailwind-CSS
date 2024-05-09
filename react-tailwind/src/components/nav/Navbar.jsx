import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Nav = () => {
  const[isVisible,setVisible]=useState('hidden');
  const toggler=()=>{
    setVisible(isVisible==''?'hidden':'')
  }
  return (
    <nav className='bg-navcolor flex justify-between h-20 items-center'>


      <div className='flex items-center text-white ml-3' >Bhushan</div>
    
    <div  className='hidden  md:flex justify-between items-center w-1/2  text-white p-2 max-[947px]:text-xs min-[948px]:text-3xs'>
<Link  to='about'>About</Link>
<span  >project</span>
<span  to=''>Skills</span>
<span  to=''>Contact</span>
<span className='text-orange-400'> <i className="fa-solid fa-phone"></i>+91-7350206770</span>


    </div>
    {/* <i className="fa-regular"></i> */}
  
  <button className='hidden md:flex  h-2/5 border border-white-600 justify-between text-white rounded-[5px] bg-orange-400 gap-3 items-center p-3 mr-10 max-[947px]:text-xs min-[948px]:text-3xs'><i className="fa-solid fa-download"></i>Resume</button>
    <div className='flex items-center text-white md:hidden p-2'   onClick={toggler} > <i className="fa-solid fa-bars"></i></div>




<div className={`fixed bg-white   inset-0 ${isVisible}`}>

<nav  className='flex justify-between p-3 bg-black h-20'>
<div className='flex items-center text-white' >Logo</div>
<div className='flex items-center text-white p-2' onClick={toggler} ><i className="fa-solid fa-x"></i></div>
</nav>


   
<div  className='flex-col  justify-between items-center  text-grey-400 p-2'>
<div>Home</div>
<div>Home</div>
<div>Home</div>
<div>Home</div>
<div>Home</div>
<button className='flex  h-2/3 border border-grey-600 text-grey-600 rounded-[1px]  gap-3 items-center p-3 '> <i className="fa-regular fa-user"></i>Resume</button>
  

    </div>





</div>


    </nav>
  )
}
