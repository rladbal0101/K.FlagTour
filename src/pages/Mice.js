import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

// import image from '../images/보성.jpg';
import { Outlet } from 'react-router';

const MiceStyled = styled.div`

`

function Mice(props) {
  return (
    <>
      <SubPageStyle 
        title={'MICE'} 
        // photo={image} 
      />

      <MiceStyled>
        <Outlet />
      </MiceStyled>
    </>
  );
}

export default Mice;