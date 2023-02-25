import React from "react";
import "./Why.css";

const Why = () => {
  return (
    <section className="whyContainer mt-5 w-90 mx-auto bg-aboutBg">
      <div className="w-90 mx-auto py-6">
        <h1 className="why mb-3">Why Choose Us?</h1>
        <div className="yLine"></div>
        <div className="wrap">
          <div className="box1">
            <div className="one">01.</div>
            <div className="oneHeading">Customer Service</div>
            <div className="oneContent">
              We pride ourselves on our commitment to customer service. Our goal
              is to help you launch amd register your business and we will work
              tirelessly to make that happen. We will be available to answer any
              questions or concerns you may have throughout the entire process.
            </div>
            <div className="yLine1 mt-9"></div>
          </div>
          <div className="box2">
            <div className="two">02.</div>
            <div className="twoHeading">Expertise</div>
            <div className="twoContent">
              Our team of experienced Business Professionals and has extensive
              knowledge of the local market and can provide you with detailed
              information on types of businesses accorsing to your funds. We
              also have Lawyers to assist with legal advice. this trends to help
              you make informed decisions while chosing a template.
            </div>
            <div className="yLine2 mt-9"></div>
          </div>
        </div>
        <div className="wrap2">
          <div className="box3">
            <div className="three">03.</div>
            <div className="threeHeading">Customized Approach</div>
            <div className="threeContent">
              We understand that every individual has their own unique needs and
              preferences when it comes to staring a new business. That's why we
              take the time to truly understand your needs and preferences, so
              we can help you launch your business.
            </div>
          </div>

          <div className="box4">
            <div className="four">04.</div>
            <div className="fourHeading">Convenience</div>
            <div className="fourContent">
              We offer a wide range of tempaltes to make your business launch as
              stress-free as possible. From choice of business to venture to
              choosing a template, we will be with you every step of the way. We
              also provide additional services Tax registration, Public and
              Private Company Incorporation etc..
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
