import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function ThreeCapitalsOfKoreaSeoulBusanGyeongju(props) {

  const classicTourData = tourData[0].classicTours[3];

  return (
    <div className='inner'>
      <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} />

      <section className='day-section'>
        <h2 className='day-title'>DAY 1</h2>
        <h3 className='tour-title'>INCHEON ARRIVAL/SEOUL</h3>
        <ul className='tour-list-style'>
          <li>Arrival to <span>Incheon Airport</span> / Meet and greet by our representative /Transfer to <span>Seoul</span> by private coach</li>
          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 2</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>
            <span>Seoul</span> City Highlight tour in historical center:
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gwanghwamun Square </span> 
                stretches out from Gwanghwamun Gate, once the main gate of Gyeongbokgung Palace, to Sejongno Sageori Intersection. Gwanghwamun Square is divided into six sections. At its center stands a statue of King Sejong the Great, the fourth and most respected king of the Joseon Dynasty and creator of Hangeul, Korea’s alphabet; and a statue of Admiral Yi Sunshin, a naval commander noted for his victories against the Japanese navy during the Japanese invasions of Korea (1592-1598) and a hero among Koreans. Other attractions include the popular 12.23 Fountain, a sculpture of Haechi (the symbol of Seoul), a flower carpet, and Yeoksamulgil (or the “Waterway of History”) on either side of the square.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gyeongbokgung Place </span> 
                – built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces. The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919).
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.-Seoul-Tour-light.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span>OPTIONAL: Traditional costume experience – wearing hanbok in the palace. <br/> From 15$/pax </span>
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/3-1.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Blue House (Presidential Residence). </span> 
                The signature markings of the Presidential Residence of Cheong Wa Dae are its blue tiles. It is the first thing that catches one’s attention upon entering the premises. The blue tiles and the smooth roof blend beautifully with Bugaksan Mountain in the backdrop.              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/11/1.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bukchon Hanok Village </span> 
                – Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, it is home to hundreds of traditional houses, called hanok, that date back to the Joseon Dynasty. The name Bukchon, which literally translates to “northern village,” came about as the neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. Today, many of these hanoks operate as cultural centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in traditional Korean culture. As Bukchon Hanok Village is an actual neighborhood with people’s homes, visitors are advised to be respectful at all times while looking around.              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/11/2.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Jogyesa Temple </span> 
                is the center of Korean Buddhism. The temple was built in the late 14th century during the Goryeo period and was once turned into ashes due to fire and was rebuilt under the name of Gackhwangsa Temple in 1910 with the effort of many respectful monks, namely Han Yong-un and Lee Hee-gwang. The temple was given a role as the head temple of Korea’s Buddhism and renamed to Tegosa Temple in 1936. In 1954, a purification drive took place to eliminate Japanese influence and revive traditional Buddhism, which established the present day Jogyesa Temple as a result.              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/11/4.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Cheonggyecheon Stream </span> 
                  is an 11 km long modern stream that runs through downtown Seoul. Created as part of an urban renewal project, Cheonggyecheon is a restoration of the stream that was once there before during the Joseon Dynasty (1392-1910). The stream was covered with an elevated highway after the Korean War (1950-1953), as part of the country’s post-war economic development. Then in 2003, the elevated highway was removed to restore the stream to its present form today. The stream starts from Cheonggye Plaza, a popular cultural arts venue, and passes under a total of 22 bridges before flowing into the Hangang (River), with many attractions along its length.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/11/5.jpg' />
            </div>
          </li>
          <li>
            <span>FREE TIME</span>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 3</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>
            Visit to <span>Namsangol Hanok Village</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Namsangol Hanok Village </span> 
                opened in 1998 on the north side of Namsan Mountain in the center of the capital. This village has five restored traditional Korean houses, a pavilion, traditional garden, performance arts stage and a time capsule plaza, making it a perfect spot for both locals and tourists to take a leisure walk. Upon entering from the front gate, visitors will get a taste of the traditional life while escaping from the bustling city life of modern times. The traditional garden with its pavilion and the traditional houses create a peaceful ambiance before the forested Namsan Mountain. A time capsule commemorating Seoul’s 600 Year Anniversary was buried in 1994 at the highest point of the village and is scheduled to be reopened four hundred years later in 2394.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/2.-Seoul-Tour-with-plenty-of-excursions-1024x684.jpg' />
            </div>
          </li>

          <li>
            Visit to <span>Namsan Seoul Tower </span> by cable car
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>N-Seoul Tower: </span> 
                opened in 1998 on the north side of Namsan Mountain in the center of the capital. This village has five restored traditional Korean houses, a pavilion, traditional garden, performance arts stage and a time capsule plaza, making it a perfect spot for both locals and tourists to take a leisure walk. Upon entering from the front gate, visitors will get a taste of the traditional life while escaping from the bustling city life of modern times. The traditional garden with its pavilion and the traditional houses create a peaceful ambiance before the forested Namsan Mountain. A time capsule commemorating Seoul’s 600 Year Anniversary was buried in 1994 at the highest point of the village and is scheduled to be reopened four hundred years later in 2394.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/6-1.jpg' />
            </div>
          </li>

          <li>
            Transfer to shopping center <span>Myeongdong.</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Myeongdong </span> 
                is Seoul’s shopping mecca and is a must-see for tourists, but it is not just a shopping destination; Myeongdong is also a hub of commerce, banking and culture with a daytime population of 1.5-2 million. For shoppers there is a mixture of street stalls and retail outlets selling everything from high fashion to casual attire, as well as many Korean cosmetics stores offering high-quality products at competitive prices.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/123.jpg' />
            </div>
          </li>

          <li>
              <span>Hangang River Cruise </span> 
              – is one of the best ways to enjoy the Hangang River. The cruises have different themes, including a pirate theme for children and a K-Culture cruise for Hallyu fans, allowing passengers to enjoy live performances and fine dining as they admire the scenery. The romance of the Hangang makes river cruises very popular with lovers all throughout the year.
          </li>

          <div className='tour-description'>
            <div>
              <p>
                <span>OPTIONAL:</span> 
                Enjoy non-verbal show NANTA
              </p>
              <p>
                <span>«Nanta» </span>– is one of Korea’s top performances, a show about four chefs who must prepare a wedding banquet in just one hour. The plot is depicted through various genres of performances, including percussion that uses kitchen utensils to make beats based on traditional rhythms of samulnori (traditional Korean percussion quartet). The entire show has no spoken dialogue, yet plenty of comedy and romance, too. Since its debut in October 1997, NANTA (also known as Cookin’) has earned international acclaim, having been performed on Broadway and at other famous venues worldwide.
              </p>
            </div>
            <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1232.jpg' />
          </div>
        </ul>
      </section>

    </div>
  );
}

export default ThreeCapitalsOfKoreaSeoulBusanGyeongju;
