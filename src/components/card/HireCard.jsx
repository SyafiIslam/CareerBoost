import React from "react";
import { Link } from "react-router-dom";
import hire from "../../data/magangHire.json";
import loc from "../../assets/magang/location.svg";

const HireCard = () => {
  return (
    <>
      {hire.map((data, index) => {
        return (
          <Link
            to="/magangDetail"
            key={index}
            className="flex flex-col md:flex-row mx-auto xl:mx-0 bg-neutral-50 p-4 rounded-3xl shadow-md gap-4"
          >
            <div className="">
              <img src={data.logo} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="h5 font-semibold text-primary500">
                {data.bidang}
              </h1>
              <div className="flex gap-2 mt-2">
                <p className="p2 md:h6 font-semibold text-neutral-400">
                  {data.postedAt}
                </p>
                <p className="p2 md:h6 font-semibold text-neutral-400">
                  {data.duration}
                </p>
                <p className="p2 md:h6 font-semibold text-neutral-400">
                  {data.jenis}
                </p>
                <p className="p2 md:h6 font-semibold text-neutral-400">
                  {data.applied} {"applied"}
                </p>
              </div>
              <p className="h5 text-neutral-600 my-4">{data.desc}</p>
              <p className="p2 md:h6 font-medium mb-4">{data.rating}</p>
              <div className="flex gap-4 mb-4">
                <img src={loc} alt="" />
                <p className="h6 text-primary300 font-medium">{data.lokasi}</p>
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
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default HireCard;
