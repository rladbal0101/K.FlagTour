import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 50px;

  .title {
    font-weight: 700;
  }

  ul {
    margin-top: 20px;
    list-style-type: disc;
    list-style-position: inside;
    padding-left: 10px;
    text-indent: -10px;
    
    &.decimal {
      list-style-type: decimal;
    }
  }
`;

function MedicalTourUlStyle({ title, description, style, contents }) {
  return (
    <StyledDiv>
      <span className='title'>{title}</span>
      <span> {description}</span>
      {
        style === "number"
        ? <ul className='decimal'>
          {contents.map(content =>
            <li>{content}</li>
          )}
        </ul>
        : <ul>
          {contents.map(content =>
            <li>{content}</li>
          )}
        </ul>
      }
    </StyledDiv>
  );
}

export default MedicalTourUlStyle;