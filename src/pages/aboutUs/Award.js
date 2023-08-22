import React from 'react';
import styled from 'styled-components';

const AwardStyle = styled.div`
  display: flex;
  margin-bottom: 10px;
  line-height: 18px;

  span {
    padding-right: 20px;
  }
`

function Award(props) {
  return (
    <>
      <AwardStyle>
        <span>2019</span>
        <p>Best Travel Agency of North Asia Award by Travel Weekly 2019 Reader’s Choice Awards</p>
      </AwardStyle>
      <AwardStyle>
        <span>2018</span>
        <p>Seoul City Best travel agency Award</p>
      </AwardStyle>
      <AwardStyle>
        <span>2017</span>
        <p>Award for development of human resource in MICE Industry</p>
      </AwardStyle>
      <AwardStyle>
        <span>2016</span>
        <div className='contents'>
          <p>Award for devotion to Tourism Promotion in Gyongsangnamdo</p>
          <p>Award by Seoul Metropolitan Council</p>
        </div>
      </AwardStyle>
      <AwardStyle>
        <span>2015</span>
        <div className='contents'>
          <p>Award for devotion to Tourism Promotion in Gangwondo</p>
          <p>Award for Innovated Leader</p>
        </div>
      </AwardStyle>
      <AwardStyle>
        <span>2014</span>
        <p>Award for Korea Sharing 2014</p>
      </AwardStyle>
    </>
  );
}

export default Award;