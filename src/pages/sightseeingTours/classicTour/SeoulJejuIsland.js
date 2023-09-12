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
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>
            <span>Seoul</span> City Highlight tour in historical center:

            <div className='tour-description'>
                <p>
                  <span className='highlight-red'>Gwanghwamun Square </span>
                  stretches out from Gwanghwamun Gate, once the main gate of Gyeongbokgung Palace, to Sejongno Sageori Intersection. Gwanghwamun Square is divided into six sections. At its center stands a statue of King Sejong the Great, the fourth and most respected king of the Joseon Dynasty and creator of Hangeul, Korea’s alphabet; and a statue of Admiral Yi Sunshin, a naval commander noted for his victories against the Japanese navy during the Japanese invasions of Korea (1592-1598) and a hero among Koreans. Other attractions include the popular 12.23 Fountain, a sculpture of Haechi (the symbol of Seoul), a flower carpet, and Yeoksamulgil (or the “Waterway of History”) on either side of the square.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1234.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'> Gyeongbokgung Palace </span>
                – built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces.
                <br /> <br />
                The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919).
                <br /> <br />
                <span>OPTIONAL:  Traditional costume experience – wearing hanbok in the palace. From 15$/pax</span> 
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Blue House (Presidential Residence)</span>
                . The signature markings of the Presidential Residence of Cheong Wa Dae are its blue tiles. It is the first thing that catches one’s attention upon entering the premises. The blue tiles and the smooth roof blend beautifully with Bugaksan Mountain in the backdrop.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bukchon Hanok Village </span>
                – Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, it is home to hundreds of traditional houses, called hanok, that date back to the Joseon Dynasty. The name Bukchon, which literally translates to “northern village,” came about as the neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. Today, many of these hanoks operate as cultural centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in traditional Korean culture. As Bukchon Hanok Village is an actual neighborhood with people’s homes, visitors are advised to be respectful at all times while looking around.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Insadong Antique Alley </span>
                is “well known as a traditional street to both locals and foreigners” and represents the “culture of the past and the present”. It contains a mixture of historical and modern atmosphere and is a “unique area of Seoul that truly represents the cultural history of the nation.” The area is well known for sightseeing, with approximately 100,000 visitors on Sundays reported in 2000. Insadong is also a visiting spot for foreign dignitaries such as Queen Elizabeth II and the princes of Spain and the Netherlands. It contains 40 percent of the nation’s antique shops and art galleries as well as 90 percent of the traditional stationery shops.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Jogyesa Temple </span>
                is the center of Korean Buddhism. The temple was built in the late 14th century during the Goryeo period and was once turned into ashes due to fire and was rebuilt under the name of Gackhwangsa Temple in 1910 with the effort of many respectful monks, namely Han Yong-un and Lee Hee-gwang. The temple was given a role as the head temple of Korea’s Buddhism and renamed to Tegosa Temple in 1936. In 1954, a purification drive took place to eliminate Japanese influence and revive traditional Buddhism, which established the present day Jogyesa Temple as a result.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Cheonggyecheon Stream </span>
                is an 11 km long modern stream that runs through downtown Seoul. Created as part of an urban renewal project, Cheonggyecheon is a restoration of the stream that was once there before during the Joseon Dynasty (1392-1910). The stream was covered with an elevated highway after the Korean War (1950-1953), as part of the country’s post-war economic development. Then in 2003, the elevated highway was removed to restore the stream to its present form today. The stream starts from Cheonggye Plaza, a popular cultural arts venue, and passes under a total of 22 bridges before flowing into the Hangang (River), with many attractions along its length.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>
          </li>

          <li>Free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 5</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>
            Visit to Theme Amusement Park <span>LOTTE WORLD or</span> Visit to Observatory <span>SEOUL SKY</span> in <span>Lotte World Tower</span>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Lotte World </span>
                is a theme park filled with thrilling rides, an ice rink and different kinds of parades, as well as a folk museum, a lake, accommodations, department stores and more. Lotte World is divided into Lotte World Adventure, a world themed indoor area, and Magic Island theme outdoors, next to Seokchonhosu Lake. Lotte World Adventure is the largest indoor amusement park in the world. The Folk Museum is also one of the most popular museums among international visitors. Also, Lotte World Star Avenue is the perfect place to experience Korean stars and the entertainment world.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Lotte World Tower Seoul Sky </span>
                is located on floors 117-123 of Lotte World Tower, the nation’s tallest and the world’s fifth tallest building (555 m). The observatory offers a panoramic view of the entire capital city, beautiful both day and night. In addition to the outstanding view, visitors can enjoy a small snack or coffee from the dessert cafe while sitting in the lounge or on the sky terrace.
                <br /> <br />
                The observation deck has two story-high glass windows for an uninterrupted view. The Sky Deck, located at 478m, hold the Guinness World Record as the highest glass-floored observatory in the world. On days when visibility is limited, visitors can still enjoy a clear sky through the Sky Theater.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Gangnam district</span>. Visit to <span>Samsung D’Light</span> showroom.

            <div className='tour-description'>
              <p>
                Many people tend to gather at
                <span className='highlight-red'> Gangnam Subway Station</span>
                , as the location is geographically and commercially suitable as a meeting point for social gatherings, events or personal engagements. Hence, during the weekdays it is usually crowded in the evenings while on weekends, areas around Gangnam Subway Station exit number 10 and 11, as well as City Theatre, and Giordano are often bustling with people. Visitors travel to Gangnam to take advantage of its convenient transportation, fashion malls, movie theatres and bookstores.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Samsung D’light </span>
                is Samsung Electronics’ global promotion and exhibition center. Visitors can see all the latest Samsung consumer electronic products here. The name d’light is a portmanteau of the words “digital” and “light”, to correlate with their vision of being a “guiding light to the digital world” and leading consumers to a whole new lifestyle through digital technology. The building consists of three floors with the first floor being an exhibition space for Samsung’s technology and devices. The second floor is a journey into the future with Samsung solutions. The lower floor (B1) is the flagship store, where Samsung devices are available for purchase.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>COEX Convention & Exhibition Center </span>
                is the biggest convention center and exhibition space in Korea. Directly connected to the Samseong Station of subway line 2, it includes a shopping center, a movie theater, a musical concert hall, exhibition halls and famous restaurants. It is also close to a casino, hotels, department stores, and other various amenities. Trade Tower, ASEM Tower and COEX ARTIUM is housed nearby for visitors’ perfect shopping, dining and culture life. COEX MALL has been reopen in 2014. The mall includes Mega-Box theater, COEX Aquarium, Starfield Library, YP bookstore, Pierrot shopping and many other shops and restaurants.
              </p>
              <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>
          </li>

          <li>
            Visit to <span>Bongeunsa Temple</span>. 
            <div className='tour-description'>
                <p>
                  <span className='highlight-red'>Bongeunsa </span>
                  is a Buddhist temple founded in 794 during the Silla (one of the Three Kingdoms of Korea) period. The temple has more than 1,000 years of history and has many interesting historic and cultural features, including woodblock carvings of the Avatamsaka Sutra (Flower Garland Sutra). The temple is also a very popular tourist destination, offering various programs relating to traditional Korean Buddhist culture, in a variety of languages.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Dongdaemun Design Plaza</span>. Shopping at <span>Dongdaemun market</span>. 
            <div className='tour-description'>
                <p>
                  <span className='highlight-red'>Dongdaemun Design Plaza </span>
                  (DDP) is the newest and most iconic landmark of the Korean design industry. Located at the center of the Dongdaemun area, the DDP will serve as a key venue for design-related shows and conferences, exhibitions, and other events and gatherings. Designed by world renowned architect, Zaha Hadid, DDP is the world’s largest atypical architecture. The DDP is comprised of five halls: Art Hall, Museum, Design Lab, Design Market, and Dongdaemun History and Culture Park. The Art Hall is the primary launch pad for the Korean creative industry.
                </p>
                <img src='http://janetourdmc.com/wp-content/uploads/2021/09/1236.jpg' />
            </div>
          </li>

          <li>Free Time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 6</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>Free Time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 7</h2>
        <h3 className='tour-title'>SEOUL / DEPARTURE FROM INCHEON (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>
          <li>
            Transfer to <span>Incheon International Airport</span>. Departure from Korea
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SeoulJejuIsland;
