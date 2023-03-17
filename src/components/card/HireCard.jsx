import React from "react";
import { Link } from "react-router-dom";
import hire from "../../data/magangHire.json";
import loc from "../../assets/magang/location.svg";
import ReactStars from "react-stars";
import { BsStarFill, BsStar } from "react-icons/bs";

const HireCard = ({ data }) => {
  return (
    <>
      <Link
        to={`/magangDetail/${data.id}`}
        className="flex flex-col md:flex-row mx-auto xl:mx-0 bg-neutral-50 p-4 rounded-3xl shadow-md gap-4"
      >
        <div className="w-2/12">
          <img src={data.logo} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            {data.interest.map((data, index) => {
              return (
                <h1 key={index} className="h5 font-semibold text-primary500">
                  {data.nama}
                </h1>
              );
            })}
            <h1 className="h5 font-semibold text-primary500">
              {" "}
              {data.perusahaan}
            </h1>
          </div>
          <div className="flex gap-2 mt-2">
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {data.release}
            </p>
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {data.jangka_waktu}
            </p>
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {data.status_magang}
            </p>
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {data.applied} {"applied"}
            </p>
          </div>
          <p className="h5 text-neutral-600 my-4">{data.deskripsi}</p>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
          />
          <div className="flex gap-4 mb-4">
            <img src={loc} alt="" />
            <p className="h6 text-primary300 font-medium">{data.lokasi}</p>
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
        </div>
      </Link>
    </>
  );
};

export default HireCard;
