import React, { useState } from 'react'
import img1 from '../assets/2.jpg'
import img2 from '../assets/3.jpg'
import img3 from '../assets/4.jpg'
import img4 from '../assets/5.jpg'
const Recentwork = () => {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
  return (
    <div className='mx-[14%]'>
        <div className='py-6'>
            <h1 className='font-semibold text-4xl'>Discover Recent Works</h1>
        </div>
        <div>
            <ul className='flex gap-7 font-semibold text-gray-500 '>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>All</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Residential</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Commercial</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Landscape</li>
                <li className='border-0 hover:border-b-2 hover:border-b-orange-400 hover:text-orange-400 cursor-pointer'>Interior</li>
            </ul>
        </div>
        <div className='grid grid-cols-3 gap-7 py-12'>
            <div className='relative'>
                <img onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} src={img1} alt="" className='w-full h-auto '/>
                <div className={`${show ? 'absolute bottom-0 left-0 w-full bg-black bg-opacity-100 p-4 h-full' : 'hidden'} `}>
                    <div className='mt-[400px] ml-4 text-xl '>
                       <p className='text-white'>Text for Image 1</p>
                       <p className='text-white'>2018</p>
                    </div>
                 
                 </div>
            </div>
            <div className='relative'>
                <img onMouseOver={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)} src={img2} alt="" />
                <div className={`${show1 ? 'absolute bottom-0 left-0 w-full bg-black bg-opacity-100 p-4 h-full' : 'hidden'} `}>
                <div className='mt-[400px] ml-4 text-xl '>
                       <p className='text-white'>Text for Image 1</p>
                       <p className='text-white'>2018</p>
                    </div>
                 </div>
            </div>
            <div className='gap-5'>
                <div className='relative'>
                <img  onMouseOver={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)} className='mb-7' src={img3} alt="" />
                <div className={`${show2 ? 'absolute bottom-0 left-0 w-full bg-black bg-opacity-100 p-4 h-full' : 'hidden'} `}>
                <div className='mt-[150px] ml-4 text-xl '>
                       <p className='text-white'>Text for Image 1</p>
                       <p className='text-white'>2018</p>
                    </div>
                 </div>
                </div>
                <div className='relative'>

                 <img onMouseOver={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)}  src={img4} alt="" />
                 <div className={`${show3 ? 'absolute bottom-0 left-0 w-full bg-black bg-opacity-100 p-4 h-full' : 'hidden'} `}>
                <div className='mt-[150px] ml-4 text-xl '>
                       <p className='text-white'>Text for Image 1</p>
                       <p className='text-white'>2018</p>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recentwork