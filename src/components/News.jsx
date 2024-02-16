import React from 'react'
import { AiOutlinePhone } from "react-icons/ai";
import img1 from '../assets/news1.jpg'
import img2 from '../assets/news2.jpg'

const News = () => {
  return (
    <div>
    <div className='mx-[14%]  flex gap-16  py-12'>
        <div className='w-[40%] py-5'>
            <h3 className='text-yellow-500'>FROM BLOG</h3>
            <h1 className='text-4xl font-semibold py-5 '>Specialized news</h1>
            <p className='mb-5'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequun tur magni dolores eos qui ratione</p>
            <div className='bg-yellow-500 w-[70%] rounded-lg py-7 px-5 text-center'>
                <div className='flex items-center gap-3 justify-center'>
                     <p className='text-4xl'><AiOutlinePhone/></p>
                     <p className='py-3 text-center'> Call us anytime</p>
                </div>
                     <p className='text-3xl'>1-456-653-2449</p>                
            </div>
        </div>
        <div className='w-[60%] '>
            <div className='flex gap-14'>
                <div className='w-1/2'>
                    <img className='mb-1' src={img1} alt="" />
                    <p className='py-3 text-gray-600'>15 November 2018</p>
                    <h1 className='w-[95%] font-semibold text-xl py-2'>Best buildings of 2018 revealed at day one of World Architecture Festival 2018.</h1>
                </div>
                <div className='w-1/2'>
                    <img src={img2} alt="" />
                    <p className='py-3 text-gray-600'>15 November 2018</p>
                    <h1 className='w-[95%] font-semibold text-xl py-2'>Sunken washroom by Studio 304 allows residents to bathe in a garden setting.</h1>
                </div>
            </div>
            <div className='mt-12'>
                <hr/>
                <div className='flex gap-3 py-3'>
                    <span className='w-[27px] rounded-[50%] flex justify-center items-center text-center bg-zinc-300 text-white text-sm'>1</span>
                    <p className='text-zinc-400 text-lg hover:text-gray-950 cursor-pointer'>Guadalajara offers "extraordinary opportunities" for young architects</p>
                </div>
                <hr/>
                <div className='flex gap-3 py-4'>
                    <p className='w-[45px] h-[28px] rounded-[50%] flex justify-center items-center text-center bg-zinc-300 text-white text-sm'>2</p>
                    <p className='text-zinc-400 text-lg hover:text-gray-950 cursor-pointer'>Lacy Brick by Pamphilon ArchitectsResidentialPamphilon Architects adds textured brick extension to Edwardian house in London</p>
                </div>
                <hr/>
                <div className='flex gap-3 py-3'>
                    <span className='w-[27px] rounded-[50%] flex justify-center items-center text-center bg-zinc-300 text-white text-sm'>3</span>
                    <p className='text-zinc-400 text-lg hover:text-gray-950 cursor-pointer'>Guadalajara offers "extraordinary opportunities" for young architects</p>
                </div>
                <hr/>
            </div>
        </div>

    </div>
    </div>
  )
}

export default News