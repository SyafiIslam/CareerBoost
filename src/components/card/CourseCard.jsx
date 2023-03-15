import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Courses } from "../../data/Courses.js";
import BaseURL from "../../api/BaseURL";
import Cookies from "js-cookie";
import { BsStarFill, BsStar } from "react-icons/bs";
import Rating from "react-rating";

const Card = () => {
  const [data, setData] = useState([]);

  const token = window.localStorage.getItem('token')
  const getAllCourse = async () => {
    await BaseURL.get("/api/courseinfo?search=", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <>
      {data.map((data, index) => {
        return (
          <Link
            to="/courseDetail"
            key={index}
            className="flex flex-col justify-center bg-neutral-50 w-10/12 md:w-70 xl:w-72 rounded-3xl shadow-lg"
          >
            <img className="w-full rounded-t-3xl" src={data.foto} />
            <div className="flex flex-col mt-3 justify-center items-center p-4">
              <h5 className="text-primary600 font-bold p1">{data.judul}</h5>
              <div className="flex gap-2 my-3 justify-center items-center">
                <Rating
                  className="text-xl md:h6 font-medium text-yellow-400  "
                  emptySymbol={<BsStar />}
                  fullSymbol={<BsStarFill />}
                  initialRating={data.rate}
                  readonly
                />
                <div className="flex gap-1 items-center">
                  <p className="text-secondary500 p1 font-medium">
                    {data.rate}
                  </p>
                  <p className="text-neutral-400 p2">({data.vote})</p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="p3 text-center xl:text-left">{data.deskripsi}</p>
              </div>
              <div className="self-start mt-3">
                <p className="text-secondary500 font-bold self-start h6">
                  Rp {data.price}
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
