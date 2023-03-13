import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import avatar2 from "../assets/profile/avatar2.svg";
import Cookies from "js-cookie";
import PrimaryButton from "../components/button/PrimaryButton";
import { RxCross2 } from "react-icons/rx";

const Profile = () => {
  const [click, setClick] = useState("data");
  const [fotoClicked, setFotoClicked] = useState(false);
  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleLogout = () => {
    window, localStorage.removeItem("token");
    Cookies.remove("token");
    window.location.reload();
  };

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
    setFotoClicked(!fotoClicked);
  };

  return (
    <WebLayout>
      <div className="flex flex-col xl:flex-row p-6 gap-8">
        <div className="flex flex-col basis-3/12">
          <div className="flex flex-col gap-8 bg-neutral-50 py-6 xl:py-10 px-8 rounded-xl shadow-xl mb-4 xl:mb-8">
            <div
              className={`absolute flex-col items-center justify-center ${
                fotoClicked ? "flex" : "hidden"
              } p-8 mt-16 font-bold bg-white sm:w-auto xl:w-5/12 sm:self-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-md rounded-xl`}
            >

              <p className="h5 font-bold">Upload foto profil baru</p>
              <RxCross2 onClick={() => setFotoClicked(!fotoClicked)} className="cursor-pointer hover:text-red-500 transition-all duration-300 absolute top-3 right-4 h5 font-bold" />

              <div className="flex justify-center items-center border-primary400 rounded-xl border-2 p-16 border-dashed mt-8 w-full">
                <PrimaryButton handleClick={() => inputFile.current.click()}>
                  Pilih file
                </PrimaryButton>

                <input
                  className="hidden"
                  onChange={() => handleChange()}
                  ref={inputFile}
                  type="file"
                />
              </div>
            </div>
            <img
              onClick={() => setFotoClicked(!fotoClicked)}
              className=" md:w-3/12 xl:w-5/12 mx-auto cursor-pointer"
              src={avatar2}
              alt=""
            />
            <div className="flex flex-col gap-4 justify-center items-start">
              <h1 className="font-bold h5">Pengaturan Akun</h1>
              <Link
                onClick={() => {
                  setClick("data");
                }}
                to="data"
                className={`h6 ${
                  click === "data" && "text-primary400 font-bold"
                } hover:font-bold hover:text-primary400 transition-all duration-300`}
              >
                Data Pribadi
              </Link>
              <Link
                onClick={() => {
                  setClick("pengalaman");
                }}
                to="pengalaman"
                className={`h6 ${
                  click === "pengalaman" && "text-primary400 font-bold"
                } hover:font-bold hover:text-primary400 transition-all duration-300`}
              >
                Pengalaman
              </Link>
              <Link
                to="langganan"
                className={`h6 ${
                  click === "langganan" && "text-primary400 font-bold"
                } hover:font-bold hover:text-primary400 transition-all duration-300`}
                onClick={() => {
                  setClick("langganan");
                }}
              >
                Langganan
              </Link>
              <Link>
                <button
                  onClick={() => handleLogout()}
                  className="text-red-500 "
                >
                  <p className="h6 hover:font-bold transition-all duration-300">
                    Log out
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" p-5 md:p-10 xl:py-16 xl:px-8 bg-neutral-50 rounded-xl shadow-xl basis-9/12 h-max xl:mt-0">
          <Outlet />
        </div>
      </div>
    </WebLayout>
  );
};

export default Profile;
