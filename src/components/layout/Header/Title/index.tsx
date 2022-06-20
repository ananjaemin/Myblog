import React from "react";
import styled from "styled-components";


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
`;


export default HeaderTitle;