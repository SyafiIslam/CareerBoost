import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import loc from "../../assets/magang/location.svg";
import ReactStars from "react-stars";
import { BsStarFill, BsStar } from "react-icons/bs";

const MentorAll = ({ list }) => {
  return (
    <Link
      to={`/mentoringInfo/data/${list.id}`}
      className="flex flex-col mx-auto xl:mx-0 bg-neutral-50 w-full xl:w-full p-6 rounded-3xl shadow-md gap-4"
    >
      <div className="flex flex-col xl:flex-row items-start justify-start w-full xl:w-full gap-3 xl:gap-1">
        <div className="w-2/12">
          <img className="rounded-full" src={list.profile_photo} alt="" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <p className="h3 font-bold text-primary300">{list.full_name}</p>
          <p className="p1 break-words font-medium text-neutral-700">
            {list.perusahaan}
          </p>
        </div>
        <div className="flex flex-col items-start xl:items-end justify-end gap-4 w-full">
          <HiDotsHorizontal className="h3" />
          <div className="flex gap-4">
            <img src={loc} alt="" />
            <p className="p1 text-neutral-700">{list.lokasi}</p>
          </div>
        </div>
      </div>
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
      />
      <div className="w-full">
        <p className="h6 break-words text-neutral-600 mb-6 text-left">
          {list.deskripsi}
        </p>
      </div>
      <p className="h6 text-neutral-600">Pengalaman</p>
      {list.exp.map((exp, index) => {
        return (
          <div key={index} className="flex gap-4 mb-4">
            <img src={exp.logo} className="w-10 md:w-16 xl:w-20" alt="" />
            <div className="flex flex-col justify-center">
              <p className="p1 font-semibold text-primary500">{exp.skill}</p>
              <p className="p2 text-neutral-400">{exp.perusahaan}</p>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex flex-col">
          <div>
            <p className="h6 text-neutral-600">Bidang</p>
          </div>
          <div className="flex gap-2 mt-3">
            {list.interest.map((list) => {
              return (
                <p
                  key={list.nama}
                  className="bg-primary400 text p2 text-neutral-200 py-3 px-6 rounded-xl"
                >
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

export default MentorAll;
