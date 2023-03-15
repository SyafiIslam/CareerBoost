import React from "react";
import { Link } from "react-router-dom";
import { Courses } from "../../data/Courses.js";

const Card = () => {
  return (
    <>
      {Courses.map((data, index) => {
        return (
          <Link
            to="/courseDetail"
            key={index}
            className="flex flex-col justify-center bg-neutral-50 w-10/12 md:w-70 xl:w-72 2xl:w-64 rounded-3xl shadow-lg"
          >
            <img className="w-full xl:w-64" src={data.img} />
            <div className="flex flex-col mt-3 justify-center items-center p-4">
              <h5 className="text-primary600 font-bold p1">{data.title}</h5>
              <div className="flex gap-2 my-3">
                <p className="text-xl md:text-2xl">{data.star}</p>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-secondary500 p1 font-medium">
                    {data.rating}
                  </p>
                  <p className="text-neutral-400 p2">{data.vote}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="p3 text-center xl:text-left">{data.desc}</p>
              </div>
              <div className="self-start mt-3">
                <p className="text-secondary500 font-bold self-start h6">
                  {data.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
