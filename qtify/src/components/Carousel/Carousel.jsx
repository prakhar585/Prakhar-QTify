import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MusicCard from "../Card/MusicCard";
import "./Carousel.css";

const Carousel = ({ albumData }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      breakpoints={{
        640: { slidesPerView: 4 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 7 },
      }}
    >
      {albumData.map((album) => (
        <SwiperSlide key={album.id}>
          <MusicCard album={album} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;

