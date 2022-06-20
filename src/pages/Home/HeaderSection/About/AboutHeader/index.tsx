import React from "react";
import styled from "styled-components";


const AboutHeader: React.FC = () =>{
    return(
        <AboutHeaderBox>
            <AboutTitle>
                My name is <br/> <AboutTitleName>Anjaemin</AboutTitleName>
            </AboutTitle>
        </AboutHeaderBox>
    )
}

export const AboutHeaderBox = styled.div`
    width:100%;
`;

export const AboutTitle = styled.div`
    color:var(--color__text);
    font-size:3rem;
    display:flex;
    font-weight:bold;
    flex-direction:row;
    display:flex;
    flex-direction:column;
    white-space:nowrap;
`;

export const AboutTitleName = styled(AboutTitle)`
    color:linear-gradient(315deg, #2a2a72 0%, #005dcc 74%);
`;

export default AboutHeader;