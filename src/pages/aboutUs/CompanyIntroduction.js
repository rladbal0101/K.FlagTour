import React from 'react';
import styled from 'styled-components';

const OurServices = styled.div`
  h2 {
    font-size: 36px;
    text-align: center;
    margin: 100px 0 50px;
  }

  p {
    line-height: 18px;
  }

  p + p {
    padding-top: 20px;
  }
`;


function CompanyIntroduction(props) {
  return (
    <>
      <div>  
        <p> Jane DMC Korea was founded in 2006 by Jane Han.</p>
        <br />
        <p>Our headquarters is located in Seoul, also we have Busan subsidiary and representatives in Indonesia.</p>
        <br />
        <p>We design tourism destinations in Korea so that we can meet our partner’s satisfaction and let them have wonderful experience while they are travelling in Korea.</p>
        <br />
        <p>As the result, in short time we have handled uncountable individual travelers and incentive groups from around the globe including Indonesia, Malaysia, Singapore, Philippines, Vietnam, Australia, Russia, Kazakhstan, Ukraine, India, GCC 16 countries, Iran, Israel, China, Taiwan, Hong Kong, Mongolia and other markets.</p>
        <br />
        <p>With clear understanding of multi-cultural diversities, we can handle all types of groups and FIT’s and provide them with any services they may request.</p>
      </div>

      <OurServices>
        <h2>Our services</h2>
        <br />
        <p>Inbound Tourism : group and individual travel programs for foreigners, domestic travel arrangements and transportation services, hotel and tickets reservation, transfers, individual, exclusive and group tours, VIP services, virtual tours, video-content shooting, etc.</p>
        <p>MICE : team building programs, Gala Dinner programs, entertainment and performance programs, conferences and business meetings arrangements, sightseeing for big groups, etc.</p>
        <p>Medical tourism : concierge service to foreign patients, travel arrangements and transportation services for foreign patients, health screening with tourism, wellness programs, plastic surgery and skin beauty consultations, etc.</p>
        <p>Exchange programs for students, sports and culture organizations, sister cities, Korean Hallyu experience programs for young people, industrial inspections, tour agencies association.</p>
        <p>Government, local governments, public institutions’ international events and exchange programs, overseas promotion events operations, public institutions’ educational and training programs operations, operations on new markets.</p>
        <p>Other : international and domestic ticketing (BSP system), issuance of medical visas for foreign patients, tourism products planning, tourism resources development, operational support of international exchange programs, operating on regional conferences, operational support and organization of video conferences, etc.</p>
      </OurServices>
    </>
  );
}

export default CompanyIntroduction;