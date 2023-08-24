import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';

const MapStyle = styled.div`
  margin: 150px 0;

  h3 {
    font-size: 22px;
    font-weight: 700;
    padding: 20px 0;
  }
`;

const MapWrapper = styled.div`
  .map-container {
    width: 80%;
    height: 270px;
  }
`;

const TextArea = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 18px;

  span {
    font-weight: 600;
  }

  .linkStyle {
    color: #F37500;
    font-weight: 500;

    &:hover {
      color: #000;
    }
  }
`;

function Contacts(props) {
  
  const center = useMemo(() => ({lat: 37.519203186035156, lng: 126.92858123779297}), [])

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  return (
    <MapStyle>
      <h3>본사</h3>

      <MapWrapper>
        <LoadScriptNext googleMapsApiKey={apiKey}>
          <GoogleMap 
            zoom={18} 
            center={center} 
            mapContainerClassName='map-container'
          >
            <MarkerF position={center} />
          </GoogleMap>
        </LoadScriptNext>
      </MapWrapper>

      <TextArea>
        <span> 주소: &nbsp; </span>
        <p>서울특별시 마포구 만리재로 51</p>
      </TextArea>

      <TextArea>
        <span> 전화번호: &nbsp; </span>
        <p className='linkStyle cursor-pointer'>02-786-0978</p>
        <span>&nbsp;/ Fax: &nbsp; </span>
        <p className='linkStyle cursor-pointer'>02-786-0980</p>
      </TextArea>

      <TextArea>
        <span> 이메일: &nbsp; </span>
        <p className='linkStyle cursor-pointer'>yhj0726@gmail.com</p>
      </TextArea>
    </MapStyle>
  );
}

export default Contacts;