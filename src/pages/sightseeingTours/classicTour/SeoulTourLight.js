import React from 'react';

import tourData from "../../../data/sightseeingToursData.json";
import SubPageStyle from '../../../components/SubPageStyle';

function SeoulTourLight(props) {

  console.log(tourData[0].classicTours);

  const a = tourData[0].classicTours[0];

  return (
    <div className='inner'>
      <SubPageStyle title={a.name} photo={a.imagePath} />

      <section className='day-section'>
        <h2 className='day-title'>DAY 1</h2>
        <h3 className='tour-title'>INCHEON ARRIVAL/SEOUL</h3>
        <ul className='tour-list-style'>
          <li>Arrival to <span>Incheon Airport</span> / Meet and greet by our representative /Transfer to <span>Seoul</span> by private coach
          </li>
          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 2</h2>
        <h3 className='tour-title'>INCHEON ARRIVAL/SEOUL</h3>
        <ul className='tour-list-style'>
          <li><span>Seoul</span> City Highlight tour in historical center:
          </li>
          <li className='tour-description'>
            <p>
              Gwanghwamun Square stretches out from Gwanghwamun Gate, once the main gate of Gyeongbokgung Palace, to Sejongno Sageori Intersection. Gwanghwamun Square is divided into six sections. At its center stands a statue of King Sejong the Great, the fourth and most respected king of the Joseon Dynasty and creator of Hangeul, Korea’s alphabet; and a statue of Admiral Yi Sunshin, a naval commander noted for his victories against the Japanese navy during the Japanese invasions of Korea (1592-1598) and a hero among Koreans. Other attractions include the popular 12.23 Fountain, a sculpture of Haechi (the symbol of Seoul), a flower carpet, and Yeoksamulgil (or the “Waterway of History”) on either side of the square.
            </p>
            <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
          </li>
        </ul>
      </section>

    </div>
  );
}

export default SeoulTourLight;