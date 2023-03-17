import React from 'react'
import WebLayout from '../layout/WebLayout'
import video from '../assets/video/video.mp4'
import Dropdown from '../layout/Dropdown'

const Lesson = () => {
  return (
    <WebLayout>
      <div className='flex flex-col p-12'>
        <h1 className='h4 font-bold'>
          HTML Dasar : Pengenalan
        </h1>
        <iframe className='my-8 xl:w-7/12 mx-auto rounded-2xl' src="https://www.youtube.com/watch?v=NrO0CJCbYLA" controls></iframe>
        <h2 className="font-bold mb-6 h4">Konten Kursus</h2>
            {/* <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown /> */}
      </div>
    </WebLayout>
  )
}

export default Lesson