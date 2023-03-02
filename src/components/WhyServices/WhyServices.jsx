import React from "react";
import "./WhyServices.css";

const WhyServices = () => {
  return (
    <section className="WS">
      <div className="WSContainer">
        <div className="WhyText">
          <h2>Why choose Us?</h2>
        </div>
        <div className="ReasonWrap">
          <div className="Reason">
            <h5>
              Dedicated <br />
              24/7Support{" "}
            </h5>
          </div>
          <div className="Reason">
            <h5>
              {" "}
              Fast Working <br />
              Style
            </h5>
          </div>
          <div className="Reason">
            <h5>
              {" "}
              High Level <br />
              Of Usability
            </h5>
          </div>
        </div>

        <div className="lineWrap">
          <div className="circle"></div>
          <div className="sLine"></div>
          <div className="circle"></div>
          <div className="sLine"></div>
          <div className="circle"></div>
        </div>
      </div>
    </section>
  );
};
export default WhyServices;
