import React from "react";
import WebLayout from "../layout/WebLayout";
import avatar2 from "../assets/mentoring/avatar2.svg";
import { Link, Outlet } from "react-router-dom";
import PrimaryButton from "../components/button/PrimaryButton";
import DataPribadi from "../components/mentor/DataPribadi";
import Pengalaman from "../components/mentor/Pengalaman";
import MentorSection from "./MentorSection";

const MentorInfo = () => {
  return (
    <WebLayout>
      <div className="flex flex-col xl:flex-row p-6 gap-8">
        <div className="flex flex-col basis-3/12 xl:sticky xl:top-10">
          <div className="flex flex-col gap-8 bg-neutral-50 py-6 xl:py-10 px-8 rounded-xl shadow-xl mb-4 xl:mb-8">
            <img className=" md:w-3/12 w-6/12 mx-auto" src={avatar2} alt="" />
            <div className="flex flex-col gap-4 justify-center items-center">
              <h1 className="font-bold h5">Informasi Mentor</h1>
              <Link to="1" className="h6">
                Data Pribadi
              </Link>
              <Link to="2" className="h6">
                Pengalaman
              </Link>
            </div>
          </div>
          <Link to='/mentorCheckout'>
            <button className="bg-primary400 text-white py-4 md:py-8 rounded-xl xl:w-full hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
              <p className="h5 font-bold">Jadikan Mentor</p>
            </button>
          </Link>
        </div>
        <div className=" py-6 px-8 bg-neutral-50 rounded-xl shadow-xl basis-9/12 h-max xl:mt-0">
          <Outlet />
        </div>
      </div>
    </WebLayout>
  );
};

export default MentorInfo;
