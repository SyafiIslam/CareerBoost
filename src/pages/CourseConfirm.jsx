import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import check from "../assets/confirm/check.svg";

const CourseConfirm = () => {
  const [data, setData]= useState({})
  const id= useParams()
  const nav= useNavigate()

  useEffect(() => {
    setTimeout(() => {
    nav(`/lesson/${id.id}`)
    }, 2000)
  }, [])
  return (
    <div className="flex justify-center items-center h-screen p-6">
      <div className="flex flex-col gap-4 md:gap-16 xl:gap-24">
        <img className="w-3/12 xl:w-6/12 mx-auto" src={check} alt="" />
        <div className="flex flex-col">
          <p className="h4 font-medium text-center xl:text-left">
            Checkout Berhasil, Kamu dapat mengakses Kursus
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseConfirm;
