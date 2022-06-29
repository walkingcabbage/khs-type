import React, { useContext } from 'react'
import {
    Button,
    ButtonGroup
} from 'reactstrap'
import styled from 'styled-components'
import { surveyStepContext } from '../contexts/StepContext';
import { surveyList } from '../list/SurveyList';

const AnswerBlock = styled.div `
width: 100%;
margin-bottom: 48px;
display: flex;
justify-content: center;
    .buttonsGroup{
        flex: 1;
    }
`;



function TestSurveyAnswer() {
    const {surveyStep, setSurveyStep}=useContext(surveyStepContext);

    console.log(surveyStep);
    const onSurvey=()=>{
        setSurveyStep(surveyStep+1);
    }

    const btnGen=surveyList[surveyStep].answers.map((props)=>{
        return <Button color='secondary' outline key={props.id} onClick={onSurvey}>{props.text}</Button>
    })

    return (
         <AnswerBlock>
        <ButtonGroup className = 'buttonsGroup' >
            {btnGen }
        </ButtonGroup> 
        </AnswerBlock>
    )
}

export default TestSurveyAnswer