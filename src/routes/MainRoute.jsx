import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../pages/Course'
import CourseCheckout from '../pages/CourseCheckout'
import CourseConfirm from '../pages/CourseConfirm'
import CourseDetail from '../pages/CourseDetail'
import Home from '../pages/Home'
import Lesson from '../pages/Lesson'
import Login from '../pages/Login'
import Magang from '../pages/Magang'
import MagangDetail from '../pages/MagangDetail'
import Mentor from '../pages/Mentor'
import MentorCheckout from '../pages/MentorCheckout'
import MentorInfo from '../pages/MentorInfo'
import MentorSection from '../pages/MentorSection'
import MentorConfirm from '../pages/MentorConfirm'
import Register from '../pages/Register'

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/course' element={<Course />} />
        <Route path='/courseDetail' element={<CourseDetail />} />
        <Route path='/courseCheckout' element={<CourseCheckout />} />
        <Route path='/courseConfirm' element={<CourseConfirm />} />
        <Route path='/lesson' element={<Lesson />} />
        <Route path='/magang' element={<Magang />} />
        <Route path='/magangDetail' element={<MagangDetail />} />
        <Route path='/mentoring' element={<Mentor />} />
        <Route path='/mentorInfo' element={<MentorInfo />}>
          <Route path='/mentorInfo/:id' element={<MentorSection />} />
        </Route>
        <Route path='/mentorCheckout' element={<MentorCheckout />} />
        <Route path='/mentorConfirm' element={<MentorConfirm />} />
      </Routes>
    </>
  )
}

export default MainRoute