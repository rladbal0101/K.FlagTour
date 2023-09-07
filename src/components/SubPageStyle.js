import React from 'react';
import styled from 'styled-components';

const SubPageLayout = styled.div`
  padding-top: 80px;
  border-bottom: 2px solid #ddd;
  margin-bottom: 50px;

  h1 {
    padding: 50px 0 30px;
    font-size: 40px;
    font-weight: 700;
  }
`

const ImgStyle = styled.div`
  img {
    width: 100%;
    padding: 50px 0;
    height: 60vh;
    object-fit: cover;
    object-position: 0% 70%;
  }
`;

function SubPageStyle(props) {
  const { title, photo } = props;

  return (
    <>
      <SubPageLayout className='inner'>
        <h1>{title}</h1>
      </SubPageLayout>

      {/* 서브페이지 상단 이미지 */}
      {/* <ImgStyle>
        <img src={photo} />
      </ImgStyle> */}
    </>
  );
}

export default SubPageStyle;