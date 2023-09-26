import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';

import subPageImg from "../data/subPageImgData.json";

const ContactUsStyled = styled.div`
  padding: 40px 0 80px;
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

function ContactUs(props) {

  const center = useMemo(() => ({lat: 37.519203186035156, lng: 126.92858123779297}), [])

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  return (
    <div className='inner'>
      <SubPageStyle 
        title={'Contact us'} 
        // photo={medicalImg.imagePath}
      />
      <ContactUsStyled>
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
          <span> Adress&nbsp;:</span>
          <p>&nbsp;11, Uisadang-daero 1-gil, Yeongdeungpo-gu, Seoul, Republic of Korea</p>
        </TextArea>

        <TextArea>
          <span>Tel&nbsp;:&nbsp;</span>
          <p className='linkStyle cursor-pointer'>02-786-0978</p>
          <span>&nbsp;/ Fax&nbsp;:&nbsp;</span>
          <p className='linkStyle cursor-pointer'>02-786-0980</p>
        </TextArea>

        <TextArea>
          <span>E-mail&nbsp;:&nbsp;</span>
          <p className='linkStyle cursor-pointer'>yhj0726@gmail.com</p>
        </TextArea>
      </ContactUsStyled>
    </div>
  );
}

export default ContactUs;