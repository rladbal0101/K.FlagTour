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
              <img src='../images/tourImg/tourDetailImg/Gwanghwamun-Square.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Gyeongbokgung Place </span> 
                – built in 1395, Gyeongbokgung Palace is also commonly referred to as the Northern Palace because its location is furthest north when compared to the neighboring palaces of Changdeokgung (Eastern Palace) and Gyeonghuigung (Western Palace) Palace. Gyeongbokgung Palace is arguably the most beautiful, and remains the largest of all five palaces. The premises were once destroyed by fire during the Imjin War (Japanese Invasions, 1592-1598). However, all of the palace buildings were later restored under the leadership of Heungseondaewongun during the reign of King Gojong (1852-1919).
              </p>
              <img src='../images/tourImg/tourDetailImg/Gyeongbokgung-Place.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span>OPTIONAL: Traditional costume experience – wearing hanbok in the palace. <br/> From 15$/pax </span>
              </p>
              <img src='../images/tourImg/tourDetailImg/hanbok-in-the-palace.jpg' />
            </div>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Blue House (Presidential Residence). </span> 
                The signature markings of the Presidential Residence of Cheong Wa Dae are its blue tiles. It is the first thing that catches one’s attention upon entering the premises. The blue tiles and the smooth roof blend beautifully with Bugaksan Mountain in the backdrop.              </p>
              <img src='../images/tourImg/tourDetailImg/Blue-House(Presidential-Residence).jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bukchon Hanok Village </span> 
                – Surrounded by Gyeongbokgung Palace, Changdeokgung Palace and Jongmyo Shrine, it is home to hundreds of traditional houses, called hanok, that date back to the Joseon Dynasty. The name Bukchon, which literally translates to “northern village,” came about as the neighborhood lies north of two significant Seoul landmarks, Cheonggyecheon Stream and Jongno. Today, many of these hanoks operate as cultural centers, guesthouses, restaurants and tea houses, providing visitors with an opportunity to experience, learn and immerse themselves in traditional Korean culture. As Bukchon Hanok Village is an actual neighborhood with people’s homes, visitors are advised to be respectful at all times while looking around.              </p>
              <img src='../images/tourImg/tourDetailImg/Blue-House(Presidential-Residence).jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Jogyesa Temple </span> 
                is the center of Korean Buddhism. The temple was built in the late 14th century during the Goryeo period and was once turned into ashes due to fire and was rebuilt under the name of Gackhwangsa Temple in 1910 with the effort of many respectful monks, namely Han Yong-un and Lee Hee-gwang. The temple was given a role as the head temple of Korea’s Buddhism and renamed to Tegosa Temple in 1936. In 1954, a purification drive took place to eliminate Japanese influence and revive traditional Buddhism, which established the present day Jogyesa Temple as a result.              </p>
              <img src='../images/tourImg/tourDetailImg/Jogyesa-Temple.jpg' />
            </div>
            
            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Cheonggyecheon Stream </span> 
                  is an 11 km long modern stream that runs through downtown Seoul. Created as part of an urban renewal project, Cheonggyecheon is a restoration of the stream that was once there before during the Joseon Dynasty (1392-1910). The stream was covered with an elevated highway after the Korean War (1950-1953), as part of the country’s post-war economic development. Then in 2003, the elevated highway was removed to restore the stream to its present form today. The stream starts from Cheonggye Plaza, a popular cultural arts venue, and passes under a total of 22 bridges before flowing into the Hangang (River), with many attractions along its length.
              </p>
              <img src='../images/tourImg/tourDetailImg/Cheonggyecheon-Stream.jpg' />
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
              <img src='../images/tourImg/tourDetailImg/Namsangol-Hanok-Village.jpg' />
            </div>
          </li>

          <li>
            Visit to <span>Namsan Seoul Tower </span> by cable car

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>N-Seoul Tower: </span> 
                opened in 1998 on the north side of Namsan Mountain in the center of the capital. This village has five restored traditional Korean houses, a pavilion, traditional garden, performance arts stage and a time capsule plaza, making it a perfect spot for both locals and tourists to take a leisure walk. Upon entering from the front gate, visitors will get a taste of the traditional life while escaping from the bustling city life of modern times. The traditional garden with its pavilion and the traditional houses create a peaceful ambiance before the forested Namsan Mountain. A time capsule commemorating Seoul’s 600 Year Anniversary was buried in 1994 at the highest point of the village and is scheduled to be reopened four hundred years later in 2394.
              </p>
              <img src='../images/tourImg/tourDetailImg/N-Seoul-Tower.jpg' />
            </div>
          </li>

          <li>
            Transfer to shopping center <span>Myeongdong.</span>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Myeongdong </span> 
                is Seoul’s shopping mecca and is a must-see for tourists, but it is not just a shopping destination; Myeongdong is also a hub of commerce, banking and culture with a daytime population of 1.5-2 million. For shoppers there is a mixture of street stalls and retail outlets selling everything from high fashion to casual attire, as well as many Korean cosmetics stores offering high-quality products at competitive prices.
              </p>
              <img src='../images/tourImg/tourDetailImg/Myeongdong.jpg' />
            </div>
          </li>

          <li>
              <span>Hangang River Cruise </span> 
              – is one of the best ways to enjoy the Hangang River. The cruises have different themes, including a pirate theme for children and a K-Culture cruise for Hallyu fans, allowing passengers to enjoy live performances and fine dining as they admire the scenery. The romance of the Hangang makes river cruises very popular with lovers all throughout the year.
          </li>

          <div className='tour-description'>
            <div className='option-group'>
              <p>
                <span>OPTIONAL:</span> 
                Enjoy non-verbal show <span>NANTA</span>
              </p>
              <p>
                <span>«Nanta» </span>– is one of Korea’s top performances, a show about four chefs who must prepare a wedding banquet in just one hour. The plot is depicted through various genres of performances, including percussion that uses kitchen utensils to make beats based on traditional rhythms of samulnori (traditional Korean percussion quartet). The entire show has no spoken dialogue, yet plenty of comedy and romance, too. Since its debut in October 1997, NANTA (also known as Cookin’) has earned international acclaim, having been performed on Broadway and at other famous venues worldwide.
              </p>
            </div>
            <img src='../images/tourImg/tourDetailImg/Nanta.jpg' />
          </div>

          <div className='tour-description'>
            <div className='option-group'>
              <p>
                <span>OPTIONAL:</span> 
                Visit to <span>DRAGON HILL SPA</span>
              </p>
              <p>
                <span>Spa-complex Dragon Hill </span> – Yongsan Dragon Hill Spa is a charcoal sauna permeated with an oak fragrance created by traditional heating techniques. The jjimjil-bang and spa facilities offer sweating rooms/sauna, an open-air bath, seawater bath, salt room, swimming pool, and health center. The main hall of Yongsan Dragon Hill Spa boasts a Chinese-style design and a luxurious interior that has been used as a filming location for various Korean television broadcasts.
              </p>
            </div>
            <img src='../images/tourImg/tourDetailImg/DRAGON-HILL-SPA.png' />
          </div>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 4</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>
            Visit to Theme Amusement Park <span>LOTTE WORLD</span> or Visit to Observatory <span>SEOUL SKY</span> in <span>Lotte World Tower</span>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Lotte World </span> 
                is a theme park filled with thrilling rides, an ice rink and different kinds of parades, as well as a folk museum, a lake, accommodations, department stores and more. Lotte World is divided into Lotte World Adventure, a world themed indoor area, and Magic Island theme outdoors, next to Seokchonhosu Lake. Lotte World Adventure is the largest indoor amusement park in the world. The Folk Museum is also one of the most popular museums among international visitors. Also, Lotte World Star Avenue is the perfect place to experience Korean stars and the entertainment world.</p>
              <img src='../images/tourImg/tourDetailImg/Lotte-World.jpg' />
            </div>

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
                Many people tend to gather at <span>Gangnam Subway Station</span>, as the location is geographically and commercially suitable as a meeting point for social gatherings, events or personal engagements. Hence, during the weekdays it is usually crowded in the evenings while on weekends, areas around Gangnam Subway Station exit number 10 and 11, as well as City Theatre, and Giordano are often bustling with people. Visitors travel to Gangnam to take advantage of its convenient transportation, fashion malls, movie theatres and bookstores.
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
            Visit to <span>Bongeunsa Temple</span>.

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Bongeunsa </span> 
                is a Buddhist temple founded in 794 during the Silla (one of the Three Kingdoms of Korea) period. The temple has more than 1,000 years of history and has many interesting historic and cultural features, including woodblock carvings of the Avatamsaka Sutra (Flower Garland Sutra). The temple is also a very popular tourist destination, offering various programs relating to traditional Korean Buddhist culture, in a variety of languages.
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
          Transfer to <span>Dongdaemun Design Plaza</span>. Shopping at <span>Dongdaemun market.</span>

            <div className='tour-description'>
              <p>
                <span className='highlight-red'>Dongdaemun Design Plaza </span> 
                is a Buddhist temple founded in 794 during the Silla (one of the Three Kingdoms of Korea) period. The temple has more than 1,000 years of history and has many interesting historic and cultural features, including woodblock carvings of the Avatamsaka Sutra (Flower Garland Sutra). The temple is also a very popular tourist destination, offering various programs relating to traditional Korean Buddhist culture, in a variety of languages.              
              </p>
              <img src='../images/tourImg/tourDetailImg/Market-Img.jpg' />
            </div>
          </li>

          <li>
            <span>FREE TIME</span>
          </li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 5-6</h2>
        <h3 className='tour-title'>SEOUL (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li>FREE TIME</li>
        </ul>
      </section>

      <section className='day-section'>
        <h2 className='day-title'>DAY 7</h2>
        <h3 className='tour-title'>SEOUL / DEPARTURE FROM INCHEON (hotel breakfast)</h3>
        <ul className='tour-list-style'>
          <li> Hotel check out </li>

          <li>
            Transfer to <span>Incheon International Airport</span>. Departure from Korea
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ThreeCapitalsOfKoreaSeoulBusanGyeongju;
