import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { Outlet } from 'react-router';

import subPageImg from "../data/subPageImgData.json";

const UsefulInformationStyled = styled.div`

`

function UsefulInformation(props) {
  const usefulImg  = subPageImg.find((img) => {
    if(img.title === 'Useful Information') {
      return img;
    }
  })

  return (
    <>
      <SubPageStyle 
        title={'Useful Information'} 
        photo={usefulImg.imagePath} 
      />

      <UsefulInformationStyled>
        <Outlet />
      </UsefulInformationStyled>
    </>
  );
}

export default UsefulInformation;