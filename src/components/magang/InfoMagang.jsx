import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import BaseURL from "../../api/BaseURL";
import PrimaryButton from "../button/PrimaryButton";

const InfoMagang = () => {

  const id = useParams();
  const [data, setData] = useState({});
  const [interest, setInterest] = useState([]);
  const [job, setJob] = useState([]);
  const [skill, setSkill] = useState([]);
  const [load, setLoad] = useState(false);
  const token = window.localStorage.getItem("token");

  const getMagangData = async () => {
    await BaseURL.get(`/api/maganginfo/${id.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data);
      })
  };

  useEffect(() => {
    setLoad(true)
    token && getMagangData()
    setInterest(data.interest)
    setJob(data.job)
    setSkill(data.skill)
    setLoad(false)
  }, [token, job]);

  if (load)
    return (
      <div className="container-svg flex justify-center items-center h-screen">
        <ImSpinner2 className="w-24 h-24 animate-spin text-primary400" />
      </div>
    );
  return (
    <div className="flex flex-col p-6 bg-neutral-50 shadow-lg rounded-xl xl:basis-7/12">
    <h1 className="h5 font-bold text-neutral-700">
      Front End Developer PT.Bank Rakyat Indonesia
    </h1>
    <div className="flex flex-col mt-6">
      <h2 className="h6 font-semibold text-neutral-600">
        Tentang Program Ini
      </h2>
      <p className="p1 text-neutral-600 my-4">
        Program magang menjadi Front End Developer di PT. Bank Rakyat
        Indonesia (persero) dengan durasi magang selama 4 bulan dan
        berkesempatan menjadi pegawai tetap PT. Bank Rakyat Indonesia
        (persero)
      </p>
      <p className="p1 text-neutral-600">Job description :</p>
      <ul className="list-disc px-6">
        <li className="p1 text-neutral-600">
          Melakukan developing website BRI
        </li>
        <li className="p1 text-neutral-600">
          Melakukan evaluasi website
        </li>
      </ul>
    </div>
    <div className="flex flex-col mt-6">
      <h2 className="h6 font-semibold text-neutral-600">Durasi Magang</h2>
      <p className="p1 text-neutral-600">4 Bulan</p>
    </div>
    <div className="flex flex-col mt-6">
      <h2 className="h6 font-semibold text-neutral-600">Status Magang</h2>
      <p className="p1 text-neutral-600">Work From Home</p>
    </div>
    <div className="flex flex-col mt-6">
      <h2 className="h6 font-semibold text-neutral-600">
        Skill yang Dibutuhkan
      </h2>
      <div className="flex justify-start items-center flex-wrap mt-4 gap-4">
        <p className="bg-primary400 py-2 px-5 rounded-lg text-neutral-50 p2 font-medium">
          HTML
        </p>
        <p className="bg-primary400 py-2 px-5 rounded-lg text-neutral-50 p2 font-medium">
          CSS
        </p>
        <p className="bg-primary400 py-2 px-5 rounded-lg text-neutral-50 p2 font-medium">
          Javascript
        </p>
        <p className="bg-primary400 py-2 px-5 rounded-lg text-neutral-50 p2 font-medium">
          React
        </p>
      </div>
    </div>
  </div>
  );
};

export default InfoMagang;
