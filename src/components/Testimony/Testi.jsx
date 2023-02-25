import React from "react";
import "./Testi.css";
import ming from "../../assets/ming.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";

const Testi = () => {
  return (
    <section className="containerT w-90 mx-auto bg-aboutBg">
      <div className="w-90 mx-auto py-6">
        <h1 className="heading">Testimonials</h1>

        <div className="content">
          We take pride in customers satifaction. Here are some reviews and
          comments from previous customers on our services.
        </div>
        <div className="test">
          <div className="testiOne">
            <div className="subwrap">
              <div className="logoMing">
                <img src={ming} alt="ming" />
              </div>
              <div className="line"></div>
            </div>

            <div className="innerContent">
              One the best business platform i have ever seen, I highly
              recommend. was really confused on how to set up my business, I was
              able to find my feet through this website. i highly recommend!
            </div>
            <div className="picOne">
              <img src={pic1} alt="pic1" />
            </div>
            <h3 className="name">Mary</h3>
            <h3 className="role">Product Designer</h3>
          </div>

          <div className="testiTwo">
            <div className="logoMing">
              <img src={ming} alt="ming" />
            </div>
            <div className="line"></div>

            <div className="innerContent">
              registering my business through this platform was so swift.
              Customer service is top notch. I love it
            </div>
            <div className="picOne">
              <img src={pic2} alt="pic2" />
            </div>
            <div className="name">Sylvia</div>
            <div className="role">Product Designer</div>
          </div>

          <div className="testiThree">
            <div className="logoMing">
              <img src={ming} alt="ming" />
            </div>
            <div className="line"></div>

            <div className="innerContent">
              Startup plan is really a genuine company. Their legal services
              really helped boost my business. would recommend to business
              owners and startups
            </div>
            <div className="picOne">
              <img src={pic3} alt="pic3" />
            </div>
            <div className="name">Chiamaka</div>
            <div className="role">Product Designer</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testi;
