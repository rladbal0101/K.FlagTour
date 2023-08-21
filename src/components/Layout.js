import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { TbWorld } from "react-icons/tb";
import dayjs from "dayjs";

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
    font-size: 20px;
    font-weight: 700;
  }

  svg {
    font-size: 20px;
    /* margin: 0 20px; */

    &:hover {
      /* color: red; */
    }
  }
`;

const NavStyle = styled.nav`
  width: 100%;
  font-size: 14px;
  padding: 20px;
  /* flex: 1; */

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    /* border: 3px solid; */
    outline: none;
    font-weight: normal;
    
  }
  `;

const FooterStyle = styled(HeaderStyle)`
  background-color: antiquewhite;
  /* height: 120px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 20px;

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  li {
    padding-bottom: 30px;
    }
  `;

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 3px solid transparent;
  &:hover {
    /* font-weight: bold; */
    border-bottom: 3px solid #F37500;
    /* transform: scale(1.1); */
    transition: all 0.5s ease;

  }
`;

function Layout(props) {
  let now = dayjs();

  now.format();

  const thisYear = now.get("year")

  return (
    <LayoutStyle>
      <HeaderStyle>
        <h1> K.Flag Tour </h1>

        <NavStyle>
          <ul>
            <li><StyledLink>About us</StyledLink></li>
            <li><StyledLink>MICE</StyledLink></li>
            <li><StyledLink>Sightseeing Tours</StyledLink></li>
            <li><StyledLink>Medical Tours</StyledLink></li>
            <li><StyledLink>Useful Information</StyledLink></li>
          </ul>
        </NavStyle>

        <TbWorld />
      </HeaderStyle>

      <Outlet />

      <FooterStyle>
        <ul>
          <li>11, Uisadang-daero 1-gil, Yeongdeungpo-gu, Seoul, Republic of Korea</li>
          <li>TEL : 02-786-0978</li>
        </ul>
        <p>Copyright © {thisYear} K.Flag Tour. All Right Reserved.</p>
      </FooterStyle>
    </LayoutStyle>  
  );
}

export default Layout;