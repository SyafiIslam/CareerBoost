import React from "react";
import { Link, useParams } from "react-router-dom";
import rekomen from "../../data/magangRecommended.json";
import loc from "../../assets/magang/location.svg";

const MagangCard = ({
  data
}) => {

  return (
    <Link
      to={`/magangDetail/${data.id}`}
      className="flex flex-col items-stretch mx-auto xl:mx-0 bg-neutral-50 py-4 px-6 w-10/12 md:w-70 xl:w-72 2xl:w-80 rounded-3xl shadow-md gap-8"
    >
      <div className="flex items-center gap-3">
        <img src={data.logo} className="w-1/12" alt="" />
        <p className="h6 font-medium text-neutral-400">{data.perusahaan}</p>
      </div>
      {data.interest.map((list, index) => {
        return (
          <p key={index} className="h5 font-bold text-primary500">
            {list.nama}
          </p>
        );
      })}
      <div className="flex gap-4">
        <img src={loc} alt="" />
        <p className="p1 text-neutral-700">{data.lokasi}</p>
      </div>
      <div className="flex justify-start items-center flex-wrap gap-3">
        {data.skill.map((list, index) => {
          return (
            <p
              key={index}
              className="bg-primary400 py-2 px-5 rounded-lg text-neutral-50 p2"
            >
              {list.nama}
            </p>
          );
        })}
      </div>
      <div className="flex items-center gap-2 mt-auto">
        <div className="h-4 w-4 bg-primary400 rounded-full" />
        <p className="p2 text-neutral-500">{data.release}</p>
        <p className="p2 text-neutral-500 transfr rotate-90">|</p>
        <p className="p2 text-neutral-500">
          {data.applied} {"Applied"}
        </p>
        <p className="p2 text-neutral-500 rotate-90">|</p>
        <p className="p2 text-neutral-500">{data.status_magang}</p>
      </div>
    </Link>
  );
};

export default MagangCard;
