import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { Outlet } from 'react-router';

import subPageImg from "../data/subPageImgData.json";

const SightseeingToursStyled = styled.div`

`

function SightseeingTours(props) {
  const SightseeingImg  = subPageImg.find((img) => {
    if(img.title === 'Sightseeing Tours') {
      return img;
    }
  })

  return (
    <>
      <SubPageStyle 
        title={'Sightseeing Tours'} 
        photo={SightseeingImg.imagePath} 
      />

      <SightseeingToursStyled>
        <Outlet />
      </SightseeingToursStyled>
    </>
  );
}

export default SightseeingTours;