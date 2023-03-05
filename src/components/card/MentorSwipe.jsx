import React from "react";
import { Link } from "react-router-dom";
import mentor from "../../data/mentoring.json";
import loc from "../../assets/magang/location.svg";
import { motion } from "framer-motion";

const MentorSwipe = () => {
  return (
    <>
      {mentor.map((data, index) => {
        return (
          <Link
            to="/mentorInfo"
            key={index}
            className="flex flex-col mx-auto xl:mx-0 bg-neutral-50 w-max p-4 rounded-3xl shadow-md gap-4"
          >
            <motion.div drag='x'>
              <div className="flex flex-col xl:flex-row items-start justify-start gap-3 x w-fulll:gap-1">
                <div className="w-2/12">
                  <img src={data.avatar} alt="" />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <p className="h3 font-bold text-primary300">{data.name}</p>
                  <p className="p1 font-medium text-neutral-700">{data.work}</p>
                </div>
                <div className="flex flex-col items-start xl:items-end justify-end gap-4"></div>
              </div>
              <p className="p2 md:h6 font-medium my-2">{data.rate}</p>
              <div className="flex gap-4 my-2">
                <img src={loc} alt="" />
                <p className="p1 text-neutral-700">{data.lokasi}</p>
              </div>
              <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex flex-col">
                  <div>
                    <p className="h6 text-neutral-600">Bidang</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {data.bidang.map((list, index) => {
                      return (
                        <p
                          key={index}
                          className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl"
                        >
                          {list}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="h6 text-neutral-600">Keahlian</p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {data.skill.map((list, indexist) => {
                      return (
                        <p
                          key={index}
                          className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl"
                        >
                          {list}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </>
  );
};

export default MentorSwipe;
