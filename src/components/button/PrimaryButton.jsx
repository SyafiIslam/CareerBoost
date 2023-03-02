import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <button className="bg-primary400 py-3 md:py-5 xl:py-3 rounded-full text-white font-bold text-lg md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:bg-primary500 hover:text-gray-200 transition-all duration-200">
      {children}
    </button>
  );
};

export default PrimaryButton;
