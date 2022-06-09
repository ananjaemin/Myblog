import React from "react";
import styled from "styled-components";


type HeaderTitleType = {
    Text:string
};


const HeaderTitle: React.FC<HeaderTitleType> = ({Text}) =>{
    return(
        <HeaderTitleBox>
            
        </HeaderTitleBox>
    )
}

const HeaderTitleBox = styled.div`
    overflow:hidden;
    width:180px;
    height:100%;
`;


export default HeaderTitle;