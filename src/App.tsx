import styled from 'styled-components';


import Home from 'pages/Home';
import TestPage from 'pages/write/test';

import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from 'components/layout/Header';



function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>  {/* https://velog.io/@soryeongk/ReactRouterDomV6 참고 */}
          <Route path='/test' element={<TestPage/>} />

        </Routes>
      </Container> 
    </BrowserRouter>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

export default App;
