import React from "react";
import Edit from "../auth/Edit";
import TextArea from "../auth/TextArea";
import PrimaryButton from "../button/PrimaryButton";
import OtherButton from "../button/OtherButton";
import Swal from "sweetalert2";

const UserData = () => {
  return (
    <div className="flex flex-col gap-8 xl:gap-16">
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-0 xl:items-center justify-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Nama Lengkap</p>
            <Edit value="Muhammad Zidan" />
          </div>
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Email</p>
            <Edit value="muhammadzidan@gmail.com" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-0 xl:items-center justify-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Lokasi</p>
            <Edit value="Malang, Jawa Timur" />
          </div>
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Tempat Lahir</p>
            <Edit value="Surabaya, Jawa Timur" />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 p-4 xl:p-0 xl:items-center justify-center">
        <div className="flex flex-col basis-1/2 gap-6">
          <p className="font-bold h5">Tanggal Lahir</p>
          <Edit value="24/03/2003" />
        </div>
        <div className="flex flex-col basis-1/2 gap-6">
          <p className="font-bold h5">Interest</p>
          <Edit value="Front End, Back End, Data Science, Cyber Security" />
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center p-4 xl:p-0 ">
        <p className="font-bold h5">Deskripsi</p>
        <TextArea value="Seorang mahasiswa Universitas Brawijaya Fakultas Ilmu Komputer. Saat ini menempuh pendidikan S1. Memiliki minat di bidang Front end Developer dan menguasai bahasa pemrograman HTML, CSS" />
      </div>
      <div className="flex justify-center md:justify-start gap-10">
        <PrimaryButton
          handleClick={() => {
            Swal.fire({
              title: "Apakah Anda Yakin?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3A98B9",
              cancelButtonColor: "#d33",
              confirmButtonText: "Simpan",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: "Berhasil Disimpan",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          }}
        >
          Simpan
        </PrimaryButton>
        <OtherButton>Batalkan</OtherButton>
      </div>
    </div>
  );
};

export default UserData;
