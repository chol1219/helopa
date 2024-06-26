import { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image1 from "../../assets/image/img1.png";
import Image2 from "../../assets/image/img2.png";
import Image3 from "../../assets/image/img3.png";
import Image4 from "../../assets/image/img4.png";
import Image5 from "../../assets/image/img5.png";
import Image6 from "../../assets/image/img6.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];
const indexes = [2, 3, 4, 5];

const Carousel = ({ menu, open }) => {
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if (swiper) {
      if (open) {
        if (menu === -1) {
          swiper.slideTo(1, 500);
        } else {
          swiper.slideTo(indexes[menu], 500);
        }
      }
    }
  }, [menu, swiper, open]);

  return (
    <Swiper
      onSwiper={setSwiper}
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      navigation
      pagination={{ clickable: true }}
      className="lg:w-[56vw] w-full"
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={index + 1}>
            <img
              className="object-cover w-full h-[725px] lg:h-full"
              src={image}
              alt={`img${index + 1}`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
