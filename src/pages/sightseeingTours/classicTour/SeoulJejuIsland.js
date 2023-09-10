import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function SeoulJejuIsland(props) {

  const a = tourData[0].classicTours[4];

  return (
    <div>
      <SubPageStyle title={a.name} photo={a.imagePath} />
    </div>
  );
}

export default SeoulJejuIsland;
