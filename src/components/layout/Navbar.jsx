import React from 'react'
import avatar from '../../assets/Navbar/avatar.svg'
import logo from '../../assets/Navbar/Logo.svg'
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='flex py-4 px-4 text-lg font-medium justify-between items-center shadow-md sticky top-0 bg-white '>
      <div className='flex gap-12 md:gap-8 items-center w-5/12 md:w-3/12 xl:w-12/12'>
        <img src={logo} alt="" />
        <ul className='hidden md:flex gap-14 md:gap-5 text-base'>
        <li>Home</li>
        <li>Mentoring</li>
        <li>Course</li>
        <li>internship</li>
      </ul>
      </div>
      <div className='hidden md:flex items-center gap-5 md:gap-2'>
        <IoMdArrowDropdown />
        <p className='text-base'>
          Muhammad Zidan
        </p>
        <img src={avatar} className='w-12' />
      </div>
      <div className='md:hidden'>
        <button>
        <GiHamburgerMenu />
        </button>
      </div>
    </div>
  )
}

export default Navbar