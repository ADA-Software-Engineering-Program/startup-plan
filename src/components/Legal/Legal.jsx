import React from "react";
import "./Legal.css";



import rec10 from "../../assets/rec10.png";

const Legal = () => {
  return (
    <section>
      <div>
        <div className="Bizheading">Legal & Financial Consultants</div>
<div className="Lwrap">
        <div className="lc">
          <img className="legalimg"src={rec10} alt="rec" />
        </div>

        <div className="lcc">
          <div class="bodyL">
            <h5 className="bodyl">
              The primary service we render is to advise clients (individuals or
              corporations) about their legal rights and responsibilities, and
              on the right solutions for customer productivity, marketing and
              development strategies, legal consultants also actively manage
              risks by consulting on program and legal-related issues.
            </h5>
          </div>
          
            
              <h5 className="how">How We Work</h5>
              <div className="small">
                <div>Choose your<br/> service</div>
                <div>Make a <br/>consultation</div>
                <div>Meet with<br/> Lawyer</div>
              </div>
              <div className="lineWrap">
          <div className="circle"></div>
          <div className="sLine"></div>
          <div className="circle"></div>
          <div className="sLine"></div>
          <div className="circle"></div>
        </div>
            
          
        </div>
        </div>
      </div>
    </section>
  );
};
export default Legal;
