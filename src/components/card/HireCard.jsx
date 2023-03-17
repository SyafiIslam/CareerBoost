import React from "react";
import { Link } from "react-router-dom";
import hire from "../../data/magangHire.json";
import loc from "../../assets/magang/location.svg";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";


const HireCard = ({
  id,
  logo,
  interest,
  perusahaan,
  release,
  jangka_waktu,
  status_magang,
  applied,
  deskripsi,
  rate,
  lokasi,
  skill,
}) => {
  return (
    <>
      <Link
        to={`/magangDetail/${id}`}
        className="flex flex-col md:flex-row mx-auto xl:mx-0 bg-neutral-50 p-4 rounded-3xl shadow-md gap-4"
      >
        <div className="w-2/12">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1">
            {
              interest.map((data, index) => {
                return <h1 key={index} className="h5 font-semibold text-primary500">{data.nama}</h1>
              })
            }
            <h1 className="h5 font-semibold text-primary500"> {perusahaan}</h1>
          </div>
          <div className="flex gap-2 mt-2">
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {release}
            </p>
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {jangka_waktu}
            </p>
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {status_magang}
            </p>
            <p className="p2 md:h6 font-semibold text-neutral-400">
              {applied} {"applied"}
            </p>
          </div>
          <p className="h5 text-neutral-600 my-4">{deskripsi}</p>
          <Rating
            className="text-xl md:h6 font-medium text-yellow-400  "
            emptySymbol={<BsStar />}
            fullSymbol={<BsStarFill />}
            initialRating={rate}
            readonly
          />
          <div className="flex gap-4 mb-4">
            <img src={loc} alt="" />
            <p className="h6 text-primary300 font-medium">{lokasi}</p>
          </div>
          <div className="flex justify-start items-center flex-wrap gap-3">
            {skill.map((list, index) => {
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
