import React from 'react';
import styled from 'styled-components';

const TourItemStyle = styled.div`
  margin: 40px;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 350px;
  }

  p {
    font-size: 18px;
    padding-top: 50px;
  }
`;

function TourItem(props) {
  const { title, photo } = props;

  return (
    <TourItemStyle>
      <img src={photo} />
      <p>{title}</p>
    </TourItemStyle>
  );
}

export default TourItem;