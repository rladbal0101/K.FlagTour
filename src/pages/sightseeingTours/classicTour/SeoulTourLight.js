import React from 'react';

import tourData from "../../../data/sightseeingToursData.json";
import SubPageStyle from '../../../components/SubPageStyle';

function SeoulTourLight(props) {

  console.log(tourData[0].classicTours);

  const a = tourData[0].classicTours[0];

  return (
    <div>
      <SubPageStyle title={a.name} photo={a.imagePath} />
    </div>
  );
}

export default SeoulTourLight;