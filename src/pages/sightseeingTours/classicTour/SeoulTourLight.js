import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";

function SeoulTourLight(props) {

  const classicTourData = tourData[0].classicTours[0];

  return (
    <div className='inner'>
      <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} />

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
        <h3 className='tour-title'>SEOUL (hotel breakfast/lunch)</h3>
        <ul className='tour-list-style'>
          <li>
            <p><span>Seoul</span> City Highlight tour in historical center:</p>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gwanghwamun Square</span> stretches out from Gwanghwamun Gate, once the main gate of Gyeongbokgung Palace, to Sejongno Sageori Intersection. Gwanghwamun Square is divided into six sections. At its center stands a statue of King Sejong the Great, the fourth and most respected king of the Joseon Dynasty and creator of Hangeul, Korea’s alphabet; and a statue of Admiral Yi Sunshin, a naval commander noted for his victories against the Japanese navy during the Japanese invasions of Korea (1592-1598) and a hero among Koreans. Other attractions include the popular 12.23 Fountain, a sculpture of Haechi (the symbol of Seoul), a flower carpet, and Yeoksamulgil (or the “Waterway of History”) on either side of the square.
              </p>
              <img src='../images/tourImg/tourDetailImg/Gwanghwamun-Square.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gyeongbokgung Place</span> – built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces. The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919). 
              </p>
              <img src='../images/tourImg/tourDetailImg/Gyeongbokgung-Place.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span>
                  OPTIONAL: Traditional costume experience – wearing hanbok in the palace. <br />
                  From 15$/pax
                </span>
              </p>
              <img src='../images/tourImg/tourDetailImg/hanbok-in-the-palace.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Insadong Antique Alley</span> is “well known as a traditional street to both locals and foreigners” and represents the “culture of the past and the present”. It contains a mixture of historical and modern atmosphere and is a “unique area of Seoul that truly represents the cultural history of the nation.” The area is well known for sightseeing, with approximately 100,000 visitors on Sundays reported in 2000. Insadong is also a visiting spot for foreign dignitaries such as Queen Elizabeth II and the princes of Spain and the Netherlands. It contains 40 percent of the nation’s antique shops and art galleries as well as 90 percent of the traditional stationery shops.
              </p>
              <img src='../images/tourImg/tourDetailImg/Insadong-Antique-Alley.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Jogyesa Temple</span> is the center of Korean Buddhism. The temple was built in the late 14th century during the Goryeo period and was once turned into ashes due to fire and was rebuilt under the name of Gackhwangsa Temple in 1910 with the effort of many respectful monks, namely Han Yong-un and Lee Hee-gwang. The temple was given a role as the head temple of Korea’s Buddhism and renamed to Tegosa Temple in 1936. In 1954, a purification drive took place to eliminate Japanese influence and revive traditional Buddhism, which established the present day Jogyesa Temple as a result.
              </p>
              <img src='../images/tourImg/tourDetailImg/Jogyesa-Temple.jpg' />
            </div>
          </li>

          <li>
            <p>Visit to <span>Namsangol Hanok Village</span></p>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Namsangol Hanok Village</span> opened in 1998 on the north side of Namsan Mountain in the center of the capital. This village has five restored traditional Korean houses, a pavilion, traditional garden, performance arts stage and a time capsule plaza, making it a perfect spot for both locals and tourists to take a leisure walk. Upon entering from the front gate, visitors will get a taste of the traditional life while escaping from the bustling city life of modern times. The traditional garden with its pavilion and the traditional houses create a peaceful ambiance before the forested Namsan Mountain. A time capsule commemorating Seoul’s 600 Year Anniversary was buried in 1994 at the highest point of the village and is scheduled to be reopened four hundred years later in 2394.
              </p>
              <img src='../images/tourImg/tourDetailImg/Namsangol-Hanok-Village.jpg' />
            </div>
          </li>

          <li>
            <p>Visit to <span>Namsan Seoul Tower</span> by cable car</p>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>N-Seoul Tower:</span> The top of the tower is at almost 480 meters above sea level, including Namsan Mountain (243m) and the tower’s own height (236.7m), making it one of the tallest towers in Asia. It is comprised of Seoul Tower Plaza, recently opened to public access after 40 years, and N Seoul Tower, operated by CJ Foodville since 2005. The tower was first established as a broadcasting tower to send out TV and radio signals in 1969. As of now, it has become one of the representative landmarks and multi-cultural venues in Seoul.
              </p>
              <img src='../images/tourImg/tourDetailImg/N-Seoul-Tower.jpg' />
            </div>
          </li>

          <li><span>FREE TIME</span></li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 3-6</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li><span>FREE TIME</span></li>
        </ul>
      </section>
      
      <section className='day-section'>
        <h2 className='day-title'>DAY 7</h2>
        <h3 className='tour-title'>SEOUL / DEPARTURE FROM INCHEON (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>
          <li>Transfer to <span>Incheon International Airport</span>. Departure from Korea</li>
        </ul>
      </section>
    </div>
  );
}

export default SeoulTourLight;