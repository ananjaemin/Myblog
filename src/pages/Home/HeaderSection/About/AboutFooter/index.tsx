import React from "react";
import styled from "styled-components";

const AboutFooter: React.FC = () =>{
    return(
        <AboutFooterContainer>
            <Icon href="https://github.com/ananjaemin" target="_black">
                <img src={'/IconImg/GitHubMark.png'}  width="40rem" alt="" />
            </Icon>
            <Icon href="https://www.instagram.com/ananjaemin/?hl=ko" target="_black">
                <img src={'/IconImg/instagram.png'}  width="40rem" alt=""/>
            </Icon>
            <Icon href="https://www.facebook.com/profile.php?id=100011364280089" target="_black">
                <img src={'/IconImg/facebook.png'}  width="40rem" alt=""/>
            </Icon>

        </AboutFooterContainer>
    )
}

const AboutFooterContainer =styled.div`
    padding:10px;
`;

const Icon = styled.a`
    padding:7px;
`;


export default AboutFooter;