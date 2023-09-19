import React from 'react';
import styled from 'styled-components';
import TourItem from '../../components/TourItem';

import toursData from "../../data/sightseeingToursData.json";

const ThemeTourStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function ThemeTour(props) {
  return (
    <ThemeTourStyle>
      {
        toursData.map((tour) => {
          if (tour.themeTours) {
            return tour.themeTours.map((a) => {
              return <TourItem key={a.id} title={a.name} photo={a.imagePath} urlLastPath={a.urlLastPath} />
            })
          }
        })
      }
    </ThemeTourStyle>
  );
}

export default ThemeTour;
