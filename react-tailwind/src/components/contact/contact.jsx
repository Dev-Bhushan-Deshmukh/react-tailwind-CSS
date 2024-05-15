import React from 'react'
import connectImg from '../../assets/3661727.jpg'
import linkeding from '../../assets/linkedin.png'
import facebookImg from '../../assets/facebook.png'
import telegramImg from '../../assets/telegram.png'
import watsapImg from '../../assets/whatsapp.png'
import instagramImg from '../../assets/instagram.png'
import gmailImg from '../../assets/gmail.png'
export const Contact = () => {

const socialmedia=[
{
    id:'Bhushan Deshmukh',
    img:linkeding
},
{
    id:'Bhushan Deshmukh',
    img:instagramImg
},
{
    id:'Bhushan Deshmukh',
    img:facebookImg
},
{
    id:'bhushanvd1235@gmail.com',
    img:gmailImg
},
{
    id:'+91 -7350206770',
    img:watsapImg
},
{
    id:'Bhushan Deshmukh',
    img:telegramImg
},


]

  return (
    <div className='bg-white h-full flex justify-center items-center'>


<div className=' z-10 w-full absolute top-0 h-2/3 md:h-4/5 p-2 sm:w-2/3  md:w-1/2 md:p-0 md:relative   flex flex-col justify-center gap-2 md:gap-4 items-center'>
<h1  className='text-orange-400 font-semibold sm:text-xl md:text-2xl'>Hey ! lets connect soon..</h1>
{socialmedia.map(item=><div className='w-full  rounded-bl-none font-semibold text-navcolor shadow-sm shadow-slate-400 p-1 md:w-2/3 h-14 md:h-16 md:bg-white md:text-slate-600  rounded-xl flex items-center justify-start gap-5 truncate text-ellipsis'> <img src={item.img} className='object-contain h-4/5' alt="" /> <span>{item.id}</span> </div>
)}



</div>

<img src={connectImg} className='w-full absolute top-10  filter blur-md opacity-90 md:filter-none md:block md:relative   md:w-1/2 h-2/3 md:h-full object-contain'/>

    </div>
  )
}
