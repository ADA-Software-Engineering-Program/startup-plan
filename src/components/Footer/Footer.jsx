import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <section className="footerContainer w-90 mx-auto">
        



           <div className="fwrap">
            <div className="footerContent">Ready To <b className="bold">StartUp?</b></div>
            
              
            
            
          </div>
          <div>
          <p className="register">Register with us Today</p></div>
          
         <div className="w-[200px] mx-auto h-[45px] bg-orange mt-[30px] rounded-md signUp">
          <Link
            to="/"
            className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
          >
            Sign Up
          </Link>
          </div>
          <div className="w-90 mx-auto sm:w-[70%] md:w-[75%] text-[28px] text-orange flex justify-end fa">
              <FaQuestionCircle />
            </div>
      </section>
      
    </div>
  );
};

export default Footer;
