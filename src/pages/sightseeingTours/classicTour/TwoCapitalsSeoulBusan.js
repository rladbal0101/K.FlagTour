import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function TwoCapitalsSeoulBusan(props) {

  const a = tourData[0].classicTours[2];

  return (
    <div>
      <SubPageStyle title={a.name} photo={a.imagePath} />
    </div>
  );
}

export default TwoCapitalsSeoulBusan;
