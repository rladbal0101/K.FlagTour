import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { Outlet } from 'react-router';

import subPageImg from "../data/subPageImgData.json";

const MedicalStyled = styled.div`

`

function MedicalTours(props) {
  const medicalImg  = subPageImg.find((img) => {
    if(img.title === 'Medical Tours') {
      return img;
    }
  })

  return (
    <>
      <SubPageStyle 
        title={'Medical Tours'} 
        photo={medicalImg.imagePath} 
      />

      <MedicalStyled>
        <Outlet />
      </MedicalStyled>
    </>
  );
}

export default MedicalTours;