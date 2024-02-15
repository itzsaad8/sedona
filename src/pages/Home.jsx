import React from 'react'
import Navbar from '../components/Navbar'
import hero from '../assets/photo-1614101595484-712913c033b5.avif'
import { SiInternetarchive } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { MdOutlineConstruction } from "react-icons/md";
import img1 from '../assets/1.jpg'
import Recentwork from '../components/Recentwork';
import Testimonial from '../components/Testimonial';

const Home = () => {
  return (
    <div className='mx-[30px]'>
        <Navbar/>
      

      {/* ..................... */}

       <div className=' relative'>

        <div>
            <img className='w-full h-[83vh] object-cover' src={hero} alt="" />
        </div>
        <div>
            <div className='absolute top-[23%] left-[13%] text-white '>
                <h1 className='text-7xl font-semibold'>Modern Living Room</h1>
                <p className='text-2xl w-[60%] my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur sed, laudantium .</p>
                <button className='text-lg font-[500] text-black bg-yellow-500  py-3 px-10'>View Project</button>
            </div>

        </div>

       </div>
       {/* .................................. */}

       <div className='mx-[14%] flex py-28 gap-6'>
           <div className='w-[60%] flex flex-col  justify-center'>
              <h1 className='text-5xl w-1/2 font-semibold mt-2'>25 years of Experience</h1>
              <p className='my-8 text-gray-500'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                 </p>
                 <p className='mt-[5px] text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conse quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                 <div className='flex gap-[120px] pt-14 text-gray-500'>
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
           <div className='w-[40%]'>
            <img src={img1} alt="" />
               
           </div>
       </div>

           <Recentwork/>
           <Testimonial/>
    </div>
  )
}

export default Home