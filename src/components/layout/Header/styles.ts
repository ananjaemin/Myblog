import styled from "styled-components";

type HeaderContainerType = {
    height:string
};

type HeaderPositionBoxType = {
    width: string
}

export const HeaderContainer = styled.header<HeaderContainerType>`
    width:100%;
    height:${(props) => props.height};
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const HeaderPositionBox = styled.div<HeaderPositionBoxType>`
    width:${(props) => props.width};
    height:100%;

`;