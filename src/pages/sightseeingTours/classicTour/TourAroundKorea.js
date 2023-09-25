import React from 'react';
import SubPageStyle from '../../../components/SubPageStyle';

import tourData from "../../../data/sightseeingToursData.json";


function TourAroundKorea(props) {

  const classicTourData = tourData[0].classicTours[5];

  return (
    <div className='inner'>
      <SubPageStyle title={classicTourData.name} photo={classicTourData.imagePath} />

      <section className='day-section'>
        <h2 className='day-title'>DAY 1</h2>
        <h3 className='tour-title'>INCHEON ARRIVAL/SEOUL (lunch)</h3>
        <ul className='tour-list-style'>
          <li>
            Arrival to <span>Incheon Airport</span> / Meet and greet by our representative /Transfer to <span>Seoul</span> by private coach
          </li>

          <li> Check in hotel, free time </li>

          <li>
            Walk at <span>Cheonggyecheon Stream</span> and <span>Gwanghwamun Square</span>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gwanghwamun Square </span>
                stretches out from Gwanghwamun Gate, once the main gate of Gyeongbokgung Palace, to Sejongno Sageori Intersection. Gwanghwamun Square is divided into six sections. At its center stands a statue of King Sejong the Great, the fourth and most respected king of the Joseon Dynasty and creator of Hangeul, Korea’s alphabet; and a statue of Admiral Yi Sunshin, a naval commander noted for his victories against the Japanese navy during the Japanese invasions of Korea (1592-1598) and a hero among Koreans. Other attractions include the popular 12.23 Fountain, a sculpture of Haechi (the symbol of Seoul), a flower carpet, and Yeoksamulgil (or the “Waterway of History”) on either side of the square.
              </p>
              <img src='../images/tourImg/tourDetailImg/Gwanghwamun-Square.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Cheonggyecheon Stream </span>
                is an 11 km long modern stream that runs through downtown Seoul. Created as part of an urban renewal project, Cheonggyecheon is a restoration of the stream that was once there before during the Joseon Dynasty (1392-1910). The stream was covered with an elevated highway after the Korean War (1950-1953), as part of the country’s post-war economic development. Then in 2003, the elevated highway was removed to restore the stream to its present form today. The stream starts from Cheonggye Plaza, a popular cultural arts venue, and passes under a total of 22 bridges before flowing into the Hangang (River), with many attractions along its length.
              </p>
              <img src='../images/tourImg/tourDetailImg/Cheonggyecheon-Stream.jpg' />
            </div>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 2</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>
            <span>Seoul</span> City Highlight tour in historical center:

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gyeongbokgung Palace </span>
                – built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces. The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919).
                <span>OPTIONAL: Traditional costume experience – wearing hanbok in the palace. From 15$/pax</span>
              </p>
              <img src='../images/tourImg/tourDetailImg/Gyeongbokgung-Place.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bukchon Hanok Village </span>
                – Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, it is home to hundreds of traditional houses, called hanok, that date back to the Joseon Dynasty. The name Bukchon, which literally translates to “northern village,” came about as the neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. Today, many of these hanoks operate as cultural centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in traditional Korean culture. As Bukchon Hanok Village is an actual neighborhood with people’s homes, visitors are advised to be respectful at all times while looking around.
              </p>
              <img src='../images/tourImg/tourDetailImg/Bukchon-Hanok-Village.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Insadong Antique Alley </span>
                is “well known as a traditional street to both locals and foreigners” and represents the “culture of the past and the present”. It contains a mixture of historical and modern atmosphere and is a “unique area of Seoul that truly represents the cultural history of the nation.” The area is well known for sightseeing, with approximately 100,000 visitors on Sundays reported in 2000. Insadong is also a visiting spot for foreign dignitaries such as Queen Elizabeth II and the princes of Spain and the Netherlands. It contains 40 percent of the nation’s antique shops and art galleries as well as 90 percent of the traditional stationery shops.
              </p>
              <img src='../images/tourImg/tourDetailImg/Insadong-Antique-Alley.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Jogyesa Temple </span>
                is the center of Korean Buddhism. The temple was built in the late 14th century during the Goryeo period and was once turned into ashes due to fire and was rebuilt under the name of Gackhwangsa Temple in 1910 with the effort of many respectful monks, namely Han Yong-un and Lee Hee-gwang. The temple was given a role as the head temple of Korea’s Buddhism and renamed to Tegosa Temple in 1936. In 1954, a purification drive took place to eliminate Japanese influence and revive traditional Buddhism, which established the present day Jogyesa Temple as a result.
                <br />
                <span>OPTIONAL</span>: Visit to <span>DRAGON HILL SPA</span>
              </p>
              <img src='../images/tourImg/tourDetailImg/Jogyesa-Temple.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Spa-complex </span>
                <span>Dragon Hill</span> – Yongsan Dragon Hill Spa is a charcoal sauna permeated with an oak fragrance created by traditional heating techniques. The jjimjil-bang and spa facilities offer sweating rooms/sauna, an open-air bath, seawater bath, salt room, swimming pool, and health center. The main hall of Yongsan Dragon Hill Spa boasts a Chinese-style design and a luxurious interior that has been used as a filming location for various Korean television broadcasts.
              </p>
              <img src='../images/tourImg/tourDetailImg/DRAGON-HILL-SPA.png' />
            </div>
          </li>

          <li>
            <span>FREE TIME</span>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 3</h2>
        <h3 className='tour-title'>SEOUL/SOKCHO (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>

          <li>
            Transfer to <span>Sokcho</span>. Visit to Seorak Mountains, Sinheungsa Temple, Gwongeumseong Fortress by Seorak Cable Car, waterfalls, etc.

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Seoraksan National Park </span>
                With its highest point, Daecheongbong Peak, located 1,708 m above ground, Seoraksan Mountain is one of the most beautiful mountains in Korea, boasting a variety of colorful flowers in spring, refreshing clear water streams in summer, vibrant autumn foliages in fall, and a scenic snow-covered landscape in winter. With the mountain changing in color according to each season, a visit to Seoraksan Mountain guarantees a picturesque landscape any time of the year. Hangyeryeong and Misiryryeong serve as a boundary line dividing Oeseorak (Outer Seorak), located towards the East Sea, and Naeseorak (Inner Seorak). The Oeseorak is a home to gigantic waterfalls such as Biryong Falls, Oryeon Falls, and Towangseong Falls as well as notable rock formations such as Ulsanbawi Rock and Geumgang Cave.
              </p>
              <img src='../images/tourImg/tourDetailImg/Namsangol-Hanok-Village.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Sorak Cable Car </span>
                is located at Sogongwon area in Seoraksan National Park. The cable car takes you to Gwongeumseong Fortress, located about 800 meters above sea level. Then you get off the cable car, you can walk to Gwongeumseong Fortress which takes about 10~20 minutes on foot. Then, you will be able to take in the breathtaking views of East Sea, Seoraksan National Park, and Sokcho.
              </p>
              <img src='../images/tourImg/tourDetailImg/Namsangol-Hanok-Village.jpg' />
            </div>
          </li>

          <li>
            Walk at Sokcho City’s Central Market and streets, full of cafes.

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Sokcho Tourist & Fishery Market </span>
                is a famous tourist market located at Sokcho, in Gangwon Province. Famous for its delicious market foods and fresh seafood, it is a must-visit place when you come to Sokcho. The market is very well known for “dak gangjeong” or sweet and sour fried chicken. Close to the sea, you can also buy fresh seafood. Ranging from raw seafood to dried ingredients and ready-to-eat dishes, this market is the perfect place to test your bargaining skills and try authentic Korean seafood.
              </p>
              <img src='../images/tourImg/tourDetailImg/N-Seoul-Tower.jpg' />
            </div>
          </li>

          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 4</h2>
        <h3 className='tour-title'>SOKCHO/ANDONG/GYEONGJU (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>

          <li>
            Transfer to <span>Andong</span>
          </li>

          <li>
            Visit to <span>Andong Hahoe Folk Village</span>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Hahoe Village </span>
                is home to descendants of the Ryu clan of Pungsan and is well-known for its traditional houses. Birthplace of renowned scholars of the Joseon Period such as Gyeomam Ryu Un-ryong and Seoae Ryu Seong-ryong, the village became even more famous after Queen Elizabeth of England visited on April 21, 1999. Hahoe Village (translating to “Village Enveloped by Water”) gets its name from Nakdong River, which flows around the town’s perimeter. The village is located at the foothills of Hwasan Mountain, an offshoot of Taebaek Mountain that rises up to the east. The center of the village is populated by large tile-roofed houses belonging to the Ryu clan, adding their own unique charm to the surrounding thatched roofs.
              </p>
              <img src='../images/tourImg/tourDetailImg/Lotte-World.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Gyeongju</span>
          </li>

          <li>
            <span>Gyeongju</span> tour

            <div className='tour-description'>
              <p>
                Within Daereungwon Tomb Complex is
                <span className='highlight-red'> Cheonmachong Tomb </span>
                (Ancient Tomb No. 155), which was excavated in 1973. Cheonmachong Tomb consists of a wooden coffin placed inside an underground chamber mounded with boulders and earth, characterized as a typical upper class tomb of the Silla period. The mound has a height of 12.7 m with a diameter of 50 m, and consists of a layer of rocks collected from streams. Below the rock layer is a wooden chamber that is 6.5 m long and 2.1 m wide, reaching 2.1 m in height, with the wooden coffin at its center. A total of 11,526 artifacts were discovered within the tomb, including Cheonmado, an artwork considered highly valuable as it is Korea’s first artwork to be excavated from an ancient tomb.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                Many people tend to gather at
                <span className='highlight-red'>Gangnam Subway Station </span>
                , as the location is geographically and commercially suitable as a meeting point for social gatherings, events or personal engagements. Hence, during the weekdays it is usually crowded in the evenings while on weekends, areas around Gangnam Subway Station exit number 10 and 11, as well as City Theatre, and Giordano are often bustling with people. Visitors travel to Gangnam to take advantage of its convenient transportation, fashion malls, movie theatres and bookstores.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Cheomseongdae Observatory </span>
                is the oldest existing astronomical observatory in Asia. Constructed during the reign of Queen Seon-deok (r. 632-647), it was used to observe stars in order to forecast the weather. This stone structure is a beautiful combination of straight lines and curves, and was designated as National Treasure No.31 on December 20th, 1962. Cheomseongdae was built in a cylinder shape with stones 30cm in diameter. 362 stones were piled up to make 27 levels. Roughly 4.16m up from the bottom there is a 1㎡ square entrance and a space to hang a ladder under it.The inside is filled with soil up to the 12th level, and the 19th, 20th, 25th, and 26th levels all have long rocks hanging on two areas, shaped as the Chinese letter ‘井’ (jeong). The 362 stones used to build Cheomseongdae represented the 362 days in a lunar year.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gyeongju Donggung Palace and Wolji Pond </span>
                was the secondary palace site which was used by the crown prince of the Silla Kingdom. It also served as a banquet site for important national events and important visitors. After the fall of Silla, the site was abandoned and forgotten. The pond was referred to as “Anapji” during the Goryeo and Joseon periods. In the 1980s, a pottery fragment with letters “Wolji” (a pond that reflects the moon) carved onto it was found, revealing the true name of the pond. After the discovery, the site was renamed to the current Donggung Palace and Wolji Pond.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 5</h2>
        <h3 className='tour-title'>GYEONGJU/BUSAN (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>

          <li>
            Visit to <span>UNESCO World Heritage</span> sites.

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bulguksa Temple </span>
                is a representative relic of Buddhist culture from the Silla kingdom. The temple was built in 528 BC during the 15th year of King Beop-heung’s reign (514-540) to wish for peace and prosperity for all. It was later rebuilt in 751 by Kim Dae-seong. Unfortunately, the temple caught fire during the Imjin War (1592-1598). After the war, the temple suffered serious damage and was often the target of theft. Starting in 1920, the temple has undergone continual restoration work. The temple now holds seven national treasures, a number of additional important heritages, and was designated a World Cultural Heritage Site along with the nearby Seokguram Grotto by UNESCO in December 1995
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Seokguram Grotto </span>
                , located on Tohamsan Mountain, is the representative stone temple of Korea. It is an artificial stone temple made of granite. The construction was started by Kim Dae-Seong (700-774) in 751 during the reign of King Gyeong-Deok (742-765) of the Silla Kingdom and it was finished twenty-four years later in 774, during the reign of King Hye-Gong (765-780). Inside the round-shaped main hall are the Bonjon Statue, Bodhi-sattva and his disciples. The Bonjon figure wearing a generous smile is seated on the stage engraved with a lotus flower design. The rounded ceiling looks like a half-moon or a bow and has a lotus flower decorated cover on it. The view of the sunrise is quite beautiful and many people hike the mountain at daybreak.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Transfer to Busan. <span>Busan</span> tour:

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Haedong Yonggungsa Temple </span>
                is situated on the coast of the north-eastern portion of Busan. This superb attraction offers visitors the rare find of a temple along the shore line; most temples in Korea are located in the mountains. Haedong Yonggungsa Temple was first built in 1376 by the great Buddhist teacher known as Naong during the Goryeo Dynasty. One of the special sites at the temple are the 108 stairs and stone lanterns lining the rocky landscape. After going down the 108 steps, one will be delighted with the beauty of the temple. Midway down the 108 steps one can stop and enjoy the calming sounds of the waves, and view the majestic sunrise.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gwangan Bridge </span>
                stretches over 7.4km from Namcheon-dong (Suyeong-gu, Busan) to Centum City (U-dong, Haeundae-gu). It is the longest bi-level bridge over the ocean in Korea. In addition to providing a quick way to get around, the bridge offers breathtaking views of nearby attractions, including the endlessly unfolding ocean, Oryukdo Island, Hwangnyeongsan Mountain, Gwangalli Beach, Dongbaekseom Island, and Dalmaji Hill. Equipped with thousands of LED lights, the bridge showcases a beautiful lighting exhibition at night that changes with the seasons.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Haeundae Beach </span>
                is the most famous beach in Busan. The white sand beach is roughly 1.5 k m long, over a 30-50 m wide area, creating a beautiful coastline before a shallow bay, making Haeundae Beach perfect for swimming. Haeundae Beach is also famous for various cultural events and festivals held throughout the year. Other facilities in the area include Dongbaek Island, Busan Aquarium, a yachting dock, BEXCO, driving courses and more.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>Check in hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 6</h2>
        <h3 className='tour-title'>BUSAN/GWANGJU (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>
          <li>
            <span>Busan</span> Tour:
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gamcheon Culture Village </span>
                is formed by houses built in staircase-fashion on the foothills of a coastal mountain, earning this village the nickname “Machu Picchu of Busan.” Many alleys that cut through this community are vibrantly decorated with murals and sculptures created by the residents.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Jagalchi Market </span>
                is Korea’s largest seafood market, selling both live and dried fish. Most of the people who sell fish are women, so the vendors here are called Jagalchi Ajumma, “ajumma” meaning middle-aged or married woman in Korean. This market represents Busan and is famous throughout the country. Visitors can eat fresh raw fish right at the market. Even nowadays visitors can see women selling mackerel, sea squirts (ascidians) and whale meat on wooden boxes along the road outside of the market and along the shore.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Suncheon</span>. Visit to <span>Suncheonman Bay National Garden.</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>The Suncheon Bay Garden </span>
                was established in order to turn 1.12 square kilometers wide natural habitat into a conservation area, where it serves as a home over 505 species of trees and 113 species of flowers. The numerous groups of tulips and royal azaleas are truly a sight to see. In addition, the nearby 30,000 square meter field& of canola flowers is in full bloom in May, which creates a beautiful yellow “wave” of color and trees make a great shades of canopy for the area.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Gwangju</span>, hotel check in, free time
            </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 7</h2>
        <h3 className='tour-title'>GWANGJU (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>
            Cultural experience in <span>Gwangju</span>:
            <br /> <br />
            <p>
              <span>Optional cultural experience programs:</span> Traditional programs at Confucian school: Tea ceremony, Culinary lessons, Making the traditional alcohol drinks, Wearing traditional clothes, etc.
            </p>
          </li>
          <li>
            Visit to <span>Traditional Culture Center. Traditional music instruments experience – playing on janggu.</span>
            <div className='tour-description'>
              <p>
                The
                <span className='highlight-red'> Traditional Culture Center </span>
                is located near the entrance of Jeungsimsa Temple. A walk down the steps reveals the center’s impressive size as well as its beautiful design. At the Traditional Culture Center, masters who have been designated as intangible cultural properties teach the public about traditional culture: pansori (traditional Korean folk opera); gobeop (traditional drumming technique); gayageum (traditional Korean zither); and the table setting for pyebaek, part of the traditional ceremony. Performances are also held to demonstrate such elements of traditional Korean art and culture.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Visit to <span>Penguin Village</span>
            <div className='tour-description'>
              <p>
                “We put various odds and ends together and something special emerged.” Village chief Kim Donggyun and other locals retrieved discarded items that they decided to use to adorn the walls in the neighborhood. Hundreds of household items and toys as well as old broken clocks were put on display, turning ordinary alleys into a work of art and attracting increasing crowds. Its name was given by Kim, who was inspired by a friend whose manner of walking he affectionately likened to that of a penguin.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Visit to <span> Yangnim History & Culture Village</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Yangnim History & Culture Village </span>
                is located in the area where Western items and ideas first entered Gwangju over 100 years ago. As such, the neighborhood has a unique collection of Western architecture mixed with traditional hanok houses. There are also many houses of Christian missionaries, who facilitated the advancement of medicine and education in Gwangju. Some areas such as Penguin Village have been decorated with murals and outdoor exhibitions to promote art and tourism, helping the elderly locals to make a living.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Visit to <span> May 18 Archives, View Folly Observation desk.</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>The 5·18 Archives </span>
                systematically preserves and manages photographs, film and videos related to the May 18 Democratic Movement, which were listed in the UNESCO Memory of the World in 2011. The first to third floors are devoted to permanent exhibitions that record the May protests as part of the heritage of humankind. On the sixth floor is the recreated office of Yoon Gong-hee, former head of the Gwangju archdiocese.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Visit to <span>1913 Songjeong Station Market</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Songjeong Station Market </span>
                has stood next to Songjeong Railway Station since 1913. The century-old traditional market was once bustling with people but experienced a downturn amid changing consumer trends. In recognition of the rich, storied tradition that sets 1913 Songjeong Station Market apart from large supermarkets, efforts have been made to introduce changes that highlight the unique attributes of the market, so as to ensure that the market remains standing for years to come.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>Return to hotel, free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 8</h2>
        <h3 className='tour-title'>GWANGJU/SEOUL (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>
            Transfer to <span>Damyang</span>
          </li>

          <li>
            Visit <span>to Damyang’s Bamboo Forest Juknokwon</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Juknokwon </span>
                in Damyang is a bamboo forest cultivated by the town of Damyang. Seonginsan Mountain behind Damyang Hyanggyo (Confucian school) was transformed into Juknokwon Bamboo Garden featuring a beautiful artificial waterfall, pavilion, walking paths and an eco-exhibition center, a popular destination for visitors. It takes about an hour to tour around the entire garden and to enjoy night walks, the lights are turned on in the evenings in the bamboo forest.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Seoul</span>, Hotel check in, free time for shopping
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Myeongdong </span>
                is Seoul’s shopping mecca and is a must-see for tourists, but it is not just a shopping destination; Myeongdong is also a hub of commerce, banking and culture with a daytime population of 1.5-2 million. For shoppers there is a mixture of street stalls and retail outlets selling everything from high fashion to casual attire, as well as many Korean cosmetics stores offering high-quality products at competitive prices.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <div className='tour-description'>
            <div className='option-group'>
              <p>
                <span>OPTIONAL:</span> 
                Enjoy non-verbal show <span>NANTA</span>
              </p>
              <p>
                <span className='highlight-red'>«Nanta» – </span> 
                is one of Korea’s top performances, a show about four chefs who must prepare a wedding banquet in just one hour. The plot is depicted through various genres of performances, including percussion that uses kitchen utensils to make beats based on traditional rhythms of samulnori (traditional Korean percussion quartet). The entire show has no spoken dialogue, yet plenty of comedy and romance, too. Since its debut in October 1997, NANTA (also known as Cookin’) has earned international acclaim, having been performed on Broadway and at other famous venues worldwide.
              </p>
            </div>
            <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
          </div>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 9</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast, lunch)</h3>
        <ul className='tour-list-style'>
          <li>
            Visit to Observatory <span>SEOUL SKY</span> in <span>Lotte World Tower</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Lotte World Tower Seoul Sky </span>
                is located on floors 117-123 of Lotte World Tower, the nation’s tallest and the world’s fifth tallest building (555 m). The observatory offers a panoramic view of the entire capital city, beautiful both day and night. In addition to the outstanding view, visitors can enjoy a small snack or coffee from the dessert cafe while sitting in the lounge or on the sky terrace. The observation deck has two story-high glass windows for an uninterrupted view. The Sky Deck, located at 478m, hold the Guinness World Record as the highest glass-floored observatory in the world. On days when visibility is limited, visitors can still enjoy a clear sky through the Sky Theater.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
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
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Samsung D’light </span>
                is Samsung Electronics’ global promotion and exhibition center. Visitors can see all the latest Samsung consumer electronic products here. The name d’light is a portmanteau of the words “digital” and “light”, to correlate with their vision of being a “guiding light to the digital world” and leading consumers to a whole new lifestyle through digital technology. The building consists of three floors with the first floor being an exhibition space for Samsung’s technology and devices. The second floor is a journey into the future with Samsung solutions. The lower floor (B1) is the flagship store, where Samsung devices are available for purchase.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>COEX Convention & Exhibition Center </span>
                is the biggest convention center and exhibition space in Korea. Directly connected to the Samseong Station of subway line 2, it includes a shopping center, a movie theater, a musical concert hall, exhibition halls and famous restaurants. It is also close to a casino, hotels, department stores, and other various amenities. Trade Tower, ASEM Tower and COEX ARTIUM is housed nearby for visitors’ perfect shopping, dining and culture life. COEX MALL has been reopen in 2014. The mall includes Mega-Box theater, COEX Aquarium, Starfield Library, YP bookstore, Pierrot shopping and many other shops and restaurants.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Visit to <span>Bongeunsa Temple.</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bongeunsa </span>
                is a Buddhist temple founded in 794 during the Silla (one of the Three Kingdoms of Korea) period. The temple has more than 1,000 years of history and has many interesting historic and cultural features, including woodblock carvings of the Avatamsaka Sutra (Flower Garland Sutra). The temple is also a very popular tourist destination, offering various programs relating to traditional Korean Buddhist culture, in a variety of languages.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            Transfer to <span>Dongdaemun Design Plaza.</span> Shopping at <span>Dongdaemun market.</span>
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Dongdaemun Design Plaza </span>
                (DDP) is the newest and most iconic landmark of the Korean design industry. Located at the center of the Dongdaemun area, the DDP will serve as a key venue for design-related shows and conferences, exhibitions, and other events and gatherings. Designed by world renowned architect, Zaha Hadid, DDP is the world’s largest atypical architecture. The DDP is comprised of five halls: Art Hall, Museum, Design Lab, Design Market, and Dongdaemun History and Culture Park. The Art Hall is the primary launch pad for the Korean creative industry.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>Free time</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 10</h2>
        <h3 className='tour-title'>SEOUL / DEPARTURE FROM INCHEON (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>Hotel check out</li>
          <li>
            Transfer to <span>Incheon International Airport.</span> Departure from Korea
          </li>
        </ul>
      </section>
    </div>
  );
}

export default TourAroundKorea;
