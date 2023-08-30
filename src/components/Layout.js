import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TbWorld } from "react-icons/tb";
import dayjs from "dayjs";

const LayoutStyle = styled.div`
`;

const HeaderStyle = styled.div`
  width: 100%;
  height: 80px;
  background-color: #00235C;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 9;

  h1 {
    font-family: 'Giants-Bold';
    font-size: 23px;
    font-weight: 700;
    margin: 0 30px;
    color: #fff;
  }

  svg {
    font-size: 20px;
    margin: 0 30px;
    color: #eee;

    &:hover {
      color: #F37500;
    }
  }
`;

const NavStyle = styled.nav`
  width: 60%;
  font-size: 18px;

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

      & a {
        font-weight: 700;
      }

      &:hover > .sub-menu{
        display: block;
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  color: #eee;
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

  &:hover{
    color: #F37500;

    &::after{
      width: 100%;
    }
  }
`;

const StyledSubMenu = styled.div`
  width: 200px;
  padding: 0 15px;
  background-color: #00235C;
  position: absolute;
  top: 80px;

  display: none;
  
  ul.gnb-depth2 {
    width: 100%;
    text-align: center;
  }

  li {
    padding: 10px 0;

    &:hover {

    }

    &:hover a {
      font-weight: 700;
      color: #F37500;
    }
  }
`;

const StyledSubMenuLink = styled(NavLink)`
  width: 100%;
  color: #eee;
  text-decoration: none;
`;

const FooterStyle = styled.div`
  color: #eee;
  font-size: 14px;
  background-color: #00235C;
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
                    <StyledSubMenuLink to={'/about_us/company_introduction'}>Company introduction</StyledSubMenuLink>
                  </li>
                  <li>
                    <StyledSubMenuLink to={'/about_us/ceo_greetings'}>CEO greetings</StyledSubMenuLink>
                  </li>
                  <li>
                    <StyledSubMenuLink to={'/about_us/awards'}>Awards</StyledSubMenuLink>
                  </li>
                  <li>
                    <StyledSubMenuLink to={'/about_us/contacts'}>Contacts</StyledSubMenuLink>
                  </li>
                </ul>
              </StyledSubMenu>
            </li>
            <li className='gnb-depth1-item'>
              <StyledLink to={'/sightseeing_tour/classic_tour'}>Sightseeing Tours</StyledLink>
              <StyledSubMenu className='sub-menu'>
                <ul className='gnb-depth2'>
                  <li><StyledSubMenuLink to={'/sightseeing_tour/classic_tour'}>classic tour</StyledSubMenuLink></li>
                  <li><StyledSubMenuLink to={'/sightseeing_tour/theme_tour'}>theme tour</StyledSubMenuLink></li>
                  <li><StyledSubMenuLink to={'/sightseeing_tour/one_day_tour'}>one day tour</StyledSubMenuLink></li>
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