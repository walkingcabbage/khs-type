import React, { useContext, useState } from 'react'
import { Progress} from 'reactstrap'
import styled from 'styled-components'
import { surveyStepContext } from '../contexts/StepContext';

const ProgressBlock=styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
.pg{
    width: 100%;
    height: 6px;
}
p{
    margin: 0;
    font-size: 12px;
    margin-bottom: 5px;
}
`;


function TestProgress() {
    const {surveyStep}=useContext(surveyStepContext)
    let result=(100/35)*surveyStep

    // const onUp=()=>{
    //     setProgress(progress+1);
    
  return (
    <ProgressBlock>
        <p>{surveyStep}/35</p>
<Progress className='pg' value={result} color='secondary'/>
    </ProgressBlock>
    
  )
}

export default TestProgress