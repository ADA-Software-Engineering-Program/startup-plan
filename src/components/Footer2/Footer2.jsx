import React from "react";
import WhiteLogo from "../../assets/WhiteLogo.svg";
import "./Footer2.css";



const Footer2 = () => {
  return (
    <div className="w-full ">
        <div className="Footer2Container">
        <div className="FooterLogo">
        <img src={WhiteLogo} alt="logo" />  
        </div>
        <div className="wrapfooter">
            <div>
                <h3 className="explore">Explore</h3></div>
            <div>
          <a className="footlink" href="/">Blog</a>
            </div>
            <div>
          <a className="footlink" href="/">Templates</a>
            </div>
            <div>
          <a className="footlink" href="/">Pricing</a>
            </div>
            <div>
          <a className="footlink" href="/">FAQ</a>
            </div>
        </div>


        <div className="wrapfooter">
            <div>
                <h3 className="explore">Quick links</h3></div>
            <div>
          <a className="footlink" href="/">Contact Us</a>
            </div>
            <div>
          <a className="footlink" href="/">Our services</a>
            </div>
            <div>
          <a className="footlink" href="/">About Us</a>
            </div>
            <div>
          <a className="footlink" href="/">Career Opoortunities</a>
            </div>
        </div>





       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        </div>






    </div>
  );
};
export default Footer2;