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
          <h1 className='font-bold md:text-[55px] text-[30px]'>Contact Us</h1>
        </div>
      </div>

      {/* Sections */}
      <Address />
      <Forms />
      <GoogleMap />
    </div>
  )
}

export default Contact