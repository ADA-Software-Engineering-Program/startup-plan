import React from "react";

const SubmitButton = ({ title }) => {
  return (
    <div className="submit-btn w-90 mx-auto sm:w-[70%] md:w-[75%] h-[45px] overflow-hidden bg-orange mt-8 rounded-md">
      <button className="w-full h-full uppercase text-white ">{title}</button>
    </div>
  );
};

export default SubmitButton;
