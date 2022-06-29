import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import TestHeader from "./components/TestHeader";
import TestIntroBlock from './components/TestIntroBlock';
import TestLoading from './components/TestLoading';
import TestResultBlock from './components/TestResultBlock';
import TestSurveyBlock from "./components/TestSurveyBlock";
import TestTemplate from "./components/TestTemplate";
import { wholeStepContext,scoreContext } from './contexts/StepContext';


const GlobalStyling=createGlobalStyle`

body{

  background: lightgray;

  font-family: 'IBM Plex Sans KR', sans-serif;

}
  
`;


function App() {

  const [wholeStep,setWholeStep]=useState(1);
  const [score,setScore]=useState(50);
  return (
    <>
    <wholeStepContext.Provider value={{wholeStep, setWholeStep}}>
    <scoreContext.Provider value={{score,setScore}}>
     <GlobalStyling/>
     <TestTemplate>
      <TestHeader/>
      {wholeStep===1 && <TestIntroBlock/>}
      {wholeStep===2 && <TestSurveyBlock/>}
      {wholeStep===3 && <TestLoading/>}
      {wholeStep===4 && <TestResultBlock/>}
      
      </TestTemplate>
      </scoreContext.Provider>
      </wholeStepContext.Provider>
    </>
  );
}

export default App;
