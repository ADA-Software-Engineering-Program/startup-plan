import React from "react";

const Cardcontent = ({ figure, text, numbers }) => {
  return (
    <div
      className="py-4 px-4 cards"
      style={{ backgroundColor: "rgba(255, 69, 0, 0.2)" }}
    >
      <figure className="w-[70px] h-[70px] mx-auto ">
        <img src={figure} alt="figure-name" className="w-full h-full" />
      </figure>

      <div className="w-90 mx-auto">
        <p className="capitalize my-1 text-center font-bold text-sm md:text-base p-0">
          {text}
        </p>

        <p className="capitalize my-1 text-center text-white font-bold text-lg md:text-2xl p-0">
          {numbers}
        </p>
      </div>
    </div>
  );
};

export default Cardcontent;
