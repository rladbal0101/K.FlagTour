import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';

import subPageImg from "../data/subPageImgData.json";
import medicalTours from "../data/medicalToursData.json";
import MedicalTourUlStyle from '../components/MedicalTourUlStyle';

const MedicalStyled = styled.div`
  padding: 40px 0 80px;
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
        // photo={medicalImg.imagePath}
      />
      <MedicalStyled className='inner'>
        <p>
          K.Flag Tour provides wide range of medical tourism services. It includes body check-ups, treatment of serious diseases and plastic surgery.
        </p>
        {
          medicalTours.map(tour =>
            <MedicalTourUlStyle
              title={tour.title}
              description={tour.description}
              contents={tour.contents}
              style={tour.style}
            />
          )
        }
      </MedicalStyled>
    </>
  );
}

export default MedicalTours;