import React from "react";
import ming from "../../assets/ming.png";

const CarouselContent = ({ pic, text, name, title }) => {
  return (
    <section className="bg-white w-full py-4 carousel-card">
      <div className=" flex items-center">
        <figure className="m-0 p-0 h-[80px] w-[100px]">
          <img src={ming} alt="ming" className="w-full h-full" />
        </figure>

        <div className="w-[100%]  pl-5 pr-2 border-aboutBg border-l-2">
          <p className="text-sm w-full leading-[1.5] font-semibold">{text}</p>

          <figure className="m-0 p-0 mt-3 w-[50px] h-[50px] rounded-[50%] overflow-hidden">
            <img src={pic} alt="pic1" className="w-full h-full" />
          </figure>

          <div className="mt-3">
            <h3 className="text text-aboutBg font-bold capitalize">{name}</h3>
            <p className="mt-1 capitalize font-bold">{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselContent;
