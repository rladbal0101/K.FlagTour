import React from 'react';
import styled from 'styled-components';

const CeoGreetingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
    height: 330px;
    object-fit: cover;
  }

  .contents {
    padding-left: 50px;
  }
`

function CeoGreetings(props) {
  return (
    <CeoGreetingStyle>
      <img src='https://cdn.pixabay.com/photo/2021/12/16/17/26/man-6874914_1280.jpg' />
      <div className='contents'>
        <p> Jane DMC Korea was established in 2006 with more than 20 years of experience in Korea tourism industry. As CEO of Jane DMC Korea, I have the privilege to promote Korea’s numerous attractions that I have personally enjoyed so much in the past and still enjoying today.</p>
        <br />
        <p> We would certainly help you and your clients to plan trip to Korea with competitive prices. </p>
        <p> Let me and my team help you discover the charms of Korea and assist you in planning the perfect trip.</p>
        <br />
        <p> Welcome to Korea! I hope you fall in love with the warmth, beauty and traditions of Korea! </p>
        <br />
        <div>서명</div>
      </div>
    </CeoGreetingStyle>
  );
}

export default CeoGreetings;