import React from "react";
import WebLayout from "../layout/WebLayout";
import data from "../data/magangDetail.json";
import loc from "../assets/magang/location.svg";
import PrimaryButton from '../components/button/PrimaryButton'

const MagangDetail = () => {
  return (
    <WebLayout>
      <div className="flex flex-col xl:flex-row p-4 xl:p-16 gap-6">
        <div className="flex flex-col p-6 bg-neutral-50 xl:basis-5/12 shadow-lg rounded-xl">
          <h1 className="font-bold h6 mb-8">Recommended</h1>
          <div className="flex flex-col gap-4">
            {data.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-neutral-100 border-2 p-8 border-neutral-200 rounded-xl"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 xl:gap-4">
                      <img src={data.logo} alt="" />
                      <p className="p2 font-medium text-neutral-400">
                        {data.name}
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-1 xl:gap-6">
                      <img src={loc} alt="" />
                      <p className="p2 text-neutral-400">{data.lokasi}</p>
                    </div>
                  </div>
                  <p className="p1 font-bold text-primary500 mt-4">
                    {data.bidang}
                  </p>
                  <div className="flex mt-8">
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="h-4 w-4 bg-primary400 rounded-full" />
                      <p className="p2 text-neutral-500">{data.postedAt}</p>
                      <p className="p2 text-neutral-500 transfr rotate-90">|</p>
                      <p className="p2 text-neutral-500">
                        {data.applied} {"Applied"}
                      </p>
                      <p className="p2 text-neutral-500 rotate-90">|</p>
                      <p className="p2 text-neutral-500">{data.jenis}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
          <div className="mt-8 xl:mt-auto">
          <PrimaryButton>
            <p className="h6 font-bold">
              Lamar Magang
            </p>
          </PrimaryButton>
          </div>
        </div>
      </div>
    </WebLayout>
  );
};

export default MagangDetail;
