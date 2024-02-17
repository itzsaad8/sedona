import React, { useState } from 'react'
import img1 from '../assets/2.jpg'
import img2 from '../assets/3.jpg'
import img3 from '../assets/4.jpg'
import img4 from '../assets/5.jpg'
const Recentwork = () => {

  return (
    <div className='sm:mx-[14%] mx-4'>
        <div className='py-6'>
            <h1 className='font-semibold text-4xl'>Discover Recent Works</h1>
        </div>
        <div>
            <ul className='flex sm:gap-7 gap-2 font-semibold text-gray-500 '>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>All</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Residential</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Commercial</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Landscape</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Interior</li>
            </ul>
        </div>
        <div className='sm:grid grid-cols-3 gap-7 py-12 '>
            <div className='relative group overflow-hidden'  >
                <img src={img1} alt="" className='w-full h-full object-cover  group-hover:scale-125 transition-transform duration-500'/>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'>
                    <div className='absolute inset-0 flex flex-col items-center  justify-center px-9 text-center translate-y-[55%] group-hover:translate-y-0 transition-all duration-300  '>
                        <p className='text-white font-bold'>Show more</p>
                        <p className='text-white opacity-0 group-hover:opacity-40 transition-opacity py-5 duration-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt maxime quod.</p>
                        <p className='text-white opacity-0 group-hover:opacity-60  transition-opacity duration-500'>See more</p>
                    </div>
                 
                </div>
             
            </div>
            <div className='relative group overflow-hidden'  >
                <img src={img2} alt="" className='w-full h-full object-cover  group-hover:scale-125 transition-transform duration-500' />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60        group-hover:to-black/70'>
                    <div className='absolute inset-0 flex flex-col items-center  justify-center px-9 text-center translate-y-[55%] group-hover:translate-y-0 transition-all   duration-300  '>   
                       <p className='text-white font-bold'>Show more</p>
                       <p className='text-white opacity-0 group-hover:opacity-40 transition-opacity py-5 duration-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt maxime quod.</p>
                       <p className='text-white opacity-0 group-hover:opacity-60  transition-opacity duration-500'>See more</p>
                 </div>
                </div>
            </div>
            <div className='gap-5'>
                <div className='relative group overflow-hidden mb-7'>
                    <img  src={img3} alt=""  className='w-full h-full object-cover  group-hover:scale-125 transition-transform duration-500' />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent/70 group-hover:via-black/60 group-hover:to-black/70'>
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-300 '>
                       <p className='text-white font-bold'>Show more</p>
                          <p className='text-white opacity-0 group-hover:opacity-40 transition-opacity py-2 duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt maxime quod.</p>
                          <p className='text-white opacity-0 group-hover:opacity-60 transition-opacity py-2 duration-300'>See more</p>
                        </div>
                    </div>
                </div>
                <div className='relative group overflow-hidden'>
                    <img src={img4} alt=""   className='w-full h-full object-cover  group-hover:scale-125 transition-transform duration-500' />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-transparent/70 group-hover:via-black/60 group-hover:to-black/70'>
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-300 '>
                       <p className='text-white font-bold'>Show more</p>
                          <p className='text-white opacity-0 group-hover:opacity-40 transition-opacity py-2 duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt maxime quod.</p>
                          <p className='text-white opacity-0 group-hover:opacity-60 transition-opacity py-2 duration-300 '>See more</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Recentwork