import React from "react";
import { Link } from "react-router-dom";
import { Courses } from "../../data/Courses.js";

const Card = () => {
  return (
    <>
      {Courses.map((data, index) => {
        return (
          <Link to='/courseDetail' key={index} className="flex flex-col justify-center bg-neutral-50 p-4 w-10/12 md:w-70 xl:w-72 2xl:w-80 rounded-3xl shadow-lg">
            <div className="flex justify-center">
              <img className="w-44 xl:w-64" src={data.img} />
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h5 className="text-primary600 font-bold p1">
                {data.title}
              </h5>
              <div className="flex gap-2 my-3">
                <p className="text-xl md:text-2xl">{data.star}</p>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-secondary500 p1 font-medium">{data.rating}</p>
                  <p className="text-neutral-400 p2">
                    {data.vote}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="p3 text-justify xl:text-left">
                  {data.desc}
                </p>
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
