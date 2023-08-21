import React from 'react';
import styled from 'styled-components';

const SubPageLayout = styled.div`
  padding-top: 80px;
  margin: 0 150px;
  border-bottom: 2px solid #ddd;
  /* background-color: aquamarine; */

  h1 {
    padding-top: 50px;
    font-size: 40px;
    font-weight: 700;
  };
`

const ImgStyle = styled.div`
  img {
    width: 100%;
    padding: 50px 0;
    height: 60vh;
    object-fit: cover;
    /* object-position: 0% 70%; */
  };
`;

function SubPageStyle(props) {
  const { title, photo } = props;

  return (
    <>
      <SubPageLayout>
        <h1>{title}</h1>
      </SubPageLayout>
      <ImgStyle>
        <img src={photo} />
      </ImgStyle>
    </>
  );
}

export default SubPageStyle;