import React, { useEffect, useState } from "react";
import Interest from "../../data/Interest";
import Select from "react-select";

const SelectInput = ({ interestID, setInput, input, defaultInterest = "" }) => {
  const [interest, setInterest] = useState([]);

  const getKeyByValue= (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const objectName= getKeyByValue(input, interestID)

  const inputInterest = () => {
    interestID = [];
    interest.map((item) => {
      interestID.push(parseInt(item.value));
    });

    setInput({ ...input, [objectName]: interestID });
  };

  useEffect(() => {
    inputInterest();
  }, [interest]);

  return (
    <Select
      placeholder="Choose Interest"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: "#94A3B8",
          borderWidth: "2px",
          borderRadius: "32px",
          padding: ".5% 2%",
          fontSize: "18px",
        }),
      }}
      isMulti
      defaultValue={defaultInterest}
      options={Interest}
      onChange={(item) => {
        setInterest(item);
      }}
    />
  );
};

export default SelectInput;
