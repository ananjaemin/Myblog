import React from "react";
import styled from "styled-components";

import Cardback from "./Cardback";

const Card: React.FC = () =>{
    return(
        <CardContainer>
            <Cardback/>

        </CardContainer>
    )
} 

const CardContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`;


export default Card;