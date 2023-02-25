import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-full">
      <section className="footerContainer w-90 mx-auto">
        <div className="w-90 mx-auto py-6">
          <div className="fwrap">
            <div className="footerContent">Are You a Business</div>
            <div className="owner">
              <p className="own">owner?</p>
            </div>
          </div>
          <div className="question">Register with us Today</div>

          <button id="signBtn">
            <p className="sign">Sign up</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
