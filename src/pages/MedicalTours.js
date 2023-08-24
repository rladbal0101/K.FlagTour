import React from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
// import { Outlet } from 'react-router';

import subPageImg from "../data/subPageImgData.json";

const MedicalStyled = styled.div`
  margin: 0 150px 80px 150px;
`

const MedicalSection = styled.div`
  margin-top: 50px;

  span {
    font-weight: 700;
  }

  ul {
    margin-top: 20px;

    li + li {
      margin-top: 20px;
    }
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
        <MedicalSection>
          <span>Body check-ups </span>may be very diverse, depending on complexity of tests. Most common programs are:

          <ul>
            <li>
              Basic Program: designed for adults for the purpose of preventing adult related diseases and diagnosing them in their early stage. Required test time is about 2 hours, some results are ready on the same day, some will be sent our later.
            </li>
            <li>
              Premium program: usually most extensive and intensive health screening program, the patient gets complete check-up and accurate early diagnosis of various diseases by general body CT scan, MRI or PET, and other specific tests. Required time usually is about 6 hours and all results are ready in couple weeks.
            </li>
          </ul>
        </MedicalSection>
        <MedicalSection>
          <span>Medical treatment</span> for existing diseases is available for:


        </MedicalSection>

      </MedicalStyled>
    </>
  );
}

export default MedicalTours;