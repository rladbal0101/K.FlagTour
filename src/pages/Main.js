import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// 메인 슬라이드 이미지 파일
import imageData from "../data/mainSlideImgData.json";

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  overflow: hidden;
  background-image: url(image1);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  p {
    color: #fff;
    font-weight: bold;
    text-shadow: 2px 2px 3px #333;
    position: absolute;
    bottom: 30px;
    right: 50px;
  }
`;

function Main(props) {
  return (
    <MainWrapper>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          imageData.map(image =>
            <StyledSwiperSlide>
              <img src={image.imagePath} />
              <p>{image.titleEn}</p>
            </StyledSwiperSlide>
          )
        }
      </StyledSwiper>
    </MainWrapper>
  );
}

export default Main;