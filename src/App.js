import styled, { createGlobalStyle } from "styled-components";
import TestHeader from "./components/TestHeader";
import TestTemplate from "./components/TestTemplate";


const GlobalStyle=createGlobalStyle`
body{
  background: lightgray;
}
  
`;


function App() {
  return (
    <>
    <GlobalStyle/>
    <TestTemplate>
      <TestHeader/>
    </TestTemplate>

    </>
  );
}

export default App;
