import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/magang/jumbo.svg";
import icon from "../assets/magang/search.svg";
import kanan from "../assets/magang/kanan.svg";
import kiri from "../assets/magang/kiri.svg";
import MagangCard from "../components/card/MagangCard";
import HireCard from "../components/card/HireCard";
import interest from "../data/Interest";
import BaseURL from "../api/BaseURL";
import { ImSpinner2 } from "react-icons/im";

const Magang = () => {
  const token = window.localStorage.getItem("token");
  const [rec, setRec] = useState([]);
  const [hire, setHire] = useState([]);
  const [load, setLoad] = useState(true);

  const getMagangRec = async () => {
    await BaseURL.get("/api/maganginfo/rekomendasi", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setRec(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMagangHire = async () => {
    await BaseURL.get(
      "/api/maganginfo/hiring?interestID=[1]&search=go&limit=3&page=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => {
        setHire(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMagangRec();
    getMagangHire();
    setLoad(false);
  }, [load]);

  return (
    <WebLayout>
      {load ? (
        <div className="container-svg flex justify-center items-center h-screen">
          <ImSpinner2 className="w-24 h-24 animate-spin text-primary400" />
        </div>
      ) : (
        <div className="flex flex-col p-6 xl:px-20 md:p-10">
          <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row items-center justify-between">
            <div className="flex flex-col basis-6/12">
              <h1 className="h3 font-bold text-center xl:text-left text-primary600 mb-8">
                Program Magang oleh Berbagai Perusahaan Ternama
              </h1>
              <p className="h6 text-neutral-600 text-center xl:text-left">
                Magang dengan banyak insight yang bisa didapatkan pada program
                ini. Berguna untuk menunjang karirmu di bidang yang kamu
                inginkan
              </p>
            </div>
            <img className="basis-5/12" src={jumbo} alt="" />
          </div>
          <div className="flex justify-center xl:justify-start flex-row-reverse mt-16">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-3 xl:py-6 xl:px-20 pl-12 border border-neutral-700 rounded-full focus:outline-none bg-neutral-100 h5 xl:w-3/4 "
            />
            <img
              src={icon}
              className="w-6 -mr-10 xl:-mr-16 scale-75 xl:scale-100 relative"
              alt=""
            />
          </div>
          <div className="bg-neutral-50 flex xl:hidden flex-col basis-1/4 items-start p-6 mx-auto rounded-3xl shadow-md gap-3 h-max w-full mt-8">
            <h1 className="h5 font-bold mb-6">Category</h1>
            {interest.map((data, index) => {
              return (
                <div key={index} className="flex gap-3">
                  <input
                    className="text-3xl"
                    type="checkbox"
                    name=""
                    id={index}
                  />
                  <label className="p1" htmlFor={index}>
                    {data.label}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row-reverse gap-10">
            <div className="flex flex-col w-full mt-16">
              <div className="flex w-full justify-between items-center">
                <h1 className=" h4 font-bold">Recommended</h1>
                <div className="flex gap-4 md:gap-6 items-center">
                  <p>
                    <img src={kiri} alt="" />
                  </p>
                  <p className="h6">1</p>
                  <p className="h6">2</p>
                  <p className="h6">3</p>
                  <p className="h6">4</p>
                  <p className="h6">5</p>
                  <p>
                    <img src={kanan} alt="" />
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-evenly items-stretch md:flex-row mx-auto flex-wrap gap-7 mt-10">
                {rec.map((data, index) => {
                  return (
                    <MagangCard
                      id={data.id}
                      key={index}
                      logo={data.logo}
                      perusahaan={data.perusahaan}
                      interest={data.interest}
                      lokasi={data.lokasi}
                      skill={data.skill}
                      release={data.release}
                      applied={data.applied}
                      status_magang={data.status_magang}
                    />
                  );
                })}
              </div>
              <div className="flex w-full justify-between items-center my-16">
                <h1 className=" h4 font-bold mb10">Now hiring</h1>
                <div className="flex gap-4 md:gap-6 items-center">
                  <p>
                    <img src={kiri} alt="" />
                  </p>
                  <p className="h6">1</p>
                  <p className="h6">2</p>
                  <p className="h6">3</p>
                  <p className="h6">4</p>
                  <p className="h6">5</p>
                  <p>
                    <img src={kanan} alt="" />
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col gap-8">
                {hire.map((data, index) => {
                  return (
                    <HireCard
                      key={data.id}
                      id={data.id}
                      applied={data.applied}
                      deskripsi={data.deskripsi}
                      interest={data.interest}
                      jangka_waktu={data.jangka_waktu}
                      logo={data.logo}
                      lokasi={data.lokasi}
                      perusahaan={data.perusahaan}
                      rate={data.rate}
                      release={data.release}
                      skill={data.skill}
                      status_magang={data.status_magang}
                    />
                  );
                })}
              </div>
            </div>
            <div className="bg-neutral-50 hidden xl:flex flex-col basis-1/4 items-start p-6 mx-auto rounded-3xl shadow-md gap-3 h-max w-max sticky top-36">
              <h1 className="h5 font-bold mb-6">Category</h1>
              {interest.map((data, index) => {
                return (
                  <div key={index} className="flex gap-3">
                    <input className="text-3xl" type="checkbox" id={index} />
                    <label className="p1" htmlFor={index}>
                      {data.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </WebLayout>
  );
};

export default Magang;
