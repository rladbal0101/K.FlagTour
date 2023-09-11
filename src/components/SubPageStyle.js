import React from 'react';
import styled from 'styled-components';

const SubPageLayout = styled.div`
  padding-top: 80px;
  border-bottom: 2px solid #ddd;

  h1 {
    padding: 50px 0 30px;
    font-size: 40px;
    font-weight: 700;
  }
`

const ImgStyle = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    padding: 50px 0;
  }
`;

function SubPageStyle(props) {
  const { title, photo } = props;

  return (
    <>
      <SubPageLayout>
        <h1>{title}</h1>
      </SubPageLayout>

      {/* 서브페이지 상단 이미지 */}
      {/* <ImgStyle>
        <img src={photo} />
      </ImgStyle> */}

      <ImgStyle>
        { 
          photo ? <img src={photo} /> : <div></div>
        }
      </ImgStyle>

    </>
  );
}

export default SubPageStyle;