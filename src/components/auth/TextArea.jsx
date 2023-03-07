import React, { useState } from 'react'

const TextArea = ({value}) => {
  const [txt, setTxt]= useState(value)
  return (
    <textarea
          className="border-2 border-neutral-700 rounded-xl p-2 xl:p-6 text-neutral-700"
          cols="10"
          rows="5"
          value= {txt}
          onChange={(input) => {
            setTxt(input.target.value)
          }}
        ></textarea>
  )
}

export default TextArea