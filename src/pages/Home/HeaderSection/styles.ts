import styled, { keyframes } from "styled-components";


export const HeaderSectionContainer = styled.div`
    margin-top:3.5rem;
    background: var(--color__main);
    width:100%;
    height:30rem;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: 0 5px 10px -3px var(--color__main);
    z-index:1;
`;

export const HeaderSectionBox = styled.div`
    width:92%;
    height:100%;
    display:flex;
    flex-direction:row;
`;

export const HeaderSectionMyAboutBox = styled.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    @media (max-width: 700px) {
        width:100%;
    };
`;

export const HeaderSectionLight = styled(HeaderSectionMyAboutBox)`
    @media (max-width: 700px) {
        display:none;
    };
`;



const MyImgKeyframes = keyframes`
    0%, 100%{
        background-image:url("/IconImg/myimg.jpg");
    }
    50%{
        background-image:url("/IconImg/myimg2.jpg");
    }
    75%{
        background-image:url("/IconImg/myimg3.jpg");
    }
`;

export const MyImg = styled.div`
    z-index:10;
    animation: 6.5s ease 0s infinite normal none running ${MyImgKeyframes};
    resize: both;
    position:relative;
    top:45px;
    border-radius:5px;
    box-shadow: 0 0 15px var(--color__main);
    width:62%;
    height:0;
    padding-bottom: max(60%,300px);
    background-image:url((unknown));
    min-width:20rem;
    background-position:center;
    background-size:cover;
    filter: brightness(85%);
`;