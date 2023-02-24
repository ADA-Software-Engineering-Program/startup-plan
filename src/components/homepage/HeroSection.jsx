import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className=" w-full mt-8">
      <div className="w-90 mx-auto md:flex md:items-center md:justify-between md:flex-row-reverse md:gap-10">
        <figure className="hero-img">
          <img
            src="/assets/hero-img.svg"
            alt="hero-pic"
            className="w-full h-full rounded-md"
          />
        </figure>

        <div className="hero-text mt-[12px] sm:mt-7 md:mt-0">
          <h1 className="capitalize text-center md:text-left text-3xl md:text-[48px] 2md:text-[56px] italic">
            launch your business without stress
          </h1>

          <div className="btn-container w-90 mx-auto  md:mx-0 border-2 border-orange rounded-md h-[45px] mt-5 md:mt-8 md:w-300px hover:bg-orange hover:shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
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
