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
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainRoute = () => {
  return (
    <div className="flex-grow">
      <ScrollToTop />
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
          <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/course" element={<Course />} />
          <Route path="/courseDetail/:id" element={<CourseDetail />} />
          <Route path="/courseCheckout/:id" element={<CourseCheckout />} />
          <Route path="/courseConfirm/:id" element={<CourseConfirm />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/magang" element={<Magang />} />
          <Route path="/magangDetail/:id" element={<MagangDetail />} />
          <Route path="/mentoring" element={<Mentor />} />
          <Route path="/mentoringInfo" element={<MentorInfo />}>
            <Route path="/mentoringInfo/data/:id" element={<DataPribadi />} />
            <Route path="/mentoringInfo/pengalaman/:id" element={<Pengalaman />} />
          </Route>
          <Route path="/mentorCheckout/:id" element={<MentorCheckout />} />
          <Route path="/mentorConfirm" element={<MentorConfirm />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/data" element={<UserData />} />
            <Route path="/profile/pengalaman" element={<Riwayat />} />
            <Route path="/profile/langganan" element={<Langganan />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
