import React from 'react'

const Label = ({id, text}) => {
  return (
    <label 
    htmlFor={id}
    className='mb-2 font-medium h6 text-primary500'
    >
      {text}
    </label>
  )
}

export default Label