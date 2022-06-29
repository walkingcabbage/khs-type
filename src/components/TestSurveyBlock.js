import React, {  useState } from 'react'
import styled from 'styled-components'
import TestProgress from './TestProgress';
import TestSurveyAnswer from './TestSurveyAnswer';
import { surveyList } from '../list/SurveyList';

const TestSurveyBlockStyle=styled.div`
flex:1;
padding: 120px 32px;
padding-bottom: 48px;
overflow-y: auto;

display: flex;
flex-direction: column;
align-items: center;

.SurveyText{
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;
}

`;


function TestSurveyBlock() {

    const [surveyStep, setSurveyStep]=useState(0);
    const sample=surveyList[surveyStep].question;
  return (
    <TestSurveyBlockStyle>
        <p className="SurveyText">{sample}</p>
    <TestSurveyAnswer props={{surveyStep, setSurveyStep}}/>
    <TestProgress props={surveyStep}/>
    </TestSurveyBlockStyle>
    
  )
}

export default TestSurveyBlock