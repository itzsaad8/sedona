import React, { useState ,useEffect } from 'react'
import logo from '../assets/logo.png'
import logowhite from '../assets/logo_white.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)

    const [sticknav,setSticknav]=useState(true)

    const [nav,setNav]=useState(false)
    
    const scrollnav = ()=>{
        if(window.scrollY > 120){
            setSticknav(true)
        }
        else{
            setSticknav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollnav);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', scrollnav);
        };
      }, []); 
   

    return (
        <div className={`${sticknav ? 'sm:mx-0':'sm:mx-[40px]'}`}>
            <div className={`${sticknav ? 'z-10 fixed   w-[96.2%] px-3  transition-all duration-700   bg-black hidden  sm:flex text-white py-3  justify-between items-center ' : 'hidden  relative  sm:flex py-6  justify-between items-center transition-all duration-300' }`}>
                <div className='flex items-center gap-[65px]'>
                    <div>
                        {sticknav ? 
                        <img src={logowhite}    alt=''/>
                        :<img src={logo} alt="" />

                        }
                    </div>
                    <div>
                        <ul className={`${sticknav ? 'flex gap-[28px] font-[600] text-white cursor-pointer' :'flex gap-[28px] font-[600] text-gray-700 cursor-pointer'}`}>
                            <li onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className='hover:text-orange-400 '>Home</li>
                            
                            <div className={`${show ? 'absolute top-24 left-0 ml-[175px] z-10 bg-black text-white px-12 py-8' : 'hidden'}`}>

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
                            <li className='hover:text-pink-500'><IoLogoInstagram /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=' text-3xl  sm:hidden mx-2 py-1'>
                {nav ?
                <div className='flex justify-between'>
                <img width={70}  src={logo} alt=''/>
                <RxCross1 onClick={()=>setNav(!nav)}/>
                </div>
                :
                <div className='flex justify-between'>
                    <img width={70} src={logo}/>
               <RxHamburgerMenu onClick={()=>setNav(!nav)}/>  
               </div>           
                }
             
            </div>
            {
                nav && 
                <div className='sm:hidden absolute bg-black w-1/2 right-0 h-[80vh] text-white z-30 '>
                <ul className='text-center my-[50%]'>
                  <li className='py-6'>Home</li>
                  <li className='py-6'>Pages</li>
                  <li className='py-6'>Work</li>
                  <li className='py-6'>Features</li>
                  <li className='py-6'>Blog</li>
                </ul>
             </div>

            }
            
        </div>
    )
}

export default Navbar