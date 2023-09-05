import React, { useState } from 'react';
import styled from 'styled-components';
import SubPageStyle from '../components/SubPageStyle';
import { Document, Page, pdfjs } from 'react-pdf';

import subPageImg from "../data/subPageImgData.json";


const UsefulInformationStyled = styled.div`

`;

function UsefulInformation(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSucccess = numPages => {
    setNumPages(numPages)
  };

  const usefulImg  = subPageImg.find((img) => {
    if(img.title === 'Useful Information') {
      return img;
    }
  });

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  console.log(pdfjs.version);

  return (
    <>
      <SubPageStyle 
        title={'Useful Information'} 
        photo={usefulImg.imagePath} 
      />

      {/* <UsefulInformationStyled>
        <Document
          file={`https://drive.google.com/uc?id=1JEoE2M8f7ATsdbzRE6L0cmaUQhHN_iJq`}
          // file={"/brochure.pdf"}
          onLoadSuccess={onDocumentLoadSucccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>

        <p>페이지{pageNumber} / {numPages}</p>

        <button
          onClick={() => {setPageNumber(pageNumber - 1)}}
          disabled={pageNumber <= 1}      
        >
          이전 페이지
        </button>

        <button
          onClick={() => {setPageNumber(pageNumber + 1)}}
          disabled={pageNumber >= numPages}      
        >
          다음 페이지
        </button>

        <a href='/brochure.pdf' download>
          PDF 다운로드
        </a>
      </UsefulInformationStyled> */}
    </>
  );
}

export default UsefulInformation;