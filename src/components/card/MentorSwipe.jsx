import React from "react";
import { Link } from "react-router-dom";
import mentor from "../../data/mentoring.json";
import loc from "../../assets/magang/location.svg";

const MentorSwipe = ({
  bidang,
  skill,
  avatar,
  work,
  lokasi,
  rate,
  name,
}) => {
  return (
    <Link
      to="/mentoringInfo/data"
      className="flex flex-col mx-auto bg-neutral-50 w p-4 rounded-3xl shadow-md gap-4"
    >
      <div className="flex flex-col xl:flex-row items-start justify-start gap-3 x w-fulll:gap-1">
        <div className="w-2/12">
          <img src={avatar} alt="" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <p className="h3 font-bold text-primary300">{name}</p>
          <p className="p1 font-medium text-neutral-700">{work}</p>
        </div>
        <div className="flex flex-col items-start xl:items-end justify-end gap-4"></div>
      </div>
      <p className="p2 md:h6 font-medium my-2">{rate}</p>
      <div className="flex gap-4 my-2">
        <img src={loc} alt="" />
        <p className="p1 text-neutral-700">{lokasi}</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex flex-col">
          <div>
            <p className="h6 text-neutral-600">Bidang</p>
          </div>
          <div className="flex gap-2 mt-3">
            {bidang.map((list, index) => {
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
            {skill.map((list, index) => {
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
    </Link>
  );
};

export default MentorSwipe;
