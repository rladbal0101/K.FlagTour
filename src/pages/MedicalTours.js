import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import subPageImg from "../data/subPageImgData.json";
import medicalTours from "../data/medicalToursData.json";

const MedicalStyled = styled.div`
  margin: 0 150px 80px 150px;
`;

const MedicalSection = styled.div`
  margin-top: 50px;

  .title {
    font-weight: 700;
  }

  ul {
    margin-top: 20px;
    list-style-type: '- ';
    list-style-position: inside;
    padding-left: 10px;
    text-indent: -10px;
  }
`;

function MedicalTours(props) {
  const medicalImg  = subPageImg.find((img) => {
    if(img.title === 'Medical Tours') {
      return img;
    }
  })

  return (
    <>
      <SubPageStyle 
        title={'Medical Tours'} 
        photo={medicalImg.imagePath} 
      />
      <MedicalStyled>
        <p>
          K.Flag Tour provides wide range of medical tourism services. It includes body check-ups, treatment of serious diseases and plastic surgery.
        </p>
        {
          medicalTours.map(tour => 
            <MedicalSection>
              <span className='title'>{tour.title}</span>
              <span> {tour.description}</span>
              <ul>
                {tour.contents.map(content =>
                  <li>{content}</li>
                )}
              </ul>
            </MedicalSection>
          )
        }
      </MedicalStyled>
    </>
  );
}

export default MedicalTours;