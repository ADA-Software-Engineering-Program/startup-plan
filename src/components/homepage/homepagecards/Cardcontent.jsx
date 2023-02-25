import React from "react";

const Cardcontent = ({ figure, text, numbers }) => {
  return (
    <div className="py-5 px-4 cards bg-lightOrange">
      <figure className="w-[70px] h-[70px] mx-auto ">
        <img src={figure} alt="figure-name" className="w-full h-full" />
      </figure>

      <div className="w-90 mx-auto">
        <p className="capitalize my-5 text-center font-bold text-sm md:text-base">
          {text}
        </p>

        <p className="capitalize my-5 text-center text-white font-bold text-lg md:text-2xl">
          {numbers}
        </p>
      </div>
    </div>
  );
};

export default Cardcontent;
