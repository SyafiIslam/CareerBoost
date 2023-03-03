import React from 'react'
import avatar from '../../assets/Navbar/avatar.svg'
import logo from '../../assets/Navbar/Logo.svg'
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex py-4 px-4 text-lg font-medium justify-between items-center shadow-md sticky top-0 bg-white '>
      <div className='flex gap-12 md:gap-8 items-center w-5/12 md:w-2/12 xl:w-12/12'>
        <img src={logo} alt="" />
        <ul className='hidden md:flex gap-14 md:gap-7 text-base'>
        <Link to='/' className='hover:font-bold transition-all duration-200'>
          <li>Beranda</li>
        </Link>
        <li>Mentoring</li>
        <Link to='/course' className='hover:font-bold transition-all duration-200'>
        <li>Course</li>
          </Link>
        <li>internship</li>
      </ul>
      </div>
      <div className='hidden md:flex items-center gap-5 md:gap-2'>
        <IoMdArrowDropdown />
        <p className='text-base'>
          Muhammad Zidan
        </p>
        <img src={avatar} className='md:w-2/12' />
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