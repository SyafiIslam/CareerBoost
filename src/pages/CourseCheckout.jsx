import React from "react";
import WebLayout from "../layout/WebLayout";
import debit from "../assets/courseCheckout/debit.svg";
import alfa from "../assets/courseCheckout/alfa.svg";
import indo from "../assets/courseCheckout/indomaret.svg";
import ovo from "../assets/courseCheckout/ovo.svg";
import item from "../assets/courseCheckout/thumbnail.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/button/PrimaryButton";

const CourseCheckout = () => {
  return (
    <WebLayout>
      <div className="h-full flex flex-col xl:flex-row">
        <div className="flex flex-col p-10 xl:basis-3/4">
          <h1 className="h4 font-bold">Checkout</h1>
          <p className="p1 mt-4">
            Pastikan anda sudah menyetujui{" "}
            <span className="text-primary400">Syarat dan Ketentuan</span>{" "}
            CareerBoost dalam kebijakan transaksi
          </p>

          <div className="flex flex-col">
            <h2 className="h4 font-bold mt-12">Pilih Metode Pembayaran</h2>
            <div className="flex flex-col gap-4 mt-8 bg-neutral-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-4">
                <input type="radio" name="bayar" />
                <img src={debit} alt="" />
                <p className="p1 font-semibold">Kartu kredit/debit</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="bayar" />
                <img src={alfa} alt="" />
                <p className="p1 font-semibold">Alfamart</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="bayar" />
                <img src={indo} alt="" />
                <p className="p1 font-semibold">Indomaret</p>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" name="bayar" />
                <img src={ovo} alt="" />
                <p className="p1 font-semibold">OVO</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between mt-16 bg-neutral-50 rounded-xl px-6 py-8 shadow-md ">
              <div className="flex gap-8 items-center">
                <img className="w-32 xl:w-48" src={item} alt="" />
                <p className="h6 font-bold xl:w-48">
                  Intro to Website Development
                </p>
              </div>
              <p className="h6 font-medium text-secondary400">Rp.239.000</p>
            </div>
          </div>
        </div>
        <div className="flex xl:hidden">
          <Link className="mx-auto" to="/courseCheckout">
            <PrimaryButton>
              <p className="h5">Checkout</p>
            </PrimaryButton>
          </Link>
        </div>
        <div className="hidden xl:flex flex-col gap-6 sticky top-28 px-6 py-6 bg-neutral-50 h-max w-32 rounded-xl shadow-lg xl:basis-1/4">
          <p className="h5 font-bold mb-8">Ringkasan</p>
          <div className="flex justify-between">
            <p className="h6">Harga asli</p>
            <p className="h6">Rp 239.000</p>
          </div>
          <div className="flex justify-between">
            <p className="h6">Diskon</p>
            <p className="h6">Rp 0</p>
          </div>
          <div>
            <hr className="border-t-neutral-400" />
          </div>
          <div className="flex justify-between">
            <p className="h6 font-bold">Total</p>
            <p className="h6 font-bold">Rp 239.000</p>
          </div>
          <p className="p2">
            Dengan melakukan checkout, anda menyetujui{" "}
            <span className="text-primary400">ketentuan layanan</span>{" "}
            CareerBoost
          </p>
          <Link className="mx-auto" to="/courseCheckout">
            <PrimaryButton>
              <p className="h5">Checkout</p>
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </WebLayout>
  );
};

export default CourseCheckout;
