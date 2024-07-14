import React from 'react'

const Forms = () => {
  return (
    <form className='md:w-[750px] md:h-[590px] m-3 md:m-0 shadow-lg shadow-black p-5 md:p-8'>
      {/* Content */}
      <div>
        <h1 className='font-semibold md:text-xl text-lg'>Send Message</h1>
        <p className='text-[#1D1D1D]'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae pellentesque. dolor sit amet tempus tempus.</p>
      </div>

      {/* forms */}
      <div className='grid md:grid-cols-2 gap-7 mt-7'>
        <div className='flex gap-3 flex-col'>
          <label htmlFor="name">Full Name</label>
          <input type='text' id='name' placeholder='Full Name' className='border-2 border-[#E0E0E0] p-2 w-full rounded-md bg-[#FAFAFA]' />
        </div>
        <div className='flex gap-3 flex-col'>
          <label htmlFor="email">Email Address</label>
          <input type='email' id='email' placeholder='Email Address' className='border-2 border-[#E0E0E0] p-2 w-full rounded-md bg-[#FAFAFA]' />
        </div>
        <div className='flex gap-3 flex-col'>
          <label htmlFor="number">Phone Number</label>
          <input type='number' id='number' placeholder='Phone Number' className='border-2 border-[#E0E0E0] p-2 w-full rounded-md bg-[#FAFAFA]' />
        </div>
        <div className='flex gap-3 flex-col'>
          <label htmlFor="subject">Subject</label>
          <input type='text' id='subject' placeholder='Subject' className='border-2 border-[#E0E0E0] p-2 w-full rounded-md bg-[#FAFAFA]' />
        </div>
      </div>
      <div className='flex gap-3 flex-col mt-7'>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" className='w-full resize-none border-2 border-[border-2 border-[#E0E0E0]  bg-[#FAFAFA] h-24 p-2' placeholder='Enter your message here...'></textarea>
      </div>
      <div className='mt-5'>
        <button className='bg-[#06A0A0] hover:bg-[#013131] text-white py-3 px-9 rounded-md text-lg font-medium md:text-xl'>Send Message</button>
      </div>
    </form>
  )
}

export default Forms