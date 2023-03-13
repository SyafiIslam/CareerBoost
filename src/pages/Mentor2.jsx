import React, { useEffect } from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/mentoring/jumbo.svg";
import icon from "../assets/magang/search.svg";
import kanan from "../assets/magang/kanan.svg";
import kiri from "../assets/magang/kiri.svg";
import interest from "../data/Interest";
import mentor from "../data/mentoring.json";
import MentorAll from "../components/card/MentorAll";
import MentorSwipe from "../components/card/MentorSwipe";

const Mentor2 = () => {

  return (
    <WebLayout>
      <div className="p-6 xl:p-16">
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="flex items-center justify-center flex-col gap-6 basis-3/4">
            <p className="h3 font-bold text-primary600 text-center xl:text-left">
              Program Mentoring bersama Mentor Berpengalaman di Bidangnya
            </p>
            <p className="h6 text-neutral-600 text-center xl:text-left">
              Temukan mentor yang dapat membantumu dalam mempelajari front end,
              back end, data science, AI, atau cyber security.
            </p>
          </div>

          <img className="basis-5/12" src={jumbo} alt="" />
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start mt-8 basis-2/4">
          <div className="bg-neutral-50 flex flex-col p-6 rounded-3xl shadow-md gap-3 xl:sticky xl:top-28">
            <h1 className="h5 font-bold mb-6 ">Category</h1>
            {interest.map((data, index) => {
              return (
                <div key={index} className="flex gap-3">
                  <input className="text-3xl" type="checkbox" id={index} />
                  <label className="p1" htmlFor={index}>
                    {data.label}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col basis-3/4">
            <div className="flex justify-center xl:justify-start flex-row-reverse my-16 w-full">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-3 xl:py-6 xl:px-20 pl-12 border border-neutral-700 rounded-full focus:outline-none h5 w-full"
              />
              <img
                src={icon}
                className="w-6 -mr-10 xl:-mr-16 scale-75 xl:scale-100 relative"
                alt=""
              />
            </div>

            <div>
              <p className="h4 font-bold mb-16">Recommended</p>
              <div className="flex flex-wrap gap-8">
                {mentor.map((list, index) => {
                  return (
                    <MentorSwipe
                      avatar={list.avatar}
                      work={list.work}
                      lokasi={list.lokasi}
                      rate={list.rate}
                      name={list.name}
                      bidang={list.bidang}
                      skill={list.skill}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex gap-16 flex-col">
              <div className="flex justify-between">

                <p className="h4 font-bold my-16">All</p>

                <div className="flex items-center gap-4 md:gap-5">
                  <img src={kiri} alt="" />
                  <p className="h6">1</p>
                  <p className="h6">2</p>
                  <p className="h6">3</p>
                  <img src={kanan} alt="" />
                </div>
              </div>
              <MentorAll />
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default Mentor2;