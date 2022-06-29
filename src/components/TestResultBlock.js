import React, { useContext } from 'react'
import styled from 'styled-components';
import { Progress} from 'reactstrap'
import { scoreContext } from '../contexts/StepContext';

const TestResultBlockStyle=styled.div`
padding: 32px;
padding-top: 64px;
font-size: 14px;

display: flex;
flex-direction: column;
align-items: center;

p{
    margin: 0;
    font-size: 20px;
    margin-bottom: 5px;
}
.pg{
    width: 70%;
    height: 10px;
}
h1{
    padding-left: 48px;
    padding-right: 48px;
    font-size: 24px;
    font-weight: bold;
    margin-top: 32px;
    margin-bottom: 48px;
    line-height: 32px;
}
`;

function Title(props){
    if(props.props===0){
        return <h1>와우! 일부러 피해간 건 아닌지? 아니라면 당신은 축복받은 사람!</h1>;
    }else if(props.props<=20){
        return <h1>경사났네, 경사났어! 당신은 앞으로 장규한과 말 섞을 일 없어요!</h1>;
    }else if(props.props<=40){
        return <h1>장규한이 딱 싫어하는 타입! 축하해요~</h1>;
    }else if(props.props<=60){
        return <h1>평범한 사람인듯 해요. 다행이네요!</h1>;
    }else if(props.props<=80){
        return <h1>이정도면 장규한이 꽤 좋아할지도?</h1>;
    }else if(props.props<=99){
        return <h1>장규한과 연애하면 10년 가겠어요! 도전해보시겠어요?</h1>;
    }else if(props.props===100){
        return <h1>와!! 혹시 장규한 본인이세요? 저주받은 인간!!</h1>;
    }
}

function TestResultBlock() {

    const {score}=useContext(scoreContext);
  return (
    <TestResultBlockStyle>
        <Title props={score} />
        <p>장규한과 {score}% 일치합니다!</p>
        <Progress className='pg' value={score} color='secondary'/>
    </TestResultBlockStyle>
  )
}

export default TestResultBlock