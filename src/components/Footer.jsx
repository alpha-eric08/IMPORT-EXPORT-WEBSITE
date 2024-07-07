import React from 'react'
import { logo2 } from '../assets/images'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Footer() {
  return (
    <div className='bg-[#1D1D1D] text-white'>
      <div className=' w-[1316px] flex-1 mx-auto gap-10 flex md:flex-row flex-col  md:justify-between md:pt-12 py-5'>
        <div>
          <a href="/">
            <img src={logo2} alt="logo2" />
          </a>
          <p className='font-normal w-60'><span className='font-semibold'>MOTTO:</span> Love For All, Hatred For None.</p>
          <div className='flex gap-2 text-[30px] mt-8 pb-2'>
          <a href="/" className='hover:text-gray-400'><FiFacebook/></a>
          <a href="/" className='hover:text-gray-400'><FiInstagram/></a>
          <a href="/" className='hover:text-gray-400'><FiTwitter/></a>
          <a href="/" className='hover:text-gray-400'><FiLinkedin/></a>
          </div>
        </div>
        <ul>
          <h1 className='font-semibold text-[24px] mb-5'>Our Company</h1>
          <li>What we do</li>
          <li className='my-1'>Get in touch</li>
          <li>Why choose us?</li>
          <li  className='my-1'>About us</li>
        </ul>
        <ul>
          <h1 className='font-semibold text-[24px] mb-5'>Services</h1>
          <li>Consulting and Advisory</li>
          <li className='my-1'>Customs Clearance</li>
          <li>Import and Export Services</li>
          <li  className='my-1'>Sea and Air Freight Services</li>
          <li>Insurance Services</li>
        </ul>
        <ul>
          <h1 className='font-semibold text-[24px] mb-5'>Links</h1>
          <li>
            <a href="/">Home</a>
          </li>
          <li className='my-1'>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </ul>
        <ul>
          <h1 className='font-semibold text-[24px] mb-5'>Get  In Touch</h1>
          <li>Asamao and Sons Company Limited, <br /> Accra - Ghana</li>
          <li className='my-1'>0245000000</li>
          <li>0246000000</li>
          <li  className='my-1'>asamaoandson@gmail.com</li>
        </ul>
      </div>
      <div className='border-t-2 border-[#DDDDDD] text-center py-[20px] font-normal text-[24px]'>Copyright 2024. All rights reserved.</div>
    </div>
  )
}

export default Footer