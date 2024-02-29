import React from "react";
import "./Blog.css";
import people from "../../assets/people.png";
import suit from "../../assets/suit.png";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="blogContainer  mt-6">
      <div className="w-90 mx-auto">
        <h1 className="blogHead mt-6">Blogs and News</h1>
        <div className="bWrap">
          <div className="blogWrap mt-12">
            <div className="peoplePic">
              <img src={people} alt="people" />
            </div>
            <div className="containerC">
              <h3 className="contentHead mt-5">
                Fulfil your dreams of becoming a business owner
              </h3>
              <h3 className="blogcontent1">
                becoming a business owner can be an exciting and rewarding
                experience. it allows you to pursue your passions and create
                something that is uniquely your own. however, it is important to
                remember that starting a business requires hard work,
                dedication, and perseverance. to fulfil your dreams of becoming
                a business owner, you first need to have a clear understanding
                of your goals and what you hope to achieve through your
                business.
              </h3>
            </div>
          </div>
          <div className="blogWrap2 w-100">
            <div className="container2">
              <h3 className="yet mt-5">Yet to Register your Business?</h3>
              <h3 className="blogcontent1">
             1. Legal protection: Registering your business provides legal
                protection and separates your personal assets from your business
                liabilities. This means that in case of any legal disputes, only
                the business assets will be at risk, and your personal assets
                will be protected.</h3><br/>

                <h3 className="blogcontent1">
             2. Credibility: Registering your business gives
                it credibility in the eyes of customers, vendors, and other
                stakeholders. It shows that you are serious about your business
                and have taken the necessary steps to establish it properly.
                Access to funding: Registered businesses are eligible for loans,
                grants, and other forms of funding from banks and other
                financial institutions.
              </h3>
            </div>
            <div className="suitPic">
              <img src={suit} alt="suit" />
            </div>
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

export default Blog;
