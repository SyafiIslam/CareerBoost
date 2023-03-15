import React, { useState } from 'react'

const TextArea = ({value, handleChange}) => {
  return (
    <textarea
          className="border-2 border-neutral-700 rounded-xl p-2 xl:p-6 text-neutral-700"
          cols="10"
          rows="5"
          value= {value}
          onChange={handleChange}
        ></textarea>
  )
}

export default TextArea