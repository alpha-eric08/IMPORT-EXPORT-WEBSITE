import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { logo } from '../assets/images';

const Navbar = () => {
      let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT US",link:"/about"},
        {name:"SERVICES",link:"/services"},
        {name:"CONTACT US",link:"/contact"},
      ];

      let [open,setOpen]=useState(false);

 
  return (
    <div className=' w-full sticky z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-1 md:px-10 px-7'>
       <div>
          <a href="/"><img src={ logo} alt="logo" className='rounded-xl h-16 md:ml-10'/></a>
       </div>
       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
       {open ?<MdOutlineClose/> : <IoMenu />}
       </div>
       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white  md:z-auto z-[-1] left-0 w-full text-[#006E6E] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8   md:my-0 my-7'>
              <a href={link.link} className=' hover:text-gray-400 duration-500 text-lg font-inter font-semibold'>{link.name}</a>
            </li>
          ))
        }
        <a href="/contact">
          <button className='bg-[#006E6E]  py-2 px-6 rounded-md  hover:bg-[#006E6E] text-white md:ml-8 font-inter font-semibold md:hidden'>Get A Quote</button>
        </a>
       </ul>
       <div className={` items-center static z-auto left-0 w-auto md:pl-0 pl-9 transition-all duration-500 ease-in hidden md:block ${open ? 'hidden':'top-[-490px]'}`}>
        <a href="/contact">
          <button className=' bg-[#06A0A0] ml-8 py-2 px-5 rounded-md hover:bg-[#006E6E] font-bold text-xl text-white '>GET IN TOUCH</button>
        </a>
       </div>
      </div>
    </div>
   )
 }

export default Navbar