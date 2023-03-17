import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/course/jumbo.svg";
import icon from "../assets/course/search.svg";
import Card from "../components/card/CourseCard";
import BaseURL from "../api/BaseURL";
import { ImSpinner2 } from "react-icons/im";
import Rekomendasi from "../components/course/Rekomendasi";
import CourseHome from "../components/course/CourseHome";

const Course = () => {

  return (
    <WebLayout>
      <div>
        <div className="mt-8 p-4 xl:px-16 flex flex-col xl:flex-row xl:items-center xl:justify-evenly xl:gap-28">
          <div className="flex flex-col gap-5 xl:w-6/12">
            <h1 className="h3 font-bold text-primary600 text-center xl:text-left">
              Kursus Online Bersertifikat Disertai Mini Project untuk Menambah
              Portofolio
            </h1>
            <p className="text-neutral-600 text-center xl:text-left h6">
              Mini Project sesuai kursus online yang kamu ambil, jadikan
              portofolio untuk melamar magang dan pekerjaan!
            </p>
          </div>

          <div className="mt-8 xl:w-5/12 flex justify-center">
            <img className="w-10/12" src={jumbo} alt="" />
          </div>
        </div>

        <div className="flex justify-center flex-row-reverse mt-10">
          <input
            type="text"
            placeholder="Search"
            className="w-10/12 py-2 px-3 xl:py-6 xl:px-20 pl-12 border border-neutral-700 rounded-full focus:outline-none bg-neutral-100 xl:text-2xl xl:w-8/12 "
          />
          <img
            src={icon}
            className="w-6 -mr-10 xl:-mr-16 scale-75 xl:scale-100 relative"
            alt=""
          />
        </div>

        <Rekomendasi />
        <CourseHome />
      </div>
    </WebLayout>
  );
};

export default Course;
