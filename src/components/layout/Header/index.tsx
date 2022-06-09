import React from "react";
import { 
    HeaderContainer,
    HeaderPositionBox,

} from "./styles";
import HeaderTitle from "./Title";

const Header: React.FC = () =>{
    return(
        <HeaderContainer height={"3.75rem"}>
            <HeaderPositionBox width={"90%"}>
                <HeaderTitle Text={"Critical"}/>
            </HeaderPositionBox>
        </HeaderContainer>
    )
}

export default Header;