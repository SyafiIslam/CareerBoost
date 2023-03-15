import React from "react";

const Input = ({
  type = "text",
  id,
  holder,
  handleChange,
  value,
}) => {
  return (
    <input
      value={value}
      required
      type={type}
      id={id}
      placeholder={holder}
      className="border-2 border-neutral-400 rounded-full py-2 px-3 md:py-3 md:px-4 xl:py-2 xl:px-5"
      onChange={handleChange}
    />
  );
};

export default Input;
