import { Link, Navigate, useNavigate } from "react-router-dom";
import SelectInput from "./SelectInput";
import PrimaryButton from "../button/PrimaryButton";
import Interest from "../../data/Interest";
import Input from "./Input";
import Label from "./Label";
import { useState } from "react";
import BaseURL from "../../api/BaseURL";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [auth, setAuth] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    interestID: [],
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('')
    await BaseURL.post("user/register", {
      full_name: auth.full_name,
      username: auth.username,
      email: auth.email,
      password: auth.password,
      interestID: auth.interestID,
    })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setMsg(err.response.data.message);
      });
  };

  return (
    <div className="basis-1/2 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 sm:gap-10 mt-10 sm:mt-8 md:mt-5 md:w-11/12 lg:w-10/12 xl:gap-8 xl:w-7/12 2xl:gap-10 2xl:w-6/12 "
      >
        <p className="h6 text-red-400 font-bold">{msg}</p>
        <h1 className="text-3xl md:text-4xl text-primary600 font-extrabold 2xl:mt-10">
          SIGN UP
        </h1>

        <div className="flex flex-col">
          <Label id="name" text="Fullname" />
          <Input
            type="text"
            id="name"
            holder="Enter your name"
            handleChange={(e) => {
              setAuth({ ...auth, full_name: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <Label id="user" text="Username" />
          <Input
            type="text"
            id="user"
            holder="Enter your username"
            handleChange={(e) => {
              setAuth({ ...auth, username: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <Label id="mail" text="Email" />
          <Input
            type="text"
            id="mail"
            holder="Enter your email"
            handleChange={(e) => {
              setAuth({ ...auth, email: e.target.value });
            }}
          />
        </div>

        <div className="flex flex-col">
          <Label id="pwd" text="Password" />
          <Input
            type="password"
            id="pwd"
            holder="Enter your password"
            handleChange={(e) => {
              setAuth({ ...auth, password: e.target.value });
            }}
          />
        </div>

        <div className="flex w-full flex-col">
          <Label text="Interest" />
          <SelectInput input={auth} setInput= {setAuth} interestID={auth.interestID} />
        </div>

        <div className="flex flex-col">
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
        <div className="flex justify-center">
          <p className=" text-lg md:text-xl xl:text-base font-medium text-primary500">
            Have an account?{" "}
            <Link to="/login" className="font-bold text-primary500">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
