import React from "react";

const OtherButton = ({ children, handleClick }) => {
  return (
    <button
    onClick={handleClick}
    className="border-2 border-neutral-400 py-3 px-5 md:py-5 xl:py-3 xl:px-8 rounded-full text-neutral-400 text-lg md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-md hover:font-bold transition-all duration-300">
      {children}
    </button>
  );
};

export default OtherButton;
