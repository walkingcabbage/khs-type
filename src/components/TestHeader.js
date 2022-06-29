import React, { useContext } from 'react'
import styled from 'styled-components'
import { wholeStepContext } from '../contexts/StepContext';

const HeaderStyle=styled.div`

    background: #836fa9;
    padding-top: 24px;
padding-left: 32px;
padding-right: 32px;
padding-bottom: 24px;
/* 
border-top-left-radius: 16px;
border-top-right-radius: 16px; */

h1{
    margin: 0;
    font-size: 30px;
    font-weight: bold;
}
`;

function TestHeader() {
    const {wholeStep}=useContext(wholeStepContext);
  return (
    <HeaderStyle>
        {wholeStep===1 && <h1>개요</h1>}
        {wholeStep===2 && <h1>질문</h1>}
        {wholeStep===3 && <h1>결과</h1>}
        {wholeStep===4 && <h1>결과</h1>}
        
    </HeaderStyle>
  )
}

export default TestHeader