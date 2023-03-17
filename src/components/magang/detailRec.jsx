import React from "react";
import data from "../../data/magangDetail.json";
import loc from "../../assets/magang/location.svg";
import { Link } from "react-router-dom";

const detailRec = ({
  rec,
  key
}) => {
  return (
    <Link to={`/magangDetail/${key}`} className="flex flex-col p-2 md:p-6 bg-neutral-50 xl:basis-5/12 shadow-lg rounded-xl">
      <h1 className="font-bold h6 mb-8">Recommended</h1>
      <div className="flex flex-col gap-4">
        {rec.map((data, index) => {
          return (
            <div
              key={index}
              className="bg-neutral-100 border-2 p-8 border-neutral-200 rounded-xl"
            >
              <div className="flex justify-between">
                <div className="flex items-center  gap-2 w-8 xl:w-10 2xl:w-12 xl:gap-4">
                  <img src={data.logo} alt="" />
                  <p className="p2 font-medium text-neutral-400">
                    {data.perusahaan}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-1 xl:gap-6">
                  <img src={loc} alt="" />
                  <p className="p2 text-neutral-400">{data.lokasi}</p>
                </div>
              </div>
              {data.interest.map((list, index) => {
                return (
                  <p className="h5 font-bold text-primary500">
                    {list.nama}
                  </p>
                );
              })}
              <div className="flex mt-8">
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-4 w-4 bg-primary400 rounded-full" />
                  <p className="p2 text-neutral-500">{data.release}</p>
                  <p className="p2 text-neutral-500 transfr rotate-90">|</p>
                  <p className="p2 text-neutral-500">
                    {data.applied} {"Applied"}
                  </p>
                  <p className="p2 text-neutral-500 rotate-90">|</p>
                  <p className="p2 text-neutral-500">{data.status_magang}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export default detailRec;
