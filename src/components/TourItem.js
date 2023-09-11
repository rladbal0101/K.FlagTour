import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TourItemStyle = styled.div`
  margin: 40px;
  width: 360px;

  &:hover p {
    color: #F37500;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 250px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  p {
    color: #000;
    font-size: 18px;
    padding-top: 50px;
  }
`;

function TourItem(props) {
  const { title, photo, urlLastPath } = props;

  return (
    <TourItemStyle >
      <LinkStyle to ={urlLastPath}>
        <div style={{backgroundImage: `url(${photo})`}}></div>
        <p>{title}</p>
      </LinkStyle>
    </TourItemStyle>
  );
}

export default TourItem;