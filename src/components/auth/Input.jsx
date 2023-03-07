import React from 'react'

const Input = ({type, id, holder, setPassword, setEmail ,value}) => {
  return (
    <input type={type} 
    id={id}
    placeholder={holder}
    value={value}
    className='border-2 border-neutral-400 rounded-full py-2 px-3 md:py-3 md:px-4 xl:py-2 xl:px-5'
    onChange={(e) => {
      type === 'password' ?
      setPassword(e.target.value)
      :
      setEmail(e.target.value)
    }}
    />
  )
}

export default Input