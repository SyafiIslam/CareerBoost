import React from "react";
import { Link } from "react-router-dom";
import rekomen from "../../data/magangRecommended.json";
import loc from "../../assets/magang/location.svg";

const MagangCard = () => {
  return (
    <>
      {rekomen.map((data, index) => {
        return (
          <Link
            to="/magangDetail"
            key={index}
            className="flex flex-col xl:mx-0 bg-neutral-50 py-4 px-6 w-10/12 md:w-70 xl:w-72 2xl:w-80 rounded-3xl shadow-md gap-8"
          >
            <div className="flex items-center gap-3">
              <img src={data.logo} alt="" />
              <p className="h6 font-medium text-neutral-400">{data.name}</p>
            </div>
            <p className="h5 font-bold text-primary500">{data.bidang}</p>
            <div className="flex gap-4">
              <img src={loc} alt="" />
              <p className="p1 text-neutral-700">{data.lokasi}</p>
            </div>
            <div className="flex justify-start items-center flex-wrap gap-3">
              {data.kategori.map((list, index) => {
                return (
                  <p
                    key={index}
                    className="bg-primary400 py-2 px-5 rounded-lg text-neutral-50 p2"
                  >
                    {list}
                  </p>
                );
              })}
            </div>
            <div className="flex items-center gap-2 mt-auto">
              <div className="h-4 w-4 bg-primary400 rounded-full" />
              <p className="p2 text-neutral-500">{data.postedAt}</p>
              <p className="p2 text-neutral-500 transfr rotate-90">|</p>
              <p className="p2 text-neutral-500">
                {data.applied} {"Applied"}
              </p>
              <p className="p2 text-neutral-500 rotate-90">|</p>
              <p className="p2 text-neutral-500">
                {data.jenis}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default MagangCard;
