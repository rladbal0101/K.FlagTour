import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import image from '../images/남산타워.jpg';
import { Outlet } from 'react-router';

const SightseeingToursStyled = styled.div`

`

function SightseeingTours(props) {
  return (
    <>
      <SubPageStyle 
        title={'Sightseeing Tours'} 
        photo={image} 
      />

      <SightseeingToursStyled>
        <Outlet />
      </SightseeingToursStyled>
    </>
  );
}

export default SightseeingTours;