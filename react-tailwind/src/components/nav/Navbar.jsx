import React, { useState } from 'react'

export const Navbar = () => {
  const[isVisible,setVisible]=useState('');
  const toggler=()=>{
    setVisible(isVisible==''?'hidden':'')
  }
  return (
    <nav className='bg-black flex justify-between h-20 items-center'>


      <div className='flex items-center text-white' >Logo</div>
    
    <div  className='hidden  md:flex justify-between items-center w-1/2  text-white p-2'>
<span>Home</span>
<span>project</span>
<span>Skills</span>
<span>About</span>
<span>Contact</span>


    </div>
  
  <button className='hidden md:flex  h-2/3 border border-white-600 text-white rounded-[5px]  gap-3 items-center p-3 mr-1'> <i class="fa-regular fa-user"></i>Log Out</button>
    <div className='flex items-center text-white md:hidden p-2'   onClick={toggler} > <i class="fa-solid fa-bars"></i></div>




<div className={`fixed bg-white   inset-0 ${isVisible}`}>

<nav  className='flex justify-between p-3 bg-black h-20'>
<div className='flex items-center text-white' >Logo</div>
<div className='flex items-center text-white p-2' onClick={toggler} ><i class="fa-solid fa-x"></i></div>
</nav>


   
<div  className='flex-col  justify-between items-center  text-grey-400 p-2'>
<div>Home</div>
<div>Home</div>
<div>Home</div>
<div>Home</div>
<div>Home</div>
<button className='flex  h-2/3 border border-grey-600 text-grey-600 rounded-[1px]  gap-3 items-center p-3 '> <i class="fa-regular fa-user"></i>Log Out</button>
  

    </div>





</div>


    </nav>
  )
}
