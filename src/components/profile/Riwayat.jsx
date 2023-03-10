import React from 'react'
import history from '../../data/DataRiwayat.json'

const Riwayat = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <p className='h5 font-bold'>
          Riwayat Magang
        </p>
        {history.magang.map((list) => {
          return (
            <div className='flex gap-8 mt-6'>
              <img className='w-10 xl:w-16' src={list.logo} alt="" />
              <div className='flex flex-col'>
                <p className='h6 font-semibold text-primary500'>
                  {list.bidang}
                </p>
                <p className='p1 text-neutral-400'>
                  {list.kantor}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className='flex flex-col'>
        <p className='h5 font-bold mt-9'>
          Riwayat Kursus Online
        </p>
        {history.kursus.map((list) => {
          return (
            <div className='flex gap-4 mt-6'>
              <img className='w-14 xl:w-20' src={list.logo} alt="" />
              <div className='flex flex-col'>
                <p className='h6 font-semibold text-primary500'>
                  {list.bidang}
                </p>
                <p className='p1 text-neutral-400'>
                  {list.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className='flex flex-col'>
        <p className='h5 font-bold mt-9'>
          Riwayat Mentoring
        </p>
        {history.mentor.map((list) => {
          return (
            <div className='flex gap-4 mt-6'>
              <img className='w-14 xl:w-20' src={list.logo} alt="" />
              <div className='flex flex-col'>
                <p className='h6 font-semibold text-primary500'>
                  {list.bidang}
                </p>
                <p className='p1 text-neutral-400'>
                  {list.mentor}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Riwayat