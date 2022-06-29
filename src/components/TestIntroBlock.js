import { Button } from 'reactstrap';
import React, { useContext } from 'react'
import styled from 'styled-components'
import { wholeStepContext } from '../contexts/StepContext';

const TestIntroBlockStyle=styled.div`
padding: 32px;
padding-top: 64px;
font-size: 14px;

display: flex;
flex-direction: column;
align-items: center;
p{
    border: 1px solid lightgray;
    border-radius: 16px;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-bottom: 64px;
}
Button{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
`;


function TestIntroBlock() {
    const {wholeStep,setWholeStep}=useContext(wholeStepContext);
    const onNext=()=>{
     setWholeStep(wholeStep+1);
    }
  return (
    <TestIntroBlockStyle>
    <p>장규한은 자신과 비슷한 사람이 이상형 입니다.<br/>
         당신은 규한이와 얼머나 일치하나요.<br/>
          본 설문은 제작자가 장규한과의 술자리에서 나눈 이야기,
           고등학교 시절부터 나는 이야기를 바탕으로 제작되었습니다.<br/>
            규한이가 본인이 흘러가는 말로 말한 이상형에대한 것과
             장규한 본인의 성향으로 질문은 구성되었습니다.<br/>
              (제작자가 작성하였기에 장규한의 사실과 다를 수 있습니다)</p>
    <Button color='secondary' outline onClick={onNext} >시작하기</Button>
    </TestIntroBlockStyle>
  )
}

export default TestIntroBlock