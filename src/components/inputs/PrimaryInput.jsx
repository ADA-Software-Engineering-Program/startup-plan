import React from "react";

const PrimaryInput = ({
  name,
  value,
  onChangeInput,
  placeholder = "USERNAME",
  type = "text",
}) => {
  return (
    <>
      <div className="w-90 mx-auto h-[45px] rounded-md overflow-hidden sm:w-[70%] md:w-[75%] mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChangeInput}
          value={value}
          className="w-full h-full border-0 bg-aboutBg px-3 py-1 focus-visible:border-0 focus-visible:outline-none"
        />
      </div>
    </>
  );
};

export default PrimaryInput;
