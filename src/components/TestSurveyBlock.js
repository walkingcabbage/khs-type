import React, { useContext } from 'react'
import styled from 'styled-components'
import TestProgress from './TestProgress';
import TestSurveyAnswer from './TestSurveyAnswer';
import { surveyList } from '../list/SurveyList';
import { surveyStepContext } from '../contexts/StepContext';

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
}

`;


function TestSurveyBlock() {

    const {surveyStep}=useContext(surveyStepContext);

    const sample=surveyList[surveyStep].question;
  return (
    <TestSurveyBlockStyle>
        <p className="SurveyText">{sample}</p>
    <TestSurveyAnswer/>
    <TestProgress/>
    </TestSurveyBlockStyle>
    
  )
}

export default TestSurveyBlock