import React from "react";
import styled from "styled-components";

import Box from "components/Object/Box";

const Home: React.FC = () =>{
    return(
        <HomeContainer>
            <HomeSection>
                <Box 
                    bgcolor="#005dcc" 
                    rotate="" 
                    width="100rem" 
                    height="100rem" 
                    clip={"clip-path: polygon(3% 0, 6.75% 0, 100% 100%, 60% 100%);"}
                    minwidth={"auto"}
                />
                </HomeSection>
        </HomeContainer>
    )
};

const HomeContainer = styled.main`
    width:100%;
    height:100vh;
    display:flex;
    overflow:hidden;
`;

const HomeSection = styled.section`
    margin-top:3.5rem;
    flex-grow:1;
`;

export default Home;