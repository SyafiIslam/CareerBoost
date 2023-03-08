import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Dropdown = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setClicked(!clicked);
        }}
        className={`${clicked ? "bg-primary400" : "bg-white"} flex border border-neutral-400 mb-1 py-4 px-12 rounded-full cursor-pointer`}
      >
        <div className="flex justify-between items-center text-sm w-full">
          <div className="flex gap-4 w-fit items-center">
            {clicked ? (
              <IoMdArrowDropup className="text-xl xl:text-3xl" />
            ) : (
              <IoMdArrowDropdown className="text-xl xl:text-3xl" />
            )}
            <p className="p1">HTML Dasar</p>
          </div>
            <p className="p2 hidden md:block">
              5 video pembelajaran 4 jam 35 menit
            </p>
        </div>
      </div>
      <div
        className={`mt-2 p-4 ${
          clicked ? "flex" : "hidden"
        } flex-col  border-2 border-neutral-50 bg-neutral-50 rounded-3xl`}
      >
        <ul>
          <p className="p1 text-neutral-700">Pemgenalan</p>
          <p className="p1 text-neutral-700">HTML dasar : tag</p>
          <p className="p1 text-neutral-700">HTML dasar : paragraf</p>
          <p className="p1 text-neutral-700">HTML dasar : heading</p>
          <p className="p1 text-neutral-700">HTML dasar : list</p>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
