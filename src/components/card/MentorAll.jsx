import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mentor from "../../data/mentoring.json";
import { HiDotsHorizontal } from "react-icons/hi";
import loc from "../../assets/magang/location.svg";
import BaseURL from "../../api/BaseURL";
import Cookies from "js-cookie";

const MentorAll = () => {
  const [data, setData] = useState([]);
  const token = Cookies.get("token");
  // console.log(token);

  const getAllMentor = async () => {
    await BaseURL.get("api/mentorinfo/data", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllMentor();
  }, []);
  return (
    <>
      {data.map((data, index) => {
        return (
          <Link
            to="/mentoringInfo/data"
            key={index}
            className="flex flex-col mx-auto xl:mx-0 bg-neutral-50 w-max p-4 rounded-3xl shadow-md gap-4"
          >
            <div className="flex flex-col xl:flex-row items-start justify-start w-max xl:w-full gap-3 xl:gap-1">
              <div className="w-2/12">
                <img src={data.profile_photo} alt="" />
              </div>
              <div className="flex flex-col w-full gap-3">
                <p className="h3 font-bold text-primary300">{data.nama}</p>
                <p className="p1 font-medium text-neutral-700">{data.work}</p>
              </div>
              <div className="flex flex-col items-start xl:items-end justify-end gap-4 w-full">
                <HiDotsHorizontal className="h3" />
                <div className="flex gap-4">
                  <img src={loc} alt="" />
                  <p className="p1 text-neutral-700">{data.lokasi}</p>
                </div>
              </div>
            </div>
            <p className="p2 md:h6 font-medium mb-4">
              {data.rate}
            </p>
            <div className="w-80 xl:w-full">
              <p className="h6 text-neutral-600 mb-6 text-left">{data.deskripsi}</p>
            </div>
            <p className="h6 text-neutral-600">Pengalaman</p>
            {data.exp.map((exp, index) => {
              return (
                <div key={index} className="flex gap-4 mb-4">
                <img src={exp.logo} className="w-1/12" alt="" />
                <div className="flex flex-col justify-center">
                  <p className="p1 font-semibold text-primary500">
                    {exp.skill}
                  </p>
                  <p className="p2 text-neutral-400">{exp.perusahaan}</p>
                </div>
              </div>
              )
            })}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="flex flex-col">
                <div>
                  <p className="h6 text-neutral-600">Bidang</p>
                </div>
                <div className="flex gap-2 mt-3">
                  {data.bidang.map((list) => {
                    return (
                      <p className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl">
                        {list.nama}
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
                  {data.skill.map((list) => {
                    return (
                      <p className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl">
                        {list.nama}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default MentorAll;
