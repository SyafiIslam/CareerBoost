import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseURL from "../../api/BaseURL";
import { BsStarFill, BsStar } from "react-icons/bs";
import Rating from "react-rating";

const Card = ({ id, foto, judul, rate, vote, deskripsi, price, index }) => {
  return (
    <Link
      to={`/courseDetail/${id}`}
      key={index}
      className="flex flex-col justify-center bg-neutral-50 w-10/12 md:w-70 xl:w-72 rounded-3xl shadow-lg"
    >
      <img className="w-full rounded-t-3xl" src={foto} />
      <div className="flex flex-col mt-3 justify-center items-center p-4">
        <h5 className="text-primary600 font-bold p1">{judul}</h5>
        <div className="flex gap-2 my-3 justify-center items-center">
          <Rating
            className="text-xl md:h6 font-medium text-yellow-400  "
            emptySymbol={<BsStar />}
            fullSymbol={<BsStarFill />}
            initialRating={rate}
            readonly
          />
          <div className="flex gap-1 items-center">
            <p className="text-secondary500 p1 font-medium">{rate}</p>
            <p className="text-neutral-400 p2">({vote})</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="p3 text-center xl:text-left">{deskripsi}</p>
        </div>
        <div className="self-start mt-3">
          <p className="text-secondary500 font-bold self-start h6">
            Rp {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
