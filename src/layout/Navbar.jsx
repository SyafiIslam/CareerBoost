import React, { useState } from "react";
import avatar from "../assets/Navbar/avatar.svg";
import logo from "../assets/Navbar/Logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import navList from "../data/Navlist.json";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState("true");
  let loc= useLocation()
  console.log(loc);

  return (
    <div className="flex py-4 px-4 text-lg z-50 font-medium justify-between items-center shadow-md sticky top-0 bg-white ">
      <div className="flex gap-12 md:gap-8 items-center w-5/12 md:w-2/12 xl:w-12/12">
        <img src={logo} alt="" />

        <ul className="hidden md:flex gap-14 md:gap-7 text-base">
          {navList.map((list, index) => {
            return (
              <Link
                key={index}
                to={list.path}
                className={`${loc.pathname === list.path && "text-primary400"} hover:font-bold transition-all duration-200 active:`}
              >
                <li>{list.name}</li>
              </Link>
            );
          })}
        </ul>

        <div
          id="menu"
          className={`absolute flex-col items-center self-start ${
            hidden ? "hidden" : "flex"
          } py-8 mt-16 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          {navList.map((list, index) => {
            return (
              <ul key={index}>
                <Link
                  to={list.path}
                  className="hover:font-bold transition-all duration-200"
                  onClick={() => {
                    setHidden(!hidden);
                  }}
                >
                  <li className="h5">{list.name}</li>
                </Link>
              </ul>
            );
          })}
          <Link
            to="/profile/data"
            className="hover:font-bold transition-all duration-200"
            onClick={() => {
              setHidden(!hidden);
            }}
          >
            <li className="h5 list-none">Profile</li>
          </Link>
        </div>
      </div>
      <Link to='/profile/data'>
        <div className="hidden md:flex items-center gap-5 md:gap-2 hover:font-bold hover:text-primary400 transition-all duration-300">
          <IoMdArrowDropdown className="" />
          <p className="text-base ">Muhammad Zidan</p>
          <img src={avatar} className="md:w-2/12" />
        </div>
      </Link>
      <div className="md:hidden">
        <button>
          {hidden ? (
            <GiHamburgerMenu
              onClick={() => {
                setHidden(!hidden);
              }}
            />
          ) : (
            <RxCross2
              onClick={() => {
                setHidden(!hidden);
              }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
