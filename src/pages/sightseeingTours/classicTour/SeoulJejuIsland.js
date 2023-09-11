import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function SeoulJejuIsland(props) {

  const classicTourData = tourData[0].classicTours[4];

  return (
    <div>
      <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} />

      <section className='day-section'>
        <h2 className='day-title'>DAY 1</h2>
        <h3 className='tour-title'> </h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          <li></li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 2</h2>
        <h3 className='tour-title'></h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          <li className='tour-description'>
            <p>
            </p>
            <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SeoulJejuIsland;
