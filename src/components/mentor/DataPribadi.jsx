import React from "react";

const DataPribadi = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col">
        <div className="flex gap-6 items-center justify-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Nama Lengkap</p>
            <p className="p1 border-2 border-neutral-700 rounded-full text-neutral-700 py-4 px-10">
              Muhammad Zidan
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Lokasi</p>
            <p className="p1 border-2 border-neutral-700 rounded-full text-neutral-700 py-4 px-10">
              Malang, Jawa Timur
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-6 items-center justify-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Keahlian</p>
            <p className="p1 border-2 border-neutral-700 rounded-full text-neutral-700 py-4 px-10">
              HTML, CSS, JavaScript
            </p>
          </div>
          <div className="flex flex-col basis-1/2 gap-6">
            <p className="font-bold h5">Interest</p>
            <p className="p1 border-2 border-neutral-700 rounded-full text-neutral-700 py-4 px-10">
              Front End Developer
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col basis-1/2 gap-6">
        <p className="font-bold h5">Deskripsi</p>
        <p className="p1 border-2 border-neutral-700 rounded-full text-neutral-700 py-4 px-10">
          Seorang mahasiswa Universitas Brawijaya Fakultas Ilmu Komputer. Saat
          ini menempuh pendidikan S1. Memiliki minat di bidang Front end
          Developer dan menguasai bahasa pemrograman HTML, CSS
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <p className="font-bold h5">Review</p>
        <div className="flex gap-6">
          <p className="h6">⭐⭐⭐⭐⭐</p>
          <p className="h6 font-semibold">
            5.0 <span className="h6 text-neutral-400 font-normal">(40 Reviews)</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <p className="font-bold h5">Fee</p>
        <p className="h4 font-extrabold text-secondary400">
          Rp 59.000
        </p>
      </div>
    </div>
  );
};

export default DataPribadi;
