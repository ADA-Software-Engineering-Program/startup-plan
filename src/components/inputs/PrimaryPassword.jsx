import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const PrimaryPassword = ({
  mb = "mb-2",
  name,
  value,
  onChangeInput,
  placeholder = "********",
}) => {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide);
  };
  return (
    <div
      className={`relative w-90 mx-auto h-[45px]  sm:w-[70%] md:w-[75%] ${mb}`}
    >
      <div className=" w-full h-full rounded-md overflow-hidden">
        <input
          type={hide ? "password" : "text"}
          placeholder={placeholder}
          onChange={onChangeInput}
          value={value}
          className="w-full h-full border-0 bg-aboutBg px-3 py-1 focus-visible:border-0 focus-visible:outline-none"
        />
      </div>
      <span
        className=" cursor-pointer h-full absolute top-[15px] right-3 text-gray-500"
        onClick={handleHide}
      >
        {hide ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
};

export default PrimaryPassword;
