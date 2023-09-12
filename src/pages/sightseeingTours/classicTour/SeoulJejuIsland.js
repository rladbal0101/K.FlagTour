import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function SeoulJejuIsland(props) {

  const classicTourData = tourData[0].classicTours[4];

  return (
    <div className='inner'>
      <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} />

      <section className='day-section'>
        <h2 className='day-title'>DAY 1</h2>
        <h3 className='tour-title'>INCHEON ARRIVAL/JEJU-DO</h3>
        <ul className='tour-list-style'>
          <li>
            Arrival to <span>Incheon Airport </span> / Meet and greet by our representative / Transfer to <span>Gimpo</span> airport
          </li>

          <li>
            Flight to <span>Jeju Island</span>
          </li>

          <li>
            <span>Jeju Island</span> tour:

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Hallim Park </span> 
                is one of the most popular tourist spots on Jeju Island, located about 33km west of Jeju City and Hallasan Mountain along the beach in Hallim-eup. It faces the pleasant scenery of Biyangdo Island, Hyeopjae Beach and Geumneung Beach. The park was established on barren land in Hyeopjaeri, Hallimeup, then covered with tons of earth and the planting of assorted subtropical plants began in early 1971. Hallim Park, reaching almost 100 thousand square meters, has a variety of gardens that can be enjoyed in any season. Visitors can enjoy Palm Tree Road, Jeju Stone and Bonsai Garden, Water Garden, Subtropical Botanic Garden and much more. The most famous tourist sites in Hallim Park are Hyeopjaegul and Ssangyonggul Caves, known to be the only two-dimensional caves in the world. In addition, a folk village, children’s amusement park and outdoor resort facilities make it enjoyable for both children and adults.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                Located within Jungmun Resort,
                <span className='highlight-red'>Yeomiji Botanical Garden </span> 
                is one of the best botanical gardens in Asia with a unique southern atmosphere. The indoor garden contains approximately 2,000 rare tropical and subtropical plants throughout the Flower Garden, Water Lily Garden, Jungle Garden, Subtropical Fruits Garden, Cactus and Succulent Garden, and Observation Platform. The outdoor garden offers Jeju Native Garden, as well as Korean, Japanese, Italian and French folk gardens. The tour train accommodating 60 persons travels between Indoor and Outdoor Garden. Jungmun Tourist Complex and Cheonjeyeon Falls. A clear view of Hallasan Mountain, and the nearby coast and Marado Island can all be observed from the 38 meter high observation platform.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                The water of 
                <span className='highlight-red'>Cheonjiyeonpokpo Falls </span> 
                , meaning “sky connected with land,” appears to fall from the heavens, giving the falls its name. Apart from the wild dampalsu trees, designated as Natural Monument No. 163, the wooded area also contains a great variety of rare plants such as brambles, songyeopnan as well as gusiljappam trees, sanyuja trees (Chinese lemon trees), and camellias which all make up a forest specified as Natural Monument No. 379. Take a walk along the subtropical path towards the Cheonjiyeonpokpo Falls for a kilometer and you will be able to hear the magnificent sound of the water falling. The waterfall is 22 meters high, 12 meters wide and 20 meters in depth. The clear and deep water of Cheonjiyeonpokpo Falls is designated as Natural Monument No. 27 and is renowned as a habitat for Mutae eels (Natural Monument No. 258).
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>
          </li>

          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 2</h2>
        <h3 className='tour-title'>JEJU-DO (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>
            <span>Jeju Island</span> tour:

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Seongsan Ilchulbong Peak </span>
                rose from under the sea in a volcanic eruption over 100,000 years ago. Located on the eastern end of Jejudo Island, there is a huge crater at the top of Seongsan Ilchulbong Peak. The crater is about 600m in diameter and 90m high. With the 99 sharp rocks surrounding the crater, it looks like a gigantic crown. While the southeast and north sides are cliffs, the northwest side is a verdant grassy hill that is connected to the Seongsan Village. The ridge provides an ideal spot for walks and for horse riding as well. The sunrise from the crater is magnificent. Also the Seongsan Ilchulbong Peak surrounded by bright yellow colored canola flowers in the spring is truly a sight to behold.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Seopjikoji  </span>
                is located at the end of the eastern shore of Jeju Island and boasts a fantastic scenery especially in April when yellow canola flowers are in full bloom. “Seopji” is the old name for the area, and “Koji” is Jeju dialect meaning a sudden bump on land. On top of the hill stands Hyeopja Beacon Fire Station, reaching 4 meters in height with a width and length of 9 meters. Seopjikoji was the filming site of “Gingko Bed,” “The Uprising,” “One Thousand and One Nights” and other Korean TV dramas. Nearby attractions include Jeju Folk Village and Udo Island.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                Located at the foot of Halla Mountain on Jeju Island,
                <span className='highlight-red'>Seongeup Folk Village </span>
                is a small town that holds a vast amount of culture over a wide period of time from 1410 to 1914. Cultural properties in the folk village have been handed down from generation to generation and include treasures such as residential houses, Confucian shrines and schools, ancient government offices, stone statues, large millstones (pulled by horses or ox), fortress ruins, and stone monuments. Among the cultural gems of the folk village are intangible cultural assets such as folk plays, native foods, local folk craftsmanship, and local dialect. Even the trees are an important part of the area’s heritage. Several zelkova and nettle trees that are hundreds of years old stand at the center of the village, preserving the dignified atmosphere of a bygone era.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>
          </li>

          <li>Return to hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 3</h2>
        <h3 className='tour-title'>JEJU-DO /SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>
          <li>
            Jeju Island tour:

            <div className='tour-description'>
                <p>
                  <span className='highlight-red'>Manjanggul Cave</span>
                  is one of the finest lava tunnels in the world, and is a designated natural monument. A lava tunnel is formed when the lava that was deep in the ground spouts from the peak and flows to the surface. Manjanggul Cave has a variety of interesting structures inside including 70 cm lava stalagmites and the lava tube tunnels. Only 1 kilometer of the 7.2-kilometer-long Manjanggul Cave is open to tourists. The inside of the tunnel sustains a temperature of 11~21℃, creating a comfortable atmosphere. There are rare animals such as bats living in the tunnel, which makes this tunnel valuable for researchers as well. The stone pillars and stalactites are widely spread and the tunnels shows off the cave’s topographical features. “Stone Turtle” is especially eye-catching because it is shaped like Jeju Island.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/2.-Seoul-Tour-with-plenty-of-excursions-1024x684.jpg' />
            </div>
            
            <div className='tour-description'>
                <p>
                  Jeju established the 
                  <span className='highlight-red'> Jeju Haenyeo Museum (women divers) </span>
                  in 2003 to introduce to the world the unique activities and culture of Jeju’s haenyeo. Haenyeo refers to female divers who dive into the ocean water to gather various shellfish and seaweed without any diving equiptment. The Jeju Haenyeo Museum exhibits various photos of haenyeo female divers and their activities, to provide an accurate picture of their lives. The Jeju Haenyeo Museum also has an observatory from where visitors can see an excellent view of the Hado-ri area, which has a garden with various sculptures and a resting area. The first floor lobby has a souvenir shop where visitors can purchase a variety of souvenirs related to haenyeo female divers.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/6-1.jpg' />
            </div>
            
            <div className='tour-description'>
                <p>
                  <span className='highlight-red'>Jeju Folklore & Natural History Museum </span>
                  currently has on exhibition folklore remains and natural historical materials of Jeju-do that were excavated in Jeju-do and displayed in 1984. The museum is divided into four exhibition halls: the Natural History Hall, the Folklore Exhibition HallⅠ, the Folklore Exhibition HallⅡ, and the Outdoor Exhibition.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/123.jpg' />
            </div>
            
            <div className='tour-description'>
                <p>
                  Situated to the north of Jeju City, Yongduam, or 
                  <span className='highlight-red'> Dragon Head Rock, </span>
                  was created by strong winds and waves over thousands of years. However, there are plenty of other stories of how it came to be. One legend has it that a dragon stealing precious jade from Mt. Halla was shot down by an arrow from the mountain deity. When he fell down on Yongduam, his body immediately sank into the ocean and his head rapidly froze looking at the sky. Another legend has it that a white horse, who dreamed of being a dragon and ascending to the sky, came to be caught by a soldier and froze into the rock.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/123.jpg' />
            </div>
          </li>
          
          <li>
            Transfer to <span>Jeju Airport</span>, flight to <span>Gimpo</span> Airport, <span>Seoul</span>
          </li>
          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 4</h2>
        <h3 className='tour-title'></h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          
          <li>

            <div className='tour-description'>
                <p>
                  <span className='highlight-red'></span>
                  
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/2.-Seoul-Tour-with-plenty-of-excursions-1024x684.jpg' />
            </div>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 5</h2>
        <h3 className='tour-title'></h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          <li>

            <div className='tour-description'>
                <p>
                  <span className='highlight-red'></span>
                  
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/2.-Seoul-Tour-with-plenty-of-excursions-1024x684.jpg' />
            </div>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 6</h2>
        <h3 className='tour-title'></h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          
          <li>
            <div className='tour-description'>
                <p>
                  <span className='highlight-red'></span>
                  
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/2.-Seoul-Tour-with-plenty-of-excursions-1024x684.jpg' />
            </div>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 7</h2>
        <h3 className='tour-title'></h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          
          <li>
            <div className='tour-description'>
                <p>
                  <span className='highlight-red'></span>
                  
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/2.-Seoul-Tour-with-plenty-of-excursions-1024x684.jpg' />
            </div>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 2</h2>
        <h3 className='tour-title'></h3>
        <ul className='tour-list-style'>
          <li>
          </li>
          
          <div className='tour-description'>
              <p>
                <span className='highlight-red'> </span>
                
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2019/02/1.jpg' />
            </div>
        </ul>
      </section>
    </div>
  );
}

export default SeoulJejuIsland;
