import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
          <p>Register with us Today</p>
         </div>
         <div className="w-[200px] mx-auto h-[45px] bg-orange mt-[45px] rounded-md learn-more">
          <Link
            to="/"
            className="w-full h-full flex justify-center items-center text-base text-white capitalize font-bold"
          >
            learn more
          </Link>
          </div>
      </section>
      
    </div>
  );
};

export default Footer;
