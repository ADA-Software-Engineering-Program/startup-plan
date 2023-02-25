import React from "react";
import "./Blog.css";
import people from "../../assets/people.png";
import suit from "../../assets/suit.png";

const Blog = () => {
  return (
    <section className="blogContainer mt-6"> 
    <div className="w-90 mx-auto py-3" >

      <h1 className="blogHead mt-6">Blogs and News</h1>
      <div className="blogWrap mt-12">
      <div className="peoplePic">
        <img src={people} alt="people" />
      </div>
      <div className="containerC w-100 mx-auto">
        <h3 className="contentHead">
          Fulfil your dreams of becoming a business owner
        </h3>
        <h3 className="blogcontent1">
          The benefits of working at a startup include greater opportunities to
          learn, increased responsibility, flexible work hours, relaxed work
          environment, increased employee interaction, good workplace benefits,
          and innovation
        </h3>
      </div>
      </div>
      <div className="blogWrap2 w-100">
      <div className="container2">
        <h3 className="yet mt-0">Yet to Register your Business?</h3>
        <h3 className="blogcontent1">
          You can open a corporate account with your registered business
          certificate. When you register through us, you get a Zenith Bank
          account. Potential customers feel more comfortable paying into a
          corporate account because they know their money can be traced. And you
          can open a corporate account with any bank of your choice with a
          registered business. You can apply for loans and grants when your
          business is registered. When you register your business, customers
          trust you because they see you as legit and reliable.
        </h3>
      </div>
      <div className="suitPic">
        <img src={suit} alt="suit" />
      </div>
      </div>
      </div>
    </section>
  );
};

export default Blog;
