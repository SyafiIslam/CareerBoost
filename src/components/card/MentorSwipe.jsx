import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import loc from "../../assets/magang/location.svg";
import { BsStarFill, BsStar } from "react-icons/bs";

const MentorSwipe = ({ list }) => {
  console.log();
  return (
    <Link
      to={`/mentoringInfo/data/${list.id}`}
      className="flex flex-col mx-4 bg-neutral-50 w p-4 rounded-3xl shadow-md gap-4"
    >
      <div className="flex flex-col xl:flex-row items-start justify-start gap-3 x w-fulll:gap-1">
        <div className="w-2/12">
          <img src={list.profile_photo} alt="" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <p className="h3 font-bold text-primary300">{list.full_name}</p>
          <p className="p1 font-medium text-neutral-700">{list.perusahaan}</p>
        </div>
        <div className="flex flex-col items-start xl:items-end justify-end gap-4"></div>
      </div>
      <div className="flex flex-row">
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
        />
      </div>
      <div className="flex gap-4 my-2">
        <img src={loc} alt="" />
        <p className="p1 text-neutral-700">{list.lokasi}</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex flex-col">
          <div>
            <p className="p1 text-neutral-400">Bidang</p>
          </div>
          <div className="flex gap-2 mt-3">
            {list.interest.map((list, index) => {
              return (
                <p
                  key={index}
                  className="bg-primary400 w-fit p2 text-neutral-200 py-3 px-6 rounded-xl"
                >
                  {list.nama}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="p1 text-neutral-400">Keahlian</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {list.skill.map((list, index) => {
              return (
                <p
                  key={index}
                  className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl"
                >
                  {list.nama}
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
