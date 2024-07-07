import React from 'react'
import { herobg1 } from '../../assets/images'
import Aboutus from '../../components/sections/home-section/aboutus'
import Service from '../../components/sections/home-section/Service'
import Partners from '../../components/sections/home-section/Partners'
import Testimonials from '../../components/sections/home-section/Testimonials'

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className='absolute w-full'>
        <img src={herobg1} alt="bg" className='w-full md:h-[571px] h-[50vh]' />
      </div>
      <div className='relative md:h-[571px] h-[50vh]  mx-auto w-full text-center text-white bg-[#1D1D1D]/60'>
      <h1 className='text-left pt-8 pb-5 pl-1 md:pl-10 md:pb-20 text-[#29D0D0]'>HOME</h1>
        <div className=''>
          <h1 className='font-bold md:text-[55px] text-[30px]'>
            Welcome to Asamao and Sons <br />    
             <span className='md:text-[50px] text-[27px] '>company Limited</span>
          </h1>
          <p className='md:font-medium md:text-xl md:p-5 py-5 md:w-[52%] mx-auto'>Your trusted ally in the realm of import and export. With a focus on innovation and collaboration, we pave the way for seamless global transactions, driving success and prosperity for our partners worldwide.</p>
          {/* Button */}
          <div className="transition-all duration-500 ease-in  md:block">
            <a href="/contact">
              <button className=' bg-[#06A0A0] md:py-2 md:px-5 rounded-md hover:bg-[#006E6E] py-1 px-3 font-semibold md:font-bold md:text-xl text-white '>GET IN TOUCH</button>
            </a>
          </div>
        </div>
      </div>

      {/* Sections */}
      <Aboutus />
      <Service />
      <Partners />
      <Testimonials />
    </div>
  )
}

export default Home