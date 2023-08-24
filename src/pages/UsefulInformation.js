import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

// import image from '../images/경주 첨성대.jpg';
import { Outlet } from 'react-router';

const UsefulInformationStyled = styled.div`

`

function UsefulInformation(props) {
  return (
    <>
      <SubPageStyle 
        title={'Useful Information'} 
        // photo={image} 
      />

      <UsefulInformationStyled>
        <Outlet />
      </UsefulInformationStyled>
    </>
  );
}

export default UsefulInformation;