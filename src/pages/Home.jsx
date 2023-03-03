import React from "react";
import WebLayout from "../components/layout/WebLayout";
import jumbo from '../assets/Home/jumbotron.svg'
import logoMentor from '../assets/Home/logo-mentor.svg'
import logoCourse from '../assets/Home/logo-course.svg'
import logoMagang from '../assets/Home/logo-magang.svg'
import mentor from '../assets/Home/mentor.svg'
import sertifikat from '../assets/Home/sertif.svg'
import magang from '../assets/Home/magang.svg'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <WebLayout>

      <div className="mt-8 p-4 xl:p-10 flex flex-col xl:flex-row xl:items-center xl:justify-evenly xl:gap-28">
        <div className="flex flex-col basis-7/12">
          <h1 className="text-primary500 font-bold text-2xl md:text-4xl xl:text-5xl text-center xl:text-left">
            Temukan program penunjang karir Sesuai bidang keminatanmu
          </h1>
          <p className="text-primary500 font-medium text-base md:text-xl xl:text-2xl text-justify mt-8">
            Kamu dapat belajar langsung dengan para mentor yang berkompeten, menambah portofolio, dan temukan program magang yang sesuai dengan bidangmu!
          </p>
        </div>

        <div className="w-6/12 mx-auto mt-8 basis-5/12">
          <img src={jumbo} />
        </div>
      </div>

      <div>
        <div className=" py-7 mt-8 bg-primary400 flex flex-col items-center justify-center md:flex-row gap-8 text-white">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img className="w-3/5" src={logoMentor} />
              <h3 className="font-bold text-sm md:text-lg mt-4">
                Program Mentoring
              </h3>
            </div>
              <p className="text-xs md:text-lg text-center">
                Lorem ipsum dolor sit amet consectetur. Massa nam massa ac commodo suspendisse facilisis adipiscing.
              </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img className="w-4/5" src={logoCourse} />
              <h3 className="font-bold text-sm md:text-lg mt-4">
                Online Course
              </h3>
            </div>
              <p className="text-xs md:text-lg text-center">
                Lorem ipsum dolor sit amet consectetur. Massa nam massa ac commodo suspendisse facilisis adipiscing.
              </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center">
              <img className="w-4/5 xl:w-3/5" src={logoMagang} />
              <h3 className="font-bold text-sm md:text-lg mt-4">
                Program Magang
              </h3>
            </div>
              <p className="text-xs md:text-lg text-center">
                Lorem ipsum dolor sit amet consectetur. Massa nam massa ac commodo suspendisse facilisis adipiscing.
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
            <h2 className="text-xl md:text-2xl xl:text-3xl text-primary400 text-center xl:text-left font-bold mt-4 mb-3">
              Mentor yang berkompeten di bidangnya
            </h2>
            <p className="text-xs md:text-xl xl:text-base text-justify md:text-center xl:text-left  text-neutral-500">
              Lorem ipsum dolor sit amet consectetur. Pulvinar sed est dignissim sem. Tortor integer blandit lectus enim. Ultrices at et platea eget nisl aliquet. Accumsan nam neque et maecenas. Urna commodo sagittis nisi nascetur in duis. Accumsan nibh dictum mauris enim ridiculus massa et volutpat. Est lectus odio commodo massa id. Egestas hendrerit pellentesque ullamcorper eleifend cursus. Amet augue augue praesent pellentesque semper eu aliquet volutpat. Sed nec aenean imperdiet tortor massa eu tincidunt risus fames. Iaculis aliquet risus porta faucibus molestie mi habitant.
            </p>
            <div className="mx-auto xl:mx-0">
              <button className=" bg-primary400 text-base text-white font-bold py-3 px-5 md:py-4 md:px-8 rounded-3xl mt-4 hover:bg-primary500 transition-all duration-200">
                <p className="text-sm md:text-xl">
                  Explore
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row-reverse justify-center items-center">
          <div className="flex justify-center xl:basis-1/2">
            <img className="w-3/5" src={sertifikat} />
          </div>
          <div className="flex flex-col xl:basis-1/2">
            <h2 className="text-xl md:text-2xl xl:text-3xl text-primary400 text-center xl:text-right font-bold mt-4 mb-3">
              Kursus online bersertifikat
            </h2>
            <p className="text-xs md:text-xl xl:text-base text-justify md:text-center xl:text-right text-neutral-500">
              Lorem ipsum dolor sit amet consectetur. Pulvinar sed est dignissim sem. Tortor integer blandit lectus enim. Ultrices at et platea eget nisl aliquet. Accumsan nam neque et maecenas. Urna commodo sagittis nisi nascetur in duis. Accumsan nibh dictum mauris enim ridiculus massa et volutpat. Est lectus odio commodo massa id. Egestas hendrerit pellentesque ullamcorper eleifend cursus. Amet augue augue praesent pellentesque semper eu aliquet volutpat. Sed nec aenean imperdiet tortor massa eu tincidunt risus fames. Iaculis aliquet risus porta faucibus molestie mi habitant.
            </p>
            <div className="mx-auto">
              <Link to='/course'>
                <button className=" bg-primary400 text-base text-white font-bold py-3 px-5 md:py-4 md:px-8 rounded-3xl mt-4 hover:bg-primary500 transition-all duration-200">
                  <p className="text-sm md:text-xl">
                    Explore
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center">
          <div className="flex justify-center xl:basis-1/2">
            <img className="w-3/5" src={magang} />
          </div>
          <div className="flex flex-col xl:basis-1/2">
            <h2 className="text-xl md:text-2xl xl:text-3xl text-primary400 text-center xl:text-left font-bold mt-4 mb-3">
              Rekomendasi program magang sesuai bidang minatmu
            </h2>
            <p className="text-xs md:text-xl xl:text-base text-justify md:text-center xl:text-left text-neutral-500">
              Lorem ipsum dolor sit amet consectetur. Pulvinar sed est dignissim sem. Tortor integer blandit lectus enim. Ultrices at et platea eget nisl aliquet. Accumsan nam neque et maecenas. Urna commodo sagittis nisi nascetur in duis. Accumsan nibh dictum mauris enim ridiculus massa et volutpat. Est lectus odio commodo massa id. Egestas hendrerit pellentesque ullamcorper eleifend cursus. Amet augue augue praesent pellentesque semper eu aliquet volutpat. Sed nec aenean imperdiet tortor massa eu tincidunt risus fames. Iaculis aliquet risus porta faucibus molestie mi habitant.
            </p>
            <div className="mx-auto">
              <button className=" bg-primary400 text-base text-white font-bold py-3 px-5 md:py-4 md:px-8 rounded-3xl mt-4 hover:bg-primary500 transition-all duration-200">
                <p className="text-sm md:text-xl">
                  Explore
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Home;
