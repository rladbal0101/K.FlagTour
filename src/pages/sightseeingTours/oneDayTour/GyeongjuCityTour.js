import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";

function GyeongjuCityTour(props) {
  
  const onedayTourData = tourData[2].onedayTours[9];

  return (
    <div className='inner'>
      <SubPageStyle title={onedayTourData.name} photo={onedayTourData.imagePath} />
      
    </div>
  );
}

export default GyeongjuCityTour;
