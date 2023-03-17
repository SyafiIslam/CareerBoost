import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import jumbo from "../assets/mentoring/jumbo.svg";
import icon from "../assets/magang/search.svg";
import kanan from "../assets/magang/kanan.svg";
import kiri from "../assets/magang/kiri.svg";
import interest from "../data/Interest";
import mentor from "../data/mentoring.json";
import MentorAll from "../components/card/MentorAll";
import MentorSwipe from "../components/card/MentorSwipe";
import Slider from "react-slick";
import BaseURL from "../api/BaseURL";
import { ImSpinner2 } from "react-icons/im";


const Mentor = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const token = window.localStorage.getItem("token");

  const settings = {
    dots: true,
    arrows: false,
    centerMode: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const getAllMentor = async () => {
    await BaseURL.get(
      "/api/mentorinfo?limit=3&page=1&interestID=[1,2]&search=",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => {
        setData(res.data.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllMentor();
  }, []);

  return (
    <WebLayout>
      {load ? (
        <div className="container-svg flex justify-center items-center h-screen">
          <ImSpinner2 className="w-24 h-24 animate-spin text-primary400" />
        </div>
      ) : (
        <div className="p-4 xl:p-16 w-full">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex items-center justify-center flex-col gap-6 basis-3/4">
              <p className="h3 font-bold text-primary600 text-center xl:text-left">
                Program Mentoring bersama Mentor Berpengalaman di Bidangnya
              </p>
              <p className="h6 text-neutral-600 text-center xl:text-left">
                Temukan mentor yang dapat membantumu dalam mempelajari front
                end, back end, data science, AI, atau cyber security.
              </p>
            </div>

            <img className="basis-5/12" src={jumbo} alt="" />
          </div>

          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start mt-8">
            <div className="bg-neutral-50 flex flex-col p-6 rounded-3xl shadow-md gap-3 xl:sticky xl:top-28">
              <h1 className="h5 font-bold mb-6 ">Category</h1>
              {interest.map((data, index) => {
                return (
                  <div key={index} className="flex gap-3">
                    <input className="text-3xl" type="checkbox" id={index} />
                    <label className="p1" htmlFor={index}>
                      {data.label}
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col w-4/5">
              <div className="flex justify-center xl:justify-start flex-row-reverse my-16">
                <input
                  type="text"
                  placeholder="Search"
                  className="py-2 px-3 xl:py-6 xl:px-20 pl-12 border border-neutral-700 rounded-full focus:outline-none h5 w-full"
                />
                <img
                  src={icon}
                  className="w-6 -mr-10 xl:-mr-16 scale-75 xl:scale-100 relative"
                  alt=""
                />
              </div>

              <div className="">
                <p className="h4 font-bold mb-16">Recommended</p>
                <div className="flex flex-col gap-8">
                  <Slider {...settings}>
                    {data.map((list, index) => {
                      return (
                        <MentorSwipe
                          key={index}
                          profile_photo={list.profile_photo}
                          full_name={list.full_name}
                          perusahaan={list.perusahaan}
                          lokasi={list.lokasi}
                          rate={list.rate}
                          deskripsi={list.deskripsi}
                          exp={list.exp}
                          interest={list.interest}
                          skill={list.skill}
                        />
                      );
                    })}
                  </Slider>
                </div>
              </div>

              <div className="flex gap-16 flex-col">
                <div className="flex justify-between">
                  <p className="h4 font-bold my-16">All</p>

                  <div className="flex items-center gap-4 md:gap-5">
                    <img src={kiri} alt="" />
                    <p className="h6">1</p>
                    <p className="h6">2</p>
                    <p className="h6">3</p>
                    <img src={kanan} alt="" />
                  </div>
                </div>
                {data.map((list, index) => {
                  return (
                    <MentorAll
                      key={index}
                      profile_photo={list.profile_photo}
                      full_name={list.full_name}
                      perusahaan={list.perusahaan}
                      lokasi={list.lokasi}
                      rate={list.rate}
                      deskripsi={list.deskripsi}
                      exp={list.exp}
                      interest={list.interest}
                      skill={list.skill}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </WebLayout>
  );
};

export default Mentor;
