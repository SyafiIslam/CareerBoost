import React from 'react'

const Label = ({id, text}) => {
  return (
    <label 
    htmlFor={id}
    className='mb-2 font-medium text-lg md:text-2xl xl:text-lg text-primary500'
    >
      {text}
    </label>
  )
}

export default Label