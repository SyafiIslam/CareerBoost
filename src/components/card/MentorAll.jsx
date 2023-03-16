import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mentor from "../../data/mentoring.json";
import { HiDotsHorizontal } from "react-icons/hi";
import loc from "../../assets/magang/location.svg";
import BaseURL from "../../api/BaseURL";
import Rating from "react-rating";
import { BsStarFill, BsStar } from "react-icons/bs";

const MentorAll = () => {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem('token')
  // console.log(token);

  const getAllMentor = async () => {
    await BaseURL.get("/api/mentorinfo?limit=3&page=1&interestID=[1,2]&search=", {
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
  }, [token]);
  return (
    <>
      {data.map((data, index) => {
        return (
          <Link
            to="/mentoringInfo/data"
            key={index}
            className="flex flex-col mx-auto xl:mx-0 bg-neutral-50 w-full xl:w-full p-6 rounded-3xl shadow-md gap-4"
          >
            <div className="flex flex-col xl:flex-row items-start justify-start w-full xl:w-full gap-3 xl:gap-1">
              <div className="w-2/12">
                <img className="rounded-full" src={data.profile_photo} alt="" />
              </div>
              <div className="flex flex-col w-full gap-3">
                <p className="h3 font-bold text-primary300">{data.full_name}</p>
                <p className="p1 break-words font-medium text-neutral-700">{data.perusahaan}</p>
              </div>
              <div className="flex flex-col items-start xl:items-end justify-end gap-4 w-full">
                <HiDotsHorizontal className="h3" />
                <div className="flex gap-4">
                  <img src={loc} alt="" />
                  <p className="p1 text-neutral-700">{data.lokasi}</p>
                </div>
              </div>
            </div>
            <Rating 
            className="p2 md:h6 font-medium mb-4 text-yellow-400  "
            emptySymbol={<BsStar />}
            fullSymbol={<BsStarFill />}
            initialRating={data.rate}
            readonly 
            />

              
            <div className="w-full">
              <p className="h6 break-words text-neutral-600 mb-6 text-left">{data.deskripsi}</p>
            </div>
            <p className="h6 text-neutral-600">Pengalaman</p>
            {data.exp.map((exp, index) => {
              return (
                <div key={index} className="flex gap-4 mb-4">
                <img src={exp.logo} className="w-10 md:w-16 xl:w-20" alt="" />
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
                  {data.interest.map((list) => {
                    return (
                      <p key={list.nama} className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl">
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
                  {data.skill.map((list, index) => {
                    return (
                      <p key={index} className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl">
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
