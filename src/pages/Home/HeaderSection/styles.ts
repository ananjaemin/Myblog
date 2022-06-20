import styled from "styled-components";


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
`;