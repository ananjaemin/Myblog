import styled from "styled-components";

type BoxContainerType = {
    backgorund:string,
    rotate:string,
    width:string,
    height:string,
    clip:string,
    minwidth:string,
};  

export const BoxContainer = styled.div<BoxContainerType>`
    background:${(props) => props.backgorund};
    transform:${(props)=>props.rotate};
    width:${(props) => props.width};
    height:${(props) => props.height};
    ${(props)=>props.clip} 
    min-width:${(props) => props.minwidth};
    position:relative;
    z-index:-1;
    top:0px;
`;
