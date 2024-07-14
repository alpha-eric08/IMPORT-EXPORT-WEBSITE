import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <div className='md:w-[400px] h-[590px] flex flex-col justify-between'>
      <div className='bg-[#FAFAFA] border-2 border-[#E0E0E0] h-[99px] w-full flex pl-10 gap-8 items-center'>
        <div>
          <FaLocationDot  size={35} className='bg-red-500 text-[#006E6E] rounded-full p-7'/>
        </div>
        <div>
          <h1 className=' text-xl font-semibold'>Address</h1>
          <p>Asamao and Sons Company Limited,<br />Accra - Ghana</p>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border-2 border-[#E0E0E0] h-[99px] w-full flex pl-10 gap-8 items-center'>
        <div>
          <FaLocationDot  size={35} className='bg-red-500 text-[#006E6E] rounded-full p-7'/>
        </div>
        <div>
          <h1 className=' text-xl font-semibold'>Address</h1>
          <p>Asamao and Sons Company Limited,<br />Accra - Ghana</p>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border-2 border-[#E0E0E0] h-[99px] w-full flex pl-10 gap-8 items-center'>
        <div>
          <FaLocationDot  size={35} className='bg-red-500 text-[#006E6E] rounded-full p-7'/>
        </div>
        <div>
          <h1 className=' text-xl font-semibold'>Address</h1>
          <p>Asamao and Sons Company Limited,<br />Accra - Ghana</p>
        </div>
      </div>
      <div className='bg-[#FAFAFA] border-2 border-[#E0E0E0] h-[99px] w-full flex pl-10 gap-8 items-center'>
        <div>
          <FaLocationDot  size={35} className='bg-red-500 text-[#006E6E] rounded-full p-7'/>
        </div>
        <div>
          <h1 className=' text-xl font-semibold'>Address</h1>
          <p>Asamao and Sons Company Limited,<br />Accra - Ghana</p>
        </div>
      </div>
    </div>
  )
}

export default Address