import React from 'react'
import styled from 'styled-components'
import { useStepStateContext } from '../contexts/StepContext';

//836fa9 : dark
//b39ddb : standard
//e6ceff : light

const GlobalBlockBox=styled.div`
    background: white;
    width: 390px;
    height: 844px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;

`;

function TestTemplate({children}) {

  return (
    <GlobalBlockBox>
      {children}
      </GlobalBlockBox>
  )
}

export default TestTemplate