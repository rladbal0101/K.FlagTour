import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import dayjs from "dayjs";
import logo from "../logo.png";

const LayoutStyle = styled.div`
`;

// PC용 메뉴
const HeaderStyle = styled.div`
  width: 100%;
  height: 80px;
  background-color: #00235C;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 9;

  img {
    width: 120px;
    margin: 0 30px;
  }

  /* language 메뉴 icon 스타일 */
  /* svg {
    font-size: 20px;
    margin: 0 30px;
    color: #eee;

    &:hover {
      color: #F37500;
    }
  } */

  @media screen and (max-width: 767px) {
    display: none;
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
    justify-content: space-around;

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

// 모바일용 메뉴
const MobileHeaderStyle = styled.div`
  width: 100%;
  height: 50px;
  background-color: #00235C;
  text-align: center;
  /* line-height: 70px; */

  position: fixed;
  z-index: 9;

  .mobile-logo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80px;
    }
  }

  svg.mobile-menu-hamburger {
    width: 20px;
    height: 20px;
    color: #fff;

    position: absolute;
    top: 15px;
    right: 20px;
  }

  display: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const MobileNavStyle = styled.nav`
  width: 240px;
  height: 100%;
  padding: 15px 20px;
  box-sizing: border-box;
  text-align: right;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 35, 92, 0.9);

  svg.mobile-menu-close {
    width: 20px;
    height: 20px;
    color: #fff;
  }

  ul.mobile-gnb-depth1 {
    padding: 30px 0;

    & > li.mobile-gnb-depth1-item {
      outline: none;
      font-weight: normal;
      /* display: flex; */
      flex-direction: column;
      align-items: center;
      padding: 15px 0;

      & a {
        font-weight: 700;
      }

      &:hover > .sub-menu{
        display: block;
      }
    }
    
    ul.mobile-gnb-depth2 {
      /* margin-top: 20px; */
  
      li {
        padding: 5px 0;
      }
    }
  }
`;

const MobileStyledLink = styled(NavLink)`
  color: #eee;

  text-decoration: none;
  border-bottom: 2px solid transparent;

  position: relative;

  &:hover{
    color: #F37500;
  }
`;

const MobileStyledSubMenu = styled.div`

  ul.mobile-gnb-depth2 {
    width: 100%;
  }
`;

const MobileStyledSubMenuLink = styled(NavLink)`
  color: #F37500;
  font-size: 13px;
  text-decoration: none;

  &:hover {
      font-weight: 700;
      color: #eee;
    }
`;

