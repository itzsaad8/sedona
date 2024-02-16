import React from 'react'
import logo from  '../assets/logo_white.png'
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <div className='bg-black mb-8'>
        <div className='flex justify-between text-white py-[75px] px-10 '>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='mr-16'>
                <ul className='text-zinc-400   '>
                    <li>About</li>
                    <li className='py-2'>Service</li>
                    <li className='py-2'>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='mr-28'>
                <ul className='text-zinc-400   '>
                    <li>Privacy Policy</li>
                    <li className='py-2'>Terms And Conditions</li>
                    <li>Career</li>
                </ul>
            </div>
            <div>
               <ul className='flex gap-8 ml-28 text-xl text-zinc-400'>
                <li><AiOutlineTwitter/></li>
                <li><TiSocialFacebook/></li>
                <li><TfiYoutube/></li>
                <li><IoLogoInstagram/></li>
               </ul>
               <p className='mt-44 text-zinc-400 ml-5 pb-6'>
                  © 2018 Sedona, Made by DeoThemes
               </p>
            </div>
        </div>

    </div>
  )
}

export default Footer