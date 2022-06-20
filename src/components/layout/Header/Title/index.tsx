import React from "react";
import styled from "styled-components";
import Box from 'components/Object/Box'

type HeaderTitleType = {
    Text:string,
    width:string,
};


const HeaderTitle: React.FC<HeaderTitleType> = ({Text,width}) =>{
    return(
        <HeaderTitleBox width={width}>
            <Title href="/">
                {Text}
            </Title>
            {/* linear-gradient(315deg, #2a2a72 0%, #005dcc 74%); */}
            <Box 
                bgcolor="#005dcc" 
                rotate="" 
                width="150px" 
                height="100%" 
                clip={"clip-path: polygon(60% 0, 100% 0, 40% 100%, 0% 100%);"}
                minwidth={"auto"}
                borderradius={"0"}
                position={"static"}
            />
        </HeaderTitleBox>
    )
}

type HeaderTitleBoxType = {
    width:string,
};

const HeaderTitleBox = styled.div<HeaderTitleBoxType>`
    width:${(props)=>props.width};
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Title = styled.a`
    font-size: 2em;
    font-weight: bold;
    color:#f5f5f5;
    text-decoration: none;
    z-index:1;
    position:absolute;
`;


export default HeaderTitle;