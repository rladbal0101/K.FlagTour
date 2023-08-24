import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// 메인 슬라이드 이미지
import image1 from "../images/한옥마을2.jpg";
import image2 from "../images/광화문2.jpg";
import image3 from "../images/명동.jpg";
import image4 from "../images/해운대해수욕장.jpg";
import image5 from "../images/부산.jpg";
import image6 from "../images/경복궁-향원정 가을.jpg";
import image7 from "../images/롯데타워2.jpg";
import image8 from "../images/경복궁-향원정 겨울.jpg";
import image9 from "../images/제주 한라산.jpg";

import imgData from "../data/dataMainSlideImg.json";

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
  const imageFile = imgData.map(data => data.imagePath.url);
  console.log(imageFile);

  return (
    <MainWrapper>
      {/* <img src={imageFile[0]} /> */}
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
          <StyledSwiperSlide>
            <img src={image1} /><p>한옥마을</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={imageFile[0]} /><p>1111</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={imageFile[1]} /><p>2222</p>
          </StyledSwiperSlide>
          {/* <StyledSwiperSlide>
            <img src={image2} /><p>광화문</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image3} /><p>명동</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image4} /><p>부산 해운대 해수욕장</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image5} /><p>부산 광안대교</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image6} /><p>경복궁-향원정 가을</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image7} /><p>롯데타워</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image8} /><p>경복궁-향원정 겨울</p>
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <img src={image9} /><p>제주 한라산</p>
          </StyledSwiperSlide> */}
      </StyledSwiper>
    </MainWrapper>
  );
}

export default Main;