import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { TbWorld } from "react-icons/tb";

const LayoutStyle = styled.div`
`;

const HeaderStyle = styled.div`
  background-color: beige;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0 30px;
    font-size: 30px;
    font-weight: 700;
  }

  svg {
    font-size: 20px;
    margin: 0 20px;

    &:hover {
      /* color: red; */
    }
  }
`;

const NavStyle = styled.nav`
  font-size: 20px;
  padding: 20px;
  /* flex: 1; */

  ul {
    display: flex;
  }

  li {
    &:hover {
      font-weight: 600;
      /* border-bottom: 3px solid red; */
    }

    /* &:hover::after {
      content: "";
      display: block;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 3px solid red;
    } */
  }

  li + li {
    margin-left: 100px;
  }
`

const FooterStyle = styled(HeaderStyle)`
  background-color: antiquewhite;
  height: 120px;
`;


function Layout(props) {
  return (
    <LayoutStyle>
      <HeaderStyle>
        <h1> K.Flag Tour </h1>

        <NavStyle>
          <ul>
            <li> About us </li>
            <li> MICE </li>
            <li> Sightseeing Tours </li>
            <li> Medical Tours </li>
            <li> Useful Information </li>
          </ul>
        </NavStyle>

        <TbWorld />
      </HeaderStyle>

      <Outlet />

      <FooterStyle>

      </FooterStyle>
    </LayoutStyle>  
  );
}

export default Layout;