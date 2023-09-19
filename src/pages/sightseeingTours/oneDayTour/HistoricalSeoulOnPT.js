import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";

function HistoricalSeoulOnPT(props) {
  
  const onedayTourData = tourData[2].onedayTours[2];

  return (
    <div className='inner'>
      <SubPageStyle title={onedayTourData.name} photo={onedayTourData.imagePath} />
      
    </div>
  );
}

export default HistoricalSeoulOnPT;
