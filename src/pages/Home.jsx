import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/photo-1614101595484-712913c033b5.avif'
import hero2 from '../assets/1.jpg'
import hero3 from '../assets/2.jpg'
import { SiCucumber, SiInternetarchive } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { MdOutlineConstruction } from "react-icons/md";
import img1 from '../assets/1.jpg'
import Recentwork from '../components/Recentwork';
import Testimonial from '../components/Testimonial';
import News from '../components/News';
import Footer from '../components/Footer';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


const Home = () => {
  const [current,setCurrent] =useState(0)

  const heroslider= [
    {
      id:1,
      img:hero,
      title:'Modern Living Room',
      details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur sed, laudantium .'


    },
    {
      id:2,
      img:hero2,
      title:'There is nothing more to',
      details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur sed, laudantium  .'


    },
    {
      id:3,
      img:hero3,
      title:'Get Hired By Your',
      details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur sed, laudantium .'


    },
  ]
   

  const handleprev=()=>{
    setCurrent((prev) => (prev === 0 ? heroslider.length - 1 : prev - 1))

  }
  const handlenext=()=>{
    setCurrent((prev) => (prev === heroslider.length - 1 ? 0  : prev + 1))
  }


  return (
    <div className='sm:mx-[30px]'>
        <Navbar/>
      

      {/* ..................... */}

      
          <div className=' relative transition-all duration-300' >

          <div>
              <img className='w-full h-[83vh] object-cover' src={heroslider[current].img} alt="" />
          </div>
          <div>
              <div className='absolute top-[23%] left-[13%] text-white '>
                  <h1 className='text-3xl sm:text-7xl font-semibold'>{heroslider[current].title}</h1>
                  <p className='text-2xl sm:w-[60%] my-8'>{heroslider[current].details}</p>
                  <button className='text-lg font-[500] text-black bg-yellow-500  py-3 px-10'>View Project</button>
              </div>
  
          </div>
               <div className=' w-[100%]  flex justify-between  absolute  top-[40%] text-6xl'>

                 <button className='' onClick={handleprev}><GrFormPrevious className='bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-200 h-24 w-10'/></button>
                 <button className='' onClick={handlenext}><GrFormNext className='bg-gray-300 hover:bg-gray-400 text-gray-700 hover:text-gray-200 h-24 w-10'/></button>
              </div>
  
         </div>
       

        
      

       {/* .................................. */}

       <div className='sm:mx-[14%] mx-4 sm:flex py-28 gap-6'>
           <div className='sm:w-[60%] flex flex-col  justify-center'>
              <h1 className='text-2xl sm:text-5xl sm:w-1/2 font-semibold mt-2'>25 years of Experience</h1>
              <p className='my-8 text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                 </p>
                 <p className='mt-[5px] text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                 <div className='sm:flex pl-2 sm:pl-0 gap-[120px] pt-14 text-gray-500'>
                      <div className=''>
                        <SiInternetarchive className='text-6xl mb-2'/>
                        <p>Architecture</p>
                      </div>
                      <div>
                      <SiAntdesign className='text-6xl mb-2'/>
                      <p>Interior Design</p>
                      </div>
                      <div>
                      <MdOutlineConstruction className='text-6xl mb-2'/>
                      <p>Construction</p>
                      </div>
                    
                 </div>
           </div>
           <div className='sm:w-[40%] py-5 sm:py-0'>
            <img src={img1} alt="" />
               
           </div>
       </div>

           <Recentwork/>
           <Testimonial/>
           <News/>
           <Footer/>
    </div>
  )
}

export default Home