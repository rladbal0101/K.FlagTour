import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import images from '../data/subPageImgData.json';
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
    width: 1px;
    height: 1px;
    border: 3px solid;
    border-radius: 50%;
    color: transparent;
    /* color: #F37500; */
    display: flex;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  &:hover::before {
    color: #F37500;
  }

  &:focus::before {
    color: #F37500;
  }
`;

function AboutUs(props) {
  return (
    <>
      <SubPageStyle 
        title={'About us'} 
        // photo={image} 
      />

      <AboutUsStyled>
        <ul>
          <li><SubCategory to={'/about_us/company_introduction'}>Company introduction</SubCategory></li>
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