import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { Outlet } from 'react-router';

import subPageImg from "../data/subPageImgData.json";
import { NavLink } from 'react-router-dom';

const SightseeingToursStyled = styled.div`
  padding: 40px 0 80px;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    margin-bottom: 80px;

    &:first-child a:focus::before {
    
    background-color: #F37500;

    }

    li + li {
      padding-left: 40px;
    }
  }
`

const SubCategory = styled(NavLink)`
  font-weight: 600;
  color: #000;
  text-decoration: none;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    /* border: 3px solid; */
    background-color: transparent;
    border-radius: 50%;
    color: transparent;
    /* color: #F37500; */
    display: flex;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  &:hover::before,
  &.active::before {
    background-color: #F37500;
  }
`;

function SightseeingTours(props) {
  // const SightseeingImg  = subPageImg.find((img) => img.title === 'Sightseeing Tours');

  return (
    <>
      <SubPageStyle 
        title={'Sightseeing Tours'} 
        // photo={SightseeingImg.imagePath} 
      />

      <SightseeingToursStyled className='inner'>
        <ul>
          <li>
            <SubCategory 
              to={'/sightseeing_tour/classic_tour'}
            >
              Classic Tour
            </SubCategory>
          </li>
          <li>
            <SubCategory 
              to={'/sightseeing_tour/theme_tour'}
            >
              Theme Tour
            </SubCategory>
          </li>
          <li>
            <SubCategory 
              to={'/sightseeing_tour/one_day_tour'}
            >
              One Day Tour
            </SubCategory>
          </li>
        </ul>

        <Outlet />
      </SightseeingToursStyled>
    </>
  );
}

export default SightseeingTours;