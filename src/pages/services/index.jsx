import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { servicesbg } from '../../assets/images'

const Services = () => {
  return (
    <div>
        <div className='absolute w-full'>
        <img src={servicesbg} alt="bg" className='w-full md:h-[571px] h-[50vh]' />
      </div>
      <div className='relative md:h-[571px] h-[50vh]  mx-auto w-full text-center text-white bg-[#1D1D1D]/70'>
      <div className='flex'>
        <h1 className='text-left pt-8 pb-5 pl-1 md:pl-10 md:pb-20'>HOME</h1>
        <IoIosArrowForward className=' mt-[37.5px] ml-2'/>
        <h1 className='text-left pt-8 pb-5 pl-1 md:pb-40 text-[#29D0D0]'>SERVICES</h1>
      </div>
        <div className='flex justify-center'>
          <h1 className='font-bold md:text-[55px] text-[30px]'>Services</h1>
        </div>
      </div>
    </div>
  )
}

export default Services