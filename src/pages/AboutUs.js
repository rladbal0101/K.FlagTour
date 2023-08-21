import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import image from '../images/광화문2.jpg';
import { Outlet } from 'react-router';

const AboutUsStyled = styled.div`

`

function AboutUs(props) {
  return (
    <>
      <SubPageStyle 
        title={'About us'} 
        photo={image} 
      />

      <AboutUsStyled>
        <Outlet />
      </AboutUsStyled>
    </>
  );
}

export default AboutUs;