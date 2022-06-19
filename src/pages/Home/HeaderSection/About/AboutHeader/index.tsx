import React from "react";
import styled from "styled-components";


const AboutHeader: React.FC = () =>{
    return(
        <AboutHeaderBox>
            <AboutTitle>
                안 재민
                <AboutTitleSub>
                    &nbsp; ( Critical )
                </AboutTitleSub>
            </AboutTitle>
        </AboutHeaderBox>
    )
}

export const AboutHeaderBox = styled.div`
    width:100%;
`;

export const AboutTitle = styled.div`
    color:var(--color__text);
    font-size:1.9rem;
    font-weight:bold;
    display:flex;
    flex-direction:row;

`;

export const AboutTitleSub = styled.div`
    font-size:1.7rem;
    display:flex;
    align-items:flex-end;
`;

export default AboutHeader;