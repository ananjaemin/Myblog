import React from "react";
import styled from "styled-components";
import LinkA from "components/Object/Link";

import { 
    HeaderNav,

} from "./styles";


const HeaderNavbar: React.FC = () =>{
    return(
        <NavbarContainer>
            <HeaderNav leftmargin={"5px"} rightmargin={"5px"} >
                <LinkA 
                    href={"/"} 
                    size={"14px"} 
                    text={"velog"} 
                    bold={true} 
                    color={"rgba(255,255,255,0.8)"}    
                />
            </HeaderNav>
            <HeaderNav leftmargin={"5px"} rightmargin={"20px"}>
                <LinkA 
                    href={"/"} 
                    size={"14px"} 
                    text={"portfolio"} 
                    bold={true} 
                    color={"rgba(255,255,255,0.8)"}
                />
            </HeaderNav>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export default HeaderNavbar