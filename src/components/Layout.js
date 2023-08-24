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
    font-family: 'Giants-Bold';
    font-size: 20px;
    font-weight: 700;
    margin: 0 30px;

    &:hover {
      color: red;
    }
  }

  svg {
    font-size: 20px;
    margin: 0 30px;

    &:hover {
      color: red;
    }
  }
`;

const NavStyle = styled.nav`
  width: 60%;
  /* width: 1080px; */
  font-size: 14px;
  /* padding: 20px; */

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  ul.gnb-depth1 {
    display: flex;
    justify-content: space-between;

    & > li.gnb-depth1-item {
      outline: none;
      font-weight: normal;
      display: flex;
      flex-direction: column;
      align-items: center;

      
    }
  }
`;

const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 32px 10px;
  border-bottom: 2px solid transparent;

  position: relative;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background-color: #F37500;

    position: absolute;
    top: 77px;
    left: 0;
    right: 0;
    margin: auto;
    transition: all 0.3s;

  }

  &:hover::after{
    width: 100%;
  }

  &:hover + .sub-menu{
    /* display: block; */
    /* height: 150px; */
    opacity: 1;

    &:hover {
      display: block;
    }
    
    .gnb-depth2 {
      opacity: 1;

      /* &:hover {
        opacity: 1;

      } */
    }
  }
`;

const StyledSubMenu = styled.div`
  width: 200px;
  /* height: 0; */
  background-color: rgba(200, 200, 200, 0.5);
  padding: 0 10px;
  position: absolute;
  top: 80px;
  
  transition: all 0.3s;

  opacity: 0;

  /* display: none; */
  
  ul.gnb-depth2 {
    width: 100%;
    text-align: center;
    /* opacity: 0; */
    transition: all 0.3s;
  /* 
    display: flex;
    flex-direction: column;
    align-items: center; */
  }

  li {
    padding: 10px 0;
  }
`;

const StyledSubMenuLink = styled(NavLink)`
  width: 100%;
  color: #000;
  text-decoration: none;
`;

const FooterStyle = styled.div`
  background-color: antiquewhite;
  font-size: 14px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

function Layout(props) {
  let now = dayjs();

  now.format();

  const thisYear = now.get("year")

  const navigate = useNavigate();

  return (
    <LayoutStyle>
      <HeaderStyle>
        <h1 className='cursor-pointer' onClick={() => navigate('/')}> K.Flag Tour </h1>

        <NavStyle>
          <ul className='gnb-depth1'>
            <li className='gnb-depth1-item'>
              <StyledLink to={'/about_us/company_introduction'}>About us</StyledLink>
              <StyledSubMenu className='sub-menu'>
                <ul className='gnb-depth2'>
                  <li>
                    <StyledSubMenuLink>Company introduction</StyledSubMenuLink>
                  </li>
                  <li>
                    <StyledSubMenuLink>CEO greetings</StyledSubMenuLink>
                  </li>
                  <li>
                    <StyledSubMenuLink>Awards</StyledSubMenuLink>
                  </li>
                  <li>
                    <StyledSubMenuLink>Contacts</StyledSubMenuLink>
                  </li>
                </ul>
              </StyledSubMenu>
            </li>
            <li className='gnb-depth1-item'>
              <StyledLink to={'/signtseeing_tour'}>Sightseeing Tours</StyledLink>
              <StyledSubMenu className='sub-menu'>
                <ul className='gnb-depth2'>
                  <li><StyledSubMenuLink>classic tour</StyledSubMenuLink></li>
                  <li><StyledSubMenuLink>theme tour</StyledSubMenuLink></li>
                  <li><StyledSubMenuLink>one day tour</StyledSubMenuLink></li>
                </ul>
              </StyledSubMenu>
            </li>
            <li className='gnb-depth1-item'>
              <StyledLink to={'/medical_tour'}>Medical Tours</StyledLink>
            </li>
            <li className='gnb-depth1-item'>
              <StyledLink to={'/useful_information'}>Useful Information</StyledLink>
            </li>
          </ul>
        </NavStyle>

        <TbWorld className='cursor-pointer' />
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