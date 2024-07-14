import React from 'react'
import { icons } from './data'

const WhyUs = () => {
  return (
    <div className='md:mb-28 mb-14'>
       {/* content */}
       <div className=' text-center '>
        <h1 className=' text-[#006E6E]  font-semibold md:font-bold md:text-[50px] text-[38px]'><span className='border-b-[2.5px] border-[#14676B]'>Why</span> Choose Us</h1>
        <p className='md:text-[20px] md:w-[730px]  md:py-8 py-4 mx-auto'>Dive into the wide array of factors that make us the top choice for import and export services. Experience firsthand the unmatched value we offer in every interaction, earning the trust of discerning clients worldwide.</p>
        <p className='border-b-[2.5px] border-[#14676B] w-[200px] mx-auto mb-14'></p>
      </div>

      {/* icons */}
      <div className='flex flex-wrap justify-center md:gap-20 gap-8'>
        {icons.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.icon} alt={image.title} className='' />
              {/* <p className='ml-5 text-[18px]'>{image.title}</p> */}
            </div>
          )

        })
        }
      </div>
    </div>
  )
}

export default WhyUs