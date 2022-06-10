import React from 'react';
import styled from 'styled-components';

import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';



function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>  {/* https://velog.io/@soryeongk/ReactRouterDomV6 참고 */}


        </Routes>
        <Footer/>
      </Container> 
    </BrowserRouter>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

export default App;
