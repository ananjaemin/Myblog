import React from "react";
import { 
    HomeBox,
    HomeContainer,
    Container,
    Title,

} from "./styles";
import HeaderSection from "./HeaderSection";
import Project from "./Project";
import Footer from "components/layout/Footer";

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
    
            <Footer/>
        </Container>
    )
};



export default Home;