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
        className={`${clicked && "bg-primary400"} flex border border-neutral-400 mb-1 py-2 px-2 rounded-full hover:bg-primary400 transition-all duration-200`}
      >
        <div className="flex justify-between items-center text-sm w-full">
          <div className="flex gap-2 w-fit">
            {clicked ? (
              <IoMdArrowDropup className="text-xl" />
            ) : (
              <IoMdArrowDropdown className="text-xl" />
            )}
            <p className="p1">HTML Dasar</p>
          </div>
          <div className="hidden md:block w-fit text-right ">
            <p className="p2">
              5 video pembelajaran 4 jam 35 menit
            </p>
          </div>
        </div>
      </div>
      <div
        className={`mt-2 p-4 ${
          clicked ? "flex" : "hidden"
        } flex-col  border-2 border-neutral-50 bg-neutral-50 rounded-3xl`}
      >
        <ul>
          <p className="p1">Pemgenalan</p>
          <p className="p1">HTML dasar : tag</p>
          <p className="p1">HTML dasar : paragraf</p>
          <p className="p1">HTML dasar : heading</p>
          <p className="p1">HTML dasar : list</p>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
