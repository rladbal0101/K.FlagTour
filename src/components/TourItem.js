import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TourItemStyle = styled.div`
  margin: 40px;
  width: 600px;

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

  img {
    width: 100%;
    height: 350px;
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
        <img src={photo} />
        <p>{title}</p>
      </LinkStyle>
    </TourItemStyle>
  );
}

export default TourItem;