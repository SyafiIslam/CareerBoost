import React from 'react'

const OtherButton = ({children}) => {
  return (
    <button className='border-neutral-400 border-2 py-3 md:py-5 xl:py-3 rounded-full text-neutral-400 font-medium text-lg md:text-2xl xl:text-lg flex justify-center items-center gap-2  hover:text-neutral-500 transition-all duration-200'>
      {children}
    </button>
  )
}

export default OtherButton