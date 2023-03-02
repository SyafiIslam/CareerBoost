import { Link } from "react-router-dom";
import Select from "react-select";
import PrimaryButton from "../button/PrimaryButton";
import Interest from "../interest/Interest";
import Input from "./Input";
import Label from "./Label";

const RegisterForm = () => {

  return (
    <div className="basis-1/2 flex justify-center items-center">
      <form className="flex flex-col gap-6 sm:gap-10 mt-10 sm:mt-8 md:mt-5 w-100% md:w-11/12 lg:w-10/12 xl:gap-8 xl:w-7/12 2xl:gap-10 2xl:w-6/12 ">
        <h1 className="text-3xl md:text-4xl text-primary600 font-extrabold 2xl:mt-10">SIGN UP</h1>

        <div className="flex flex-col">
          <Label id='name' text='Fullname' />
          <Input type='text' id='uname' holder='Enter your name' />
        </div>

        <div className="flex flex-col">
          <Label id='mail' text='Email' />
          <Input type="email" id='mail' holder='Enter your email' />
        </div>

        <div className="flex flex-col">
          <Label id='pwd' text='Password' />
          <Input type='password' id='pwd' holder='Enter your password' />
        </div>

        <div className="flex flex-col">
          <Label id='interest' text='Interest' />
          <Select
            placeholder='Choose Interest'
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: "#94A3B8",
                borderWidth: "2px",
                borderRadius: '32px',
                padding: '.5% 2%',
                fontSize: '18px',
              }),
            }}
            
            isMulti
            options={Interest}
            onChange={(item) => {
              setInterest(item)
            }}
          />
        </div>
        <div className="flex flex-col">
          <PrimaryButton>
            Sign Up
          </PrimaryButton>
        </div>
        <div className="flex justify-center">
          <p className=" text-lg md:text-xl xl:text-base font-medium text-primary500">
            Have an account? <Link to='/login' className="font-bold text-primary500">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