// 푸터
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
  const [menuOpen, setMenuOpen] = useState(false);

  let now = dayjs();

  now.format();

  const thisYear = now.get("year")

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  };

  return (
    <LayoutStyle>
      {/* PC용 메뉴 */}
      <HeaderStyle>
        <img className='cursor-pointer' onClick={() => navigate('/')} src={logo} />
        <NavStyle>
          <ul className='gnb-depth1'>

            {/* About us */}
            <li className='gnb-depth1-item'>
              <StyledLink to={'/about_us'}>About us</StyledLink>
              {/* 하위 메뉴 필요시 사용 */}
              {/* <StyledSubMenu className='sub-menu'>
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
                </ul>
              </StyledSubMenu> */}
            </li>

            {/* Tours */}
            <li className='gnb-depth1-item'>
              <StyledLink to={'/tours/classic_tour'}>Tours</StyledLink>
              <StyledSubMenu className='sub-menu'>
                <ul className='gnb-depth2'>
                  <li><StyledSubMenuLink to={'/tours/classic_tour'}>classic tour</StyledSubMenuLink></li>
                </ul>
              </StyledSubMenu>
            </li>

            {/* Sightseeing Tours  */}
            {/* <li className='gnb-depth1-item'>
              <StyledLink to={'/sightseeing_tour/classic_tour'}>Sightseeing Tours</StyledLink>
              <StyledSubMenu className='sub-menu'>
                <ul className='gnb-depth2'>
                  <li><StyledSubMenuLink to={'/sightseeing_tour/classic_tour'}>classic tour</StyledSubMenuLink></li>
                  <li><StyledSubMenuLink to={'/sightseeing_tour/theme_tour'}>theme tour</StyledSubMenuLink></li>
                  <li><StyledSubMenuLink to={'/sightseeing_tour/one_day_tour'}>one day tour</StyledSubMenuLink></li>
                </ul>
              </StyledSubMenu>
            </li> */}

            {/* Medical Tours */}
            <li className='gnb-depth1-item'>
              <StyledLink to={'/medical_tour'}>Medical Tours</StyledLink>
            </li>

            {/* useful information */}
            {/* <li className='gnb-depth1-item'>
              <StyledLink to={'/useful_information'}>Useful Information</StyledLink>
            </li> */}

            {/* Contact us */}
            <li className='gnb-depth1-item'>
              <StyledLink to={'/contact_us'}>Contact us</StyledLink>
            </li>
          </ul>
        </NavStyle>
        {/* language 메뉴 */}
        {/* <TbWorld className='cursor-pointer' /> */}
      </HeaderStyle>

      {/* 모바일용 메뉴 */}
      <MobileHeaderStyle>
        <div className='mobile-logo'>
          <img className='cursor-pointer' onClick={() => navigate('/')} src={logo} />
        </div>
        {
          menuOpen ?
            <MobileNavStyle className='mobile-menu'>
              <AiOutlineClose className='mobile-menu-close cursor-pointer' onClick={toggleMenu} />
              <ul className='mobile-gnb-depth1'>

                {/* About us */}
                <li className='mobile-gnb-depth1-item'>
                  <MobileStyledLink to={'/about_us'} onClick={toggleMenu}>About us</MobileStyledLink>
                  {/* 하위 메뉴 필요시 사용 */}
                  {/* <MobileStyledSubMenu className='mobile-sub-menu' onClick={toggleMenu}>
                    <ul className='mobile-gnb-depth2'>
                      <li>
                        <MobileStyledSubMenuLink to={'/about_us/company_introduction'}>Company introduction</MobileStyledSubMenuLink>
                      </li>
                      <li>
                        <MobileStyledSubMenuLink to={'/about_us/ceo_greetings'}>CEO greetings</MobileStyledSubMenuLink>
                      </li>
                      <li>
                        <MobileStyledSubMenuLink to={'/about_us/awards'}>Awards</MobileStyledSubMenuLink>
                      </li>
                    </ul>
                  </MobileStyledSubMenu> */}
                </li>

                {/* Tours */}
                <li className='mobile-gnb-depth1-item'>
                  <MobileStyledLink to={'/tours/classic_tour'} onClick={toggleMenu}>Tours</MobileStyledLink>
                  <MobileStyledSubMenu className='mobile-sub-menu' onClick={toggleMenu}>
                    <ul className='mobile-gnb-depth2'>
                      <li><MobileStyledSubMenuLink to={'/tours/classic_tour'}>classic tour</MobileStyledSubMenuLink></li>
                      {/* <li><MobileStyledSubMenuLink to={'/tours/classic_tour'}>sssgqefssasd tour</MobileStyledSubMenuLink></li> */}
                    </ul>
                  </MobileStyledSubMenu>
                </li>

                {/* Sightseeing Tours */}
                {/* <li className='mobile-gnb-depth1-item'>
                  <MobileStyledLink to={'/sightseeing_tour/classic_tour'} onClick={toggleMenu}>Sightseeing Tours</MobileStyledLink>
                  <MobileStyledSubMenu className='mobile-sub-menu' onClick={toggleMenu}>
                    <ul className='mobile-gnb-depth2'>
                      <li><MobileStyledSubMenuLink to={'/sightseeing_tour/classic_tour'}>classic tour</MobileStyledSubMenuLink></li>
                      <li><MobileStyledSubMenuLink to={'/sightseeing_tour/theme_tour'}>theme tour</MobileStyledSubMenuLink></li>
                      <li><MobileStyledSubMenuLink to={'/sightseeing_tour/one_day_tour'}>one day tour</MobileStyledSubMenuLink></li>
                    </ul>
                  </MobileStyledSubMenu>
                </li> */}

                {/* Medical Tours */}
                <li className='mobile-gnb-depth1-item'>
                  <MobileStyledLink to={'/medical_tour'} onClick={toggleMenu}>Medical Tours</MobileStyledLink>
                </li>

                {/* useful information */}
                {/* <li className='mobile-gnb-depth1-item'>
                  <MobileStyledLink to={'/useful_information'} onClick={toggleMenu}>Useful Information</MobileStyledLink>
                </li> */}

                {/* Contact us */}
                <li className='mobile-gnb-depth1-item'>
                  <MobileStyledLink to={'/contact_us'} onClick={toggleMenu}>Contact us</MobileStyledLink>
                </li>
              </ul>
            </MobileNavStyle>
            :
            <GiHamburgerMenu className='mobile-menu-hamburger cursor-pointer' onClick={toggleMenu} />
        }
      </MobileHeaderStyle>

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