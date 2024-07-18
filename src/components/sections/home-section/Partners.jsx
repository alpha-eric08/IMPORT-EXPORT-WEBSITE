import React from 'react'
import { partner } from './data'

const Partners = () => {
  return (
    <div>
       <h1 className=" text-[#006E6E] my-10 text-center font-bold text-[35px] ">
          <span className="border-b-[2.5px] border-[#14676B]">Our</span>{" "}
          Partners
        </h1>
        <div className='mb-12 md:w-[1000px] w-full md:gap-20 gap-10 mx-auto grid grid-cols-2 lg:grid-cols-3'>
          {partner.map((icon) => {
            return (
            <div key={icon.key}>
              <img src={icon.image} alt="image" className='h-24 md:h-[130px]' />
            </div>
          )
          })}
        </div>
    </div>
  )
}

export default Partners