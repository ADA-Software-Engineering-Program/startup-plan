import React from "react";
import unsplash from "../../assets/unsplash.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      className="w-90 mx-auto py-2 bg-[rgba(255, 69, 0, 0.2)]"
      style={{ backgroundColor: "rgba(255, 69, 0, 0.2)" }}
    >
      <div className="w-90 mx-auto py-3">
        <div className="w-full about-us mb-5">
          <h3 className="capitalize text-center">about us</h3>
          <p className="w-full text-center sm:w-[500px] mx-auto my-3 2md:w-full p-0">
            we are a team of professionals dedicated to helping entrepreneurs
            and small business owners turn their dreams into reality. We aim to
            provide you with the tools and resources you need to start or scale
            your business with confidence. at startupplan, we believe that every
            entrepreneur deserves the chance to succeed, which is why we strive
            to make our services accessible, affordable, and user-friendly.
            Whether you're just starting out or looking to take your business to
            the next level, we're here to help. let us be your partner on your
            journey to success.
          </p>
        </div>

        <div className="about-us w-full flex flex-col  2md:flex-row 2md:gap-5  2md:justify-between 2md:items-center mt-6 2md:mt-[40px]">
          <figure className="m-0 p-0 mx-auto mission-imgSize mb-5 2md:mb-0 2md:mx-0 ">
            <img
              src={unsplash}
              alt="our-mission-img"
              className="w-full h-full"
            />
          </figure>

          <div className="our-mission-text w-full  2md:mb-0 2md:w-1/2 ">
            <h3 className="capitalize text-center ">our mission</h3>
            <p className="sm:w-[500px] mx-auto my-3 w-full text-center 2md:w-full p-0">
              Our aim ensure that Business owners are faced with less
              challenges. We understand that starting a business can be
              overwhelming, which is why we offer easy-to-use business plan
              templates and hassle-free business registration services. Our
              templates are designed to help you create a comprehensive and
              effective business plan, tailored to your unique needs and goals.
              And our registration services make it easy for you to navigate the
              complex process of registering your business, ensuring that you
              meet all legal requirements and are ready to launch
            </p>
          </div>
        </div>

        <div className="w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn_more">
          <Link
            to="/"
            className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
          >
            learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
