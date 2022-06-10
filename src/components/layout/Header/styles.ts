import styled from "styled-components";

type HeaderContainerType = {
    height:string
};

type HeaderPositionBoxType = {
    width: string
    leftrightmargin: string,
}

export const HeaderContainer = styled.header<HeaderContainerType>`
    width:100%;
    height:${(props) => props.height};
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    background: rgba(24, 24, 24, 0.5);
`;

export const HeaderPositionBox = styled.div<HeaderPositionBoxType>`
    width:${(props) => props.width};
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-left:${(props) => props.leftrightmargin};
    margin-right:${(props) => props.leftrightmargin};
`;