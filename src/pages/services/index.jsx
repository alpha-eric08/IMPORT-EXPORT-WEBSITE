import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { servicesbg } from '../../assets/images'
import { data } from './data'

const Services = () => {
  return (
    <div>
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
            <h1 className='font-bold md:text-[55px] text-[30px] mt-20 md:mt-5'>Services</h1>
          </div>
        </div>
      </div>

      {/* content */}
      <div className=' text-center mt-10'>
        <h1 className=' text-[#006E6E] font-bold text-[50px]'><span className='border-b-[2.5px] border-[#14676B]'> What</span> we do</h1>
        <p className='text-[20px] lg:w-[950px]  py-8 mx-auto'>At Asamao and sons, we specialize in providing comprehensive import and export solutions tailored to meet the unique needs of businesses around the world. Our services are designed to simplify international trade, ensuring a seamless and efficient experience for our clients.</p>
        <p className='border-b-[2.5px] border-[#14676B] w-[200px] mx-auto mb-14'></p>
      </div>

      {/* Cards */}
      <div className='card container bg-[#F1F1F1] pt-12 pb-24'>
        <div className=" text-[#1D1D1D] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-20 lg:w-[1400px] mx-auto">
          {data.map((item) => (
            <div key={item.title} className=" bg-white w-[406px] mx-auto rounded shadow-md ">
              <img src={item.Image} alt={item.title} className='h-[276px] w-[406px] overflow-hidden' />
              <h2 className='text-center font-semibold text-[20px] text-[#006E6E] py-3'>{item.title}</h2>
              <div className='w-[346px]  mx-auto text-[16px] pb-5'>
                <p>{item.description}</p>
                <p className='py-5'>{item.description1}</p>
                <p>{item.description2}</p>
                <p className='py-5'>{item.description3}</p>
                <p>{item.description4}</p>
                <p className='mt-10'>{item.description5}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services