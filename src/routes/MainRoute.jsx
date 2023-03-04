import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../pages/Course'
import CourseCheckout from '../pages/CourseCheckout'
import CourseConfirm from '../pages/CourseConfirm'
import CourseDetail from '../pages/CourseDetail'
import Home from '../pages/Home'
import Login from '../pages/Login'
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
      </Routes>
    </>
  )
}

export default MainRoute