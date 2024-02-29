import React from "react";
import "./Header.css";
import image from "../../assets/image.png";

const Header = () => {
    return (
<section className="header w-90 mx-auto py-2 ">
      <div>
        <div className="image">

        <img src={image} alt="img"/>
        <div className="text">
        <p>Solutions for<br/>Your Business</p>
        </div>
        </div>



      </div>
      
      
      
      
      
      
      </section>
      );
    };
    export default Header;