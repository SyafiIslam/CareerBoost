import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../pages/Course'
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
      </Routes>
    </>
  )
}

export default MainRoute