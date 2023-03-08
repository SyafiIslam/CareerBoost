import React from 'react'
import data from '../../data/Langganan.json'

const Langganan = () => {
  return (
    <div>
      <p className='h5 font-bold mb-6'>
        Kursus Online
      </p>

      {data.kursus.map((data) => {
        return (
          <div className='flex flex-col xl:flex-row items-center gap-3 bg-neutral-100 border-2 border-neutral-200 rounded-xl p-6'>
            <img className='w-30 xl:w-40' src={data.thumbnail} alt="" />
            <p className='h5 font-bold'>
              {data.judul}
            </p>
          </div>
        )
      })}

      <p className='h5 font-bold my-6'>
        Program Mentoring
      </p>

      {data.mentor.map((data) => {
        return (
          <div className='flex flex-col gap-16 bg-neutral-100 border-2 border-neutral-200 rounded-xl p-6'>
            <div className='flex flex-col xl:flex-row items-center gap-6'>
              <img className='w-16' src={data.avatar} alt="" />
              <p className='h5 font-bold'>
                {data.nama}
              </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-8'>
            {data.kontak.map((kontak) => {
              return (
                <div className='flex items-center gap-2'>
                  <img src={kontak.logo} alt="" />
                  <p className='p1 font-medium text-primary400'>
                    {kontak.desc}
                  </p>
                </div>
              )
            })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Langganan