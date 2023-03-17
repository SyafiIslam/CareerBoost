import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import data from "../data/magangDetail.json";
import DetailRec from "../components/magang/detailRec";
import PrimaryButton from "../components/button/PrimaryButton";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import BaseURL from "../api/BaseURL";

const MagangDetail = () => {
  const id = useParams();
  const [rec, setRec] = useState([]);
  const [load, setLoad] = useState(true);
  const token = window.localStorage.getItem("token");

  const getMagangRec = async () => {
    await BaseURL.get("/api/maganginfo/rekomendasi", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setRec(res.data.data);
        console.log(rec);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMagangRec();
    setLoad(false);
  }, [load]);
  return (
    <WebLayout>
      {load ? (
        <p></p>
      ) : (
        <div className="flex flex-col xl:flex-row p-4 xl:p-16 gap-6">
          <DetailRec
            rec={rec}
            key={rec.id}
            logo={rec.logo}
            perusahaan={rec.perusahaan}
            interest={rec.interest}
            lokasi={rec.lokasi}
            skill={rec.skill}
            release={rec.release}
            applied={rec.applied}
            status_magang={rec.status_magang}
          />
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
              <h2 className="h6 font-semibold text-neutral-600">
                Durasi Magang
              </h2>
              <p className="p1 text-neutral-600">4 Bulan</p>
            </div>
            <div className="flex flex-col mt-6">
              <h2 className="h6 font-semibold text-neutral-600">
                Status Magang
              </h2>
              <p className="p1 text-neutral-600">Work From Home</p>
            </div>
            <div className="flex flex-col my-6">
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
      )}
    </WebLayout>
  );
};

export default MagangDetail;
