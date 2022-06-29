import React, { useContext } from 'react'
import { DotPulse } from '@uiball/loaders'
import styled from 'styled-components';
import { wholeStepContext } from '../contexts/StepContext';

const TestLoadingBlockStyle=styled.div`
padding: 32px;
padding-top: 64px;
font-size: 14px;

display: flex;
flex-direction: column;
align-items: center;

h1{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    margin-bottom: 48px;
    margin-top: 48px;
    text-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

`;

function TestLoading() {
    const {wholeStep,setWholeStep}=useContext(wholeStepContext);
    setTimeout(function() {
        setWholeStep(wholeStep+1);
      }, 3000);
  return (
    <TestLoadingBlockStyle>
        <h1>장규한이 이상형을 찾는 중...<br/>
        잠시만 기다려주세요!</h1>
        <DotPulse 
 size={60}
 speed={1.3} 
 color="#b39ddb" 
/>
    </TestLoadingBlockStyle>
    
  )
}

export default TestLoading