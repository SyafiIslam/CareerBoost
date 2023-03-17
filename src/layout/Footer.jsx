import React from 'react'

const Footer = () => {
  return (
    <div className='flex mt-4 flex-col text-white bg-primary400 '>
      <div className='md:flex pt-8 xl:gap-7 2xl:gap-80 text-center'>
        <div className='flex flex-col gap-2 md:gap-5 basis-1/3 justify-start items-center'>
          <h1 className='font-bold h5'>
            Kontak kami
          </h1>
          <p className='p1'>careerboost@gmail.com</p>
          <p className='p1'>Ketawanggede, Kec. Lowokwaru</p>
          <p className='p1'>Kota Malang, Jawa Timur 65145</p>
        </div>
        <div className=' hidden md:flex flex-col gap-5 basis-1/3 justify-center items-center'>
          <h1 className='font-bold h5'>
            Produk
          </h1>
          <p className='p1'>Mentoring Program</p>
          <p className='p1'>Internship Program</p>
          <p className='p1'>Online Course</p>
        </div>
        <div className='hidden md:flex flex-col gap-5 basis-1/3 justify-center items-center'>
          <h1 className='font-bold h5'>
            Layanan
          </h1>
          <p className='p1'>FAQs</p>
          <p className='p1'>Terms of Service</p>
          <p className='p1'>Privacy Policy</p>
        </div>
      </div>

      <div className='flex justify-center items-center p-4 md:pt-10 '>
        <h1 className='text-base md:text-xl xl:text-xl'>
        © CareerBoost 2023. All rights reserved
        </h1>
      </div>
    </div>
  )
}

export default Footer