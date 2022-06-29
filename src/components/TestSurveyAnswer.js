import React, { useContext, useState } from 'react'
import {
    Button,
    ButtonGroup
} from 'reactstrap'
import styled from 'styled-components'
import { scoreContext, wholeStepContext } from '../contexts/StepContext';
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



function TestSurveyAnswer({props}) {
    const {score,setScore}=useContext(scoreContext);
    const {wholeStep,setWholeStep}=useContext(wholeStepContext);
    const onSurvey=(param,e)=>{
        e.preventDefault();
        setScore(score+param); //점수 context에 해당 props의 점수를 추가/감소
        if(props.surveyStep<33){
            props.setSurveyStep(props.surveyStep+1); //설문 단계 1 추가
        }else{
            setWholeStep(wholeStep+1);
        }
        
    
        
    }

    const btnGen=surveyList[props.surveyStep].answers.map((props)=>{
        return <Button color='secondary' outline key={props.id} onClick={(e)=>{onSurvey(props.score, e)}}>{props.text}</Button>
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