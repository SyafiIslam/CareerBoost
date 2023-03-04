import React from "react";
import Dropdown from "../components/layout/Dropdown";
import WebLayout from "../components/layout/WebLayout";

const CourseDetail = () => {
  return (
    <WebLayout>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center bg-courseBg bg-no-repeat bg-cover py-4 px-8">
            <h1 className="mt-6 text-neutral-50 font-bold text-2xl text-center">
              Intro to Web Development
            </h1>
            <p className="mt-4 text-neutral-50 w-100 text-sm text-center mb-4">
              Mempelajari HTML, CSS, dan Java Script untuk membantumu dalam
              menitih karir di dunia front end developer terutama pada bidang
              website development
            </p>
            <p className="text-xl md:text-2xl">⭐⭐⭐⭐⭐</p>
            <div className="flex items-center gap-1">
              <p className="text-neutral-50 text-base md:text-lg">5.0</p>
              <p className="text-neutral-50 text-sm md:text-base">(1.006)</p>
            </div>
          </div>
          <div className="py-4 px-8 mb-4">
            <h2 className="font-bold mb-2 text-xl">Intro</h2>
            <p className="text-neutral-700 text-justify">
              Intro to Website Development merupakan course yang membahas
              tentang konsep dasar dalam mempelajari web development. Materi
              yang akan dipelajari meliputi HTML, CSS, Javascript dan framework
              seperti Bootstrap dan tailwind. Selain itu, kamu juga akan
              diberikan mini project yang dapat digunakan sebagai portofolio.
            </p>
          </div>
          <div className="flex flex-col py-4 px-8 mb-4">
            <h2 className="font-bold mb-2 text-xl">
              Apa yang akan kamu pelajari
            </h2>
            <div className="flex flex-wrap gap-2">
              <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                HTML
              </div>
              <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                CSS
              </div>
              <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                Javascript
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 px-8 mb-4">
            <h2 className="font-bold mb-2 text-xl">Konten Kursus</h2>
            <Dropdown />
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default CourseDetail;
