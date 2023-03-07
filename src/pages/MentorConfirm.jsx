import React from "react";
import { Link } from "react-router-dom";
import check from "../assets/confirm/check.svg";
import whatsapp from "../assets/mentoring/whatsaap.svg";
import insta from "../assets/mentoring/insta.svg";
import gmail from "../assets/mentoring/gmail.svg";

const MentorConfirm = () => {
  return (
    <div className="flex justify-center items-center h-screen p-6">
      <div className="flex flex-col gap-4 md:gap-16 xl:gap-24">
        <img className="w-5/12 xl:w-4/12 mx-auto" src={check} alt="" />
        <div className="flex flex-col">
          <p className="h4 font-medium text-center xl:text-left">
            Checkout Berhasil, Kamu dapat menghubungi mentor yang sudah kamu
            pilih
          </p>
          <div className="flex justify-start items-start gap-5 xl:mt-8 py-6 w-full flex-col">
            <div className="flex gap-5 mx-auto">
              <img className="w-12" src={whatsapp} alt="" />
              <p className="h4 font-medium text-primary400">
                Hubungi Via Whatsapp
              </p>
            </div>
            <div className="flex gap-5 mx-auto">
              <img className="w-12" src={insta} alt="" />
              <p className="h4 font-medium text-primary400">
                Hubungi Via Instagram
              </p>
            </div>
            <div className="flex gap-5 mx-auto xl:mb-8">
              <img className="h-12 w-12" src={gmail} alt="" />
              <p className="h4 font-medium text-primary400">
                Hubungi Via intagram
              </p>
            </div>
          </div>
          <div>
            <Link to="/">
              <p className="w-4/12 mx-auto h4 font-bold bg-primary400 text-white p-2 xl:p-6 rounded-full text-center">
                Kembali
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorConfirm;
