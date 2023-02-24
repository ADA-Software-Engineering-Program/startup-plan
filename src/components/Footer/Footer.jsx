import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerContent">Are You a Business</div>
        <div className="owner">
          <p className="own">owner?</p>
        </div>
        <div className="question">Register with us Today</div>

        <button id="signBtn">
          <p className="sign">Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
