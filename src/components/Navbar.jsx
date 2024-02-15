import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";

const Navbar = () => {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)


    return (
        <div className='mx-[40px]'>
            <div className='py-6 flex justify-between items-center'>
                <div className='flex items-center gap-[65px]'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex gap-[28px] font-[600] text-gray-700 cursor-pointer'>
                            <li onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className='hover:text-orange-400 '>Home</li>
                            
                            <div className={`${show ? 'absolute top-24 left-0 ml-[240px] z-10 bg-black text-white px-12 py-8' : 'hidden'}`}>

                                    <ul className=''>
                                        <li>home</li>
                                        <li>home</li>
                                        <li>home</li>
                                        <li>home</li>
                                    </ul>
                                </div>
                            
                            <li onMouseEnter={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)} className='hover:text-orange-400'>Pages</li>
                            <div className={`${show2 ? 'absolute top-24 ml-8 z-10 bg-black text-white px-12 py-8' : 'hidden'}`}>

                                    <ul className=''>
                                        <li>Pages</li>
                                        <li>Pages</li>
                                      
                                    </ul>
                                    </div>
                            <li onMouseEnter={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)} className='hover:text-orange-400'>Works</li>
                            <div className={`${show1 ? 'absolute top-24 ml-[100px] z-10 bg-black text-white px-12 py-8' : 'hidden'}`}>

                                        <ul className=''>
                                            <li>Works</li>
                                            <li>Works</li>
                                            <li>Works</li>
                                           
                                        </ul>
                                        </div>
                            <li onMouseEnter={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)}  className='hover:text-orange-400'>Features</li>
                            <div className={`${show3 ? 'absolute top-24 ml-[180px] z-10 bg-black text-white px-12 py-8' : 'hidden'}`}>

                                        <ul className=''>
                                            <li>Features</li>
                                            <li>Features</li>
                                            <li>Features</li>
                                            <li>Features</li>
                                            <li>Features</li>
                                           
                                        </ul>
                                        </div>
                            <li onMouseEnter={()=>setShow4(true)} onMouseLeave={()=>setShow4(false)}   className='hover:text-orange-400'>Blog</li>
                            <div className={`${show4 ? 'absolute top-24 ml-[260px] z-10 bg-black text-white px-12 py-8' : 'hidden'}`}>

                                            <ul className=''>
                                                <li>Blog</li>
                                                <li>Blog</li>
                                                <li>Blog</li>
                                               
                                            
                                            </ul>
                                            </div>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-16 '>
                    <div className='font-[400]'>Call us: 1-800-995-3959</div>
                    <div className=''>
                        <ul className='flex gap-8 text-xl'>
                            <li className='hover:text-blue-400'><AiOutlineTwitter /></li>
                            <li className='hover:text-blue-700'><TiSocialFacebook /></li>
                            <li className='hover:text-red-600'><TfiYoutube /></li>
                            <li className='hover:text-red-500'><IoLogoInstagram /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar