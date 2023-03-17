import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import data from "../data/magangDetail.json";
import DetailRec from "../components/magang/detailRec";
import PrimaryButton from "../components/button/PrimaryButton";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import BaseURL from "../api/BaseURL";
import { ImSpinner2 } from "react-icons/im";

const MagangDetail = () => {
  const id = useParams();
  const [rec, setRec] = useState([]);
  const [intr, setIntr] = useState([]);
  const [skill, setSkill] = useState([]);
  const [job, setJob] = useState([]);
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const token = window.localStorage.getItem("token");

  const getMagangRec = async () => {
      await BaseURL.get("/api/maganginfo/rekomendasi", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      setRec(res.data.data);
    });
  };

  const getMagangData = () => {
    BaseURL.get(`/api/maganginfo/${id.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data);
        setIntr(data.interest)
        setSkill(data.skill)
        setJob(data.job_description)
        console.log(data);

      })
      .finally(() => {
      });
  };

  useEffect(() => {
    setLoad(true)
    if (token) {
      getMagangRec()
      getMagangData()
    }    
    setLoad(false)
    
  }, [token]);
  if (load)
    return (
      <div className="container-svg flex justify-center items-center h-screen">
        <ImSpinner2 className="w-24 h-24 animate-spin text-primary400" />
      </div>
    );
  return (
    <WebLayout>
      <div className="flex flex-col xl:flex-row p-4 xl:p-16 gap-6">
        <DetailRec rec={rec} key={rec.id} />
        <div className="flex flex-col p-6 bg-neutral-50 shadow-lg rounded-xl xl:basis-7/12">
          {intr.map((intr) => {
            return (
              <h1 className="h5 font-bold text-neutral-700">
                {intr.nama} {data.perusahaan}
              </h1>
            );
          })}
          <div className="flex flex-col mt-6">
            <h2 className="h6 font-semibold text-neutral-600">
              Tentang Program Ini
            </h2>
            <p className="p1 text-neutral-600 my-4">{data.deskripsi}</p>
            <p className="p1 text-neutral-600">Job description :</p>
            <ul className="list-disc px-6">
              {job.map((job) => {
                return <li className="p1 text-neutral-600">{job.tugas}</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="h6 font-semibold text-neutral-600">Durasi Magang</h2>
            <p className="p1 text-neutral-600">{data.jangka_waktu}</p>
          </div>
          <div className="flex flex-col mt-6">
            <h2 className="h6 font-semibold text-neutral-600">Status Magang</h2>
            <p className="p1 text-neutral-600">{data.status_magang}</p>
          </div>
          <div className="flex flex-col my-6">
            <h2 className="h6 font-semibold text-neutral-600">
              Skill yang Dibutuhkan
            </h2>
            <div className="flex justify-start items-center flex-wrap mt-4 gap-4">
              {skill.map((skill) => {
                return (
                  <p className="p1 font-medium bg-primary400 text-white py-2 px-5 rounded-lg">
                    {skill.nama}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="xl:mt-auto">
            <PrimaryButton
              handleClick={() => {
                Swal.fire({
                  title: "Apakah Anda Yakin?",
                  icon: "warning",
                  showCancelButton: true,
                  iconColor: "#3A98B9",
                  confirmButtonColor: "#3A98B9",
                  color: "#3A98B9",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Ya",
                  cancelButtonText: "Tidak",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Lamaran anda sedang diproses",
                      color: "#3A98B9",
                      icon: "success",
                      iconColor: "#3A98B9",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
              }}
            >
              <p className="h6 font-bold">Lamar Magang</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default MagangDetail;
