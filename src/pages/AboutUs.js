import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import subPageImg from "../data/subPageImgData.json";
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const AboutUsStyled = styled.div`
  padding: 40px 0 80px;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    margin-bottom: 80px;

    &:first-child a:focus::before {
    background-color: #F37500;
    }

    li + li {
      padding-left: 40px;
    }
  }
`;

const OurServices = styled.div`
  h2 {
    font-size: 36px;
    text-align: center;
    margin: 100px 0 50px;
  }

  p + p {
    padding-top: 20px;
  }

  @media screen and (max-width: 767px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const SubCategory = styled(NavLink)`
  font-weight: 600;
  color: #000;
  text-decoration: none;
  outline: none;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    /* border: 3px solid; */
    background-color: transparent;
    border-radius: 50%;
    color: transparent;
    /* color: #F37500; */
    display: flex;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  &:hover::before,
  &.active::before {
    background-color: #F37500;
  }
`;

function AboutUs(props) {

  const aboutImg  = subPageImg.find((img) => img.title === 'About us');

  return (
    <div className='inner'>
      <SubPageStyle 
        title={'About us'} 
        // photo={aboutImg.imagePath}
      />

      <AboutUsStyled>
        <div>  
          <p> Jane DMC Korea was founded in 2006 by Jane Han.</p>
          <br />
          <p>Our headquarters is located in Seoul, also we have Busan subsidiary and representatives in Indonesia.</p>
          <br />
          <p>We design tourism destinations in Korea so that we can meet our partner’s satisfaction and let them have wonderful experience while they are travelling in Korea.</p>
          <br />
          <p>As the result, in short time we have handled uncountable individual travelers and incentive groups from around the globe including Indonesia, Malaysia, Singapore, Philippines, Vietnam, Australia, Russia, Kazakhstan, Ukraine, India, GCC 16 countries, Iran, Israel, China, Taiwan, Hong Kong, Mongolia and other markets.</p>
          <br />
          <p>With clear understanding of multi-cultural diversities, we can handle all types of groups and FIT’s and provide them with any services they may request.</p>
        </div>

        <OurServices>
          <h2>Our services</h2>
          <br />
          <p>Inbound Tourism : group and individual travel programs for foreigners, domestic travel arrangements and transportation services, hotel and tickets reservation, transfers, individual, exclusive and group tours, VIP services, virtual tours, video-content shooting, etc.</p>
          <p>MICE : team building programs, Gala Dinner programs, entertainment and performance programs, conferences and business meetings arrangements, sightseeing for big groups, etc.</p>
          <p>Medical tourism : concierge service to foreign patients, travel arrangements and transportation services for foreign patients, health screening with tourism, wellness programs, plastic surgery and skin beauty consultations, etc.</p>
          <p>Exchange programs for students, sports and culture organizations, sister cities, Korean Hallyu experience programs for young people, industrial inspections, tour agencies association.</p>
          <p>Government, local governments, public institutions’ international events and exchange programs, overseas promotion events operations, public institutions’ educational and training programs operations, operations on new markets.</p>
          <p>Other : international and domestic ticketing (BSP system), issuance of medical visas for foreign patients, tourism products planning, tourism resources development, operational support of international exchange programs, operating on regional conferences, operational support and organization of video conferences, etc.</p>
        </OurServices>

        {/* 서브메뉴 필요시 하단 코드 사용 */}
        {/* <ul>
          <li>
            <SubCategory to={'/about_us/company_introduction'}>
              Company introduction
            </SubCategory>
          </li>
          <li>
            <SubCategory to={'/about_us/ceo_greetings'}>
              CEO greetings
            </SubCategory>
          </li>
          <li>
            <SubCategory to={'/about_us/awards'}>
              Awards
            </SubCategory>
          </li>
        </ul>
        <Outlet /> */}
      </AboutUsStyled>
    </div>
  );
}

export default AboutUs;