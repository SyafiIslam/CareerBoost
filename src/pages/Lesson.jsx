import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import video from "../assets/video/video.mp4";
import Dropdown from "../layout/Dropdown";
import { useParams } from "react-router-dom";
import BaseURL from "../api/BaseURL";

const Lesson = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [video, setVideo] = useState("");
  const [judul, setJudul] = useState("");
  const id = useParams();
  const token = window.localStorage.getItem("token");

  const getLesson = async () => {
    await BaseURL.get(`/api/coursedata/${id.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setData(res.data.data.playlist);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoad(true);
    token && getLesson();
    setLoad(false);
    console.log(data);
  }, []);

  return (
    <WebLayout>
      <div className="flex flex-col p-6 xl:p-12">
        <h1 className="h4 font-bold">{judul}</h1>
        <div>
          <iframe
            className="my-4 md:my-8 mx-auto rounded-xl w-fit h-fit md:w-full md:h-96 xl:h-[65vh]"
            src={video}
          ></iframe>
        </div>
        <h2 className="font-bold mb-6 h4">Konten Kursus</h2>
        {data.map((list, index) => {
          return (
            <Dropdown
              setJudul={setJudul}
              setVideo={setVideo}
              key={index}
              list={list}
            />
          );
        })}
      </div>
    </WebLayout>
  );
};

export default Lesson;
