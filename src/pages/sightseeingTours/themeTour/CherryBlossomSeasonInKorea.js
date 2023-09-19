import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function CherryBlossomSeasonInKorea(props) {

  const themeTourData = tourData[1].themeTours[3];

  return (
    <div className='inner'>
      <SubPageStyle title={themeTourData.name} photo={themeTourData.imagePath} />

      <p>
        gd
      </p>
    </div>
  );
}

export default CherryBlossomSeasonInKorea;
