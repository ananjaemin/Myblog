import styled from "styled-components";

type HeaderContainerType = {
    height:string
};

type HeaderPositionBoxType = {
    width: string,
    justify: string,
}

export const HeaderContainer = styled.header<HeaderContainerType>`
    width:100%;
    height:${(props) => props.height};
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    background-color: var(--color__main);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 10px -3px var(--color__main);
`;

export const HeaderPositionBox = styled.div<HeaderPositionBoxType>`
    width:${(props) => props.width};
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:${(props)=>props.justify};
    align-items:center;
    min-width:auto;
`;