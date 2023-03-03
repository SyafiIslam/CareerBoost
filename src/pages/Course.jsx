import React from "react";
import WebLayout from "../components/layout/WebLayout";
import jumbo from "../assets/course/jumbo.svg";
import icon from "../assets/course/search.svg";
import thumbnail from "../assets/course/thumbnail.svg";
import Card from "../components/layout/Card";

const Course = () => {
  return (
    <WebLayout>
      <div className="mt-8 p-4 xl:px-16 flex flex-col xl:flex-row xl:items-center xl:justify-evenly xl:gap-28">
        <div className="flex flex-col gap-5 xl:w-6/12">
          <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary600 text-center xl:text-left">
            Kursus Online Bersertifikat Disertai Mini Project untuk Menambah Portofolio
          </h1>
          <p className="text-neutral-600 text-center xl:text-left text-lg md:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur. Purus euismod arcu posuere ut. Lacus fringilla mi neque netus ut ullamcorper commodo habitasse
            ut. Suspendisse quis eu sem neque in. Nulla porta mollis enim pellentesque. At pulvinar sed sed vestibulum duis pretium enim. Et nec malesuada eget nam velit et. Iaculis sagittis id nisi pretium iaculis at eu.
          </p>
        </div>

        <div className="mt-8 xl:w-5/12 flex justify-center">
          <img className="w-10/12" src={jumbo} alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <img src={icon} className="w-6 absolute left-0" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="w-10/12 py-2 px-3 xl:py-6 pl-12 border border-neutral-700 rounded-full focus:outline-none bg-neutral-100 xl:text-2xl xl:w-8/12"
        />
      </div>

      <div className="flex items-center justify-between mt-8 p-4 md:p-10">
        <h2 className="font-bold text-neutral-900 text-xl md:text-3xl xl:text-4xl">Recommended</h2>
        <p className="text-primary500 text-lg md:text-xl xl:text-3xl">
          See All
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap mt-8">
        {[1, 2, 3, 4].map((index) => {
          return <Card key={index} />
        })}
      </div>

      <div className="flex items-center justify-between mt-8 p-4 md:p-10">
        <h2 className="font-bold text-neutral-900 text-xl md:text-3xl xl:text-4xl">Front End Developer</h2>
        <p className="text-primary500 text-lg md:text-xl xl:text-3xl">
          See All
        </p>
      </div>

      <div className="flex justify-center gap-10 flex-wrap mt-8 p-4">
        {[1, 2, 3, 4].map((index) => {
          return <Card key={index} />
        })}
      </div>
    </WebLayout>
  );
};

export default Course;
