import React, { useState } from 'react'

export const About = () => {
let bgCOl;
    let journey=[
{id:1,
    icon:'fa-school',
    title:'Schooling',
description:'Primary ,secondary  education was in parbhani and akola  located in maharashtra,done schooling from diffrent schools',
year:'2019',
pointer:'done'
},


{id:2,
    icon:'fa-graduation-cap',
    title:'Graduation',
description:'Primary ,secondary  education was in parbhani and akola  located in maharashtra,done schooling from diffrent schools',
year:'2022',
pointer:'done'
},
{id:3,
    icon:' fa-briefcase',
title:'React JS developer',
description:'Primary ,secondary  education was in parbhani and akola  located in maharashtra,done schooling from diffrent schools',
year:'January 2023- March 2024',
pointer:'latest'
}
    ]


const pageContent=[
{
    id:1,
    title:'What I Do',
    description:'I specialize in [mention your areas of expertise, such as web development, mobile app development, backend systems, etc.], utilizing a diverse toolkit of programming languages, frameworks, and methodologies. From designing scalable architectures to writing clean, efficient code, I"m committed to delivering solutions that exceed expectations'
    



},
{
    id:2,
    title:'My Philosophy',
    description:'I believe that great software is not just about lines of code; it"s about understanding users" needs and delivering experiences that delight and empower them. With a user-centric approach and a keen eye for detail, I strive to create software that not only solves problems but also enhances lives'




},
{
    id:3,
    title:'Lets Connect !',
    description:'Whether you"re a fellow developer, a potential collaborator, or someone with an exciting project idea, I"d love to hear from you! Feel free to reach out through [mention your preferred contact methods, such as email, LinkedIn, or GitHub], and let"s create something amazing together.',
socialLink:true



}

]



  return (
    <div className=' h-full flex   items-center  flex-col overflow-y-scroll ' >
        <h1 className='text-orange-600 font-bold text-2xl'>About Me</h1> 
      <div className='rounded-2xl  bg-navcolor w-3/4 p-3 mt-4 h-1/3 flex-shrink-0'>

<h2 className='text-white font-semibold '> 
India  based Software Engineer Freelancer skilled in React JS development and a MERN stack developer.Living in Pune Maharashtra-India
Strategic and results-driven Computer Applications graduate boasting a prolific year in software engineering. Proficient in a robust skill set encompassing React.js,redux,redux toolkit, JavaScript, AngularJS, HTML, CSS, node js, Flask, Python, MongoDB, MySQL, Figma, Manual software testing, Postman API testing, python data analytics. Proactively seeking for a role of react js developer / full-stack development to contribute innovative solutions and excel in a dynamic, high-impact environment.



</h2>
</div>  




<h1 className='text-orange-600 font-bold text-2xl mt-2 '>My Journey</h1> 
<div className=' rounded-2xl mt-4 w-3/4 p-3 h-1/3 flex-shrink-0 flex  overflow-x-scroll gap-10 text-white'>
{journey.map((item)=>

<>
<div className='bg-navcolor text-white w-1/3 rounded-2xl  flex-shrink-0 p-2  '>
<i class={`fa-solid ${item.icon}`}></i> <span className='text-1xl text-orange-400 font-semibold'>&nbsp; {item.title} </span> <br />
{item.description} <br />
{item.year}
</div> 
</>



)}



</div>
{/* 'bg-highlighter w-3/4 p-3 mt-4 h-1/3 flex-shrink-0 rounded-2xl' */}

{pageContent.map((item)=><>

    <h1 className='text-orange-600 font-bold text-2xl  mt-2'>{item.title}</h1> 
      <div className='bg-highlighter w-3/4 p-3 mt-4 h-1/3 flex-shrink-0 rounded-2xl'>

<h2 className='text-white font-semibold '> 
{item.description}

</h2>
</div>  



</>)}



    </div>
  )
}
