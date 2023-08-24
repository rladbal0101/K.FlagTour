import React from 'react';
import styled from 'styled-components';

const AwardStyle = styled.div`
  display: flex;
  margin-bottom: 10px;

  span {
    padding-right: 20px;
  }
  `;

const AwardImg = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
`;

const ImgStyle = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 300px;
    margin: 20px;
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

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

      <AwardImg>
        <ImgStyle>
          <img src='http://janedmc.cafe24.com/wp-content/uploads/2021/09/Awards-1.png' />
          <img src='http://janedmc.cafe24.com/wp-content/uploads/2021/09/awards2.jpg' />
          <img src='http://janedmc.cafe24.com/wp-content/uploads/2021/09/awards-3.jpg' />
          <img src='http://janedmc.cafe24.com/wp-content/uploads/2021/09/awards-4.jpg' />
          <img src='http://janedmc.cafe24.com/wp-content/uploads/2021/09/awards-5.jpg' />
        </ImgStyle>
      </AwardImg>
    </>
  );
}

export default Award;