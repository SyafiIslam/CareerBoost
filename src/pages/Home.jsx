import React from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/Home/jumbotron.svg";
import logoMentor from "../assets/Home/logo-mentor.svg";
import logoCourse from "../assets/Home/logo-course.svg";
import logoMagang from "../assets/Home/logo-magang.svg";
import mentor from "../assets/Home/mentor.svg";
import sertifikat from "../assets/Home/sertif.svg";
import magang from "../assets/Home/magang.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/button/PrimaryButton";

const Home = () => {
  return (
    <WebLayout>
      <div className="mt-8 p-4 xl:px-20 flex flex-col xl:flex-row xl:items-center xl:justify-evenly xl:gap-28">
        <div className="flex flex-col basis-7/12">
          <h1 className="text-primary500 font-bold h2 text-center xl:text-left">
            Temukan program penunjang karir Sesuai bidang keminatanmu
          </h1>
          <p className="text-primary500 font-medium h5 text-justify xl:text-left mt-8">
            Kamu dapat belajar langsung dengan para mentor yang berkompeten,
            menambah portofolio, dan temukan program magang yang sesuai dengan
            bidangmu!
          </p>
        </div>

        <div className="w-6/12 mx-auto mt-8 basis-5/12">
          <img src={jumbo} />
        </div>
      </div>

      <div>
        <div className=" py-7 mt-8 bg-primary400 flex flex-col items-center justify-center md:flex-row gap-8 text-white xl:px-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img className="w-2/5" src={logoMentor} />
              <h3 className="font-bold h4  mt-4">
                Program Mentoring
              </h3>
            </div>
            <p className="text-xs md:text-lg text-center">
              Program mentoring dengan mentor berpengalaman sesuai ketertarikanmu
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img className="w-3/5" src={logoCourse} />
              <h3 className="font-bold h4 mt-4">
                Online Course
              </h3>
            </div>
            <p className="text-xs md:text-lg text-center">
              Berbagai online course bersertifikat dengan materi pembelajaran sesuai roadmap
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img className="w-3/5 xl:w-2/5" src={logoMagang} />
              <h3 className="font-bold h4 mt-4">
                Program Magang
              </h3>
            </div>
            <p className="text-xs md:text-lg text-center">
              Program internship bersetifikat oleh perusahaan-perusahaan ternama 
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 p-4 md:p-10 gap-16">
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div className="flex justify-center xl:basis-1/2">
            <img className="w-3/5" src={mentor} />
          </div>
          <div className="flex flex-col basis xl:basis-1/2">
            <h2 className="h4 text-primary400 text-center xl:text-left font-bold mt-4 mb-3">
              Mentor yang berkompeten di bidangnya
            </h2>
            <p className="mb-4 text-xs md:text-xl xl:text-base text-center xl:text-left  text-neutral-500">
            Berbagai mentor yang berpengalaman dan memiliki keahlian beragam. Temukan mentormu dan asah skill sesuai dengan keminatanmu!
            </p>
            <div className="mx-auto xl:mx-0">
            <Link className="mt-4" to='/mentoring'>
                <PrimaryButton>
                  <p className="text-sm md:text-xl">
                    Jelajahi
                  </p>
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse justify-center items-center">
          <div className="flex justify-center xl:basis-1/2">
            <img className="w-3/5" src={sertifikat} />
          </div>
          <div className="flex flex-col xl:items-end xl:justify-end xl:basis-1/2">
            <h2 className="h4 text-primary400 text-center xl:text-right font-bold mt-4 mb-3">
              Kursus online bersertifikat
            </h2>
            <p className="mb-4 p1 text-center xl:text-right text-neutral-500">
            Kursus online dengan konten sesuai roadmap yang dapat membantumu menambah pengetahuan untuk terjun ke dunia kerja
            </p>
            <div className="mx-auto w-max xl:m-0">
              <Link className="mt-4" to="/course">
                <PrimaryButton>
                  <p className="text-sm md:text-xl">Jelajahi</p>
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div className="flex justify-center xl:basis-1/2">
            <img className="w-3/5" src={magang} />
          </div>
          <div className="flex flex-col xl:basis-1/2">
            <h2 className="h4 text-primary400 text-center xl:text-left font-bold mt-4 mb-3">
              Rekomendasi program magang sesuai bidang minatmu
            </h2>
            <p className="mb-4 p1 text-center xl:text-left text-neutral-500">
            Tambah pengalaman magangmu dengan berbagai perusahaan ternama dan raih kesempatan bekerja di perusahaan
            </p>
            <div className="mx-auto xl:mx-0">
              <Link className="mt-4" to="/magang">
                <PrimaryButton>
                  <p className="text-sm md:text-xl">Jelajahi</p>
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Home;
