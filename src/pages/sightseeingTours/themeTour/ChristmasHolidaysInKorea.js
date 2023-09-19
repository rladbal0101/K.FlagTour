import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";

function ChristmasHolidaysInKorea(props) {

  const themeTourData = tourData[1].themeTours[0];

  return (
    <div className='inner'>
      <SubPageStyle title={themeTourData.name} photo={themeTourData.imagePath} />

      
    </div>
  );
}

export default ChristmasHolidaysInKorea;
