import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContactsMap from '../../components/aboutUs/ContactsMap';

const MapStyle = styled.div`
  margin: 150px 0;

  h3 {
    font-size: 22px;
    font-weight: 700;
    padding: 20px 0;
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
  const [marker, setMarker] = useState(null);

  // const render = (Status : Status) => {
  //   return <h1>{Status}</h1>
  // };

  const Marker = (options) => {
    useEffect(() => {
      if (!marker) {
        marker.setMap(null);
      };
  
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
  
    useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null;
  };

  return (
    <MapStyle>
      <h3>본사</h3>
      <Wrapper
        apiKey={'AIzaSyBG5fsredbEt1FTtZN0qu_vMe2YtVwWqRM'}
        libraries={"place"}
        >
        <ContactsMap>
          {/* <Marker position={position} /> */}
        </ContactsMap>
      </Wrapper>

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