import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import BaseURL from "../../api/BaseURL";
import Card from "../card/CourseCard";

const CourseHome = () => {
  const [home, setHome] = useState([]);
  const [load, setLoad] = useState(false);
  const token = window.localStorage.getItem("token");

  const getHome = async () => {
    await BaseURL.get("/api/courseinfo?search=", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setHome (res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    setLoad(true);
    getHome();
    setLoad(false);
  });

  if (load)
    return (
      <div className="container-svg flex justify-center items-center h-screen">
        <ImSpinner2 className="w-24 h-24 animate-spin text-primary400" />
      </div>
    );
  return (
    <div>
      <div className="flex items-center justify-between mt-8 p-4 xl:px-20 md:p-10">
        <h2 className="font-bold text-neutral-900 h3">Recommended</h2>
        <p className="text-primary500 h4">See All</p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap mt-8 p-4">
        {home.map((list) => {
          return <Card data={list} />;
        })}
      </div>
    </div>
  );
};

export default CourseHome;
