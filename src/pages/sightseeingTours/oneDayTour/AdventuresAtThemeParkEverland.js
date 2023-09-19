import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";

function AdventuresAtThemeParkEverland(props) {

  const onedayTourData = tourData[2].onedayTours[6];

  return (
    <div className='inner'>
      <SubPageStyle title={onedayTourData.name} photo={onedayTourData.imagePath} />
      
    </div>
  );
}

export default AdventuresAtThemeParkEverland;
