import React from 'react';
import TourItem from '../../components/TourItem';
import styled from 'styled-components';

import toursData from "../../data/sightseeingToursData.json";

const ClassicTourStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`


function ClassicTour(props) {

  return (
    <ClassicTourStyle>
      {
        toursData.map((tour) => {
          if (tour.classicTours) {
            return tour.classicTours.map((a) => {
              return <TourItem key={a.id} title={a.name} photo={a.imagePath} urlLastPath={a.urlLastPath} />
            })
          }
        })
      }
    </ClassicTourStyle>
  );
}

export default ClassicTour;
