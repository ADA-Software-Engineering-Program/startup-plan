import React from "react";
import "./TemplateLink.css";
import { Link } from "react-router-dom";

const TemplateLink = () => {
  return (
    <section className="TC">
      <div className="TempContainer">
        <div className="THeading">
          <h2>Our Templates</h2>
        </div>
        <div className="TLinks">
          <div className="w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
            >
              All templates
            </Link>
          </div>

          <div className=" linkT w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center text-base text-black capitalize"
            >
              Marketing
            </Link>
          </div>

          <div className=" linkT w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center text-base text-black capitalize"
            >
              Business Idea
            </Link>
          </div>

          <div className="linkT w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center text-base text-black capitalize"
            >
              Presentation
            </Link>
          </div>

          <div className="linkT w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center text-base text-black capitalize"
            >
              Docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TemplateLink;
