import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import BaseURL from "../../api/BaseURL";
import Card from "../card/CourseCard";

const Rekomendasi = () => {
  const [rec, setRec] = useState([]);
  const [load, setLoad] = useState(false);
  const token = window.localStorage.getItem("token");

  const getRecCourse = async () => {
    await BaseURL.get("/api/courseinfo/rekomendasi", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setRec(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    setLoad(true);
    getRecCourse();
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
        {rec.map((list) => {
          return <Card data={list} />;
        })}
      </div>
    </div>
  );
};

export default Rekomendasi;
