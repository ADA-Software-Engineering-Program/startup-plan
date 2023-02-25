import React from "react";
import unsplash from "../../assets/unsplash.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="w-90 mx-auto py-2 bg-aboutBg">
      <div className="w-90 mx-auto py-3">
        <div className="w-full about-us mb-5">
          <h3 className="capitalize text-center">about us</h3>
          <p className="w-full text-center sm:w-[500px] mx-auto my-3 2md:w-full">
            Our goal is to help Entrepreneur to start up their business. we
            equally register business, companies and NGO accorrding to CAC
            requirement by accredited persons. Also, we provide legal personals
            that offer legal services to business startups.
          </p>
        </div>

        <div className="about-us w-full flex flex-col  2md:flex-row 2md:gap-5  2md:justify-between 2md:items-center mt-6 2md:mt-[40px]">
          <figure className="m-0 p-0 mission-imgSize mb-5 2md:mb-0 2md:mx-0 ">
            <img
              src={unsplash}
              alt="our-mission-img"
              className="w-full h-full"
            />
          </figure>

          <div className="our-mission-text w-full  2md:mb-0 2md:w-1/2 ">
            <h3 className="capitalize text-center ">our mission</h3>
            <p className="sm:w-[500px] mx-auto my-3 w-full text-center 2md:w-full">
              Our aim ensure that Business owners are faced with less
              challenges. Startups are companies or ventures that are focused or
              a single product or service that the founders want to bring to
              market. These companies typically don't have a fully developed
              business model and, more crucially, lack adequate capital to move
              onto the next phase of business. Most of these companies are
              initially funded by their founders. Many startups turn to others
              for more funding, including family, friends, and venture
              capitalists. Silicon Valley is known for its strong venture
              capitalist community and is a popular destination for startups,
              but is also widely considered the most demanding arena.
            </p>
          </div>
        </div>

        <div className="w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
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
