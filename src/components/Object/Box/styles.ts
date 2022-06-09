import styled from "styled-components";

type BoxContainerType = {
    backgorund:string,
    rotate:string,
    width:string,
    height:string,
};  

export const BoxContainer = styled.div<BoxContainerType>`
    background:${(props) => props.backgorund};
    transform:${(props)=>props.rotate};
    width:${(props) => props.width};
    height:${(props) => props.height};
    
`;
