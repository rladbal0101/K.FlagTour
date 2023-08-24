import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

// import image from '../images/설악산2.jpg';
import { Outlet } from 'react-router';

const MedicalStyled = styled.div`

`

function MedicalTours(props) {
  return (
    <>
      <SubPageStyle 
        title={'Medical Tours'} 
        // photo={image} 
      />

      <MedicalStyled>
        <Outlet />
      </MedicalStyled>
    </>
  );
}

export default MedicalTours;