import React from "react";
import styled from "styled-components";
import Box from "components/Object/Box";

const Cardback: React.FC = () =>{
    return(
        <CardbackContainer>
            <Box 
                bgcolor="#e0e0e0" 
                rotate="" 
                width="100%" 
                height="100%" 
                clip={"clip-path: polygon(70% 0, 100% 0, 30% 100%, 0% 100%);"}
                minwidth={"auto"}
                borderradius={"10px"}
            />
        </CardbackContainer>
    )
}

const CardbackContainer = styled.div`
    width:55%;
    height:100%;
    /* background-color: #005dcc; */
    background-color: #2a2a72;
    background-image: linear-gradient(315deg, #2a2a72 0%, #005dcc 74%);

    border-radius:10px;
    display:flex;
    position:absolute;
    z-index:-1;

`;

export default Cardback;