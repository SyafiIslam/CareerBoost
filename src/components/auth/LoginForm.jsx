import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import OtherButton from "../button/OtherButton";
import PrimaryButton from "../button/PrimaryButton";
import Input from "./Input";
import Label from "./Label";
import data from "../../data/user.json";
import BaseURL from "../../api/BaseURL";
import Cookies from "js-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await BaseURL.post("user/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      const token= Cookies.get('access_token')
      window.localStorage.setItem("token", token)
    })
    .catch((err) => setMsg(err.response.data.message))
  };
  return (
    <div className="basis-1/2 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 sm:gap-10 mt-10 sm:mt-8 md:mt-5 w-10/12 md:w-11/12 lg:w-10/12 xl:gap-8 xl:w-7/12 2xl:gap-10 2xl:w-6/12 "
      >
        <p className="h6 text-red-400 font-bold">{msg}</p>
        <h1 className="text-3xl md:text-4xl text-primary600 font-extrabold md:mb-5 2xl:mt-10">
          HELLO, WELCOME!
        </h1>

        <div className="flex flex-col">
          <Label id="uname" text="Username/Email" />
          <Input
            type="text"
            id="uname"
            holder="Enter your Email"
            setEmail={setEmail}
          />
        </div>

        <div className="flex flex-col">
          <Label id="pwd" text="Password" />
          <Input
            type="password"
            id="pwd"
            holder="Enter your Password"
            setPassword={setPassword}
          />
          <a
            href=""
            className="self-end mt-8 text-md md:text-xl xl:text-base font-bold text-primary500"
          >
            Forget Password
          </a>
        </div>

        <div className="flex flex-col">
          <PrimaryButton type="submit">Log In</PrimaryButton>
          <div className="flex justify-center items-center gap-3 my-5">
            <hr className="bg-gray-400 w-44 h-1 basis-1/3" />
            <p className="font-bold text-xl xl:text-base text-neutral-500 ">
              Or
            </p>
            <hr className="bg-gray-400 w-44 h-1 basis-1/3" />
          </div>
          <OtherButton>
            <FcGoogle className=" text-2xl md:text-3xl xl:text-2xl" />
            <p>Log In With Google</p>
          </OtherButton>
        </div>
        <div className="flex justify-center">
          <p className="text-base md:text-xl xl:text-base font-medium text-primary500">
            Don’t have an account?{" "}
            <Link to="/register" className="font-bold text-primary500">
              Create
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
