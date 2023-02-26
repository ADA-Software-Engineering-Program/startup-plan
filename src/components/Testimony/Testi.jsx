import React from "react";
import "./Testi.css";

import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import Carousel from "../testimonial/Carousel";

const Testi = () => {
  return (
    <section className="mt-8 w-90 mx-auto bg-aboutBg">
      <div className="w-full mx-auto py-4">
        <div className="w-90 mx-auto about-us mb-5">
          <h3 className="capitalize text-center">testimonials</h3>
          <p className="w-full text-center sm:w-[500px] mx-auto my-3 ">
            We take pride in customers satifaction. Here are some reviews and
            comments from previous customers on our services.
          </p>
        </div>

        <section className="carousel-wrapper w-full mt-9">
          <Carousel
            text="One the best business platform i have ever seen, I was  able to find my feet through this website. i highly recommend!"
            pic={pic1}
            title="product designer"
            name="mary"
          />
          <Carousel
            text="Registering my business through this platform was so swift. Customer service is top notch. I love it "
            pic={pic2}
            title="product designer"
            name="sylvia"
          />
          <Carousel
            text="Startup plan is really a genuine company.
Their legal services really helped boost my business. would recommend to business owners and startups"
            pic={pic3}
            title="product designer"
            name="chiamaka"
          />
        </section>
      </div>
    </section>
  );
};

export default Testi;
