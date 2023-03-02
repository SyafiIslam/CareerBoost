import React from 'react'

const Footer = () => {
  return (
    <div className='hidden xl:flex flex-col text-white bg-primary400'>
      <div className='flex pt-8 gap-80'>
        <div className='flex flex-col gap-5 basis-1/3 justify-start items-center'>
          <h1 className='font-bold text-2xl'>
            Contact Us
          </h1>
          <p>careerboost@gmail.com</p>
          <p>Ketawanggede, Kec. Lowokwaru</p>
          <p>Kota Malang, Jawa Timur 65145</p>
        </div>
        <div className='flex flex-col gap-5 basis-1/3 justify-center items-center'>
          <h1 className='font-bold text-2xl'>
            Contact Us
          </h1>
          <p>careerboost@gmail.com</p>
          <p>Ketawanggede, Kec. Lowokwaru</p>
          <p>Kota Malang, Jawa Timur 65145</p>
        </div>
        <div className='flex flex-col gap-5 basis-1/3 justify-center items-center'>
          <h1 className='font-bold text-2xl'>
            Contact Us
          </h1>
          <p>careerboost@gmail.com</p>
          <p>Ketawanggede, Kec. Lowokwaru</p>
          <p>Kota Malang, Jawa Timur 65145</p>
        </div>
      </div>

      <div className='flex justify-center items-center py-10'>
        <h1 className='text-xl'>
        © CareerBoost 2023. All rights reserved
        </h1>
      </div>
    </div>
  )
}

export default Footer