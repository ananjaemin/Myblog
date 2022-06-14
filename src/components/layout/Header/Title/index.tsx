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
            <Box 
                bgcolor="#005dcc" 
                rotate="" 
                width="150px" 
                height="100%" 
                clip={"clip-path: polygon(60% 0, 100% 0, 40% 100%, 0% 100%);"}
                minwidth={"auto"}
                borderradius={"0"}
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
    font-size: 2rem;
    font-weight: bold;
    color:#f5f5f5;
    text-decoration: none;
    position:absolute;
`;


export default HeaderTitle;