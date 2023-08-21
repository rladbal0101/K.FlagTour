import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TbWorld } from "react-icons/tb";
import dayjs from "dayjs";

const LayoutStyle = styled.div`
`;

const HeaderStyle = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 9;

  h1 {
    margin: 0 30px;
    font-size: 20px;
    font-weight: 700;
  }

  svg {
    font-size: 20px;
    margin: 0 30px;

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
    outline: none;
    font-weight: normal;
  }
  `;

const FooterStyle = styled(HeaderStyle)`
  background-color: antiquewhite;
  width: 100%;
  /* height: 120px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 20px;
  position: relative;

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  li {
    padding-bottom: 30px;
    }

  li + li {
    margin-left: 30px;
  }
  `;

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #F37500;
    /* font-weight: bold; */
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
            <li><StyledLink to={'/about_us'}>About us</StyledLink></li>
            <li><StyledLink to={'/mice'}>MICE</StyledLink></li>
            <li><StyledLink to={'/signtseeing_tour'}>Sightseeing Tours</StyledLink></li>
            <li><StyledLink to={'/medical_tour'}>Medical Tours</StyledLink></li>
            <li><StyledLink to={'/useful_information'}>Useful Information</StyledLink></li>
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