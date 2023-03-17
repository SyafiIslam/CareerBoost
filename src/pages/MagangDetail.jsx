import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import data from "../data/magangDetail.json";
import DetailRec from "../components/magang/detailRec";
import PrimaryButton from "../components/button/PrimaryButton";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import BaseURL from "../api/BaseURL";
import { ImSpinner2 } from "react-icons/im";
import InfoMagang from "../components/magang/InfoMagang";

const MagangDetail = () => {
  const id = useParams();
  const token = window.localStorage.getItem("token"); 
  return (
    <WebLayout>
      <div className="flex flex-col xl:flex-row p-4 xl:p-16 gap-6">
        <DetailRec />
        <div className="flex flex-col p-6 bg-neutral-50 shadow-lg rounded-xl xl:basis-7/12">
          <InfoMagang />
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
                    BaseURL.get(`api/maganginfo/checkout/${id.id}`, {
                      headers: { Authorization: `Bearer ${token}` },
                    })
                      .then(() => {
                        setRec(res);
                        console.log(res);
                        Swal.fire({
                          title: "Lamaran anda sedang diproses",
                          color: "#3A98B9",
                          icon: "success",
                          iconColor: "#3A98B9",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                      })
                      .catch((err) => {
                        console.log(err);
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
