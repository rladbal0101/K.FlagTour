import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function TwoCapitalsSeoulBusan(props) {

  const classicTourData = tourData[0].classicTours[2];

  return (
    <div>
      <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} />
    </div>
  );
}

export default TwoCapitalsSeoulBusan;
