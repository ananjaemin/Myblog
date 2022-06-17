import React from "react";
import { 
    HomeBox,
    HomeContainer,
    Container,
    Title,

} from "./styles";
import HeaderSection from "./HeaderSection";
import Project from "./Project";

const Home: React.FC = () =>{
    return(
        <Container>
            <HeaderSection/>
            <HomeContainer>
                <HomeBox>
                    <Title>
                        Project
                    </Title>
                    <Project/>

                </HomeBox>
            </HomeContainer>
    

        </Container>
    )
};



export default Home;