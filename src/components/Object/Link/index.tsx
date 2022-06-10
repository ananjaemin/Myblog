import React from "react";
import styled from "styled-components";

type LinkAType = {
    size:string,
    text:string,
    href:string,
    bold:boolean,
    color:string,
};

type LinkABodyType = {
    size:string,
    bold:boolean,
    color:string,
};

//hover boolean (hover 넣을것인가?),hover color(hover 색?),hover effect(hover 애니메이션?) 추가 예정

const LinkA: React.FC<LinkAType> = ({size,text,href,bold,color }) =>{  
    return <LinkABody  href={href} size={size} bold={bold} color={color}> {text} </LinkABody>
}
 

const LinkABody = styled.a<LinkABodyType>`
    font-size:${(props) => props.size};
    ${(props)=>props.bold ? "font-weight:bold;" : ""}
    color:${(props)=>props.color};
    text-decoration:none;
`;

export default LinkA;