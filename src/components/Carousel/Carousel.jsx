import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/navigation";

import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data, swiper]);

  return null;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={40}
        allowTouchMove
        style={{ padding: "0px 20px" }}
      >
        <Controls data={data} />

        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {data.map((ele, index) => (
          <SwiperSlide key={index}>
            {renderComponent(ele)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

