import React, { useEffect, useState } from "react";
import Dropdown from "../layout/Dropdown";
import WebLayout from "../layout/WebLayout";
import PrimaryButton from "../components/button/PrimaryButton";
import { Link, useParams } from "react-router-dom";
import BaseURL from "../api/BaseURL";
import { BsStarFill, BsStar } from "react-icons/bs";
import ReactStars from "react-stars";
import { ImSpinner2 } from "react-icons/im";
import { toRupiah } from "../utils/ToRupiah";

const CourseDetail = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState({});
  const id = useParams();
  const token = window.localStorage.getItem("token");

  const getCourseData = async () => {
    await BaseURL.get(`/api/courseinfo/${id.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCourseData();
  }, []);
  return (
    <WebLayout>
      {load ? (
        <div className="container-svg flex justify-center items-center h-screen">
          <ImSpinner2 className="w-24 h-24 animate-spin text-primary400" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col xl:basis-3/4">
            <div className="flex flex-col justify-center bg-courseBg bg-no-repeat bg-cover py-4 px-8">
              <h1 className="mt-6 text-neutral-50 font-bold h3 text-center xl:text-left">
                {data.judul}
              </h1>
              <p className="mt-4 text-neutral-50 w-100 p1 mb-4 xl:text-left">
                {data.deskripsi}
              </p>
              <div className="flex items-center gap-1">
                <ReactStars
                  count={5}
                  size={24}
                  color1={"#ffd700"}
                />
                <p className="text-secondary500 p1">{data.rate}</p>
                <p className="text-neutral-400 p2">({data.vote})</p>
              </div>
              <div className="flex xl:hidden my-5">
                <Link to={`/courseCheckout/${id.id}`}>
                  <PrimaryButton>
                    <p className="p1">Daftar Sekarang</p>
                  </PrimaryButton>
                </Link>
              </div>
            </div>
            <div className="py-4 px-8 mb-4">
              <h2 className="font-bold mb-2 h4">Intro</h2>
              <p className="text-neutral-700 h6 text-">{data.intro}</p>
            </div>
            <div className="flex flex-col py-4 px-8 mb-4">
              <h2 className="font-bold mb-4 xl:mb-8 h4">
                Apa yang akan kamu pelajari
              </h2>
              <div className="flex flex-wrap gap-2">
                <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                  <p className="h6">HTML</p>
                </div>
                <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                  <p className="h6">CSS</p>
                </div>
                <div className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-lg text-white font-bold text-sm md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
                  <p className="h6">Javacript</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4 px-8 mb-4">
              <h2 className="font-bold mb-2 h4">Konten Kursus</h2>
              {data.playlist.map((list) => {
                return <Dropdown list={list} />;
              })}
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-6 sticky top-28 px-4 py-6 mx-auto bg-neutral-50 h-max w- rounded-xl shadow-lg">
            <p className="h6 text-neutral-700">Detail</p>
            <p className="h6 text-neutral-700">Intro</p>
            <p className="h6 text-neutral-700">Apa yang akan kamu pelajari</p>
            <p className="h6 text-neutral-700">Konten kursus</p>
            <div>
              <hr className="border-t-neutral-400" />
            </div>
            <p className="h6 text-neutral-700">Online course</p>
            <div>
              <hr className="border-t-neutral-400" />
            </div>
            <p className="h6 text-secondary500 font-bold">
              {toRupiah(data.price)}
            </p>
            <Link to={`/courseCheckout/${id.id}`}>
              <PrimaryButton>
                <p className="p1">Daftar Sekarang</p>
              </PrimaryButton>
            </Link>
          </div>
        </div>
      )}
    </WebLayout>
  );
};

export default CourseDetail;
