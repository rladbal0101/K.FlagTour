import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { Outlet } from 'react-router';

import toursData from "../data/sightseeingToursData.json";
import TourItem from '../components/TourItem';
import { NavLink } from 'react-router-dom';

// const TourStyle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-wrap: wrap;
// `;

const ToursStyled = styled.div`
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
  @media screen and (max-width: 767px) {
    padding: 30px 0 80px;

    ul {
      font-size: 14px;
      margin-bottom: 40px;
    }
  }
`;

const SubCategory = styled(NavLink)`
  font-weight: 600;
  color: #000;
  text-decoration: none;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: transparent;
    border-radius: 50%;
    color: transparent;
    display: flex;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  &:hover::before,
  &.active::before {
    background-color: #F37500;
  }
`;

function Tours(props) {
  return (
    <div className='inner'>
      <SubPageStyle 
        title={'Tours'} 
        // photo={SightseeingImg.imagePath} 
      />

      <ToursStyled>
        <ul>
          <li>
            <SubCategory 
              to={'/tours/classic_tour'}
            >
              Classic Tour
            </SubCategory>
          </li>
        </ul>

        <Outlet />
      </ToursStyled>
    </div>
    // <div className='inner'>
    //   <SubPageStyle 
    //     title={'Contact us'} 
    //     // photo={medicalImg.imagePath}
    //   />
    //   <TourStyle>
    //     {
    //       toursData.map((tour) => {
    //         if (tour.classicTours) {
    //           return tour.classicTours.map((a) => {
    //             return <TourItem key={a.id} title={a.name} photo={a.imagePath} urlLastPath={a.urlLastPath} />
    //           })
    //         }
    //       })
    //     }
    //   </TourStyle>
    // </div>
  );
}

export default Tours;