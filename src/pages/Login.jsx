import React from 'react'
import foto from '../assets/Auth/signup.svg'
import LoginForm from '../components/auth/LoginForm'

const Login = () => {
  return (
    <div className='flex h-screen flex-col-reverse justify-center items-center md:flex-row lg:items-stretch'>
      <div className='hidden sm:hidden md:hidden lg:hidden xl:flex'>
        <img className='max-w-sm' src={foto} />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login