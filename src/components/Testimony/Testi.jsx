import React from "react";
import "./Testi.css";
import Carousel from "../testimonial/Carousel";

const Testi = () => {
  return (
    <section className="mt-8 w-90 mx-auto bg-aboutBg">
      <div className="w-full mx-auto py-4">
        <div className="w-90 mx-auto about-us mb-5">
          <h3 className="capitalize text-center">testimonials</h3>
          <p className="w-full text-center sm:w-[500px] mx-auto my-3 ">
            We take pride in customers satifaction. Here are some reviews and
            comments from previous customers on our services.
          </p>
        </div>

        <section className="carousel-wrapper w-full mt-9">
          <Carousel />
        </section>
      </div>
    </section>
  );
};

export default Testi;
