import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { contactbg } from '../../assets/images'
import Forms from '../../components/Forms'
import GoogleMap from '../../components/GoogleMap'
import Address from '../../components/Address'

const Contact = () => {
  return (
    <div>
      <div className='absolute w-full'>
        <img src={contactbg} alt="bg" className='w-full md:h-[571px] h-[50vh]' />
      </div>
      <div className='relative md:h-[571px] h-[50vh]  mx-auto w-full text-center text-white bg-[#1D1D1D]/70'>
      <div className='flex'>
        <h1 className='text-left pt-8 pb-5 pl-1 md:pl-10 md:pb-20'>HOME</h1>
        <IoIosArrowForward className=' mt-[37.5px] ml-2'/>
        <h1 className='text-left pt-8 pb-5 pl-1 md:pb-40 text-[#29D0D0]'>CONTACT US</h1>
      </div>
        <div className='flex justify-center'>
          <h1 className='font-bold md:text-[55px] text-[30px] mt-20 md:mt-5'>Contact Us</h1>
        </div>
      </div>

      {/* content */}
      <div className='mt-8'>
        <h1 className=' text-[#006E6E] font-bold lg:text-[50px] text-[30px] text-center md:w-[900px] mx-auto'><span className='border-b-[2.5px] border-[#14676B]'>Experience</span> Seamless Shipping Solutions with us.</h1>
      </div>

      {/* Sections */}
      <div>
        <div className='text-center pb-3 md:pb-9 md:w-[50%]'>
          <h1 className='font-bold text-[24px] md:text-[32px] md:pt-12 pt-6   '>We would love to hear from you.</h1>
          <p>Consult the services you need now!</p>
        </div>
        <div className='md:flex  justify-center gap-10'>
          <Address />
          <Forms />
        </div>
      </div>
      <GoogleMap />
    </div>
  )
}

export default Contact