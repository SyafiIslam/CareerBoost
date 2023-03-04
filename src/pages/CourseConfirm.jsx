import React from "react";
import { Link } from "react-router-dom";
import check from "../assets/confirm/check.svg";

const CourseConfirm = () => {
  return (
    <div className="flex justify-center items-center h-screen p-6">
      <div className="flex flex-col gap-4 md:gap-16 xl:gap-24">
        <img className="w-3/12 xl:w-6/12 mx-auto" src={check} alt="" />
        <div className="flex flex-col">
          <p className="h4 font-medium text-center xl:text-left">
            Checkout Berhasil, Kamu dapat mengakses Kursus
          </p>
          <Link>
            <p className="h4 font-bold text-primary400 text-center">
              Intro to Website Development
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseConfirm;
