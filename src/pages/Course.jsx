import React from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/course/jumbo.svg";
import icon from "../assets/course/search.svg";
import Card from "../layout/Card";

const Course = () => {
  return (
    <WebLayout>
      <div className="mt-8 p-4 xl:px-16 flex flex-col xl:flex-row xl:items-center xl:justify-evenly xl:gap-28">
        <div className="flex flex-col gap-5 xl:w-6/12">
          <h1 className="h3 font-bold text-primary600 text-center xl:text-left">
            Kursus Online Bersertifikat Disertai Mini Project untuk Menambah Portofolio
          </h1>
          <p className="text-neutral-600 text-center xl:text-left h6">
            Mini Project sesuai kursus online yang kamu ambil, jadikan portofolio untuk melamar magang dan pekerjaan!
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
        <img src={icon} className="w-6 -mr-10 xl:-mr-16 scale-75 xl:scale-100 relative" alt="" />
      </div>

      <div className="flex items-center justify-between mt-8 p-4 md:p-10">
        <h2 className="font-bold text-neutral-900 h3">Recommended</h2>
        <p className="text-primary500 h4">
          See All
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap mt-8">
        <Card />
      </div>

      <div className="flex items-center justify-between mt-8 p-4 md:p-10">
        <h2 className="font-bold text-neutral-900 h3">Front End Developer</h2>
        <p className="text-primary500 text-lg md:text-xl xl:text-3xl">
          See All
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap mt-8 p-4">
        <Card />
      </div>
    </WebLayout>
  );
};

export default Course;
