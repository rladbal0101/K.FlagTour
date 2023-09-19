import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";

function SpaTourSeoulBusan(props) {
  const themeTourData = tourData[1].themeTours[6];

  return (
    <div className='inner'>
      <SubPageStyle title={themeTourData.name} photo={themeTourData.imagePath} />

      
    </div>
  );
}

export default SpaTourSeoulBusan;
