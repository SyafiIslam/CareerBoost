import React, { useEffect, useState } from "react";
import BaseURL from "../../api/BaseURL";
import { useParams } from "react-router-dom";

const Pengalaman = ({}) => {
  const id = useParams();
  const token = window.localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const getPengalaman = async () => {
    setLoad(true);
    BaseURL.get(`/api/mentorinfo/pengalaman/${id.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        setLoad(fal);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getPengalaman();
  }, []);
  return (
    <div className="flex flex-col gap-8 min-h-[52vh]">
      <p className="font-bold h5">Pengalaman</p>
      {data.map((data) => {
        return (
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img className="w-10" src={data.logo} alt="" />
              <div className="flex flex-col">
                <p className="h6 font-semibold">Front End Developer</p>
                <p className="p1 text-neutral-400">Spotify corporation</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pengalaman;
