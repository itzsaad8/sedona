import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'

const Testimonial = () => {
  return (
    <div className='my-8'>
    <div className='bg-black text-white mt-8'>
        <div className='p-28 text-center'>
        <div><h3 className='text-orange-300 py-3'>TESTIMONIALS</h3></div>
        <div><h1 className='text-4xl font-semibold'>What clients say about us</h1></div>
        <div><p className='text-8xl py-4'>“</p></div>
        <div className='w-[90%] mx-auto'>
            <div>
                <p className='font-[400] text-2xl text-gray-500'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt accusamus aperiam, in quam sint dolor, et error illum similique ex repudiandae." </p>
                <p className='py-6'>Alexander Samokhin  /<span className='text-orange-300'> DeoTheme</span></p>
            </div>
            {/* <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt accusamus aperiam, in quam sint dolor, et error illum similique ex repudiandae. Veritatis modi unde cupiditate ea nihil, eveniet tempore!</p>
                <p>Alexander <span>/ DeoTheme</span></p>
            </div> */}
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