import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import TestHeader from "./components/TestHeader";
import TestIntroBlock from './components/TestIntroBlock';
import TestSurveyBlock from "./components/TestSurveyBlock";
import TestTemplate from "./components/TestTemplate";
import { wholeStepContext, StepContext, surveyStepContext } from './contexts/StepContext';


const GlobalStyling=createGlobalStyle`

body{

  background: lightgray;

  font-family: 'IBM Plex Sans KR', sans-serif;

}
  
`;


function App() {

  const wholeStepContextState=useContext(wholeStepContext);
  const surveyStepContextState=useContext(surveyStepContext);
  const [wholeStep,setWholeStep]=useState(1);
  const [surveyStep,setSurveyStep]=useState(0);
  return (
    <>
    <wholeStepContext.Provider value={{wholeStep, setWholeStep}}>
<surveyStepContext.Provider value={{surveyStep,setSurveyStep}}>
    
     <GlobalStyling/>
     <TestTemplate>
      <TestHeader/>
      {wholeStep===1 && <TestIntroBlock/>}
      {wholeStep===2 && <TestSurveyBlock/>}
      </TestTemplate>
      </surveyStepContext.Provider>
      </wholeStepContext.Provider>
    </>
  );
}

export default App;
