import React from "react";
import styled from "styled-components";

type WriteGlobalType = {
	children: React.ReactNode;
}

const WriteGlobal: React.FC<WriteGlobalType> = ({children}) =>{
    return(
        <WriteContainer>
            <WriteBox>
                {children}
            </WriteBox>
        </WriteContainer>
    )
}

const WriteContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center; 
    margin-bottom:30px;
    
    
`;

const WriteBox = styled.div`
    width:70%;
    height:500px;
    margin-top:3.5rem;
`;

export default WriteGlobal;