import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import loc from "../../assets/magang/location.svg";
import { BsStarFill, BsStar } from "react-icons/bs";

const MentorSwipe = ({
  profile_photo,
  full_name,
  perusahaan,
  lokasi,
  rate,
  interest,
  skill,
}) => {
  console.log();
  return (
    <Link
      to="/mentoringInfo/data"
      className="flex flex-col mx-4 bg-neutral-50 w p-4 rounded-3xl shadow-md gap-4"
    >
      <div className="flex flex-col xl:flex-row items-start justify-start gap-3 x w-fulll:gap-1">
        <div className="w-2/12">
          <img src={profile_photo} alt="" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <p className="h3 font-bold text-primary300">{full_name}</p>
          <p className="p1 font-medium text-neutral-700">{perusahaan}</p>
        </div>
        <div className="flex flex-col items-start xl:items-end justify-end gap-4"></div>
      </div>
      <Rating
        className="p2 md:h6 font-medium mb-4 text-yellow-400  "
        emptySymbol={<BsStar />}
        fullSymbol={<BsStarFill />}
        initialRating={rate}
        readonly
      />
      <div className="flex gap-4 my-2">
        <img src={loc} alt="" />
        <p className="p1 text-neutral-700">{lokasi}</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex flex-col">
          <div>
            <p className="p1 text-neutral-400">Bidang</p>
          </div>
          <div className="flex gap-2 mt-3">
            {interest.map((list, index) => {
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
            {skill.map((list, index) => {
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
