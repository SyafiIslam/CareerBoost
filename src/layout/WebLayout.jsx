import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const WebLayout = ({children}) => {
  return (
    <div className='bg-slate-50 flex-grow'>
      <Navbar />
        <div className='h-max'>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default WebLayout