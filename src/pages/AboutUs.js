import React, { useState } from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import subPageImg from "../data/subPageImgData.json";
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const AboutUsStyled = styled.div`
  margin: 0 150px 80px 150px;

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
`

const SubCategory = styled(NavLink)`
  font-weight: 600;
  color: #000;
  text-decoration: none;

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

  &:hover::before {
    background-color: #F37500;
  }

  &:focus::before {
    background-color: #F37500;
  }
`;

function AboutUs(props) {
  const [isClicked, setIsClicked] = useState(false);

  const aboutImg  = subPageImg.find((img) => {
    if(img.title === 'About us') {
      return img;
    }
  });

  const handleClicked = (e) => {
    setIsClicked(true);
  }


  return (
    <>
      <SubPageStyle 
        title={'About us'} 
        photo={aboutImg.imagePath} 
      />

      <AboutUsStyled>
        <ul>
          <li onClick={handleClicked}><SubCategory to={'/about_us/company_introduction'}>Company introduction</SubCategory></li>
          <li><SubCategory to={'/about_us/ceo_greetings'}>CEO greetings</SubCategory></li>
          <li><SubCategory to={'/about_us/awards'}>Awards</SubCategory></li>
          <li><SubCategory to={'/about_us/contacts'}>Contacts</SubCategory></li>
        </ul>
        <Outlet />
      </AboutUsStyled>
    </>
  );
}

export default AboutUs;