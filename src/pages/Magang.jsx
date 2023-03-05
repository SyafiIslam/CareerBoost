import React from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/magang/jumbo.svg";
import icon from "../assets/magang/search.svg";
import kanan from "../assets/magang/kanan.svg";
import kiri from "../assets/magang/kiri.svg";
import MagangCard from "../components/card/MagangCard";
import HireCard from "../components/card/HireCard";
import interest from '../data/Interest'

const Magang = () => {
  return (
    <WebLayout>
      <div className="flex flex-col p-6 md:p-10">
        <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row items-center justify-between">
          <div className="flex flex-col basis-6/12">
            <h1 className="h3 font-bold text-primary600 mb-8">
              Program Magang oleh Berbagai Perusahaan Ternama
            </h1>
            <p className="h6 text-neutral-600">
              Magang dengan banyak insight yang bisa didapatkan pada program
              ini. Berguna untuk menunjang karirmu di bidang yang kamu inginkan
            </p>
          </div>
          <img className="basis-5/12" src={jumbo} alt="" />
        </div>
        <div className="flex justify-center xl:justify-start flex-row-reverse mt-16">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-3 xl:py-6 xl:px-20 pl-12 border border-neutral-700 rounded-full focus:outline-none bg-neutral-100 h5 xl:w-3/4 "
          />
          <img
            src={icon}
            className="w-6 -mr-10 xl:-mr-16 scale-75 xl:scale-100 relative"
            alt=""
          />
        </div>
        <div className="bg-neutral-50 flex xl:hidden flex-col basis-1/4 items-start p-6 mx-auto rounded-3xl shadow-md gap-3 h-max w-full mt-8">
            <h1 className="h5 font-bold mb-6">
              Category
            </h1>
            {interest.map((data, index) => {
              return (
                <div key={index} className="flex gap-3">
                  <input className="text-3xl" type="checkbox" name="" id={index} />
                  <label className="p1" htmlFor={index}>{data.label}</label>
                </div>
              )
            })}
          </div>
        <div className="flex flex-row-reverse gap-10">
          <div className="flex flex-col w-full xl:basis-3/4 mt-16">
            <div className="flex w-full justify-between items-center">
              <h1 className=" h4 font-bold">Recommended</h1>
              <div className="flex gap-4 md:gap-6 items-center">
                <p>
                  <img src={kiri} alt="" />
                </p>
                <p className="h6">1</p>
                <p className="h6">2</p>
                <p className="h6">3</p>
                <p className="h6">4</p>
                <p className="h6">5</p>
                <p>
                  <img src={kanan} alt="" />
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  mx-auto justify-center flex-wrap gap-7 mt-10">
              <MagangCard />
            </div>
            <div className="flex w-full justify-between items-center my-16">
              <h1 className=" h4 font-bold mb10">Now hiring</h1>
              <div className="flex gap-4 md:gap-6 items-center">
                <p>
                  <img src={kiri} alt="" />
                </p>
                <p className="h6">1</p>
                <p className="h6">2</p>
                <p className="h6">3</p>
                <p className="h6">4</p>
                <p className="h6">5</p>
                <p>
                  <img src={kanan} alt="" />
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-8">
              <HireCard />
            </div>
          </div>
          <div className="bg-neutral-50 hidden xl:flex flex-col basis-1/4 items-start p-6 mx-auto rounded-3xl shadow-md gap-3 h-max sticky top-36">
            <h1 className="h5 font-bold mb-6">
              Category
            </h1>
            {interest.map((data, index) => {
              return (
                <div key={index} className="flex gap-3">
                  <input className="text-3xl" type="checkbox" name="" id={index} />
                  <label className="p1" htmlFor={index}>{data.label}</label>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Magang;
