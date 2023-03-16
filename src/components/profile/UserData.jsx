import React, { useEffect, useState } from "react";
import Input from "../auth/Input";
import TextArea from "../auth/TextArea";
import PrimaryButton from "../button/PrimaryButton";
import OtherButton from "../button/OtherButton";
import Swal from "sweetalert2";
import SelectInput from "../auth/SelectInput";
import BaseURL from "../../api/BaseURL";

const UserData = () => {
  const [userData, setuserData] = useState([]);
  const token = window.localStorage.getItem("token");


  const simpan = () => {
    Swal.fire({
      title: "Apakah Anda Yakin?",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#3A98B9",
      confirmButtonColor: "#3A98B9",
      color: "#3A98B9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Simpan",
      cancelButtonText: 'Tidak'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil Disimpan",
          color: "#3A98B9",
          icon: "success",
          iconColor: "#3A98B9",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const batalkan = () => {
    Swal.fire({
      title: "Apakah Anda Yakin Ingin membatalkan?",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#3A98B9",
      confirmButtonColor: "#3A98B9",
      color: "#3A98B9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Batal",
      cancelButtonText: 'tidak',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Perubahan dibatalkan",
          color: "#3A98B9",
          icon: "success",
          iconColor: "#3A98B9",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const getUserData = async () => {
    await BaseURL.get("/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res.data.data);
        setuserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, [token]);
  return (
    <div className="flex flex-col gap-8 xl:gap-16">
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-0 xl:items-center justify-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Nama Lengkap</p>
            <Input
              handleChange={(e) => {
                setuserData({ ...userData, full_name: e.target.value });
              }}
              value={userData.full_name}
            />
          </div>
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Email</p>
            <Input
              handleChange={(e) => {
                setuserData({ ...userData, email: e.target.value });
              }}
              value={userData.email}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-0 xl:items-center justify-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Lokasi</p>
            <Input
              handleChange={(e) => {
                setuserData({ ...userData, lokasi: e.target.value });
              }}
              value={userData.lokasi}
            />
          </div>
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Tempat Lahir</p>
            <Input
              handleChange={(e) => {
                setuserData({ ...userData, tempat_lahir: e.target.value });
              }}
              value={userData.tempat_lahir}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-0 xl:items-center justify-center">
        <div className="flex flex-col basis-1/2 gap-6">
          <p className="font-bold h5">Tanggal Lahir</p>
          <Input
            handleChange={(e) => {
              setuserData({ ...userData, tanggal_lahir: e.target.value });
            }}
            value={userData.tanggal_lahir}
          />
        </div>
        <div className="flex flex-col basis-1/2 gap-6">
          <p className="font-bold h5">Interest</p>
          <SelectInput
            input={userData}
            setInput={setuserData}
            interestID={userData.interest}
            defaultInterest={userData.interest}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center p-4 xl:p-0 ">
        <p className="font-bold h5">Deskripsi</p>
        <TextArea
          handleChange={(e) => {
            setuserData({ ...userData, deskripsi: e.target.value });
          }}
          value={userData.deskripsi}
        />
      </div>
      <div className="flex justify-center md:justify-start gap-10">
        <PrimaryButton
          handleClick={() => {
            // console.log(userData);
            simpan();
          }}
        >
          Simpan
        </PrimaryButton>
        <OtherButton
          handleClick={() => {
            batalkan()
          }}
        >
          Batalkan
        </OtherButton>
      </div>
    </div>
  );
};

export default UserData;
