import React from "react";

const PrimaryButton = ({children, type}) => {
  return (
    <button type={type} className="bg-primary400 py-3 px-5 md:py-5 xl:py-3 rounded-full text-white font-bold text-lg md:text-2xl xl:text-lg flex justify-center items-center gap-2 hover:shadow-lg hover:shadow-primary100 transition-all duration-300">
      {children}
    </button>
  );
};

export default PrimaryButton;
