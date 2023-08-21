import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  
  /* img {
    width: 100%;
  } */
`;

function Main(props) {
  return (
    <MainWrapper>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
          <StyledSwiperSlide>1</StyledSwiperSlide>
          <StyledSwiperSlide>2</StyledSwiperSlide>
          <StyledSwiperSlide>3</StyledSwiperSlide>
          <StyledSwiperSlide>4</StyledSwiperSlide>
      </StyledSwiper>
    </MainWrapper>
  );
}

export default Main;