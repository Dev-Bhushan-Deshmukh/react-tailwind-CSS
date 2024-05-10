import React from 'react'
import ReactImg from '../../assets/react.svg'
import NextjS from '../../assets/nextjs.png'
import Redux from '../../assets/pngegg (1).png'
import Typescript from '../../assets/pngegg (9).png'
import NodeJS from '../../assets/pngegg.png'
import ExpressJS from '../../assets/pngwing.com (1).png'
import MongoDB from '../../assets/pngegg (5).png'
import Javascript from '../../assets/pngegg (2).png'
import HTML from '../../assets/pngegg (3).png'
import Tailwind from '../../assets/pngwing.com.png'
import CSS from '../../assets/pngegg (4).png'
import Python from '../../assets/pngegg (7).png'
import Flask from '../../assets/pngegg (10).png'
import Mysql from '../../assets/pngegg (6).png'
import Figma from '../../assets/pngegg (8).png'
import visualization from '../../assets/pngwing.com (2).png'

export const Skills = () => {
   
    let skillSet=[
{name:'React',
imgPath:ReactImg,
descrption:'s'


},
{name:'NEXT JS',
imgPath:NextjS,
descrption:'s'


},
{name:'Redux',
imgPath:Redux,
descrption:'s'


},
{name:'Typescript',
imgPath:Typescript,
descrption:'s'


},

{name:'Node JS',
imgPath:NodeJS,
descrption:'s'


},
{name:'Express JS',
imgPath:ExpressJS,
descrption:'s'


},
{name:'Mongo DB',
imgPath:MongoDB,
descrption:'s'


},
{name:'Javascript',
imgPath:Javascript,
descrption:'s'


},
{name:'HTML',
imgPath:HTML,
descrption:'s'


},
{name:'Tailwind CSS',
imgPath:Tailwind,
descrption:'s'


},
{name:'CSS',
imgPath:CSS,
descrption:'s'


},
{name:'Python',
imgPath:Python,
descrption:'s'


},
{name:'Flask ',
imgPath:Flask,
descrption:'s'


},
{name:'Mysql ',
imgPath:Mysql,
descrption:'s'


},
{name:'Figma design ',
imgPath:Figma,
descrption:'s'


},
// {name:'Responsive UI ',
// imgPath:'',
// descrption:'s'


// },
{name:'Data analysis and Visualizations ',
imgPath:visualization,
descrption:'s'


},



    ]
    let skills=['React','Javascript','TypeScript','Node JS','Tailwind','CSS','Chart' ,'Express','NEXT JS','Mongo DB','Mysql', 'Python','Flask','Responsive design','UI/UX']
  return (
    <div className='h-4/5 flex flex-col items-center mt-3 ' >

<h1 className='text-orange-600 font-bold sm:text-1xl md:text-2xl'> Unveiling My Proficiencies</h1> 
      <div className=' bg-navcolor p-3 mt-4 h-full flex-shrink-0  w-3/4  max-[445px]:w-full   md:w-3/4  sm:rounded-lg md:rounded-2xl flex flex-wrap  overflow-y-scroll   justify-center items-center gap-3  '>


{skillSet.map((item)=><div className='text-textLighter font-semibold max-[533px]:w-full max-[891px]:w-2/3  max-[1128px]:w-1/3  rounded-xl bg-white w-1/4  h-1/3 flex-shrink-0  flex flex-col justify-center items-center'>
<img src={item.imgPath}  className='h-1/2' alt="" />
{item.name}

</div>)}    







</div>  






    </div>
  )
}
