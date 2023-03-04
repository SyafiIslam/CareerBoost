import React from "react";
import Dropdown from "../layout/Dropdown";
import WebLayout from "../layout/WebLayout";
import PrimaryButton from '../components/button/PrimaryButton'

const CourseDetail = () => {
  return (
    <WebLayout>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col xl:basis-3/4">
          <div className="flex flex-col justify-center bg-courseBg bg-no-repeat bg-cover py-4 px-8">
            <h1 className="mt-6 text-neutral-50 font-bold h3 text-center xl:text-left">
              Intro to Web Development
            </h1>
            <p className="mt-4 text-neutral-50 w-100 p1 mb-4 xl:text-left">
              Mempelajari HTML, CSS, dan Java Script untuk membantumu dalam
              menitih karir di dunia front end developer terutama pada bidang
              website development
            </p>
            <div className="flex items-center gap-1">
              <p className="text-xl md:text-2xl">⭐⭐⭐⭐⭐</p>
              <p className="text-secondary500 p1">5.0</p>
              <p className="text-neutral-400 p2">(1.006)</p>
            </div>
            <div className="flex lg:hidden my-5">
                <PrimaryButton>
                  <p className="p1">
                    Daftar Sekarang
                  </p>
                </PrimaryButton>
              </div>
          </div>
          <div className="py-4 px-8 mb-4">
            <h2 className="font-bold mb-2 h4">Intro</h2>
            <p className="text-neutral-700 h6 text-">
              Intro to Website Development merupakan course yang membahas
              tentang konsep dasar dalam mempelajari web development. Materi
              yang akan dipelajari meliputi HTML, CSS, Javascript dan framework
              seperti Bootstrap dan tailwind. Selain itu, kamu juga akan
              diberikan mini project yang dapat digunakan sebagai portofolio.
            </p>
          </div>
          <div className="flex flex-col py-4 px-8 mb-4">
            <h2 className="font-bold mb-4 xl:mb-8 h4">Apa yang akan kamu pelajari</h2>
            <div className="flex flex-wrap gap-2">
              <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                <p className="h6">HTML</p>
              </div>
              <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                <p className="h6">CSS</p>
              </div>
              <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                <p className="h6">Javacript</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4 px-8 mb-4">
            <h2 className="font-bold mb-2 text-xl">Konten Kursus</h2>
            <Dropdown />
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
        </div>
        <div className="hidden xl:flex flex-col gap-6 sticky top-28 px-4 py-6 mx-auto bg-neutral-50 h-max w- rounded-xl shadow-lg">
          <p className="h6 text-neutral-700">Detail</p>
          <p className="h6 text-neutral-700">Intro</p>
          <p className="h6 text-neutral-700">Apa yang akan kamu pelajari</p>
          <p className="h6 text-neutral-700">Konten kursus</p>
          <div>
            <hr className="border-t-neutral-400" />
          </div>
          <p className="h6 text-neutral-700">Online course</p>
          <div>
            <hr className="border-t-neutral-400" />
          </div>
          <p className="h6 text-secondary500 font-bold">Rp 239.000</p>
          <PrimaryButton>
            <p className="h6">
              Daftar Sekarang
            </p>
          </PrimaryButton>
        </div>
      </div>
    </WebLayout>
  );
};

export default CourseDetail;
