import React, { useState } from 'react'

const Edit = ({value}) => {
  const [txt, setTxt]= useState(value)
  return (
    <input type='text'
    value={txt}
    className='p1 border-2 border-neutral-700 rounded-full text-neutral-700 py-3 px-4 xl:py-4 xl:px-10'
    onChange={(input) => {
      setTxt(input.target.value)
    }}
    />
  )
}

export default Edit