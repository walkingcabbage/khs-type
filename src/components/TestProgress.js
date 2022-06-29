import React, { useContext, useState } from 'react'
import { Progress} from 'reactstrap'
import styled from 'styled-components'

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


function TestProgress({props}) {
    let result=(100/34)*props+1;

    // const onUp=()=>{
    //     setProgress(progress+1);
  return (
    <ProgressBlock>
        <p>{props+1}/34</p>
<Progress className='pg' value={result} color='secondary'/>
    </ProgressBlock>
    
  )
}

export default TestProgress