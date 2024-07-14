import React from 'react'

const GoogleMap = () => {
  return (
    <div>

      {/* Content */}
      <div className=' text-center mt-10'>
        <h1 className=' text-[#006E6E] font-bold text-[35px] '><span className='border-b-[2.5px] border-[#14676B]'>Find</span> Us On Google Maps</h1>
        <p className='text-[20px] lg:w-[570px] pt-4 pb-9  mx-auto'>Lorem ipsum dolor sit amet consectetur. Habitasse tempus vitae pellentesque. dolor sit amet tempus tempus.</p>
      </div>

      {/* Map */}
      <div className='w-11/12 lg:h-[480px] md:h-[400px] h-[450px]  mx-auto rounded border-2 border-[#DDDDDD] mb-16' >
         <iframe width="100%" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=480&amp;hl=en&amp;q=Achimota,%20Accra,Ghana+(Asamao%20and%20Sons%20Company%20Limited)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        
      </div>
    </div>
  )
}

export default GoogleMap