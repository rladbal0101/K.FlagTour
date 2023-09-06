import React from 'react';
import styled from 'styled-components';
import TourItem from '../../components/TourItem';

import toursData from "../../data/sightseeingToursData.json";

const OneDayTourStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

function OneDayTour(props) {
  return (
    <OneDayTourStyle>
      {
        toursData.map((tour) => {
          if (tour.onedayTours) {
            return tour.onedayTours.map((a) => {
              return <TourItem key={a.id} title={a.name} photo={a.imagePath} />
            })
          }
        })
      }
    </OneDayTourStyle>
  );
}

export default OneDayTour;
