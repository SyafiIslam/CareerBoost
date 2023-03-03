import React from "react";
import thumbnail from "../../assets/course/thumbnail.svg";

const Card = () => {
  return (
    <div className="flex flex-col justify-center bg-neutral-50 p-5 w-10/12 md:w-5/12 xl:w-3/12 2xl:w-2/12 rounded-3xl shadow-lg">
      <div className="flex justify-center">
        <img className="" src={thumbnail} />
      </div>
      <div className="flex flex-col mt-3 justify-center items-center">
        <h5 className="text-primary600 font-bold text-base md:text-lg">
          Intro to Website Development
        </h5>
        <div className="flex gap-2 my-3">
          <p className="text-xl md:text-2xl">⭐⭐⭐⭐⭐</p>
          <div className="flex items-center gap-1">
            <p className="text-secondary500 text-base md:text-lg">5.0</p>
            <p className="text-neutral-400 text-sm md:text-base">(1.004)</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-sm md:text-base text-justify xl:text-left">
            Lorem ipsum dolor sit amet consectetur. Ipsum aenean ac semper donec
            aliquam sagittis. Ac faucibus cras bibendum sodales ipsum eget ut.
            Sed cras ut sem faucibus.
          </p>
        </div>
        <div className="self-start mt-3">
          <p className="text-secondary500 font-bold self-start md:text-lg">
            Rp 269.000
            </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
