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
        className="flex border border-neutral-400 p-4 rounded-full "
      >
        <div className="flex justify-center items-center text-sm ">
          <div className="flex gap-2">
            {clicked ? (
              <IoMdArrowDropup className="text-xl" />
            ) : (
              <IoMdArrowDropdown className="text-xl" />
            )}
            <p>HTML Dasar</p>
          </div>
          <div>
            <p className="hidden  text-sm">
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
          <li>ufwafa</li>
          <li>dwasdwaf</li>
          <li>fwafawfwa</li>
          <li>fwafwafa</li>
          <li>fwfwafwa</li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
