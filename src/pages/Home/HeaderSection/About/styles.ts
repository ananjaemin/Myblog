import styled from "styled-components";

export const SectionAboutContainer = styled.div`
    height:75%;
    width:90%;
`;

export const AboutHeader = styled.div`
    width:100%;
`;

export const AboutContent = styled.div`
    padding:15px 30px 30px 50px;
    @media (max-width: 700px) {
        padding:15px 30px 30px 0px;
    };
    font-size:1.2rem;
    display:flex;
    flex-direction:column;
`;

export const AboutText = styled.div`
    padding:20px 10px 10px 12px;
    font-size:0.9em;
`;

export const AboutText2 = styled(AboutText)`
    padding:10px 10px 10px 0px;


    @media (max-width:700px) {
        white-space:normal;
    }
    font-size:1rem;
`;


