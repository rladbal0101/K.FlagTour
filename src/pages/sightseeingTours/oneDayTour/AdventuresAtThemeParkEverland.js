import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function AdventuresAtThemeParkEverland(props) {

  const classicTourData = tourData;

  console.log(classicTourData);

  return (
    <div>
      {/* <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} /> */}
      
    </div>
  );
}

export default AdventuresAtThemeParkEverland;
