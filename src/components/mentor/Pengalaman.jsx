import React from 'react'
import google from '../../assets/mentoring/google.svg'
import spotify from '../../assets/mentoring/spotify.svg'

const Pengalaman = () => {
  return (
    <div className='flex flex-col gap-8'>
      <p className='font-bold h5'>
        Pengalaman
      </p>
      <div className='flex gap-4'>
        <img className='w-10' src={spotify} alt="" />
        <div className='flex flex-col'>
          <p className='h6 font-semibold'>
            Front End Developer
          </p>
          <p className='p1 text-neutral-400'>
            Spotify corporation
          </p>
        </div>
      </div>
      <div className='flex gap-4'>
        <img className='w-10' src={google} alt="" />
        <div className='flex flex-col'>
          <p className='h6 font-semibold'>
            Front End Developer
          </p>
          <p className='p1 text-neutral-400'>
            Google.inc
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pengalaman