import React, { useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

const Testimonial = () => {
    const [current,setCurrent]=useState(0)


    const clients = [
        {
            msg:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt accusamus aperiam, in quam sint dolor, et error illum similique ex repudiandae.',
            author:'Alexander Samokhin  /',
            authnick:'DeoTheme'
        },
        {
            msg:'Maiores nesciunt accusamus aperiam, in quam sint dolor, et error illum similique ex repudiandae.Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            author:'Ali amin gandapoor  /',
            authnick:'CMPK'
        },

    ]
    const handleprev=()=>{
        setCurrent((prev) => (prev === 0 ? clients.length - 1 : prev - 1))

    }
    const handlenext=()=>{
        setCurrent((prev) => (prev === clients.length - 1 ? 0  : prev + 1))
    }
  return (
    <div className='my-8'>
    <div className='bg-slate-800 text-white mt-8'>
        <div className='p-28 text-center'>
        <div><h3 className='text-orange-300 py-3'>TESTIMONIALS</h3></div>
        <div><h1 className='text-4xl font-semibold'>What clients say about us</h1></div>
        <div><p className='text-8xl py-4'>“</p></div>
        <div className='w-[93%]  mx-auto relative'>
            <div className='w-[89%] mx-auto'>
                <p className='font-[400] text-2xl text-gray-500'>{clients[current].msg} </p>
                <p className='py-6'>{clients[current].author}<span className='text-orange-300'> {clients[current].authnick}</span></p>
            </div>
            <div className='w-[93%] ml-10 flex justify-between  absolute top-0 text-4xl'>

            <button className='' onClick={handleprev}><GrFormPrevious/></button>
            <button className='' onClick={handlenext}><GrFormNext/></button>
            </div>
            
        </div>
        </div>
       

    </div>
    <div className='bg-gray-100 py-9 '>
        <ul className='flex justify-around w-[70%] mx-auto '>
            <li><img src={img1} alt="" /></li>
            <li><img src={img2} alt="" /></li>
            <li><img src={img3} alt="" /></li>
            <li><img src={img4} alt="" /></li>
            <li><img src={img5} alt="" /></li>
            <li><img src={img6} alt="" /></li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonial