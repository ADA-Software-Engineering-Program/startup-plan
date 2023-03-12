import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../../assets/hero-img.svg";

const HeroSection = () => {
  return (
    <section className=" w-full mt-8">
      <div className="w-90 mx-auto md:flex md:items-center md:justify-between md:flex-row-reverse md:gap-10">
        <figure className="hero-img">
          <img
            src={heroimg}
            alt="hero-pic"
            className="w-full h-full rounded-md"
          />
        </figure>

        <div className="hero-text w-90 mx-auto md:mx-0 mt-[12px] sm:mt-7 md:mt-0 flex flex-col items-center md:items-start">
          <h1 className="capitalize text-center-custom text-3xl md:text-[30px] 2md:text-[48px] normal">
            Start your business on the right foot
          </h1>
          <br />
          <p className="capitalize text-center-custom text-3xl md:text-[12px] 2md:text-[18px] normal font-bold ">
            Make use of our ready made templates
          </p>
          <p className="capitalize text-center-custom text-3xl md:text-[12px] 2md:text-[18px] normal font-bold ">
            Get apt legal and financial guidance{" "}
          </p>

          <div className="btn-container w-[90%] md:mx-0 border-2 border-orange rounded-md h-[45px] mt-5 md:mt-8 md:w-300px hover:bg-orange hover:shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center text-base text-orange capitalize font-bold"
            >
              get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
