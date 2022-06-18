import React from "react";
import { FooterContainer } from "./styles";
import LinkA from "components/Object/Link";

const Footer: React.FC = () =>{
    return(
        <FooterContainer>
            Welcome to GitHub, &nbsp;
            <LinkA 
                size={"auto"}
                href={"https://github.com/ananjaemin"}
                bold={true}
                color={"auto"}
                text={"Critical"}
            />
            &nbsp; !
        </FooterContainer>
    )
}

export default Footer;