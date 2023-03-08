import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Course from "../pages/Course";
import CourseCheckout from "../pages/CourseCheckout";
import CourseConfirm from "../pages/CourseConfirm";
import CourseDetail from "../pages/CourseDetail";
import Home from "../pages/Home";
import Lesson from "../pages/Lesson";
import Login from "../pages/Login";
import Magang from "../pages/Magang";
import Profile from "../pages/Profile";
import MagangDetail from "../pages/MagangDetail";
import Mentor from "../pages/Mentor";
import MentorCheckout from "../pages/MentorCheckout";
import MentorInfo from "../pages/MentorInfo";
import MentorConfirm from "../pages/MentorConfirm";
import Register from "../pages/Register";
import DataPribadi from "../components/mentor/DataPribadi";
import Pengalaman from "../components/mentor/Pengalaman";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import UserData from "../components/profile/UserData";
import Riwayat from "../components/profile/Riwayat";
import Langganan from "../components/profile/Langganan";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courseDetail" element={<CourseDetail />} />
        <Route path="/courseCheckout" element={<CourseCheckout />} />
        <Route path="/courseConfirm" element={<CourseConfirm />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/magang" element={<Magang />} />
        <Route path="/magangDetail" element={<MagangDetail />} />
        <Route path="/mentoring" element={<Mentor />} />
        <Route path="/mentorInfo" element={<MentorInfo />}>
          <Route path="/mentorInfo/data" element={<DataPribadi />} />
          <Route path="/mentorInfo/pengalaman" element={<Pengalaman />} />
        </Route>
        <Route path="/mentorCheckout" element={<MentorCheckout />} />
        <Route path="/mentorConfirm" element={<MentorConfirm />} />
        <Route path="/profile" element={<Profile />} >
          <Route path="/profile/data" element={<UserData />} />
          <Route path="/profile/pengalaman" element={<Riwayat />} />
          <Route path="/profile/langganan" element={<Langganan />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
