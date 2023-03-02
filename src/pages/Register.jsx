import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'
import foto from '../assets/Auth/signup.svg'

const Register = () => {
  return (
    <div className='flex h-screen flex-col-reverse justify-evenly items-center md:flex-row lg:items-stretch'>
      <div className='hidden sm:hidden md:hidden lg:hidden xl:flex'>
        <img className='max-w-sm' src={foto} />
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register