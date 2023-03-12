import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import CarouselContent from "./CarouselContent";

const Carousel = ({ pic, text, name, title }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      breakpoints={{
        700: {
          slidesPerView: 2,
        },
      }}
      spaceBetween={30}
      modules={[Autoplay, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <CarouselContent
          text="One the best business platform i have ever seen, I was  able to find my feet through this website. i highly recommend!"
          pic={pic1}
          title="product designer"
          name="mary"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselContent
          text="Registering my business through this platform was so swift. Customer service is top notch. I love it. "
          pic={pic2}
          title="product designer"
          name="sylvia"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselContent
          text="Startup plan is really a genuine company.
                  Their legal services really helped boost my business. I recommend"
          pic={pic3}
          title="product designer"
          name="chiamaka"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
